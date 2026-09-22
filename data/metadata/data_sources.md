# Data Sources – Global War Casualties Analysis

This document records the origin, download date, and key notes for every raw dataset used in the project.  
All figures are treated as factual counts reported by the cited organizations. No political interpretation is applied.

---

## 1. Russia – Ukraine Conflict

### 1.1 Our World in Data – War & Peace
- **File**: `owid_war_deaths_raw.csv`
- **Source**: Our World in Data (based on Uppsala Conflict Data Program – UCDP)
- **URL**: https://ourworldindata.org/war-and-peace
- **Download date**: [INSERT YOUR DOWNLOAD DATE, e.g. 2025-09-15]
- **Description**: Aggregated annual battle-related deaths by conflict. Clean, ready-to-use CSV.
- **Notes**: Pre-aggregated; best for high-level yearly trends.

### 1.2 UCDP Georeferenced Event Dataset (GED)
- **File**: `ucdp_ukraine_russia_raw.csv`
- **Source**: Uppsala Conflict Data Program (UCDP)
- **URL**: https://ucdp.uu.se/downloads/
- **Download date**: [INSERT YOUR DOWNLOAD DATE]
- **Description**: Event-level data with geographic coordinates, dates, and fatality estimates for organized violence.
- **Notes**: Filtered in Python to Russia-Ukraine related events only. Day-level precision where available.

---

## 2. Israel – Palestine Conflict

### 2.1 Tech for Palestine – Gaza Daily Casualties
- **File**: `techforpalestine_gaza_daily_raw.csv`
- **Source**: Tech for Palestine (data.techforpalestine.org)
- **URL**: https://data.techforpalestine.org/docs/casualties-daily
- **Download date**: [INSERT YOUR DOWNLOAD DATE]
- **Description**: Daily reported killed and injured figures in Gaza.
- **Notes**: Updated frequently. Used for time-series analysis.

### 2.2 Tech for Palestine – West Bank Daily Casualties
- **File**: `techforpalestine_westbank_daily_raw.csv`
- **Source**: Tech for Palestine
- **URL**: https://data.techforpalestine.org/docs/casualties-daily-west-bank
- **Download date**: [INSERT YOUR DOWNLOAD DATE] (or “pending” if not yet downloaded)
- **Description**: Daily reported killed and injured figures in the West Bank.
- **Notes**: Optional secondary dataset; can be added later without breaking the pipeline.

### 2.3 Killed in Gaza (Demographic Breakdown)
- **File**: `killed_in_gaza.csv`
- **Source**: Tech for Palestine / related open datasets (or ACLED / local NGO compilations if used)
- **URL**: [INSERT THE EXACT URL YOU USED]
- **Download date**: [INSERT YOUR DOWNLOAD DATE]
- **Description**: Individual or aggregated records of people killed in Gaza with demographic fields (age, sex, etc.).
- **Notes**: Used for demographic analysis (age/sex distribution charts).  
  Verify column names after loading; some versions contain name, age, gender, location, and date of death.

---

## 3. Additional / Supporting Sources (optional)

| Source              | Purpose                              | URL                                      |
|---------------------|--------------------------------------|------------------------------------------|
| UN OCHA oPt         | Verified civilian casualty snapshots | https://www.ochaopt.org/data/casualties  |
| ACLED               | Event-level conflict data            | https://acleddata.com                    |
| UCDP                | Academic gold-standard event data    | https://ucdp.uu.se                       |

---

## Data Handling Notes

- All raw files are kept unchanged in `data/raw/`.
- Cleaning, filtering, and aggregation are performed only in Python scripts / notebooks.
- Missing values, inconsistent date formats, and geographic name variations are handled during the cleaning stage.
- For the most recent periods of active conflict, figures may be incomplete or subject to later revision by the original sources. This limitation is noted in the final methodology section of the project.

---

**Last updated**: [INSERT TODAY’S DATE]  
**Project**: Global War Casualties Analysis  
**Author**: [YOUR NAME]