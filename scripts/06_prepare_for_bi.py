import pandas as pd
from pathlib import Path

# --------------------------------------------------
# Paths
# --------------------------------------------------
PROJECT_ROOT = Path.cwd().parent if Path.cwd().name == "notebooks" else Path.cwd()
PROCESSED = PROJECT_ROOT / "data" / "processed"
BI_FOLDER = PROJECT_ROOT / "data" / "bi_ready"
BI_FOLDER.mkdir(parents=True, exist_ok=True)

print("Creating BI-ready files...\n")

# --------------------------------------------------
# 1. Israel-Palestine Daily Master (already good)
# --------------------------------------------------
ip_daily = pd.read_csv(PROCESSED / "israel_palestine_daily_master.csv")
ip_daily["report_date"] = pd.to_datetime(ip_daily["report_date"])
ip_daily.to_csv(BI_FOLDER / "israel_palestine_daily.csv", index=False)
print(f"1. israel_palestine_daily.csv          → {len(ip_daily):,} rows")

# --------------------------------------------------
# 2. Gaza Daily (with more columns)
# --------------------------------------------------
gaza = pd.read_csv(PROCESSED / "gaza_daily_clean.csv")
gaza["report_date"] = pd.to_datetime(gaza["report_date"])
gaza.to_csv(BI_FOLDER / "gaza_daily_detailed.csv", index=False)
print(f"2. gaza_daily_detailed.csv             → {len(gaza):,} rows")

# --------------------------------------------------
# 3. West Bank Daily
# --------------------------------------------------
wb = pd.read_csv(PROCESSED / "westbank_daily_clean.csv")
wb["report_date"] = pd.to_datetime(wb["report_date"])
wb.to_csv(BI_FOLDER / "westbank_daily.csv", index=False)
print(f"3. westbank_daily.csv                  → {len(wb):,} rows")

# --------------------------------------------------
# 4. Gaza Demographics (cleaned)
# --------------------------------------------------
killed = pd.read_csv(PROCESSED / "killed_in_gaza_clean.csv")

# Clean sex column
killed["sex"] = killed["sex"].str.lower().str.strip()
killed["sex"] = killed["sex"].replace({
    "m": "Male",
    "male": "Male",
    "f": "Female",
    "female": "Female"
})

killed.to_csv(BI_FOLDER / "gaza_demographics.csv", index=False)
print(f"4. gaza_demographics.csv               → {len(killed):,} rows")

# --------------------------------------------------
# 5. Russia-Ukraine Monthly
# --------------------------------------------------
ukraine = pd.read_csv(PROCESSED / "ukraine_russia_monthly.csv")
ukraine.to_csv(BI_FOLDER / "ukraine_russia_monthly.csv", index=False)
print(f"5. ukraine_russia_monthly.csv          → {len(ukraine):,} rows")

# --------------------------------------------------
# 6. Combined Conflict Summary (for comparison)
# --------------------------------------------------
# Simple high-level summary
summary_data = {
    "Conflict": ["Israel-Palestine (Gaza + West Bank)", "Russia-Ukraine"],
    "Total_Reported_Deaths": [
        ip_daily["killed"].sum(),
        ukraine["total_deaths"].sum()
    ],
    "Data_Source": ["Tech for Palestine", "UCDP"],
    "Time_Granularity": ["Daily", "Monthly"]
}

summary = pd.DataFrame(summary_data)
summary.to_csv(BI_FOLDER / "conflict_comparison_summary.csv", index=False)
print(f"6. conflict_comparison_summary.csv     → {len(summary):,} rows")

# --------------------------------------------------
# 7. KPIs file (already created earlier)
# --------------------------------------------------
kpi_path = PROJECT_ROOT / "outputs" / "project_kpis.csv"
if kpi_path.exists():
    kpi = pd.read_csv(kpi_path)
    kpi.to_csv(BI_FOLDER / "project_kpis.csv", index=False)
    print(f"7. project_kpis.csv                    → {len(kpi):,} rows")

print("\n" + "="*60)
print("ALL BI-READY FILES CREATED SUCCESSFULLY")
print("="*60)
print(f"Location: {BI_FOLDER}")
print("\nYou can now import these files into Power BI and Tableau.")