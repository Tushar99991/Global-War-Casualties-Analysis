import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [populationResponse, birthRateResponse, deathRateResponse] =
      await Promise.all([
        fetch(
          "https://api.worldbank.org/v2/country/IND/indicator/SP.POP.TOTL?format=json&per_page=100",
        ),
        fetch(
          "https://api.worldbank.org/v2/country/IND/indicator/SP.DYN.CBRT.IN?format=json&per_page=100",
        ),
        fetch(
          "https://api.worldbank.org/v2/country/IND/indicator/SP.DYN.CDRT.IN?format=json&per_page=100",
        ),
      ]);

    if (
      !populationResponse.ok ||
      !birthRateResponse.ok ||
      !deathRateResponse.ok
    ) {
      throw new Error("World Bank API request failed");
    }

    const populationData = await populationResponse.json();
    const birthRateData = await birthRateResponse.json();
    const deathRateData = await deathRateResponse.json();

    // ==================================================
    // Population
    // ==================================================

    const populationRecords = populationData?.[1] ?? [];

    const validPopulationRecords = populationRecords.filter(
      (record: { value: number | null; date: string }) => record.value != null,
    );

    const latestPopulation = validPopulationRecords[0];

    const previousPopulation = validPopulationRecords[1];

    const value = latestPopulation?.value ?? null;

    const year = latestPopulation?.date ?? null;

    const previousValue = previousPopulation?.value ?? null;

    const populationChange =
      value != null && previousValue != null ? value - previousValue : null;

    const populationChangePercent =
      populationChange != null && previousValue != null && previousValue !== 0
        ? (populationChange / previousValue) * 100
        : null;

    // ==================================================
    // Birth rate
    // ==================================================

    const birthRateRecords = birthRateData?.[1] ?? [];

    const validBirthRateRecords = birthRateRecords.filter(
      (record: { value: number | null; date: string }) => record.value != null,
    );

    const latestBirthRate = validBirthRateRecords[0];

    const birthRate = latestBirthRate?.value ?? null;

    const birthRateYear = latestBirthRate?.date ?? null;

    // ==================================================
    // Death rate
    // ==================================================

    const deathRateRecords = deathRateData?.[1] ?? [];

    const validDeathRateRecords = deathRateRecords.filter(
      (record: { value: number | null; date: string }) => record.value != null,
    );

    const latestDeathRate = validDeathRateRecords[0];

    const deathRate = latestDeathRate?.value ?? null;

    const deathRateYear = latestDeathRate?.date ?? null;

    // ==================================================
    // Estimated annual births
    // ==================================================

    const estimatedAnnualBirths =
      value != null && birthRate != null
        ? Math.round((value * birthRate) / 1000)
        : null;

    // ==================================================
    // Estimated annual deaths
    // ==================================================

    const estimatedAnnualDeaths =
      value != null && deathRate != null
        ? Math.round((value * deathRate) / 1000)
        : null;

    // ==================================================
    // Estimated daily births
    // ==================================================

    const estimatedDailyBirths =
      estimatedAnnualBirths != null ? estimatedAnnualBirths / 365.25 : null;

    // ==================================================
    // Estimated daily deaths
    // ==================================================

    const estimatedDailyDeaths =
      estimatedAnnualDeaths != null ? estimatedAnnualDeaths / 365.25 : null;

    // ==================================================
    // Estimated annual natural change
    // ==================================================

    const estimatedAnnualNetChange =
      estimatedAnnualBirths != null && estimatedAnnualDeaths != null
        ? estimatedAnnualBirths - estimatedAnnualDeaths
        : null;

    // ==================================================
    // Estimated daily natural change
    // ==================================================

    const estimatedDailyNetChange =
      estimatedDailyBirths != null && estimatedDailyDeaths != null
        ? estimatedDailyBirths - estimatedDailyDeaths
        : null;

    // ==================================================
    // Validate population
    // ==================================================

    if (value == null) {
      throw new Error("Population data unavailable");
    }

    // ==================================================
    // Response
    // ==================================================

    return NextResponse.json({
      country: "India",
      indicator: "Population",

      value,
      previousValue,
      populationChange,
      populationChangePercent,

      year,

      birthRate,
      birthRateYear,

      deathRate,
      deathRateYear,

      estimatedAnnualBirths,
      estimatedAnnualDeaths,

      estimatedDailyBirths,
      estimatedDailyDeaths,

      estimatedAnnualNetChange,
      estimatedDailyNetChange,

      source: "World Bank",
      status: "live",
    });
  } catch (error) {
    console.error("World Bank API error:", error);

    return NextResponse.json(
      {
        country: "India",
        indicator: "Population",

        value: null,
        previousValue: null,
        populationChange: null,
        populationChangePercent: null,

        year: null,

        birthRate: null,
        birthRateYear: null,

        deathRate: null,
        deathRateYear: null,

        estimatedAnnualBirths: null,
        estimatedAnnualDeaths: null,

        estimatedDailyBirths: null,
        estimatedDailyDeaths: null,

        estimatedAnnualNetChange: null,
        estimatedDailyNetChange: null,

        source: "World Bank",
        status: "error",
      },
      { status: 500 },
    );
  }
}
