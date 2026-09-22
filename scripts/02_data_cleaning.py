import pandas as pd
import numpy as np
from pathlib import Path

# --------------------------------------------------
# Paths
# --------------------------------------------------
PROJECT_ROOT = Path.cwd().parent if Path.cwd().name == "notebooks" else Path.cwd()
RAW_DATA = PROJECT_ROOT / "data" / "raw"
print("\nInspecting UCDP source data...")

ucdp_check = pd.read_csv(
RAW_DATA / "ucdp_ukraine_russia_raw.csv",
usecols=["year", "conflict_name", "country"],
low_memory=False
)

print("\nYear range:")
print(ucdp_check["year"].min(), "to", ucdp_check["year"].max())

print("\nConflict names:")
print(ucdp_check["conflict_name"].value_counts().head(30))

print("\nRussia/Ukraine-related conflict names:")
related = ucdp_check[
ucdp_check["conflict_name"].str.contains(
"Ukraine|Russia|Donetsk|Luhansk|Crimea",
case=False,
na=False
)
]

print(related["conflict_name"].value_counts())

print("\nCountries:")
print(ucdp_check["country"].value_counts().head(30))
PROCESSED_DATA = PROJECT_ROOT / "data" / "processed"
PROCESSED_DATA.mkdir(parents=True, exist_ok=True)

print("Project root :", PROJECT_ROOT)
print("Processed dir:", PROCESSED_DATA)
print()

# --------------------------------------------------
# 1. Clean OWID
# --------------------------------------------------
print("Cleaning OWID...")
owid = pd.read_csv(RAW_DATA / "owid_war_deaths_raw.csv")

owid_clean = owid.rename(columns={
    "Entity": "country_or_conflict",
    "Year": "year",
    "Deaths in armed conflicts": "deaths"
})

owid_clean = owid_clean[["country_or_conflict", "year", "deaths"]].copy()
owid_clean["deaths"] = pd.to_numeric(owid_clean["deaths"], errors="coerce")
owid_clean = owid_clean.dropna(subset=["deaths"])
owid_clean["source"] = "OWID"

owid_clean.to_csv(PROCESSED_DATA / "owid_clean.csv", index=False)
print(f"  -> Saved owid_clean.csv ({len(owid_clean):,} rows)")

# --------------------------------------------------
# 2. Clean UCDP (Ukraine-Russia focus)
# --------------------------------------------------
print("Cleaning UCDP...")
ucdp_columns = [
"id", "year", "date_start", "date_end",
"conflict_name", "side_a", "side_b",
"country", "adm_1", "adm_2",
"latitude", "longitude",
"deaths_a", "deaths_b", "deaths_civilians", "deaths_unknown",
"best", "high", "low"
]

ucdp = pd.read_csv(
RAW_DATA / "ucdp_ukraine_russia_raw.csv",
usecols=ucdp_columns,
low_memory=False
)


print("\nYear range:")
print(ucdp_check["year"].min(), "to", ucdp_check["year"].max())

print("\nTop conflict names:")
print(ucdp_check["conflict_name"].value_counts().head(30))

print("\nUkraine/Russia-related conflict names:")
related = ucdp_check[
ucdp_check["conflict_name"].str.contains(
"Ukraine|Russia|Donetsk|Luhansk|Crimea",
case=False,
na=False
)
]

print(related["conflict_name"].value_counts())

print("\nTop countries:")
print(ucdp_check["country"].value_counts().head(30))


ucdp_clean = ucdp[[
    "id", "year", "date_start", "date_end",
    "conflict_name", "side_a", "side_b",
    "country", "adm_1", "adm_2",
    "latitude", "longitude",
    "deaths_a", "deaths_b", "deaths_civilians", "deaths_unknown",
    "best", "high", "low"
]].copy()

ucdp_clean["date_start"] = pd.to_datetime(ucdp_clean["date_start"], errors="coerce")
ucdp_clean["date_end"] = pd.to_datetime(ucdp_clean["date_end"], errors="coerce")

for col in ["deaths_a", "deaths_b", "deaths_civilians", "deaths_unknown", "best", "high", "low"]:
    ucdp_clean[col] = pd.to_numeric(ucdp_clean[col], errors="coerce").fillna(0)

ucdp_clean["total_deaths"] = ucdp_clean["best"]

mask = (
ucdp_clean["conflict_name"]
.str.strip()
.eq("Russia - Ukraine")
)

ucdp_clean = ucdp_clean[mask].copy()


ucdp_clean["conflict"] = "Russia-Ukraine"
ucdp_clean["source"] = "UCDP"

ucdp_clean.to_csv(PROCESSED_DATA / "ucdp_ukraine_russia_clean.csv", index=False)
print(f"  -> Saved ucdp_ukraine_russia_clean.csv ({len(ucdp_clean):,} rows)")

# --------------------------------------------------
# 3. Clean Gaza Daily
# --------------------------------------------------
print("Cleaning Gaza Daily...")
gaza = pd.read_csv(RAW_DATA / "techforpalestine_gaza_daily_raw.csv")

gaza_clean = gaza[[
    "report_date", "killed", "killed_cum",
    "ext_killed", "ext_killed_cum",
    "ext_killed_children_cum", "ext_killed_women_cum",
    "injured_cum", "ext_injured_cum"
]].copy()

gaza_clean["report_date"] = pd.to_datetime(gaza_clean["report_date"], errors="coerce")
gaza_clean = gaza_clean.dropna(subset=["report_date"])

gaza_clean["daily_killed"] = pd.to_numeric(gaza_clean["killed"], errors="coerce")
gaza_clean["daily_killed"] = gaza_clean["daily_killed"].fillna(
    gaza_clean["killed_cum"].diff()
)

gaza_clean["conflict"] = "Israel-Palestine"
gaza_clean["location"] = "Gaza"
gaza_clean["source"] = "TechForPalestine"

gaza_clean.to_csv(PROCESSED_DATA / "gaza_daily_clean.csv", index=False)
print(f"  -> Saved gaza_daily_clean.csv ({len(gaza_clean):,} rows)")

# --------------------------------------------------
# 4. Clean West Bank Daily
# --------------------------------------------------
print("Cleaning West Bank Daily...")
wb = pd.read_csv(RAW_DATA / "techforpalestine_westbank_daily_raw.csv")

wb_clean = wb[[
    "report_date",
    "verified.killed", "verified.killed_cum",
    "verified.injured", "verified.injured_cum",
    "verified.killed_children", "verified.killed_children_cum",
    "killed_cum", "injured_cum"
]].copy()

wb_clean["report_date"] = pd.to_datetime(wb_clean["report_date"], errors="coerce")
wb_clean = wb_clean.dropna(subset=["report_date"])

wb_clean["daily_killed"] = pd.to_numeric(wb_clean["verified.killed"], errors="coerce")
wb_clean["conflict"] = "Israel-Palestine"
wb_clean["location"] = "West Bank"
wb_clean["source"] = "TechForPalestine"

wb_clean.to_csv(PROCESSED_DATA / "westbank_daily_clean.csv", index=False)
print(f"  -> Saved westbank_daily_clean.csv ({len(wb_clean):,} rows)")

# --------------------------------------------------
# 5. Clean Killed in Gaza (Demographics)
# --------------------------------------------------
print("Cleaning Killed in Gaza (Demographics)...")
killed = pd.read_csv(RAW_DATA / "killed_in_gaza.csv")

killed_clean = killed.copy()
killed_clean["age"] = pd.to_numeric(killed_clean["age"], errors="coerce")
killed_clean["sex"] = killed_clean["sex"].str.lower().str.strip()

bins = [0, 12, 18, 30, 45, 60, 120]
labels = ["0-12", "13-18", "19-30", "31-45", "46-60", "60+"]
killed_clean["age_group"] = pd.cut(killed_clean["age"], bins=bins, labels=labels, right=True)

killed_clean["conflict"] = "Israel-Palestine"
killed_clean["location"] = "Gaza"
killed_clean["source"] = "TechForPalestine"

killed_clean.to_csv(PROCESSED_DATA / "killed_in_gaza_clean.csv", index=False)
print(f"  -> Saved killed_in_gaza_clean.csv ({len(killed_clean):,} rows)")

# --------------------------------------------------
# Done
# --------------------------------------------------
print("\n" + "="*60)
print("CLEANING COMPLETE")
print("="*60)
print(f"Cleaned files saved in: {PROCESSED_DATA}")