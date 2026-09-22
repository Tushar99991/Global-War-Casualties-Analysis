import pandas as pd
from pathlib import Path

PROJECT_ROOT = (
    Path.cwd().parent
    if Path.cwd().name == "notebooks"
    else Path.cwd()
)

PROCESSED = PROJECT_ROOT / "data" / "processed"
BI = PROJECT_ROOT / "data" / "bi_ready"

print("Calculating exact statistics...\n")


# ==================================================
# 1. Israel-Palestine Daily
# ==================================================

ip = pd.read_csv(BI / "israel_palestine_daily.csv")

print("=" * 60)
print("ISRAEL-PALESTINE DAILY")
print("=" * 60)

print(f"Total rows: {len(ip):,}")
print(f"Total killed: {ip['killed'].sum():,.0f}")

print("\nBy Location:")

location_totals = (
    ip.groupby("location")["killed"]
    .sum()
    .sort_values(ascending=False)
)

print(location_totals)

# Exact location percentages

total_ip_killed = ip["killed"].sum()

print("\nLocation %:")

for location, value in location_totals.items():
    pct = value / total_ip_killed * 100
    print(f"  {location:<15}: {pct:.2f}%")

# Peak daily reported deaths

if "report_date" in ip.columns:
    ip["report_date"] = pd.to_datetime(
        ip["report_date"],
        errors="coerce"
    )
else:
    raise ValueError(
        "Israel-Palestine dataset is missing the required "
        "'report_date' column."
    )

ip_valid_dates = ip["report_date"].dropna()

if ip_valid_dates.empty:
    raise ValueError(
        "Israel-Palestine dataset contains no valid dates "
        "in the 'report_date' column."
    )

ip_start_date = ip_valid_dates.min()
ip_end_date = ip_valid_dates.max()

peak_ip_day = ip.loc[ip["killed"].idxmax()]

print(
    f"\nHighest daily reported deaths: "
    f"{peak_ip_day['killed']:,.0f} "
    f"on {peak_ip_day['report_date'].date()}"
)

# Average daily reported deaths

print(
    f"Average reported deaths per recorded day: "
    f"{ip['killed'].mean():.1f}"
)

# Explicit partial-year warning

print("\nIsrael-Palestine coverage warning:")

if (
    ip_start_date.month != 1
    or ip_start_date.day != 1
):
    print(
        f"  First year ({ip_start_date.year}) is partial: "
        f"coverage begins {ip_start_date.date()}."
    )

if (
    ip_end_date.month != 12
    or ip_end_date.day != 31
):
    print(
        f"  Final year ({ip_end_date.year}) is partial: "
        f"coverage ends {ip_end_date.date()}."
    )

if (
    ip_start_date.month == 1
    and ip_start_date.day == 1
    and ip_end_date.month == 12
    and ip_end_date.day == 31
):
    print("  Coverage spans complete calendar years.")

print(
    "  Annual comparisons should account for partial "
    "calendar years where applicable."
)


# ==================================================
# 2. Gaza Demographics
# ==================================================

killed = pd.read_csv(BI / "gaza_demographics.csv")

print("\n" + "=" * 60)
print("GAZA DEMOGRAPHICS")
print("=" * 60)

total_records = len(killed)

print(f"Total records: {total_records:,}")

# Missing-value checks

print("\nMissing values:")

missing_demographics = killed[
    ["sex", "age_group"]
].isna().sum()

print(missing_demographics)

# Sex distribution

print("\nSex distribution:")

sex_counts = killed["sex"].value_counts(dropna=False)

print(sex_counts)

print("\nSex %:")

sex_percentages = (
    killed["sex"]
    .value_counts(normalize=True, dropna=False)
    .mul(100)
    .round(2)
)

print(sex_percentages)

# Age group distribution

print("\nAge group distribution:")

age_counts = (
    killed["age_group"]
    .value_counts(dropna=False)
    .sort_index()
)

print(age_counts)

print("\nAge group %:")

age_percentages = (
    killed["age_group"]
    .value_counts(normalize=True, dropna=False)
    .mul(100)
    .round(2)
    .sort_index()
)

print(age_percentages)

# Children 0-18

children = killed[
    killed["age_group"].isin(["0-12", "13-18"])
]

children_count = len(children)
children_pct = children_count / total_records * 100

print(
    f"\nChildren (0-18): "
    f"{children_count:,} "
    f"({children_pct:.2f}%)"
)


# ==================================================
# 3. Russia-Ukraine Monthly
# ==================================================

ukraine = pd.read_csv(
    BI / "ukraine_russia_monthly.csv"
)

print("\n" + "=" * 60)
print("RUSSIA-UKRAINE MONTHLY")
print("=" * 60)

print(f"Total months: {len(ukraine):,}")

total_ukraine_deaths = ukraine["total_deaths"].sum()
total_events = ukraine["events"].sum()
total_civilian_deaths = ukraine["civilian_deaths"].sum()

print(
    f"Total battle-related deaths: "
    f"{total_ukraine_deaths:,.0f}"
)

print(
    f"Total recorded events: "
    f"{total_events:,.0f}"
)

print(
    f"Total civilian deaths: "
    f"{total_civilian_deaths:,.0f}"
)

# Civilian share

if total_ukraine_deaths > 0:
    civilian_share = (
        total_civilian_deaths
        / total_ukraine_deaths
        * 100
    )
else:
    civilian_share = 0

print(
    f"Civilian share of reported deaths: "
    f"{civilian_share:.2f}%"
)

# Average monthly deaths

average_monthly_deaths = ukraine["total_deaths"].mean()

print(
    f"Average monthly reported deaths: "
    f"{average_monthly_deaths:,.1f}"
)

# Peak month

peak_month = ukraine.loc[
    ukraine["total_deaths"].idxmax()
]

print(
    f"\nHighest month: "
    f"{peak_month['total_deaths']:,.0f} deaths "
    f"in {peak_month['year_month']}"
)

# Lowest month

lowest_month = ukraine.loc[
    ukraine["total_deaths"].idxmin()
]

print(
    f"Lowest month: "
    f"{lowest_month['total_deaths']:,.0f} deaths "
    f"in {lowest_month['year_month']}"
)

# Deaths per recorded event

ukraine["deaths_per_event"] = (
    ukraine["total_deaths"]
    .div(
        ukraine["events"].where(
            ukraine["events"] > 0
        )
    )
)

peak_severity_month = ukraine.loc[
    ukraine["deaths_per_event"].idxmax()
]

print(
    f"\nHighest deaths per recorded event: "
    f"{peak_severity_month['deaths_per_event']:,.2f} "
    f"in {peak_severity_month['year_month']}"
)

# Monthly change

ukraine["month_change_pct"] = (
    ukraine["total_deaths"]
    .pct_change()
    .mul(100)
)

ukraine["month_change_abs"] = (
    ukraine["total_deaths"]
    .diff()
)

# Percentage changes from extremely small previous-month values
# can be misleading, so use a minimum baseline of 1,000 deaths.

stable_change_months = ukraine[
    ukraine["total_deaths"].shift(1) >= 1000
].copy()

print(
    "\nLargest month-to-month increases "
    "(previous month >= 1,000 deaths):"
)

largest_increases = (
    stable_change_months
    .dropna(subset=["month_change_pct"])
    .nlargest(5, "month_change_pct")
    [
        [
            "year_month",
            "total_deaths",
            "month_change_abs",
            "month_change_pct"
        ]
    ]
)

print(largest_increases.to_string(index=False))

print(
    "\nLargest month-to-month decreases "
    "(previous month >= 1,000 deaths):"
)

largest_decreases = (
    stable_change_months
    .dropna(subset=["month_change_pct"])
    .nsmallest(5, "month_change_pct")
    [
        [
            "year_month",
            "total_deaths",
            "month_change_abs",
            "month_change_pct"
        ]
    ]
)

print(largest_decreases.to_string(index=False))


# ==================================================
# 4. Russia-Ukraine Yearly Analysis
# ==================================================

print("\n" + "=" * 60)
print("RUSSIA-UKRAINE YEARLY ANALYSIS")
print("=" * 60)

ukraine["year"] = (
    ukraine["year_month"]
    .astype(str)
    .str[:4]
    .astype(int)
)

yearly_ukraine = (
    ukraine
    .groupby("year")
    .agg(
        total_deaths=("total_deaths", "sum"),
        events=("events", "sum"),
        civilian_deaths=("civilian_deaths", "sum")
    )
    .reset_index()
)

yearly_ukraine["civilian_share"] = (
    yearly_ukraine["civilian_deaths"]
    .div(
        yearly_ukraine["total_deaths"].where(
            yearly_ukraine["total_deaths"] > 0
        )
    )
    .mul(100)
)

yearly_ukraine["deaths_per_event"] = (
    yearly_ukraine["total_deaths"]
    .div(
        yearly_ukraine["events"].where(
            yearly_ukraine["events"] > 0
        )
    )
)

# Mark partial years explicitly

yearly_ukraine["partial_year"] = False

first_month = str(ukraine["year_month"].min())
last_month = str(ukraine["year_month"].max())

first_year = int(first_month[:4])
last_year = int(last_month[:4])

if first_month[5:7] != "01":
    yearly_ukraine.loc[
        yearly_ukraine["year"] == first_year,
        "partial_year"
    ] = True

if last_month[5:7] != "12":
    yearly_ukraine.loc[
        yearly_ukraine["year"] == last_year,
        "partial_year"
    ] = True

print("\nYearly totals:")

print(
    yearly_ukraine.to_string(
        index=False,
        formatters={
            "total_deaths": "{:,.0f}".format,
            "events": "{:,.0f}".format,
            "civilian_deaths": "{:,.0f}".format,
            "civilian_share": "{:.2f}%".format,
            "deaths_per_event": "{:.2f}".format
        }
    )
)

print("\nPartial-year warnings:")

partial_years = yearly_ukraine[
    yearly_ukraine["partial_year"]
]

if partial_years.empty:
    print(
        "  No partial calendar years detected "
        "in the available coverage."
    )
else:
    for _, row in partial_years.iterrows():
        year = int(row["year"])

        year_months = ukraine.loc[
            ukraine["year"] == year,
            "year_month"
        ].astype(str)

        print(
            f"  {year}: partial-year coverage "
            f"({year_months.min()} to {year_months.max()})."
        )

print(
    "  Partial-year totals should not be directly compared "
    "with full-year totals without accounting for coverage."
)

# Peak year by total deaths

complete_years = yearly_ukraine[
    ~yearly_ukraine["partial_year"]
].copy()

if not complete_years.empty:
    peak_year = complete_years.loc[
        complete_years["total_deaths"].idxmax()
    ]

    print(
        f"\nHighest complete-calendar-year deaths: "
        f"{peak_year['total_deaths']:,.0f} "
        f"in {int(peak_year['year'])}"
    )
else:
    peak_year = yearly_ukraine.loc[
        yearly_ukraine["total_deaths"].idxmax()
    ]

    print(
        f"\nHighest annual deaths in available data: "
        f"{peak_year['total_deaths']:,.0f} "
        f"in {int(peak_year['year'])}"
    )

# Highest annual deaths per event

peak_severity_year = yearly_ukraine.loc[
    yearly_ukraine["deaths_per_event"].idxmax()
]

print(
    f"Highest annual deaths per recorded event: "
    f"{peak_severity_year['deaths_per_event']:,.2f} "
    f"in {int(peak_severity_year['year'])}"
)

# Civilian share by year

print("\nCivilian share by year:")

for _, row in yearly_ukraine.iterrows():
    warning = (
        " [PARTIAL YEAR]"
        if row["partial_year"]
        else ""
    )

    print(
        f"  {int(row['year'])}: "
        f"{row['civilian_share']:.2f}%"
        f"{warning}"
    )

# 2022-2025 comparison

recent_years = yearly_ukraine[
    yearly_ukraine["year"].isin(
        [2022, 2023, 2024, 2025]
    )
].copy()

if not recent_years.empty:
    print("\n2022-2025 annual comparison:")

    for _, row in recent_years.iterrows():
        warning = (
            " [PARTIAL YEAR]"
            if row["partial_year"]
            else ""
        )

        print(
            f"  {int(row['year'])}: "
            f"{row['total_deaths']:,.0f} deaths, "
            f"{row['events']:,.0f} events, "
            f"{row['deaths_per_event']:.2f} deaths/event, "
            f"{row['civilian_share']:.2f}% civilian share"
            f"{warning}"
        )


# ==================================================
# 5. Data Quality Checks
# ==================================================

print("\n" + "=" * 60)
print("DATA QUALITY CHECKS")
print("=" * 60)

# Missing values

print("\nMissing values - Israel-Palestine:")
print(ip.isna().sum())

print("\nMissing values - Russia-Ukraine:")
print(ukraine.isna().sum())

# Negative values

negative_ip = (
    ip["killed"] < 0
).sum()

negative_ukraine_total = (
    ukraine["total_deaths"] < 0
).sum()

negative_ukraine_civilian = (
    ukraine["civilian_deaths"] < 0
).sum()

print(
    f"\nNegative Israel-Palestine killed values: "
    f"{negative_ip}"
)

print(
    f"Negative Russia-Ukraine total_deaths values: "
    f"{negative_ukraine_total}"
)

print(
    f"Negative Russia-Ukraine civilian_deaths values: "
    f"{negative_ukraine_civilian}"
)

# Duplicate checks

ip_duplicates = ip.duplicated().sum()
ukraine_duplicates = ukraine.duplicated().sum()

print(
    f"\nDuplicate Israel-Palestine rows: "
    f"{ip_duplicates}"
)

print(
    f"Duplicate Russia-Ukraine monthly rows: "
    f"{ukraine_duplicates}"
)

# Date coverage

print(
    f"\nIsrael-Palestine date coverage: "
    f"{ip_start_date.date()} "
    f"to "
    f"{ip_end_date.date()}"
)

if "year_month" in ukraine.columns:
    print(
        f"Russia-Ukraine month coverage: "
        f"{ukraine['year_month'].min()} "
        f"to "
        f"{ukraine['year_month'].max()}"
    )

# Demographic duplicate check

demographic_duplicates = killed.duplicated().sum()

print(
    f"Gaza demographic duplicate rows: "
    f"{demographic_duplicates}"
)


# ==================================================
# 6. Analysis Summary
# ==================================================

print("\n" + "=" * 60)
print("ANALYSIS SUMMARY")
print("=" * 60)

ip_partial_warning = ""

if (
    ip_start_date.month != 1
    or ip_start_date.day != 1
):
    ip_partial_warning += (
        f"Israel-Palestine begins mid-year "
        f"({ip_start_date.date()}).\n"
    )

if (
    ip_end_date.month != 12
    or ip_end_date.day != 31
):
    ip_partial_warning += (
        f"Israel-Palestine ends mid-year "
        f"({ip_end_date.date()}).\n"
    )

ru_partial_warning = ""

if not partial_years.empty:
    for _, row in partial_years.iterrows():
        year = int(row["year"])

        year_months = ukraine.loc[
            ukraine["year"] == year,
            "year_month"
        ].astype(str)

        ru_partial_warning += (
            f"Russia-Ukraine {year} is partial "
            f"({year_months.min()} to {year_months.max()}).\n"
        )

print(
    f"""
Israel-Palestine
----------------
Total reported deaths : {total_ip_killed:,.0f}
Gaza                  : {location_totals.get("Gaza", 0):,.0f}
West Bank             : {location_totals.get("West Bank", 0):,.0f}
Children (0-18)       : {children_count:,} ({children_pct:.2f}%)
Male                  : {sex_percentages.get("Male", 0):.2f}%
Female                : {sex_percentages.get("Female", 0):.2f}%

Coverage warnings:
{ip_partial_warning if ip_partial_warning else "None"}

Russia-Ukraine
--------------
Battle-related deaths : {total_ukraine_deaths:,.0f}
Recorded events       : {total_events:,.0f}
Civilian deaths       : {total_civilian_deaths:,.0f}
Civilian share        : {civilian_share:.2f}%
Average monthly deaths: {average_monthly_deaths:,.1f}
Peak month            : {peak_month["year_month"]}
Peak month deaths     : {peak_month["total_deaths"]:,.0f}
Peak year             : {int(peak_year["year"])}
Peak year deaths      : {peak_year["total_deaths"]:,.0f}

Coverage warnings:
{ru_partial_warning if ru_partial_warning else "None"}
"""
)

print("\nExact statistics calculation complete.")