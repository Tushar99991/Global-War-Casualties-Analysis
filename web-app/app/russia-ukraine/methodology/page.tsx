"use client";

import Link from "next/link";

import {
  ArrowLeft,
  Database,
  Workflow,
  BarChart3,
  Wrench,
  Sparkles,
  CalendarDays,
  Map,
  LineChart,
  ShieldCheck,
  Layers3,
  Code2,
  FileText,
  Globe,
} from "lucide-react";

export default function RussiaUkraineMethodologyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* ========================================================= */}
      {/* AMBIENT BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-48 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue-400/10 blur-3xl animate-pulse" />

        <div
          className="absolute -right-48 top-[18%] h-[36rem] w-[36rem] rounded-full bg-purple-400/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        <div
          className="absolute -left-32 bottom-[20%] h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-12">
        <Link
          href="/russia-ukraine"
          className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 mb-7 transition-all duration-300"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white/75 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:-translate-x-1 group-hover:border-purple-200 group-hover:bg-purple-50">
            <ArrowLeft size={16} aria-hidden="true" />
          </span>

          <span>Back to Russia–Ukraine</span>
        </Link>

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-white/75 px-4 py-2 text-sm font-medium text-purple-700 shadow-sm backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-600" />
            </span>

            Russia–Ukraine Methodology

            <Sparkles
              size={14}
              className="text-purple-500"
              aria-hidden="true"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-5">
            <span className="bg-gradient-to-r from-slate-900 via-purple-800 to-indigo-700 bg-clip-text text-transparent">
              Methodology
            </span>
          </h1>

          <div className="mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Data sources, preparation steps, analytical methods, and limitations
            used for the Russia–Ukraine conflict analysis.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* DATA SOURCES */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 pb-8">
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 p-8 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70" />

          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

          <div className="relative">
            <div className="flex items-center gap-4 mb-7">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Database
                  className="text-blue-600"
                  size={21}
                  aria-hidden="true"
                />

                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-white" />
              </div>

              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.15em]">
                  01
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Data Sources
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              <div className="group/source rounded-2xl border border-slate-100 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-blue-50/50 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm transition-transform duration-300 group-hover/source:scale-110">
                    <Database
                      size={16}
                      className="text-blue-600"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      UCDP Georeferenced Event Dataset
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      The primary dataset for this analysis is the UCDP
                      Georeferenced Event Dataset. Event-level records were used
                      to analyze reported battle-related fatalities, civilian
                      deaths, event frequency, dates, and geographic information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group/source rounded-2xl border border-slate-100 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:bg-indigo-50/50 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm transition-transform duration-300 group-hover/source:scale-110">
                    <Globe
                      className="text-indigo-600"
                      size={16}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Our World in Data – War & Peace
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Our World in Data conflict resources are also included in
                      the broader project data workflow. The Russia–Ukraine
                      findings presented on this page are based primarily on the
                      filtered UCDP event data used in the project pipeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* DATA PIPELINE */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 pb-8">
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 p-8 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-70" />

          <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/20" />

          <div className="relative">
            <div className="flex items-center gap-4 mb-7">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Workflow
                  className="text-emerald-600"
                  size={21}
                  aria-hidden="true"
                />

                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-white" />
              </div>

              <div>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.15em]">
                  02
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Data Preparation
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Conflict Filtering */}
              <div className="group/card rounded-2xl border border-slate-200/70 bg-slate-50/70 p-6 transition-all duration-400 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-500/10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600 transition-transform duration-300 group-hover/card:scale-110">
                    01
                  </span>

                  <h3 className="font-semibold text-slate-900">
                    Conflict Filtering
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  The UCDP dataset was filtered using the conflict name{" "}
                  <strong>&quot;Russia - Ukraine&quot;</strong> to isolate the
                  target conflict. This produced{" "}
                  <strong>37,892 event records</strong> for the Russia–Ukraine
                  analysis.
                </p>
              </div>

              {/* Date Standardization */}
              <div className="group/card rounded-2xl border border-slate-200/70 bg-slate-50/70 p-6 transition-all duration-400 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-xs font-bold text-emerald-600 transition-transform duration-300 group-hover/card:scale-110">
                    02
                  </span>

                  <h3 className="font-semibold text-slate-900">
                    Date Standardization
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Event dates were standardized to support consistent
                  time-series analysis. The resulting monthly dataset contains{" "}
                  <strong>50 monthly records</strong> covering{" "}
                  <strong>March 2014 through December 2025</strong>.
                </p>
              </div>

              {/* Fatality Variables */}
              <div className="group/card rounded-2xl border border-slate-200/70 bg-slate-50/70 p-6 transition-all duration-400 hover:-translate-y-1 hover:border-purple-200 hover:bg-white hover:shadow-lg hover:shadow-purple-500/10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-xs font-bold text-purple-600 transition-transform duration-300 group-hover/card:scale-110">
                    03
                  </span>

                  <h3 className="font-semibold text-slate-900">
                    Fatality Variables
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  The UCDP <strong>best</strong> estimate was used as the
                  primary event-level fatality measure. Civilian deaths were
                  retained separately to support analysis of civilian share
                  within the recorded fatalities.
                </p>
              </div>

              {/* Monthly Aggregation */}
              <div className="group/card rounded-2xl border border-slate-200/70 bg-slate-50/70 p-6 transition-all duration-400 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-xs font-bold text-indigo-600 transition-transform duration-300 group-hover/card:scale-110">
                    04
                  </span>

                  <h3 className="font-semibold text-slate-900">
                    Monthly Aggregation
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Event-level records were aggregated by year and month. Monthly
                  summaries contain event counts, total reported deaths, and
                  reported civilian deaths for time-series analysis. The
                  resulting dataset contains{" "}
                  <strong>372,593 reported battle-related deaths</strong>.
                </p>
              </div>
            </div>

            {/* Pipeline Output */}
            <div className="relative mt-6 overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6 shadow-sm">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-indigo-500/10 blur-2xl" />

              <div className="relative flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-indigo-100 shadow-sm">
                  <Layers3
                    size={18}
                    className="text-indigo-600"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.15em] mb-2">
                    Pipeline Output
                  </p>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    <strong>37,892 event records</strong> were filtered from the
                    source dataset and transformed into a{" "}
                    <strong>50-month analytical series</strong>. The processed
                    records contain{" "}
                    <strong>372,593 reported battle-related deaths</strong> and{" "}
                    <strong>25,985 recorded civilian deaths</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ANALYTICAL APPROACH */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 pb-8">
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 p-8 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70" />

          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

          <div className="relative">
            <div className="flex items-center gap-4 mb-7">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-fuchsia-50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <BarChart3
                  className="text-purple-600"
                  size={21}
                  aria-hidden="true"
                />

                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-purple-500 ring-4 ring-white" />
              </div>

              <div>
                <p className="text-xs font-bold text-purple-600 uppercase tracking-[0.15em]">
                  03
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Analytical Approach
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              {/* Exploratory Data Analysis */}
              <div className="group/analysis rounded-2xl border border-transparent p-5 transition-all duration-300 hover:border-purple-100 hover:bg-purple-50/50">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-50 border border-purple-100 transition-all duration-300 group-hover/analysis:scale-110 group-hover/analysis:rotate-3">
                    <LineChart
                      size={16}
                      className="text-purple-600"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Exploratory Data Analysis
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Pandas, Matplotlib, and Seaborn were used to inspect the
                      processed data, validate the cleaned datasets, and
                      identify relevant temporal and geographic patterns.
                    </p>
                  </div>
                </div>
              </div>

              {/* Monthly Time-Series Analysis */}
              <div className="group/analysis rounded-2xl border border-transparent p-5 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/50">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 border border-blue-100 transition-all duration-300 group-hover/analysis:scale-110 group-hover/analysis:-rotate-3">
                    <CalendarDays
                      size={16}
                      className="text-blue-600"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Monthly Time-Series Analysis
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Monthly reported battle-related fatalities were analyzed
                      to identify higher and lower reported-fatality periods.
                      The analysis also calculates month-to-month changes and
                      deaths per recorded event.
                    </p>
                  </div>
                </div>
              </div>

              {/* Annual Analysis */}
              <div className="group/analysis rounded-2xl border border-transparent p-5 transition-all duration-300 hover:border-emerald-100 hover:bg-emerald-50/50">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-100 transition-all duration-300 group-hover/analysis:scale-110 group-hover/analysis:rotate-3">
                    <BarChart3
                      size={16}
                      className="text-emerald-600"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Annual Analysis
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Monthly records were further grouped by calendar year to
                      compare annual deaths, event counts, civilian deaths,
                      civilian share, and deaths per recorded event. Partial
                      years are explicitly identified before making annual
                      comparisons.
                    </p>
                  </div>
                </div>
              </div>

              {/* Geographic Analysis */}
              <div className="group/analysis rounded-2xl border border-transparent p-5 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/50">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 border border-indigo-100 transition-all duration-300 group-hover/analysis:scale-110 group-hover/analysis:-rotate-3">
                    <Map
                      size={16}
                      className="text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Geographic Analysis
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Event location information was retained from the original
                      event-level dataset, allowing geographic distribution to
                      be examined alongside the temporal analysis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visualization */}
              <div className="group/analysis rounded-2xl border border-transparent p-5 transition-all duration-300 hover:border-orange-100 hover:bg-orange-50/50">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 border border-orange-100 transition-all duration-300 group-hover/analysis:scale-110 group-hover/analysis:rotate-3">
                    <BarChart3
                      size={16}
                      className="text-orange-600"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Visualization
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Static visualizations and an interactive Tableau Public
                      dashboard were created to communicate monthly, annual,
                      and geographic patterns from the processed data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TOOLS & TECHNOLOGIES */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 pb-8">
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 p-8 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-70" />

          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl transition-all duration-500 group-hover:bg-amber-500/20" />

          <div className="relative">
            <div className="flex items-center gap-4 mb-7">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Wrench
                  className="text-amber-600"
                  size={21}
                  aria-hidden="true"
                />

                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-amber-500 ring-4 ring-white" />
              </div>

              <div>
                <p className="text-xs font-bold text-amber-600 uppercase tracking-[0.15em]">
                  04
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Tools & Technologies
                </h2>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* Python */}
              <div className="group/tool relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition-all duration-400 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 border border-blue-100">
                  <Code2
                    size={16}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                </div>

                <p className="font-semibold text-slate-900 text-sm">Python</p>
                <p className="text-xs text-slate-500 mt-1">Data processing</p>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-500 group-hover/tool:w-full" />
              </div>

              {/* Pandas */}
              <div className="group/tool relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition-all duration-400 hover:-translate-y-2 hover:border-emerald-200 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/10">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-100">
                  <Database
                    size={16}
                    className="text-emerald-600"
                    aria-hidden="true"
                  />
                </div>

                <p className="font-semibold text-slate-900 text-sm">Pandas</p>
                <p className="text-xs text-slate-500 mt-1">Data analysis</p>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-500 transition-all duration-500 group-hover/tool:w-full" />
              </div>

              {/* Matplotlib / Seaborn */}
              <div className="group/tool relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition-all duration-400 hover:-translate-y-2 hover:border-purple-200 hover:bg-white hover:shadow-xl hover:shadow-purple-500/10">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 border border-purple-100">
                  <BarChart3
                    size={16}
                    className="text-purple-600"
                    aria-hidden="true"
                  />
                </div>

                <p className="font-semibold text-slate-900 text-sm">
                  Matplotlib / Seaborn
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  Visualization
                </p>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-500 transition-all duration-500 group-hover/tool:w-full" />
              </div>

              {/* Tableau Public */}
              <div className="group/tool relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition-all duration-400 hover:-translate-y-2 hover:border-orange-200 hover:bg-white hover:shadow-xl hover:shadow-orange-500/10">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 border border-orange-100">
                  <Layers3
                    size={16}
                    className="text-orange-600"
                    aria-hidden="true"
                  />
                </div>

                <p className="font-semibold text-slate-900 text-sm">
                  Tableau Public
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  Interactive dashboard
                </p>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-500 group-hover/tool:w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* LIMITATIONS */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 pb-20">
        <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-8 md:p-10 text-white shadow-2xl shadow-slate-900/20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl transition-all duration-700 group-hover:bg-indigo-500/25" />

            <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
              }}
            />
          </div>

          <div className="relative">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <ShieldCheck
                  size={18}
                  className="text-indigo-300"
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">
                05 · Limitations
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Interpreting the Results
            </h2>

            <div className="mb-7 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />

            <div className="space-y-3 text-sm text-slate-300 leading-relaxed max-w-4xl">
              <div className="group/note rounded-xl border border-transparent p-4 -ml-4 transition-all duration-300 hover:border-white/10 hover:bg-white/5">
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 transition-transform duration-300 group-hover/note:scale-150" />

                  <p>
                    The analysis covers{" "}
                    <strong>March 2014 through December 2025</strong>. The 2014
                    coverage is partial, beginning in March, so its annual total
                    should not be directly compared with complete calendar years
                    without accounting for the difference in coverage.
                  </p>
                </div>
              </div>

              <div className="group/note rounded-xl border border-transparent p-4 -ml-4 transition-all duration-300 hover:border-white/10 hover:bg-white/5">
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 transition-transform duration-300 group-hover/note:scale-150" />

                  <p>
                    The analysis is based on publicly available conflict-event
                    records and therefore reflects the coverage and definitions
                    of the underlying datasets. The{" "}
                    <strong>37,892</strong> event records represent recorded
                    events in the filtered dataset, not an exhaustive count of
                    every conflict incident.
                  </p>
                </div>
              </div>

              <div className="group/note rounded-xl border border-transparent p-4 -ml-4 transition-all duration-300 hover:border-white/10 hover:bg-white/5">
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 transition-transform duration-300 group-hover/note:scale-150" />

                  <p>
                    Reported casualty figures may be incomplete or revised as
                    source datasets are updated. Differences in reporting,
                    definitions, and dataset methodology can also affect
                    comparisons across time.
                  </p>
                </div>
              </div>

              <div className="group/note rounded-xl border border-transparent p-4 -ml-4 transition-all duration-300 hover:border-white/10 hover:bg-white/5">
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 transition-transform duration-300 group-hover/note:scale-150" />

                  <p>
                    Geographic and temporal patterns should therefore be
                    understood within the scope of the available data rather
                    than as a definitive record of every fatality.
                  </p>
                </div>
              </div>

              <div className="group/note rounded-xl border border-transparent p-4 -ml-4 transition-all duration-300 hover:border-white/10 hover:bg-white/5">
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 transition-transform duration-300 group-hover/note:scale-150" />

                  <p>
                    This project focuses on data processing, analysis, trends,
                    and visualization. It does not make political
                    interpretations or conclusions about the conflict.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom visual accent */}
      <div className="relative flex justify-center pb-12">
        <div className="flex items-center gap-3 text-slate-400">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-300" />
          <FileText size={15} />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-300" />
        </div>
      </div>
    </div>
  );
}