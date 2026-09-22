import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from pathlib import Path

# --------------------------------------------------
# Paths
# --------------------------------------------------
PROJECT_ROOT = Path.cwd().parent if Path.cwd().name == "notebooks" else Path.cwd()
PROCESSED = PROJECT_ROOT / "data" / "processed"
OUTPUTS = PROJECT_ROOT / "outputs" / "charts"
OUTPUTS.mkdir(parents=True, exist_ok=True)

print("Processed folder:", PROCESSED)
print("Charts will be saved to:", OUTPUTS)
print()

# --------------------------------------------------
# Load cleaned data
# --------------------------------------------------
owid = pd.read_csv(PROCESSED / "owid_clean.csv")
ucdp = pd.read_csv(PROCESSED / "ucdp_ukraine_russia_clean.csv")
gaza = pd.read_csv(PROCESSED / "gaza_daily_clean.csv")
westbank = pd.read_csv(PROCESSED / "westbank_daily_clean.csv")
killed = pd.read_csv(PROCESSED / "killed_in_gaza_clean.csv")

print("Loaded cleaned files successfully\n")

# --------------------------------------------------
# 1. Create a simple daily master for Israel-Palestine
# --------------------------------------------------
gaza["report_date"] = pd.to_datetime(gaza["report_date"])
westbank["report_date"] = pd.to_datetime(westbank["report_date"])

# Keep only needed columns and standardize
gaza_daily = gaza[["report_date", "daily_killed", "location", "conflict"]].copy()
gaza_daily = gaza_daily.rename(columns={"daily_killed": "killed"})

wb_daily = westbank[["report_date", "daily_killed", "location", "conflict"]].copy()
wb_daily = wb_daily.rename(columns={"daily_killed": "killed"})

israel_palestine_daily = pd.concat([gaza_daily, wb_daily], ignore_index=True)
israel_palestine_daily = israel_palestine_daily.dropna(subset=["killed"])
israel_palestine_daily["killed"] = israel_palestine_daily["killed"].clip(lower=0)

israel_palestine_daily.to_csv(PROCESSED / "israel_palestine_daily_master.csv", index=False)
print(f"Saved israel_palestine_daily_master.csv → {len(israel_palestine_daily):,} rows")

# --------------------------------------------------
# 2. Create monthly summary for Russia-Ukraine (from UCDP)
# --------------------------------------------------
ucdp["date_start"] = pd.to_datetime(ucdp["date_start"], errors="coerce")
ucdp = ucdp.dropna(subset=["date_start"])

ucdp["year_month"] = ucdp["date_start"].dt.to_period("M").astype(str)

ukraine_monthly = (
    ucdp.groupby("year_month")
    .agg(
        events=("id", "count"),
        total_deaths=("total_deaths", "sum"),
        civilian_deaths=("deaths_civilians", "sum")
    )
    .reset_index()
)

ukraine_monthly["conflict"] = "Russia-Ukraine"
ukraine_monthly.to_csv(PROCESSED / "ukraine_russia_monthly.csv", index=False)
print(f"Saved ukraine_russia_monthly.csv → {len(ukraine_monthly):,} rows")

# --------------------------------------------------
# 3. Basic EDA Charts
# --------------------------------------------------
sns.set_theme(style="whitegrid")
plt.rcParams["figure.figsize"] = (12, 6)

# Chart 1: Gaza daily deaths over time
plt.figure()
sns.lineplot(data=gaza, x="report_date", y="daily_killed", color="crimson")
plt.title("Gaza – Daily Reported Deaths Over Time", fontsize=14, fontweight="bold")
plt.xlabel("Date")
plt.ylabel("Daily Killed")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig(OUTPUTS / "01_gaza_daily_deaths.png", dpi=150)
plt.close()
print("Saved chart: 01_gaza_daily_deaths.png")

# Chart 2: Age distribution of killed in Gaza
plt.figure()
age_order = ["0-12", "13-18", "19-30", "31-45", "46-60", "60+"]
sns.countplot(data=killed, x="age_group", order=age_order, palette="Reds_r")
plt.title("Gaza – Age Distribution of Reported Fatalities", fontsize=14, fontweight="bold")
plt.xlabel("Age Group")
plt.ylabel("Number of People")
plt.tight_layout()
plt.savefig(OUTPUTS / "02_gaza_age_distribution.png", dpi=150)
plt.close()
print("Saved chart: 02_gaza_age_distribution.png")

# Chart 3: Sex distribution
plt.figure()
sex_counts = killed["sex"].value_counts()
plt.pie(sex_counts, labels=sex_counts.index, autopct="%1.1f%%", startangle=90, colors=["#e74c3c", "#3498db", "#95a5a6"])
plt.title("Gaza – Sex Distribution of Reported Fatalities", fontsize=14, fontweight="bold")
plt.tight_layout()
plt.savefig(OUTPUTS / "03_gaza_sex_distribution.png", dpi=150)
plt.close()
print("Saved chart: 03_gaza_sex_distribution.png")

# Chart 4: Ukraine monthly deaths
plt.figure()
sns.lineplot(data=ukraine_monthly, x="year_month", y="total_deaths", color="darkblue")
plt.title("Russia-Ukraine – Monthly Battle-Related Deaths (UCDP)", fontsize=14, fontweight="bold")
plt.xlabel("Year-Month")
plt.ylabel("Total Deaths")
plt.xticks(rotation=90)
plt.tight_layout()
plt.savefig(OUTPUTS / "04_ukraine_monthly_deaths.png", dpi=150)
plt.close()
print("Saved chart: 04_ukraine_monthly_deaths.png")

print("\n" + "="*60)
print("MASTER DATASETS + EDA CHARTS CREATED SUCCESSFULLY")
print("="*60)
print(f"Charts saved in: {OUTPUTS}")