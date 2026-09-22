"use client";

import Link from "next/link";

import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  Code2,
  Database,
  Filter,
  Sparkles,
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
} from "lucide-react";

export default function IsraelPalestineMethodologyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* ========================================================= */}
      {/* Animated Background */}
      {/* ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl animate-pulse" />

        <div
          className="absolute right-[-10rem] top-1/4 h-[32rem] w-[32rem] rounded-full bg-indigo-300/20 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        <div
          className="absolute bottom-[-12rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-purple-300/15 blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />

        <div
          className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-200/10 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ========================================================= */}
      {/* Header */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="pointer-events-none absolute left-0 top-8 h-32 w-32 rounded-full bg-blue-400/10 blur-3xl" />

        <Link
          href="/israel-palestine"
          className="group relative inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-6 transition-all duration-300"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:-translate-x-1 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:shadow-md">
            <ArrowLeft size={16} />
          </span>

          <span className="relative">
            Back to Israel-Palestine
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>

        <div className="relative">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/70 px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-md">
            <Sparkles size={14} className="animate-pulse" />
            Research Methodology
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Israel-Palestine Methodology
            </span>
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            Data sources, preparation steps, analytical methods, and limitations
            used for the Israel-Palestine analysis.
          </p>

          <div className="mt-6 h-1 w-28 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-white/70" />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Data Sources */}
      {/* ========================================================= */}

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="group relative overflow-hidden rounded-2xl border border-blue-200/70 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50">
          <div className="absolute left-0 right-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-300/20 blur-3xl opacity-0 transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

          <div className="relative">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-blue-100 group-hover:shadow-lg group-hover:shadow-blue-100">
              <Database className="text-blue-600" size={20} />
            </div>

            <h2 className="text-xl font-semibold text-slate-900 mb-4 transition-colors duration-300 group-hover:text-blue-700">
              Data Sources
            </h2>

            <div className="space-y-5">
              {/* Gaza Daily Casualties */}
              <div className="group/source relative rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/50">
                <div className="absolute left-0 top-4 h-0 w-1 rounded-full bg-blue-500 transition-all duration-300 group-hover/source:h-[calc(100%-2rem)]" />

                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={15}
                    className="text-blue-500 opacity-70"
                  />

                  <h3 className="font-medium text-slate-800 mb-1">
                    Gaza Daily Casualties
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Daily reported casualty data from Tech for Palestine was used
                  to analyze changes in reported fatalities over time. The
                  dataset covers the period from 2023-10-07 to 2026-09-17.
                </p>
              </div>

              {/* West Bank Daily Casualties */}
              <div className="group/source relative rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/50">
                <div className="absolute left-0 top-4 h-0 w-1 rounded-full bg-indigo-500 transition-all duration-300 group-hover/source:h-[calc(100%-2rem)]" />

                <div className="flex items-center gap-2">
                  <MapPin
                    size={15}
                    className="text-indigo-500 opacity-70"
                  />

                  <h3 className="font-medium text-slate-800 mb-1">
                    West Bank Daily Casualties
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Daily reported casualty data for the West Bank was
                  incorporated to enable regional comparison with Gaza and to
                  examine how reported fatalities varied over time across the
                  two regions.
                </p>
              </div>

              {/* Gaza Individual Demographic Records */}
              <div className="group/source relative rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-purple-100 hover:bg-purple-50/50">
                <div className="absolute left-0 top-4 h-0 w-1 rounded-full bg-purple-500 transition-all duration-300 group-hover/source:h-[calc(100%-2rem)]" />

                <div className="flex items-center gap-2">
                  <Users
                    size={15}
                    className="text-purple-500 opacity-70"
                  />

                  <h3 className="font-medium text-slate-800 mb-1">
                    Gaza Individual Demographic Records
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Individual reported fatality records from Gaza were used for
                  age and sex distribution analysis. The cleaned demographic
                  dataset contains 72,835 records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Data Pipeline */}
      {/* ========================================================= */}

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* ===================================================== */}
          {/* Data Preparation */}
          {/* ===================================================== */}

          <div className="group relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-100/50">
            <div className="absolute left-0 right-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-emerald-100 group-hover:shadow-lg">
                <Filter className="text-emerald-600" size={20} />
              </div>

              <h2 className="text-xl font-semibold text-slate-900 mb-4 transition-colors duration-300 group-hover:text-emerald-700">
                Data Preparation
              </h2>

              <ul className="text-sm text-slate-600 space-y-2.5 leading-relaxed">
                <li className="group/item flex items-start gap-2.5 transition-transform duration-300 hover:translate-x-1">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 transition-all duration-300 group-hover/item:scale-150" />
                  Raw datasets were loaded and inspected.
                </li>

                <li className="group/item flex items-start gap-2.5 transition-transform duration-300 hover:translate-x-1">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 transition-all duration-300 group-hover/item:scale-150" />
                  Dates were standardized for time-series analysis.
                </li>

                <li className="group/item flex items-start gap-2.5 transition-transform duration-300 hover:translate-x-1">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 transition-all duration-300 group-hover/item:scale-150" />
                  Death counts were converted to numeric values.
                </li>

                <li className="group/item flex items-start gap-2.5 transition-transform duration-300 hover:translate-x-1">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 transition-all duration-300 group-hover/item:scale-150" />
                  Missing values were handled during cleaning.
                </li>

                <li className="group/item flex items-start gap-2.5 transition-transform duration-300 hover:translate-x-1">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 transition-all duration-300 group-hover/item:scale-150" />
                  Gaza and West Bank daily data were cleaned and combined for
                  regional comparison.
                </li>

                <li className="group/item flex items-start gap-2.5 transition-transform duration-300 hover:translate-x-1">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 transition-all duration-300 group-hover/item:scale-150" />
                  Individual demographic records were cleaned for age and sex
                  analysis.
                </li>

                <li className="group/item flex items-start gap-2.5 transition-transform duration-300 hover:translate-x-1">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 transition-all duration-300 group-hover/item:scale-150" />
                  Separate processed datasets were created for reproducible
                  downstream analysis.
                </li>
              </ul>
            </div>
          </div>

          {/* ===================================================== */}
          {/* Derived Fields */}
          {/* ===================================================== */}

          <div className="group relative overflow-hidden rounded-2xl border border-purple-200/70 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-100/50">
            <div className="absolute left-0 right-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-300/20 blur-3xl opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 ring-1 ring-purple-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-purple-100 group-hover:shadow-lg">
                <Code2 className="text-purple-600" size={20} />
              </div>

              <h2 className="text-xl font-semibold text-slate-900 mb-4 transition-colors duration-300 group-hover:text-purple-700">
                Derived Fields
              </h2>

              <ul className="text-sm text-slate-600 space-y-2.5 leading-relaxed">
                <li className="group/item flex items-start gap-2.5 transition-transform duration-300 hover:translate-x-1">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400 transition-all duration-300 group-hover/item:scale-150" />
                  Daily reported death counts
                </li>

                <li className="group/item flex items-start gap-2.5 transition-transform duration-300 hover:translate-x-1">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400 transition-all duration-300 group-hover/item:scale-150" />
                  Geographic labels for Gaza and West Bank
                </li>

                <li className="group/item flex items-start gap-2.5 transition-transform duration-300 hover:translate-x-1">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400 transition-all duration-300 group-hover/item:scale-150" />
                  Age groups for demographic analysis
                </li>

                <li className="group/item flex items-start gap-2.5 transition-transform duration-300 hover:translate-x-1">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400 transition-all duration-300 group-hover/item:scale-150" />
                  Sex categories
                </li>

                <li className="group/item flex items-start gap-2.5 transition-transform duration-300 hover:translate-x-1">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400 transition-all duration-300 group-hover/item:scale-150" />
                  Conflict and location labels
                </li>

                <li className="group/item flex items-start gap-2.5 transition-transform duration-300 hover:translate-x-1">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400 transition-all duration-300 group-hover/item:scale-150" />
                  Combined daily Israel-Palestine totals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Analytical Approach */}
      {/* ========================================================= */}

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="group relative overflow-hidden rounded-2xl border border-red-200/70 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-red-300 hover:shadow-2xl hover:shadow-red-100/40">
          <div className="absolute left-0 right-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-red-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-red-300/15 blur-3xl opacity-0 transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

          <div className="relative">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 ring-1 ring-red-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-red-100 group-hover:shadow-lg">
              <BarChart3 className="text-red-600" size={20} />
            </div>

            <h2 className="text-xl font-semibold text-slate-900 mb-6 transition-colors duration-300 group-hover:text-red-700">
              Analytical Approach
            </h2>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
              {/* Exploratory Data Analysis */}
              <div className="group/analysis rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/50">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-400 transition-all duration-300 group-hover/analysis:scale-150" />

                  <h3 className="font-medium text-slate-800">
                    Exploratory Data Analysis
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Pandas, Matplotlib, and Seaborn were used to inspect
                  distributions, trends, missing values, and relationships
                  within the datasets.
                </p>
              </div>

              {/* Time-Series Analysis */}
              <div className="group/analysis rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/50">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-400 transition-all duration-300 group-hover/analysis:scale-150" />

                  <h3 className="font-medium text-slate-800">
                    Time-Series Analysis
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Daily reported casualty data was analyzed to identify changes,
                  peaks, and temporal patterns in reported fatalities over time.
                  The highest recorded daily value in the dataset was 828 deaths
                  on 2023-11-21.
                </p>
              </div>

              {/* Regional Comparison */}
              <div className="group/analysis rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-red-100 hover:bg-red-50/50">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-400 transition-all duration-300 group-hover/analysis:scale-150" />

                  <h3 className="font-medium text-slate-800">
                    Regional Comparison
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Gaza and West Bank data were compared using reported casualty
                  totals and daily trends. The combined dataset contains 73,134
                  reported deaths, including 72,399 in Gaza and 735 in the West
                  Bank.
                </p>
              </div>

              {/* Demographic Analysis */}
              <div className="group/analysis rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-purple-100 hover:bg-purple-50/50">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400 transition-all duration-300 group-hover/analysis:scale-150" />

                  <h3 className="font-medium text-slate-800">
                    Demographic Analysis
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Individual Gaza records were grouped by age and sex to
                  examine the demographic distribution of reported fatalities.
                  Age groups included 0–12, 13–18, 19–30, 31–45, 46–60, and 60+.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Analytical Pipeline */}
      {/* ========================================================= */}

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="group relative overflow-hidden rounded-2xl border border-indigo-200/70 bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-7 md:p-8 shadow-sm transition-all duration-500 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100/50">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl transition-all duration-700 group-hover:scale-150" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-purple-300/15 blur-3xl transition-all duration-700 group-hover:scale-150" />

          <div className="relative">
            <div className="mb-6">
              <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-600">
                <Sparkles size={13} className="animate-pulse" />
                Reproducible Workflow
              </div>

              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Analytical Pipeline
              </h2>

              <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                The project follows a structured pipeline that moves from raw
                public datasets through cleaning and transformation into
                descriptive analysis and visual outputs.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-3">
              {/* 01 */}
              <div className="group/step relative overflow-hidden bg-white/80 rounded-xl p-4 border border-indigo-100 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-lg">
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-indigo-500 transition-all duration-500 group-hover/step:w-full" />

                <p className="text-xs font-semibold text-indigo-600 mb-1">
                  01
                </p>

                <p className="text-sm font-semibold text-slate-900">
                  Collect
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  Public casualty datasets
                </p>
              </div>

              {/* 02 */}
              <div className="group/step relative overflow-hidden bg-white/80 rounded-xl p-4 border border-indigo-100 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-lg">
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-500 group-hover/step:w-full" />

                <p className="text-xs font-semibold text-indigo-600 mb-1">
                  02
                </p>

                <p className="text-sm font-semibold text-slate-900">
                  Clean
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  Dates, values, missing data
                </p>
              </div>

              {/* 03 */}
              <div className="group/step relative overflow-hidden bg-white/80 rounded-xl p-4 border border-indigo-100 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-purple-300 hover:shadow-lg">
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-purple-500 transition-all duration-500 group-hover/step:w-full" />

                <p className="text-xs font-semibold text-indigo-600 mb-1">
                  03
                </p>

                <p className="text-sm font-semibold text-slate-900">
                  Transform
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  Derived analytical fields
                </p>
              </div>

              {/* 04 */}
              <div className="group/step relative overflow-hidden bg-white/80 rounded-xl p-4 border border-indigo-100 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-lg">
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover/step:w-full" />

                <p className="text-xs font-semibold text-indigo-600 mb-1">
                  04
                </p>

                <p className="text-sm font-semibold text-slate-900">
                  Analyze
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  Trends and distributions
                </p>
              </div>

              {/* 05 */}
              <div className="group/step relative overflow-hidden bg-white/80 rounded-xl p-4 border border-indigo-100 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-lg">
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-500 transition-all duration-500 group-hover/step:w-full" />

                <p className="text-xs font-semibold text-indigo-600 mb-1">
                  05
                </p>

                <p className="text-sm font-semibold text-slate-900">
                  Visualize
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  Charts and Tableau
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Tools */}
      {/* ========================================================= */}

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="group relative overflow-hidden rounded-2xl bg-slate-900 p-8 text-white shadow-2xl shadow-slate-300/30">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-indigo-500/15" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-purple-500/15" />

          <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />

          <div className="relative">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Code2 size={18} />
              </div>

              <h2 className="text-xl font-semibold">
                Tools & Technologies
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Python */}
              <div className="group/tool relative overflow-hidden rounded-xl bg-white/10 p-4 ring-1 ring-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/15 hover:ring-white/15">
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-500 group-hover/tool:w-full" />

                <p className="text-sm font-medium">Python</p>
                <p className="text-xs text-slate-300 mt-1">
                  Data processing
                </p>
              </div>

              {/* Pandas */}
              <div className="group/tool relative overflow-hidden rounded-xl bg-white/10 p-4 ring-1 ring-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/15 hover:ring-white/15">
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-500 group-hover/tool:w-full" />

                <p className="text-sm font-medium">Pandas</p>
                <p className="text-xs text-slate-300 mt-1">
                  Data analysis
                </p>
              </div>

              {/* Matplotlib / Seaborn */}
              <div className="group/tool relative overflow-hidden rounded-xl bg-white/10 p-4 ring-1 ring-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/15 hover:ring-white/15">
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-400 transition-all duration-500 group-hover/tool:w-full" />

                <p className="text-sm font-medium">
                  Matplotlib / Seaborn
                </p>

                <p className="text-xs text-slate-300 mt-1">
                  Visualization
                </p>
              </div>

              {/* Tableau Public */}
              <div className="group/tool relative overflow-hidden rounded-xl bg-white/10 p-4 ring-1 ring-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/15 hover:ring-white/15">
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-400 transition-all duration-500 group-hover/tool:w-full" />

                <p className="text-sm font-medium">
                  Tableau Public
                </p>

                <p className="text-xs text-slate-300 mt-1">
                  Interactive dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Limitations */}
      {/* ========================================================= */}

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 via-orange-400 to-transparent transition-all duration-500 group-hover:w-1.5" />

          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-amber-200/15 blur-3xl opacity-0 transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

          <div className="relative">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-lg ring-1 ring-amber-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                ⚠️
              </div>

              <h2 className="text-xl font-semibold text-slate-900">
                Limitations
              </h2>
            </div>

            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p className="rounded-lg border border-transparent p-3 transition-all duration-300 hover:border-slate-100 hover:bg-slate-50">
                Casualty figures are based on publicly available reported data
                and may be incomplete or revised by the original sources.
              </p>

              <p className="rounded-lg border border-transparent p-3 transition-all duration-300 hover:border-slate-100 hover:bg-slate-50">
                The Israel-Palestine daily data used in this project covers
                2023-10-07 to 2026-09-17. The first and final years represent
                partial coverage periods and should not be interpreted as
                complete calendar years.
              </p>

              <p className="rounded-lg border border-transparent p-3 transition-all duration-300 hover:border-slate-100 hover:bg-slate-50">
                Different datasets may use different reporting methodologies,
                definitions, coverage, and update schedules. Results should
                therefore be interpreted within the scope of the underlying
                datasets.
              </p>

              <p className="rounded-lg border border-transparent p-3 transition-all duration-300 hover:border-slate-100 hover:bg-slate-50">
                Demographic analysis is based on 72,835 individual Gaza
                records. Age and sex information may not be available or
                complete for every reported fatality, so demographic
                percentages describe the available records rather than
                automatically representing every reported death.
              </p>

              <p className="rounded-lg border border-transparent p-3 transition-all duration-300 hover:border-slate-100 hover:bg-slate-50">
                The reported casualty totals are descriptive measures from the
                datasets used in this project. They should not be treated as an
                independently verified estimate of total fatalities.
              </p>

              <p className="rounded-lg border border-transparent p-3 transition-all duration-300 hover:border-slate-100 hover:bg-slate-50">
                This project focuses on data patterns, trends, and descriptive
                analysis rather than political interpretation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}