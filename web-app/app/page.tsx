"use client";

import { useState, useEffect, useRef } from "react";

import Link from "next/link";

import {
  ArrowRight,
  Globe,
  Database,
  Users,
  LayoutDashboard,
  BarChart3,
  Flame,
  Droplet,
  RefreshCw,
} from "lucide-react";

const quotes = [
  "In war, there are no unwounded soldiers.",
  "The true soldier fights not because he hates what is in front of him, but because he loves what is behind him.",
  "Every war is a defeat of the human spirit.",
  "Data reveals what conflict costs in human lives.",
  "Behind every number is a human story.",
];

function AnimatedQuote() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`text-slate-100/75 text-sm md:text-lg font-medium text-center max-w-3xl leading-relaxed [text-shadow:0_2px_6px_rgba(0,0,0,0.95),0_0_12px_rgba(0,0,0,0.55)] transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      “{quotes[index]}”
    </div>
  );
}

function LiveGlobalData() {
  const [population, setPopulation] = useState<number | null>(null);
  const [livePopulation, setLivePopulation] = useState<number | null>(null);
  const [year, setYear] = useState<string | null>(null);
  const [populationChange, setPopulationChange] = useState<number | null>(null);
  const [populationChangePercent, setPopulationChangePercent] = useState<
    number | null
  >(null);
  const [annualBirths, setAnnualBirths] = useState<number | null>(null);
  const [annualDeaths, setAnnualDeaths] = useState<number | null>(null);
  const [annualNetChange, setAnnualNetChange] = useState<number | null>(null);
  const [liveBirths, setLiveBirths] = useState<number | null>(null);
  const [liveDeaths, setLiveDeaths] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchPopulation = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await fetch("/api/world-bank");

      if (!response.ok) {
        throw new Error("Failed to fetch global data");
      }

      const data = await response.json();

      if (data.value == null) {
        throw new Error("Population unavailable");
      }

      setPopulation(data.value);
      setLivePopulation(data.value);
      setYear(data.year);
      setPopulationChange(data.populationChange ?? null);
      setPopulationChangePercent(data.populationChangePercent ?? null);
      setAnnualBirths(data.estimatedAnnualBirths ?? null);
      setAnnualDeaths(data.estimatedAnnualDeaths ?? null);
      setAnnualNetChange(data.estimatedAnnualNetChange ?? null);
    } catch (err) {
      console.error("Live global data error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const loadPopulation = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch("/api/world-bank");

        if (!response.ok) {
          throw new Error("Failed to fetch global data");
        }

        const data = await response.json();

        if (data.value == null) {
          throw new Error("Population unavailable");
        }

        setPopulation(data.value);
        setLivePopulation(data.value);
        setYear(data.year);
        setPopulationChange(data.populationChange ?? null);
        setPopulationChangePercent(data.populationChangePercent ?? null);
        setAnnualBirths(data.estimatedAnnualBirths ?? null);
        setAnnualDeaths(data.estimatedAnnualDeaths ?? null);
        setAnnualNetChange(data.estimatedAnnualNetChange ?? null);
      } catch (err) {
        console.error("Live global data error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadPopulation();

    const interval = setInterval(loadPopulation, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  /*
   * Live population counter
   *
   * The World Bank provides the official population baseline.
   * Between official observations, we estimate continuous
   * population change from annual births minus annual deaths.
   */
  useEffect(() => {
    if (population == null || annualNetChange == null) {
      return;
    }

    const annualSeconds = 365.25 * 24 * 60 * 60;
    const changePerSecond = annualNetChange / annualSeconds;
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsedSeconds = (Date.now() - startTime) / 1000;

      setLivePopulation(population + changePerSecond * elapsedSeconds);
    };

    updateCounter();

    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, [population, annualNetChange]);

  /*
   * 2026 estimated births/deaths counter
   *
   * Instead of starting from zero whenever the page loads,
   * calculate the estimated number of births/deaths that
   * have occurred since January 1 of the current year.
   */
  useEffect(() => {
    if (annualBirths == null || annualDeaths == null) {
      return;
    }

    const updateVitalCounters = () => {
      const now = new Date();
      const currentYear = now.getFullYear();

      const yearStart = new Date(currentYear, 0, 1, 0, 0, 0, 0);

      const nextYearStart = new Date(currentYear + 1, 0, 1, 0, 0, 0, 0);

      const elapsedSeconds = (now.getTime() - yearStart.getTime()) / 1000;

      const yearLengthSeconds =
        (nextYearStart.getTime() - yearStart.getTime()) / 1000;

      const birthsPerSecond = annualBirths / yearLengthSeconds;
      const deathsPerSecond = annualDeaths / yearLengthSeconds;

      setLiveBirths(birthsPerSecond * elapsedSeconds);
      setLiveDeaths(deathsPerSecond * elapsedSeconds);
    };

    updateVitalCounters();

    const interval = setInterval(updateVitalCounters, 1000);

    return () => clearInterval(interval);
  }, [annualBirths, annualDeaths]);

  const currentCounterYear = new Date().getFullYear();

  const formattedPopulation =
    livePopulation !== null
      ? new Intl.NumberFormat("en-US", {
          maximumFractionDigits: 0,
        }).format(Math.floor(livePopulation))
      : null;

  const formattedPopulationChange =
    populationChange !== null
      ? new Intl.NumberFormat("en-US", {
          maximumFractionDigits: 0,
        }).format(Math.abs(populationChange))
      : null;

  const formattedBirths =
    liveBirths !== null
      ? new Intl.NumberFormat("en-US", {
          maximumFractionDigits: 0,
        }).format(Math.floor(liveBirths))
      : null;

  const formattedDeaths =
    liveDeaths !== null
      ? new Intl.NumberFormat("en-US", {
          maximumFractionDigits: 0,
        }).format(Math.floor(liveDeaths))
      : null;

  const populationIncreasing =
    annualNetChange !== null
      ? annualNetChange >= 0
      : populationChange !== null
        ? populationChange >= 0
        : true;

  return (
    <section className="relative max-w-6xl mx-auto px-6 pb-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br from-white/95 via-purple-50/90 to-indigo-50/80 backdrop-blur-xl shadow-[0_24px_80px_rgba(76,29,149,0.12)] ring-1 ring-purple-100/60">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative px-7 py-7 md:px-9 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Live Global Data
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Global Data Pulse
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Live population and demographic estimates based on World Bank
                data
              </p>
            </div>

            <button
              type="button"
              onClick={fetchPopulation}
              disabled={loading}
              className="self-start md:self-center inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-purple-600 transition-colors disabled:opacity-50"
              aria-label="Refresh global data"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>
          </div>

          <div className="mt-7 grid md:grid-cols-3 gap-4">
            <div className="group relative overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br from-white via-purple-50/90 to-indigo-50/80 p-6 shadow-[0_14px_40px_rgba(124,58,237,0.10)] ring-1 ring-purple-100/60 transition-all duration-500 hover:-translate-y-2 hover:border-purple-300/70 hover:ring-purple-200/80 hover:shadow-[0_22px_55px_rgba(124,58,237,0.18)]">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-purple-300/25 rounded-full blur-2xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-2">
                    🇮🇳 India
                  </p>

                  <p className="text-sm text-slate-500 mb-1">Live Population</p>

                  {loading ? (
                    <div className="h-9 w-40 rounded-lg bg-slate-200/70 animate-pulse" />
                  ) : error ? (
                    <p className="text-sm font-medium text-red-500">
                      Data unavailable
                    </p>
                  ) : (
                    <>
                      <p className="text-3xl font-bold tracking-tight text-slate-900 tabular-nums">
                        {formattedPopulation ?? "—"}
                      </p>

                      <p
                        className={`text-xs font-semibold mt-1 ${
                          populationIncreasing
                            ? "text-emerald-600"
                            : "text-red-500"
                        }`}
                      >
                        {populationIncreasing ? "↑" : "↓"}{" "}
                        {formattedPopulationChange
                          ? `${formattedPopulationChange} / year`
                          : "Population change unavailable"}
                      </p>
                    </>
                  )}
                </div>

                <div className="w-12 h-12 rounded-2xl bg-purple-100/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe size={22} className="text-purple-600" />
                </div>
              </div>

              <div className="relative mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {year ? `World Bank: ${year}` : "Fetching data..."}
                </span>

                <span className="text-xs font-medium text-emerald-600">
                  Live estimate
                </span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br from-white via-blue-50/85 to-indigo-50/75 p-6 shadow-[0_14px_40px_rgba(59,130,246,0.10)] ring-1 ring-blue-100/60 transition-all duration-500 hover:-translate-y-2 hover:border-blue-300/70 hover:ring-blue-200/80 hover:shadow-[0_22px_55px_rgba(59,130,246,0.18)]">
              <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-blue-300/25 rounded-full blur-2xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-2">
                    👶 India
                  </p>

                  <p className="text-sm text-slate-500 mb-1">
                    Estimated Births in {currentCounterYear}
                  </p>

                  {loading ? (
                    <div className="h-9 w-32 rounded-lg bg-slate-200/70 animate-pulse" />
                  ) : error ? (
                    <p className="text-sm font-medium text-red-500">
                      Data unavailable
                    </p>
                  ) : (
                    <>
                      <p className="text-3xl font-bold tracking-tight text-slate-900 tabular-nums">
                        {formattedBirths ?? "—"}
                      </p>

                      <p className="text-xs font-medium text-blue-600 mt-1">
                        estimated • counting continuously
                      </p>
                    </>
                  )}
                </div>

                <div className="w-12 h-12 rounded-2xl bg-blue-100/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">👶</span>
                </div>
              </div>

              <div className="relative mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Since January 1, {currentCounterYear}
                </span>

                <a
                  href="https://data.worldbank.org/indicator/SP.DYN.CBRT.IN?locations=IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Historical data ↗
                </a>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br from-white via-slate-50/95 to-slate-100/80 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.08)] ring-1 ring-slate-100/70 transition-all duration-500 hover:-translate-y-2 hover:border-slate-300/70 hover:ring-slate-200/80 hover:shadow-[0_22px_55px_rgba(15,23,42,0.14)]">
              <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-slate-300/25 rounded-full blur-2xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-2">
                    ⚰️ India
                  </p>

                  <p className="text-sm text-slate-500 mb-1">
                    Estimated Deaths in {currentCounterYear}
                  </p>

                  {loading ? (
                    <div className="h-9 w-32 rounded-lg bg-slate-200/70 animate-pulse" />
                  ) : error ? (
                    <p className="text-sm font-medium text-red-500">
                      Data unavailable
                    </p>
                  ) : (
                    <>
                      <p className="text-3xl font-bold tracking-tight text-slate-900 tabular-nums">
                        {formattedDeaths ?? "—"}
                      </p>

                      <p className="text-xs font-medium text-slate-500 mt-1">
                        estimated • counting continuously
                      </p>
                    </>
                  )}
                </div>

                <div className="w-12 h-12 rounded-2xl bg-slate-100/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚰️</span>
                </div>
              </div>

              <div className="relative mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Since January 1, {currentCounterYear}
                </span>

                <a
                  href="https://data.worldbank.org/indicator/SP.DYN.CDRT.IN?locations=IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-slate-500 hover:text-slate-700 hover:underline"
                >
                  Historical data ↗
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span className="text-[11px] text-slate-700">
              Population counter updates continuously between official
              observations.
            </span>

            <span className="text-[11px] text-slate-700">
              Annual change:{" "}
              {populationChangePercent !== null
                ? `${populationIncreasing ? "+" : ""}${populationChangePercent.toFixed(2)}%`
                : "—"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function DefenseMarketPulse() {
  const [stocks, setStocks] = useState<
    Array<{
      symbol: string;
      name: string;
      website: string;
      currency: string;
      price: number | null;
      change: number | null;
      changePercent: number | null;
      history: Array<{
        timestamp: number;
        price: number;
      }>;
    }>
  >([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMarketData = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await fetch("/api/defense-market");

      if (!response.ok) {
        throw new Error("Failed to fetch market data");
      }

      const data = await response.json();

      if (!data.stocks || !Array.isArray(data.stocks)) {
        throw new Error("Market data unavailable");
      }

      setStocks(data.stocks);
    } catch (err) {
      console.error("Defense market error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMarketData();
    }, 0);

    const interval = setInterval(fetchMarketData, 5 * 60 * 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const formatPrice = (price: number | null, currency: string) => {
    if (price == null) return "—";

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const formatPercent = (value: number | null) => {
    if (value == null) return "—";

    return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
  };

  const createSparklinePoints = (
    history: Array<{
      timestamp: number;
      price: number;
    }>,
  ) => {
    if (history.length < 2) return "";

    const values = history.map((point) => point.price);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;

    return values
      .map((value, index) => {
        const x = (index / (values.length - 1)) * 100;
        const y = 30 - ((value - min) / range) * 26;

        return `${x},${y}`;
      })
      .join(" ");
  };

  return (
    <section className="relative max-w-6xl mx-auto px-6 pb-20">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-950/[0.97] shadow-xl shadow-slate-900/10">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative px-7 py-7 md:px-9 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Live Market Pulse
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white">
                Defense & Aerospace Market
              </h2>

              <p className="text-sm text-slate-400 mt-1">
                Public-market signals from the defense industry
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500">
                Auto-refresh: 5 min
              </span>

              <button
                type="button"
                onClick={fetchMarketData}
                disabled={loading}
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors disabled:opacity-50"
                aria-label="Refresh defense market data"
              >
                <RefreshCw
                  size={14}
                  className={loading ? "animate-spin" : ""}
                />
                Refresh
              </button>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {(loading && stocks.length === 0
              ? ["LMT", "RTX", "NOC", "GD"]
              : stocks
            ).map((stock) => {
              const isLoading = typeof stock === "string";
              const symbol = isLoading ? stock : stock.symbol;
              const name = isLoading ? "Loading market data..." : stock.name;
              const positive = !isLoading && (stock.changePercent ?? 0) >= 0;

              const points = isLoading
                ? ""
                : createSparklinePoints(stock.history);

              return (
                <a
                  key={symbol}
                  href={isLoading ? "#" : stock.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    isLoading
                      ? `${symbol} market data`
                      : `${stock.name} official website`
                  }
                  onClick={(event) => {
                    if (isLoading) {
                      event.preventDefault();
                    }
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/20 hover:shadow-xl hover:shadow-black/20"
                >
                  {!isLoading && (
                    <div className="absolute left-3 top-3 z-20 max-w-[calc(100%-24px)] px-2.5 py-1.5 rounded-lg bg-slate-800/95 border border-white/10 shadow-xl opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                      <p className="text-[11px] font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis">
                        {name}
                      </p>
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-bold tracking-wide text-white">
                          {symbol}
                        </p>

                        {!isLoading && (
                          <p className="text-[10px] text-slate-500 mt-0.5">
                            Defense / Aerospace
                          </p>
                        )}
                      </div>

                      {!isLoading && (
                        <span
                          className={`text-[10px] font-semibold ${
                            positive ? "text-emerald-400" : "text-red-400"
                          }`}
                        >
                          {positive ? "↗" : "↘"}
                        </span>
                      )}
                    </div>

                    {isLoading ? (
                      <>
                        <div className="h-7 w-24 rounded bg-white/10 animate-pulse mt-4" />
                        <div className="h-3 w-16 rounded bg-white/5 animate-pulse mt-2" />
                      </>
                    ) : (
                      <>
                        <p className="text-lg font-semibold text-white mt-3">
                          {formatPrice(stock.price, stock.currency)}
                        </p>

                        <p
                          className={`text-xs font-medium mt-0.5 ${
                            positive ? "text-emerald-400" : "text-red-400"
                          }`}
                        >
                          {formatPercent(stock.changePercent)}
                        </p>
                      </>
                    )}

                    <div className="relative h-10 mt-3 -mx-1 overflow-hidden">
                      {!isLoading && points ? (
                        <svg
                          viewBox="0 0 100 32"
                          preserveAspectRatio="none"
                          className="w-full h-full overflow-visible"
                          aria-hidden="true"
                        >
                          <polyline
                            points={points}
                            fill="none"
                            stroke={
                              positive ? "rgb(52 211 153)" : "rgb(248 113 113)"
                            }
                            strokeWidth="1.4"
                            vectorEffect="non-scaling-stroke"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-80"
                          />

                          <polyline
                            points={points}
                            fill="none"
                            stroke={
                              positive ? "rgb(52 211 153)" : "rgb(248 113 113)"
                            }
                            strokeWidth="3"
                            vectorEffect="non-scaling-stroke"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-10 blur-[2px]"
                          />
                        </svg>
                      ) : (
                        <div className="absolute inset-x-0 top-5 h-px bg-white/10" />
                      )}

                      <div
                        className={`absolute bottom-0 left-0 h-px w-full ${
                          positive ? "bg-emerald-400/20" : "bg-red-400/20"
                        }`}
                      />
                    </div>
                  </div>

                  <div
                    className={`absolute -bottom-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      positive ? "bg-emerald-400/10" : "bg-red-400/10"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-[11px] text-slate-500">
              Market prices are provided for analytical visualization.
            </p>

            <p className="text-[11px] text-slate-500">
              Source: Yahoo Finance API
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const developerButtonRef = useRef<HTMLAnchorElement | null>(null);
  const developerDragRef = useRef({
    dragging: false,
    invalid: false,
    moved: false,
    startX: 0,
    startY: 0,
    startLeft: 0,
    startTop: 0,
    currentLeft: 20,
    currentTop: 0,
  });
  const [developerDragEnabled, setDeveloperDragEnabled] = useState(true);
  useEffect(() => {
    const element = developerButtonRef.current;

    if (!element) {
      return;
    }

    const savedPosition = localStorage.getItem(
      "global-war-casualties-developer-position",
    );

    if (!savedPosition) {
      element.style.left = "20px";
      element.style.top = "50%";
      element.style.transform = "translateY(-50%)";
      return;
    }

    try {
      const position = JSON.parse(savedPosition);

      if (
        typeof position.left !== "number" ||
        typeof position.top !== "number"
      ) {
        throw new Error("Invalid saved developer position");
      }

      const width = element.offsetWidth;
      const height = element.offsetHeight;

      const maxLeft = window.innerWidth - width - 8;
      const maxTop = window.innerHeight - height - 8;

      const safeLeft = Math.max(8, Math.min(position.left, maxLeft));

      const safeTop = Math.max(8, Math.min(position.top, maxTop));

      element.style.left = `${safeLeft}px`;
      element.style.top = `${safeTop}px`;
      element.style.transform = "none";

      developerDragRef.current.currentLeft = safeLeft;
      developerDragRef.current.currentTop = safeTop;
    } catch {
      localStorage.removeItem("global-war-casualties-developer-position");

      element.style.left = "20px";
      element.style.top = "50%";
      element.style.transform = "translateY(-50%)";
    }
  }, []);
  const [warBackground, setWarBackground] = useState<string | null>(null);

  useEffect(() => {
    const loadWarBackground = async () => {
      try {
        const response = await fetch(
          `/api/war-gallery?conflict=Ukraine&_${Date.now()}`,
          {
            cache: "no-store",
          },
        );

        if (!response.ok) {
          throw new Error("Failed to load war background");
        }

        const data = await response.json();

        console.log("WAR BACKGROUND API:", data);

        const images = Array.isArray(data.items)
          ? data.items
          : Array.isArray(data.gallery)
            ? data.gallery
            : Array.isArray(data.images)
              ? data.images
              : [];

        if (images.length > 0) {
          const randomImage = images[Math.floor(Math.random() * images.length)];

          console.log("SELECTED WAR BACKGROUND:", randomImage);

          if (randomImage?.imageUrl) {
            setWarBackground(randomImage.imageUrl);
          }
        }
      } catch (error) {
        console.error("War background error:", error);
      }
    };

    loadWarBackground();
  }, []);

  return (
    <div className="home-typography relative min-h-screen bg-slate-950">
      {/* Floating About Developer */}

      <Link
        ref={developerButtonRef}
        href="/about-developer"
        aria-label="About Developer"
        className={`group fixed z-50 hidden sm:flex items-center select-none ${
          developerDragEnabled ? "cursor-grab" : "cursor-pointer"
        }`}
        style={{
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onMouseDown={(event) => {
          // ONLY left mouse button can drag.
          // Right-click does absolutely nothing to the drag system.
          if (event.button !== 0 || !developerDragEnabled) {
            return;
          }

          const element = event.currentTarget;
          const drag = developerDragRef.current;
          const rect = element.getBoundingClientRect();

          drag.dragging = true;
          drag.invalid = false;
          drag.moved = false;

          drag.startX = event.clientX;
          drag.startY = event.clientY;

          drag.startLeft = rect.left;
          drag.startTop = rect.top;

          drag.currentLeft = rect.left;
          drag.currentTop = rect.top;

          element.style.transform = "none";
          element.style.cursor = "grabbing";

          const handleMouseMove = (moveEvent: MouseEvent) => {
            if (!drag.dragging) {
              return;
            }

            const dx = moveEvent.clientX - drag.startX;
            const dy = moveEvent.clientY - drag.startY;

            if (!drag.moved) {
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 6) {
                return;
              }

              drag.moved = true;
            }

            moveEvent.preventDefault();

            const width = element.offsetWidth;
            const height = element.offsetHeight;

            const maxLeft = window.innerWidth - width - 8;
            const maxTop = window.innerHeight - height - 8;

            let newLeft = drag.startLeft + dx;
            let newTop = drag.startTop + dy;

            newLeft = Math.max(8, Math.min(newLeft, maxLeft));
            newTop = Math.max(8, Math.min(newTop, maxTop));

            element.style.left = `${newLeft}px`;
            element.style.top = `${newTop}px`;

            drag.currentLeft = newLeft;
            drag.currentTop = newTop;
          };

          const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);

            drag.dragging = false;

            element.style.cursor = "grab";

            if (drag.moved) {
              element.style.transform = "none";

              localStorage.setItem(
                "global-war-casualties-developer-position",
                JSON.stringify({
                  left: drag.currentLeft,
                  top: drag.currentTop,
                }),
              );

              element.dataset.dragged = "true";

              window.setTimeout(() => {
                delete element.dataset.dragged;
              }, 100);
            }

            drag.moved = false;
            drag.invalid = false;
          };

          window.addEventListener("mousemove", handleMouseMove);

          window.addEventListener("mouseup", handleMouseUp, {
            once: true,
          });
        }}
        onClick={(event) => {
          /*
           * Normal click -> /about-developer
           * Drag -> do not navigate
           */
          if (event.currentTarget.dataset.dragged === "true") {
            event.preventDefault();
          }
        }}
      >
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute inset-[-10px] rounded-full bg-indigo-500/20 blur-xl opacity-70 group-hover:opacity-100 group-hover:bg-purple-500/30 transition-all duration-500 animate-pulse" />

          {/* Glass icon container */}
          <div className="relative w-12 h-12 rounded-full bg-purple-950/25 backdrop-blur-sm border border-purple-300/25 shadow-[0_0_20px_rgba(139,92,246,0.35)] group-hover:bg-purple-900/30 group-hover:border-purple-300/40 group-hover:shadow-[0_0_32px_rgba(139,92,246,0.65)] group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
            {/* Developer illustration */}
            <svg
              viewBox="0 0 48 48"
              className="w-8 h-8 text-indigo-200 group-hover:text-white transition-colors duration-300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="24"
                cy="15"
                r="6"
                fill="currentColor"
                opacity="0.95"
              />

              <path
                d="M13 37C13.8 28.8 17.7 24 24 24C30.3 24 34.2 28.8 35 37"
                fill="currentColor"
                opacity="0.9"
              />

              <rect
                x="16"
                y="29"
                width="16"
                height="7"
                rx="1.5"
                fill="#0f172a"
                stroke="currentColor"
                strokeWidth="1.2"
              />

              <path
                d="M20 31.5L18.5 33L20 34.5M28 31.5L29.5 33L28 34.5M25.5 31L23 35"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M14 37H34"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Status glow */}
            <span className="absolute -right-0.5 -bottom-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
          </div>

          {/* Hover label */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-950/95 border border-indigo-400/30 px-3 py-2 text-xs font-medium text-white shadow-xl shadow-slate-950/30 opacity-0 translate-x-1 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            About Developer
          </div>
        </div>
      </Link>
      {/* Global war background */}
      {warBackground && (
        <div
          className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${warBackground}")`,
          }}
        />
      )}

      {/* Global readability overlay */}
      {warBackground && (
        <div className="fixed inset-0 pointer-events-none z-0 bg-slate-950/55" />
      )}

      <div className="relative z-10">
        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* Animated Quote */}
          <div className="absolute top-4 left-0 right-0 z-20 flex justify-center pointer-events-none px-6">
            <AnimatedQuote />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 text-center z-10">
            {/* Premium Hero Content Container */}
            <div className="relative max-w-4xl mx-auto rounded-[2rem] border border-white/30 bg-slate-950/55 backdrop-blur-md px-6 py-8 md:px-12 md:py-10 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
              {/* Soft glow behind hero content */}
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-white/10 via-purple-400/10 to-blue-400/10 blur-xl -z-10 pointer-events-none" />

              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-red-100/90 text-red-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8 shadow-sm shadow-red-200/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                </span>
                Data Analytics Portfolio Project
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5 drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]">
                <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_6s_ease_infinite]">
                  Global War Casualties
                </span>

                <span className="block text-slate-200 text-2xl md:text-3xl font-semibold mt-3 tracking-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  Analysis of Two Major Conflicts
                </span>
              </h1>

              <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                A data-driven exploration of casualty patterns in the
                Russia-Ukraine and Israel-Palestine conflicts using real-world
                datasets, Python, and interactive dashboards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/analysis"
                  className="group relative inline-flex items-center justify-center gap-2 bg-white text-slate-950 px-7 py-3.5 rounded-xl font-medium hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-purple-900/25 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <span className="relative">Explore Analysis</span>

                  <ArrowRight
                    size={18}
                    className="relative group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>

                <Link
                  href="/findings"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/30 px-7 py-3.5 rounded-xl font-medium hover:bg-white/20 hover:-translate-y-1 hover:border-white/50 hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
                >
                  View Key Findings
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              <div className="mt-12 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                <BarChart3 size={14} className="text-purple-300" />
                Data · Analysis · Visualization
              </div>
            </div>
          </div>
        </section>

        {/* Conflict Explorer */}
        <section className="relative max-w-6xl mx-auto px-6 pb-20">
          <div className="relative max-w-4xl mx-auto mb-10 overflow-hidden rounded-[2rem] border border-white/20 bg-slate-950/65 backdrop-blur-xl px-6 py-8 md:px-10 md:py-9 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300 mb-3">
                Conflict Explorer
              </div>

              <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                Explore the Conflict Analyses
              </h2>

              <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Explore each conflict independently or compare the datasets,
                analytical approaches, and reported casualty patterns side by
                side.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Israel-Palestine */}
            <Link
              href="/israel-palestine"
              className="group relative bg-gradient-to-br from-white/95 via-red-50/80 to-orange-50/70 backdrop-blur-md rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-red-200/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/80 via-transparent to-orange-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative">
                <div className="relative w-11 h-11 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 shadow-sm overflow-visible">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                    <Flame
                      size={15}
                      className="text-orange-500 fill-orange-400 animate-pulse drop-shadow-sm group-hover:scale-125 transition-transform duration-300"
                    />
                  </span>

                  <Globe className="relative z-10 text-red-600" size={20} />

                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                    <Droplet
                      size={12}
                      className="text-red-600 fill-red-500 animate-bounce drop-shadow-sm"
                    />
                  </span>
                </div>

                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  Israel–Palestine
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Explore reported casualty trends, demographic patterns,
                  visualizations, and interactive analysis.
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-red-600 transition-colors">
                  Explore analysis
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </div>
            </Link>

            {/* Russia-Ukraine */}
            <Link
              href="/russia-ukraine"
              className="group relative bg-gradient-to-br from-white/95 via-blue-50/80 to-indigo-50/70 backdrop-blur-md rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-blue-200/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-transparent to-indigo-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative">
                <div className="relative w-11 h-11 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 shadow-sm overflow-visible">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                    <Flame
                      size={15}
                      className="text-orange-500 fill-orange-400 animate-pulse drop-shadow-sm group-hover:scale-125 transition-transform duration-300"
                    />
                  </span>
                  <Globe className="relative z-10 text-blue-600" size={20} />

                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                    <Droplet
                      size={12}
                      className="text-red-600 fill-red-500 animate-bounce drop-shadow-sm"
                    />
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  Russia–Ukraine
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Examine reported fatalities, geographic patterns, event-level
                  data, and conflict trends.
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                  Explore analysis
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </div>
            </Link>

            {/* Parallel Comparison */}
            <Link
              href="/parallel"
              className="group relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-2xl p-7 border border-slate-900 shadow-sm hover:shadow-2xl hover:shadow-indigo-300/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <div className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 border border-white/10">
                  <LayoutDashboard className="text-white" size={20} />
                </div>

                <h3 className="font-semibold text-lg text-white mb-2">
                  Parallel Comparison
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  Compare reported casualty measures, data sources,
                  methodologies, and analytical approaches side by side.
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
                  Compare analyses
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Defense & Aerospace Market */}
        <DefenseMarketPulse />

        {/* Live Global Data */}
        <LiveGlobalData />

        {/* Feature Cards */}
        <section className="relative max-w-6xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative bg-gradient-to-br from-white via-red-50/85 to-orange-50/75 backdrop-blur-xl rounded-2xl p-7 border border-white/80 shadow-[0_16px_45px_rgba(239,68,68,0.10)] ring-1 ring-red-100/60 hover:shadow-[0_26px_65px_rgba(239,68,68,0.18)] hover:border-red-200/80 hover:ring-red-200/80 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/75 via-transparent to-orange-50/45 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="text-red-600" size={20} />
                </div>

                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  Two Major Conflicts
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Side-by-side analysis of Russia-Ukraine and Israel-Palestine
                  casualty trends.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white via-blue-50/85 to-indigo-50/75 backdrop-blur-xl rounded-2xl p-7 border border-white/80 shadow-[0_16px_45px_rgba(59,130,246,0.10)] ring-1 ring-blue-100/60 hover:shadow-[0_26px_65px_rgba(59,130,246,0.18)] hover:border-blue-200/80 hover:ring-blue-200/80 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/75 via-transparent to-indigo-50/45 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Database className="text-blue-600" size={20} />
                </div>

                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  Multi-Source Data
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Integrated data from UCDP, Our World in Data, and Tech for
                  Palestine.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white via-emerald-50/80 to-cyan-50/70 backdrop-blur-xl rounded-2xl p-7 border border-white/80 shadow-[0_16px_45px_rgba(16,185,129,0.10)] ring-1 ring-emerald-100/60 hover:shadow-[0_26px_65px_rgba(16,185,129,0.18)] hover:border-emerald-200/80 hover:ring-emerald-200/80 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/75 via-transparent to-cyan-50/45 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-emerald-600" size={20} />
                </div>

                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  Demographic Insights
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Age and sex distribution analysis of reported fatalities in
                  Gaza.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white/95 via-purple-50/40 to-indigo-50/75 backdrop-blur-xl border-t border-white/80 shadow-[0_-18px_70px_rgba(67,56,202,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.10),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(99,102,241,0.10),transparent_34%)] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-500 mb-3">
                  About the Project
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-5">
                  Project Overview
                </h2>

                <p className="text-slate-700 leading-relaxed mb-4">
                  This project analyzes casualty data from two major ongoing
                  armed conflicts. Using Python (Pandas, Matplotlib, Seaborn),
                  the datasets were cleaned, transformed, and explored to
                  uncover patterns in death tolls and demographics.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  Interactive dashboards were built in Power BI and Tableau. The
                  complete analysis is presented through this web application.
                </p>
              </div>

              <div className="group relative bg-gradient-to-br from-white via-slate-50/85 to-purple-50/75 rounded-2xl p-7 border border-white/80 shadow-[0_16px_45px_rgba(100,116,139,0.10)] ring-1 ring-slate-100/70 hover:-translate-y-1 hover:border-purple-200/80 hover:ring-purple-200/80 hover:shadow-[0_24px_60px_rgba(124,58,237,0.16)] transition-all duration-500 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-200/25 rounded-full blur-3xl pointer-events-none group-hover:scale-110 group-hover:opacity-90 transition-all duration-700" />

                <h3 className="relative font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                    <LayoutDashboard size={18} className="text-purple-600" />
                  </span>
                  Tools & Technologies
                </h3>

                <ul className="relative space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Python, Pandas, Matplotlib, Seaborn
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Power BI & Tableau Public
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Next.js + Tailwind CSS
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    Deployed on Vercel
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6 py-14 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Explore the Full Analysis
            </h2>

            <p className="text-slate-400 mb-7 max-w-lg mx-auto">
              Dive into interactive charts, key findings, and the complete
              methodology.
            </p>

            <Link
              href="/analysis"
              className="group inline-flex items-center gap-2 bg-white text-slate-900 px-7 py-3.5 rounded-xl font-medium hover:bg-slate-100 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
            >
              Go to Analysis
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        .home-typography {
          font-family:
            "Segoe UI Variable",
            "Segoe UI",
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            sans-serif;
          font-synthesis: none;
        }

        .home-typography h1,
        .home-typography h2,
        .home-typography h3 {
          font-family:
            "Trebuchet MS",
            "Segoe UI Variable",
            "Segoe UI",
            system-ui,
            sans-serif;
          font-weight: 800;
          letter-spacing: -0.025em;
        }
      `}</style>
    </div>
  );
}
