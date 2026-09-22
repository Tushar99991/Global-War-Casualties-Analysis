# Global War Casualties

A data analytics project examining reported casualty patterns across the **Israel–Palestine** and **Russia–Ukraine** conflicts using public datasets, reproducible Python data-processing workflows, exploratory analysis, and interactive visualization.

> **Scope note:** This project is a data-analysis portfolio project. It presents reported figures from the selected source datasets and focuses on patterns, trends, distributions, and data quality rather than political interpretation.

---

## 1. Project Overview

**Global War Casualties** brings together multiple public casualty datasets into a structured analytical workflow.

The project covers two conflict case studies:

- **Israel–Palestine**
  - Gaza daily reported casualties
  - West Bank daily reported casualties
  - Individual-level demographic records from Gaza
- **Russia–Ukraine**
  - UCDP Georeferenced Event Dataset (GED)
  - Event-level battle-related fatality records
  - Monthly and annual aggregations
  - Civilian and total fatality measures

The project demonstrates an end-to-end data analytics workflow:

**Raw Data → Cleaning → Transformation → EDA → KPI Analysis → BI-Ready Data → Dashboard**

---

## 2. Objectives

The main objectives are to:

- Clean and standardize heterogeneous conflict datasets.
- Build reproducible data-processing pipelines in Python.
- Analyze casualty trends over time.
- Examine geographic and demographic distributions where data is available.
- Create derived analytical metrics and aggregated datasets.
- Prepare clean datasets for BI tools.
- Communicate findings through charts, dashboards, and a structured project website.
- Document limitations and differences between source datasets.

---

## 3. Data Sources

### Israel–Palestine

The project uses datasets from **Tech for Palestine – Palestine Datasets**, including:

- Daily Casualties – Gaza
- Daily Casualties – West Bank
- Killed in Gaza

The Gaza daily dataset provides time-series casualty reporting, while the Killed in Gaza dataset provides individual records with demographic information. These datasets are not identical and can produce different aggregate totals because of differences in identification, reporting, and coverage.

Source documentation:

- [Tech for Palestine – Daily Casualties: Gaza](https://data.techforpalestine.org/docs/casualties-daily/)
- [Tech for Palestine – Daily Casualties: West Bank](https://data.techforpalestine.org/docs/casualties-daily-west-bank/)
- [Tech for Palestine – Killed in Gaza](https://data.techforpalestine.org/docs/killed-in-gaza/)

### Russia–Ukraine

The Russia–Ukraine analysis uses the **Uppsala Conflict Data Program (UCDP) Georeferenced Event Dataset (GED)** for event-level conflict data.

The UCDP GED is a geographically and temporally disaggregated dataset containing individual events of organized violence.

Source:

- [UCDP Dataset Download Center](https://ucdp.uu.se/downloads/)

The broader project workflow also incorporates **Our World in Data – War & Peace** data where aggregated conflict-death context is required.

---

## 4. Data Pipeline

The processing workflow is organized into separate stages.

### Raw

Original downloaded source files are stored in:

```text
data/raw/
```

### Processed

Cleaned and standardized datasets are saved in:

```text
data/processed/
```

### BI-Ready

Analysis-ready datasets prepared for visualization and BI tools are stored in:

```text
data/bi_ready/
```

### Outputs

Charts, KPI summaries, and other analytical outputs are stored in:

```text
outputs/
```

The workflow is designed so that raw source data can be transformed into consistent analytical datasets before visualization.

---

## 5. Data Cleaning & Transformation

The cleaning workflow includes:

- Standardizing date formats.
- Converting casualty and fatality fields to numeric types.
- Handling missing values.
- Filtering the UCDP dataset to the Russia–Ukraine conflict.
- Creating derived fields such as daily deaths, age groups, conflict labels, and location.
- Generating monthly Russia–Ukraine aggregates.
- Combining Gaza and West Bank daily data into a master Israel–Palestine time series.
- Standardizing demographic sex values.
- Creating age-group bins for Gaza demographic analysis.
- Preparing BI-ready copies of the processed datasets.

For the Russia–Ukraine dataset, the final filtered analytical dataset contains **37,892 recorded events** covering **March 2014 through December 2025**.

---

## 6. Exploratory Data Analysis

### Israel–Palestine

The analysis examines:

- Daily reported casualty trends.
- Gaza versus West Bank distributions.
- Peak daily reported deaths.
- Gaza age-group distributions.
- Gaza sex distribution.
- Age-group distribution by sex.
- Time-series volatility and changes over the available reporting period.

### Russia–Ukraine

The analysis examines:

- Monthly reported battle-related fatalities.
- Annual fatality totals.
- Civilian fatality counts.
- Civilian share of recorded deaths.
- Fatalities per recorded event as a descriptive ratio.
- Geographic distribution available in the event-level data.
- Changes in reported fatalities across the available time period.

---

## 7. Key Findings

### Israel–Palestine

Using the project's current processed daily casualty data:

- **73,134** reported deaths are represented across the Gaza and West Bank daily datasets.
- Gaza accounts for **72,399 (98.99%)** of those reported deaths in the combined dataset.
- The West Bank accounts for **735 (1.01%)**.
- The highest recorded daily value is **828 deaths on November 21, 2023**.
- The Gaza demographic dataset contains **72,835 individual records**.
- Within that demographic dataset, **50,959 records are male (69.96%)** and **21,876 are female (30.04%)**.
- The largest Gaza age groups are **19–30 (26.71%)** and **31–45 (24.42%)**.
- Records aged **0–18 account for 22,213 records (30.50%)** of the Gaza demographic dataset.

These figures describe the project's selected datasets and should not be interpreted as a definitive measurement of the full human toll.

### Russia–Ukraine

Within the filtered UCDP event dataset used in this project:

- **37,892 recorded events** are included.
- The dataset contains **372,593 reported battle-related deaths**.
- **25,985 civilian deaths** are recorded.
- Civilian deaths represent **6.97%** of recorded battle-related deaths across the full analytical period.
- The highest individual month is **March 2022**, with **27,111 recorded deaths**.
- Among complete calendar years in the analysis, **2024 has the highest recorded annual total at 102,120 deaths**.
- Annual recorded deaths are:
  - **2022:** 99,473
  - **2023:** 76,254
  - **2024:** 102,120
  - **2025:** 94,741

For the annual civilian composition of the dataset:

| Year | Recorded deaths | Civilian deaths | Civilian share |
| ---- | --------------: | --------------: | -------------: |
| 2022 |          99,473 |          18,163 |         18.26% |
| 2023 |          76,254 |           2,357 |          3.09% |
| 2024 |         102,120 |           2,609 |          2.55% |
| 2025 |          94,741 |           2,856 |          3.01% |

The annual figures above are descriptive statistics from the processed dataset, not estimates of the complete human toll.

---

## 8. Comparative Analysis

The two case studies are intentionally analyzed using different source structures.

The Israel–Palestine component combines daily casualty reporting with individual demographic records, while the Russia–Ukraine component uses event-level UCDP data that can be aggregated into monthly and annual measures.

Because the datasets differ in:

- source organizations,
- definitions,
- reporting processes,
- time coverage,
- geographic coverage,
- level of observation,
- identification methods, and
- update schedules,

their totals should **not** be treated as a direct apples-to-apples comparison of the human toll of the two conflicts.

The comparative component therefore focuses primarily on analytical methodology, time-series behavior, demographic structure where available, and differences in data granularity.

---

## 9. Data Quality & Limitations

Several limitations are important when interpreting the results.

### Reported figures are not necessarily complete totals

Conflict casualty datasets can be incomplete, delayed, revised, or affected by reporting constraints. The source providers themselves document limitations and caveats around coverage and representativeness.

### Different datasets measure different things

The Israel–Palestine daily casualty datasets and individual Gaza records are not identical datasets. Their totals can differ because the underlying reporting and identification processes differ.

### Partial-year coverage

The Israel–Palestine daily data used in this project covers **October 7, 2023 through September 17, 2026**, so 2023 and 2026 are partial periods.

The Russia–Ukraine event data used in the analysis covers **March 2014 through December 2025**, making 2014 a partial year.

### Dataset updates

Source datasets may be updated after the analysis is performed. Re-running the pipeline with newer source files can therefore produce different results.

### No political interpretation

The project is designed to describe the data rather than make political judgments about the conflicts, actors, causes, or responsibility.

---

## 10. Tools & Technologies

### Data Analysis

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn

### Business Intelligence & Visualization

- Tableau Public
- Power BI

### Web Development

- Next.js
- React
- Tailwind CSS
- Lucide Icons

### Deployment

- Vercel

### Development Workflow

- Git
- GitHub

---

## 11. Project Structure

```text
global-war-casualties/
│
├── data/
│   ├── raw/
│   ├── processed/
│   └── bi_ready/
│
├── outputs/
│
├── scripts/
│   ├── 02_data_cleaning.py
│   ├── 03_create_master_and_eda.py
│   ├── 04_improved_charts.py
│   ├── 05_kpis_and_summary.py
│   ├── 06_prepare_for_bi.py
│   └── 07_exact_stats.py
│
├── app/
│   ├── analysis/
│   ├── findings/
│   ├── methodology/
│   ├── israel-palestine/
│   ├── russia-ukraine/
│   └── parallel/
│
└── README.md
```

---

## 12. Dashboard & Website

The project includes an interactive portfolio website built with Next.js.

The website provides dedicated sections for:

- Overall project analysis
- Israel–Palestine analysis
- Russia–Ukraine analysis
- Key findings
- Methodology
- Comparative analysis

Interactive charts and dashboards are used to make the processed datasets easier to explore.

---

## 13. Reproducibility

The analysis is structured around a sequence of Python scripts so that data preparation and analytical outputs can be reproduced from the source datasets.

The main workflow is:

```text
02_data_cleaning.py
        ↓
03_create_master_and_eda.py
        ↓
04_improved_charts.py
        ↓
05_kpis_and_summary.py
        ↓
06_prepare_for_bi.py
        ↓
07_exact_stats.py
```

The final statistics script is used to validate the key project metrics before they are incorporated into the website and project documentation.

---

## 14. Conclusion

This project demonstrates an end-to-end data analytics workflow using real-world conflict datasets.

It combines:

- messy public data,
- data cleaning,
- transformation,
- exploratory analysis,
- statistical summaries,
- visualization,
- BI preparation,
- reproducible Python workflows, and
- analytical communication.

The primary goal is not to produce a single headline number, but to demonstrate how complex datasets can be transformed into structured, transparent, and reproducible analytical outputs while clearly documenting uncertainty and limitations.
