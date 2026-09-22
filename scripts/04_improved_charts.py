import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from pathlib import Path
import matplotlib.dates as mdates

# --------------------------------------------------
# Paths
# --------------------------------------------------

PROJECT_ROOT = Path.cwd().parent if Path.cwd().name == "notebooks" else Path.cwd()

PROCESSED = PROJECT_ROOT / "data" / "processed"
OUTPUTS = PROJECT_ROOT / "outputs" / "charts"

OUTPUTS.mkdir(parents=True, exist_ok=True)

# --------------------------------------------------
# Load data
# --------------------------------------------------

gaza = pd.read_csv(PROCESSED / "gaza_daily_clean.csv")
killed = pd.read_csv(PROCESSED / "killed_in_gaza_clean.csv")
ukraine_monthly = pd.read_csv(PROCESSED / "ukraine_russia_monthly.csv")
ip_daily = pd.read_csv(PROCESSED / "israel_palestine_daily_master.csv")

gaza["report_date"] = pd.to_datetime(gaza["report_date"])
ip_daily["report_date"] = pd.to_datetime(ip_daily["report_date"])

# Convert Russia-Ukraine monthly period into datetime
ukraine_monthly["year_month"] = pd.to_datetime(
    ukraine_monthly["year_month"]
)

# --------------------------------------------------
# Global style settings
# --------------------------------------------------

sns.set_theme(style="whitegrid", font_scale=1.1)

plt.rcParams["figure.dpi"] = 150
plt.rcParams["savefig.dpi"] = 150
plt.rcParams["figure.facecolor"] = "white"
plt.rcParams["axes.facecolor"] = "white"
plt.rcParams["axes.titleweight"] = "bold"
plt.rcParams["axes.labelweight"] = "medium"

# --------------------------------------------------
# Chart 1: Gaza Daily Deaths (Improved)
# --------------------------------------------------

plt.figure(figsize=(13, 6))

sns.lineplot(
    data=gaza,
    x="report_date",
    y="daily_killed",
    color="#c0392b",
    linewidth=1.8
)

plt.title(
    "Gaza – Daily Reported Deaths Over Time",
    fontsize=16,
    pad=15
)

plt.xlabel("Date", fontsize=12)
plt.ylabel("Daily Killed", fontsize=12)
plt.xticks(rotation=45)

plt.tight_layout()

plt.savefig(
    OUTPUTS / "01_gaza_daily_deaths.png",
    bbox_inches="tight"
)

plt.close()

print("Saved: 01_gaza_daily_deaths.png")

# --------------------------------------------------
# Chart 2: Age Distribution (Improved)
# --------------------------------------------------

plt.figure(figsize=(10, 6))

age_order = ["0-12", "13-18", "19-30", "31-45", "46-60", "60+"]

ax = sns.countplot(
    data=killed,
    x="age_group",
    order=age_order,
    color="#e74c3c"
)

plt.title(
    "Gaza – Age Distribution of Reported Fatalities",
    fontsize=16,
    pad=15
)

plt.xlabel("Age Group", fontsize=12)
plt.ylabel("Number of People", fontsize=12)

# Add value labels on bars
for p in ax.patches:
    height = p.get_height()

    ax.annotate(
        f"{int(height):,}",
        (
            p.get_x() + p.get_width() / 2.0,
            height
        ),
        ha="center",
        va="bottom",
        fontsize=10
    )

plt.tight_layout()

plt.savefig(
    OUTPUTS / "02_gaza_age_distribution.png",
    bbox_inches="tight"
)

plt.close()

print("Saved: 02_gaza_age_distribution.png")

# --------------------------------------------------
# Chart 3: Sex Distribution (Improved)
# --------------------------------------------------

plt.figure(figsize=(8, 8))

sex_counts = killed["sex"].value_counts()

colors = ["#e74c3c", "#3498db", "#95a5a6"]

plt.pie(
    sex_counts,
    labels=sex_counts.index.str.title(),
    autopct="%1.1f%%",
    startangle=90,
    colors=colors,
    textprops={"fontsize": 12}
)

plt.title(
    "Gaza – Sex Distribution of Reported Fatalities",
    fontsize=16,
    pad=20
)

plt.tight_layout()

plt.savefig(
    OUTPUTS / "03_gaza_sex_distribution.png",
    bbox_inches="tight"
)

plt.close()

print("Saved: 03_gaza_sex_distribution.png")

# --------------------------------------------------
# Chart 4: Ukraine Monthly Deaths (Improved)
# --------------------------------------------------

fig, ax = plt.subplots(figsize=(15, 7))

sns.lineplot(
    data=ukraine_monthly,
    x="year_month",
    y="total_deaths",
    color="#2980b9",
    linewidth=2.2,
    marker="o",
    markersize=3.5,
    ax=ax
)

# Find the highest recorded month
peak_row = ukraine_monthly.loc[
    ukraine_monthly["total_deaths"].idxmax()
]

peak_date = peak_row["year_month"]
peak_deaths = peak_row["total_deaths"]

# Highlight the peak month
ax.scatter(
    peak_date,
    peak_deaths,
    color="#c0392b",
    s=70,
    zorder=5
)

# Annotate the peak
ax.annotate(
    f"Peak: {peak_deaths:,.0f}\n{peak_date.strftime('%b %Y')}",
    xy=(peak_date, peak_deaths),
    xytext=(25, -55),
    textcoords="offset points",
    fontsize=10,
    fontweight="bold",
    ha="left",
    va="top",
    bbox=dict(
        boxstyle="round,pad=0.4",
        facecolor="white",
        edgecolor="#d1d5db"
    ),
    arrowprops=dict(
        arrowstyle="->",
        color="#64748b",
        linewidth=1.2
    )
)

# Clean x-axis labels
ax.xaxis.set_major_locator(
    mdates.MonthLocator(interval=6)
)

ax.xaxis.set_major_formatter(
    mdates.DateFormatter("%b %Y")
)

plt.xticks(rotation=45, ha="right")

plt.title(
    "Russia–Ukraine – Monthly Battle-Related Deaths (UCDP)",
    fontsize=16,
    pad=18
)

plt.xlabel("Year-Month", fontsize=12)
plt.ylabel("Total Deaths", fontsize=12)

# Keep the grid subtle and readable
ax.grid(
    axis="y",
    alpha=0.35
)

ax.grid(
    axis="x",
    visible=False
)

plt.tight_layout()

plt.savefig(
    OUTPUTS / "04_ukraine_monthly_deaths.png",
    bbox_inches="tight"
)

plt.close()

print("Saved: 04_ukraine_monthly_deaths.png")

# --------------------------------------------------
# Chart 5: Gaza vs West Bank Daily Comparison
# --------------------------------------------------

plt.figure(figsize=(13, 6))

sns.lineplot(
    data=ip_daily,
    x="report_date",
    y="killed",
    hue="location",
    palette={
        "Gaza": "#c0392b",
        "West Bank": "#8e44ad"
    },
    linewidth=1.6
)

plt.title(
    "Israel-Palestine – Daily Reported Deaths: Gaza vs West Bank",
    fontsize=16,
    pad=15
)

plt.xlabel("Date", fontsize=12)
plt.ylabel("Daily Killed", fontsize=12)

plt.legend(title="Location")

plt.xticks(rotation=45)

plt.tight_layout()

plt.savefig(
    OUTPUTS / "05_gaza_vs_westbank.png",
    bbox_inches="tight"
)

plt.close()

print("Saved: 05_gaza_vs_westbank.png")

# --------------------------------------------------
# Chart 6: Age Group by Sex (Fixed)
# --------------------------------------------------

plt.figure(figsize=(11, 6))

# Normalize sex values first
killed["sex_clean"] = killed["sex"].str.lower().str.strip()

killed["sex_clean"] = killed["sex_clean"].replace({
    "m": "Male",
    "male": "Male",
    "f": "Female",
    "female": "Female"
})

sns.countplot(
    data=killed,
    x="age_group",
    hue="sex_clean",
    order=age_order,
    palette={
        "Male": "#2980b9",
        "Female": "#e74c3c"
    }
)

plt.title(
    "Gaza – Age Group Distribution by Sex",
    fontsize=16,
    pad=15
)

plt.xlabel("Age Group", fontsize=12)
plt.ylabel("Number of People", fontsize=12)

plt.legend(title="Sex")

plt.tight_layout()

plt.savefig(
    OUTPUTS / "06_age_by_sex.png",
    bbox_inches="tight"
)

plt.close()

print("Saved: 06_age_by_sex.png")