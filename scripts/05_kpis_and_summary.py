import pandas as pd
import numpy as np
from pathlib import Path

# --------------------------------------------------
# Paths
# --------------------------------------------------
PROJECT_ROOT = Path.cwd().parent if Path.cwd().name == "notebooks" else Path.cwd()
PROCESSED = PROJECT_ROOT / "data" / "processed"
OUTPUTS = PROJECT_ROOT / "outputs"
OUTPUTS.mkdir(parents=True, exist_ok=True)

# --------------------------------------------------
# Load data
# --------------------------------------------------
gaza = pd.read_csv(PROCESSED / "gaza_daily_clean.csv")
westbank = pd.read_csv(PROCESSED / "westbank_daily_clean.csv")
killed = pd.read_csv(PROCESSED / "killed_in_gaza_clean.csv")
ukraine_monthly = pd.read_csv(PROCESSED / "ukraine_russia_monthly.csv")
ip_daily = pd.read_csv(PROCESSED / "israel_palestine_daily_master.csv")

gaza["report_date"] = pd.to_datetime(gaza["report_date"])
ip_daily["report_date"] = pd.to_datetime(ip_daily["report_date"])

print("Data loaded successfully\n")

# --------------------------------------------------
# 1. Israel-Palestine KPIs
# --------------------------------------------------
print("=" * 60)
print("ISRAEL-PALESTINE KPIs")
print("=" * 60)

total_gaza_killed = gaza["daily_killed"].sum()
total_wb_killed = westbank["daily_killed"].sum()
total_ip_killed = total_gaza_killed + total_wb_killed

print(f"Total reported killed in Gaza        : {total_gaza_killed:,.0f}")
print(f"Total reported killed in West Bank   : {total_wb_killed:,.0f}")
print(f"Total Israel-Palestine (combined)    : {total_ip_killed:,.0f}")

# Peak day
peak_day = gaza.loc[gaza["daily_killed"].idxmax()]
print(f"\nHighest single day in Gaza           : {peak_day['daily_killed']:,.0f} on {peak_day['report_date'].date()}")

# Average daily
avg_daily_gaza = gaza["daily_killed"].mean()
print(f"Average daily killed in Gaza         : {avg_daily_gaza:.1f}")

# --------------------------------------------------
# 2. Demographic KPIs (from killed_in_gaza)
# --------------------------------------------------
print("\n" + "=" * 60)
print("GAZA DEMOGRAPHIC KPIs")
print("=" * 60)

total_records = len(killed)
print(f"Total individual records             : {total_records:,}")

# Sex breakdown
sex_counts = killed["sex"].str.lower().str.strip().value_counts()
print("\nSex distribution:")
for sex, count in sex_counts.items():
    pct = count / total_records * 100
    print(f"  {sex:<10} : {count:>7,}  ({pct:.1f}%)")

# Age group breakdown
print("\nAge group distribution:")
age_counts = killed["age_group"].value_counts().sort_index()
for age, count in age_counts.items():
    pct = count / total_records * 100
    print(f"  {str(age):<10} : {count:>7,}  ({pct:.1f}%)")

# Children (0-18)
children = killed[killed["age_group"].isin(["0-12", "13-18"])]
print(f"\nChildren (0-18 years)                : {len(children):,}  ({len(children)/total_records*100:.1f}%)")

# --------------------------------------------------
# 3. Russia-Ukraine KPIs
# --------------------------------------------------
print("\n" + "=" * 60)
print("RUSSIA-UKRAINE KPIs (UCDP)")
print("=" * 60)

total_ukraine_deaths = ukraine_monthly["total_deaths"].sum()
total_events = ukraine_monthly["events"].sum()
total_civilian = ukraine_monthly["civilian_deaths"].sum()

print(f"Total battle-related deaths          : {total_ukraine_deaths:,.0f}")
print(f"Total recorded events                : {total_events:,.0f}")
print(f"Total civilian deaths                : {total_civilian:,.0f}")

peak_month = ukraine_monthly.loc[ukraine_monthly["total_deaths"].idxmax()]
print(f"\nHighest month                        : {peak_month['total_deaths']:,.0f} deaths in {peak_month['year_month']}")

# --------------------------------------------------
# 4. Save KPI Summary as CSV (useful for Power BI later)
# --------------------------------------------------
kpi_data = {
    "Metric": [
        "Total Killed - Gaza",
        "Total Killed - West Bank",
        "Total Killed - Israel-Palestine",
        "Peak Daily Deaths - Gaza",
        "Average Daily Deaths - Gaza",
        "Total Individual Records - Gaza",
        "Children (0-18) - Gaza",
        "Children % - Gaza",
        "Total Deaths - Russia-Ukraine",
        "Total Events - Russia-Ukraine",
        "Civilian Deaths - Russia-Ukraine",
        "Peak Monthly Deaths - Russia-Ukraine"
    ],
    "Value": [
        total_gaza_killed,
        total_wb_killed,
        total_ip_killed,
        peak_day["daily_killed"],
        round(avg_daily_gaza, 1),
        total_records,
        len(children),
        round(len(children)/total_records*100, 1),
        total_ukraine_deaths,
        total_events,
        total_civilian,
        peak_month["total_deaths"]
    ]
}

kpi_df = pd.DataFrame(kpi_data)
kpi_df.to_csv(OUTPUTS / "project_kpis.csv", index=False)
print(f"\nKPI summary saved to: {OUTPUTS / 'project_kpis.csv'}")

print("\n" + "=" * 60)
print("KPI ANALYSIS COMPLETE")
print("=" * 60)