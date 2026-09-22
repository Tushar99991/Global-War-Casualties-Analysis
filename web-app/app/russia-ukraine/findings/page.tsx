"use client";

import Link from "next/link";

import {
  ArrowLeft,
  BarChart3,
  TrendingUp,
  Map,
  Database,
  Sparkles,
  Activity,
  Globe2,
  Layers3,
  CalendarDays,
  Users,
} from "lucide-react";

export default function RussiaUkraineFindingsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* ========================================================= */}
      {/* AMBIENT BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-blue-400/10 blur-3xl animate-pulse" />

        <div
          className="absolute -right-48 top-[20%] h-[34rem] w-[34rem] rounded-full bg-purple-400/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        <div
          className="absolute -left-32 bottom-[15%] h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl animate-pulse"
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
          aria-label="Back to Russia–Ukraine"
          className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 mb-7 transition-all duration-300"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white/75 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:-translate-x-1 group-hover:border-emerald-200 group-hover:bg-emerald-50">
            <ArrowLeft size={16} aria-hidden="true" />
          </span>

          <span>Back to Russia–Ukraine</span>
        </Link>

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/75 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>

            Russia–Ukraine Findings

            <Sparkles
              size={14}
              className="text-emerald-500"
              aria-hidden="true"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-5">
            <span className="bg-gradient-to-r from-slate-900 via-emerald-800 to-indigo-700 bg-clip-text text-transparent">
              Evidence-Based Findings
            </span>
          </h1>

          <div className="mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-indigo-500" />

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Key observations derived from the filtered UCDP event data, monthly
            aggregation, annual analysis, and geographic structure used in this
            project.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* EVIDENCE SUMMARY */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Recorded Events */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-900/10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-slate-400/10 blur-2xl transition-all duration-500 group-hover:bg-slate-400/20" />

            <div className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Database
                  size={18}
                  className="text-slate-600"
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em] mb-3">
                Recorded Events
              </p>

              <p className="text-3xl font-extrabold tracking-tight text-slate-900 transition-transform duration-500 group-hover:translate-x-1">
                37,892
              </p>

              <p className="text-sm text-slate-500 mt-1">
                filtered UCDP events
              </p>
            </div>
          </div>

          {/* Reported Deaths */}
          <div className="group relative overflow-hidden rounded-2xl border border-blue-200/70 bg-white/85 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20" />

            <div className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Activity
                  size={18}
                  className="text-blue-600"
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.15em] mb-3">
                Reported Deaths
              </p>

              <p className="text-3xl font-extrabold tracking-tight text-slate-900 transition-transform duration-500 group-hover:translate-x-1">
                372,593
              </p>

              <p className="text-sm text-slate-500 mt-1">
                battle-related deaths
              </p>
            </div>
          </div>

          {/* Peak Complete Year */}
          <div className="group relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/85 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition-all duration-500 group-hover:bg-emerald-500/20" />

            <div className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <CalendarDays
                  size={18}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.15em] mb-3">
                Peak Complete Year
              </p>

              <p className="text-3xl font-extrabold tracking-tight text-slate-900 transition-transform duration-500 group-hover:translate-x-1">
                2024
              </p>

              <p className="text-sm text-slate-500 mt-1">
                102,120 reported deaths
              </p>
            </div>
          </div>

          {/* Civilian Share */}
          <div className="group relative overflow-hidden rounded-2xl border border-purple-200/70 bg-white/85 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:bg-purple-500/20" />

            <div className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 border border-purple-100 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Users
                  size={18}
                  className="text-purple-600"
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-bold text-purple-600 uppercase tracking-[0.15em] mb-3">
                Civilian Share
              </p>

              <p className="text-3xl font-extrabold tracking-tight text-slate-900 transition-transform duration-500 group-hover:translate-x-1">
                6.97%
              </p>

              <p className="text-sm text-slate-500 mt-1">
                25,985 recorded deaths
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINDINGS */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-end justify-between gap-6 mb-7">
          <div>
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.15em] mb-2">
              Core Observations
            </p>

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
              What the Dataset Shows
            </h2>

            <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          </div>

          <p className="hidden md:block text-sm text-slate-500 max-w-sm text-right leading-relaxed">
            Six observations derived from the project&apos;s event-level,
            monthly, annual, and demographic analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* ===================================================== */}
          {/* FINDING 1 */}
          {/* ===================================================== */}

          <div className="group relative overflow-hidden rounded-2xl border border-blue-200/70 bg-white/85 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-indigo-500 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <TrendingUp
                  className="text-blue-600 transition-transform duration-500 group-hover:scale-110"
                  size={20}
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.15em] mb-2">
                Finding 01
              </p>

              <h2 className="text-lg font-bold text-slate-900 mb-3">
                Reported Fatalities Vary Substantially Across Months
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                The filtered UCDP dataset contains{" "}
                <strong>37,892 recorded events</strong> and{" "}
                <strong>372,593 reported battle-related deaths</strong>. After
                aggregation by month, the data shows substantial variation in
                reported fatalities across the 2014–2025 coverage period rather
                than a uniform level of deaths.
              </p>
            </div>
          </div>

          {/* ===================================================== */}
          {/* FINDING 2 */}
          {/* ===================================================== */}

          <div className="group relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/85 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/10">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 to-teal-500 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/20" />

            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <BarChart3
                  className="text-emerald-600 transition-transform duration-500 group-hover:scale-110"
                  size={20}
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.15em] mb-2">
                Finding 02
              </p>

              <h2 className="text-lg font-bold text-slate-900 mb-3">
                March 2022 Recorded the Highest Monthly Total
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                The highest monthly total in the dataset occurred in{" "}
                <strong>March 2022, with 27,111 reported deaths</strong>.
                Monthly aggregation makes it possible to identify these
                high-volume periods while maintaining a consistent time series
                for comparison.
              </p>
            </div>
          </div>

          {/* ===================================================== */}
          {/* FINDING 3 */}
          {/* ===================================================== */}

          <div className="group relative overflow-hidden rounded-2xl border border-purple-200/70 bg-white/85 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-400 to-fuchsia-500 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-fuchsia-50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <BarChart3
                  className="text-purple-600 transition-transform duration-500 group-hover:scale-110"
                  size={20}
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-bold text-purple-600 uppercase tracking-[0.15em] mb-2">
                Finding 03
              </p>

              <h2 className="text-lg font-bold text-slate-900 mb-3">
                2024 Had the Highest Complete-Year Total
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Among complete calendar years in the dataset,{" "}
                <strong>2024 recorded 102,120 deaths</strong>. This compares
                with 99,473 in 2022, 76,254 in 2023, and 94,741 in 2025. The
                2014 data begins in March and is therefore treated as a partial
                year rather than directly compared with complete years.
              </p>
            </div>
          </div>

          {/* ===================================================== */}
          {/* FINDING 4 */}
          {/* ===================================================== */}

          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-500/10">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-slate-400 to-slate-600 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-slate-500/10 blur-3xl transition-all duration-500 group-hover:bg-slate-500/20" />

            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Database
                  className="text-slate-700 transition-transform duration-500 group-hover:scale-110"
                  size={20}
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.15em] mb-2">
                Finding 04
              </p>

              <h2 className="text-lg font-bold text-slate-900 mb-3">
                Deaths per Recorded Event Vary by Year
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                The dataset records different levels of reported deaths per
                event across years. In 2022, the figure was{" "}
                <strong>13.68 deaths per recorded event</strong>, compared with
                7.06 in 2023, 8.66 in 2024, and 11.81 in 2025. This provides an
                additional measure of the intensity of recorded events beyond
                total deaths alone.
              </p>
            </div>
          </div>

          {/* ===================================================== */}
          {/* FINDING 5 */}
          {/* ===================================================== */}

          <div className="group relative overflow-hidden rounded-2xl border border-orange-200/70 bg-white/85 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-400 to-amber-500 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-orange-500/10 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20" />

            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <BarChart3
                  className="text-orange-600 transition-transform duration-500 group-hover:scale-110"
                  size={20}
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-bold text-orange-600 uppercase tracking-[0.15em] mb-2">
                Finding 05
              </p>

              <h2 className="text-lg font-bold text-slate-900 mb-3">
                Civilian Share Was Highest in 2022
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Civilian deaths account for <strong>25,985 deaths</strong>, or{" "}
                <strong>6.97%</strong> of the total recorded deaths in the
                dataset. The civilian share was <strong>18.26%</strong> in 2022,
                followed by 3.09% in 2023, 2.55% in 2024, and 3.01% in 2025.
                These figures describe the composition of deaths recorded in the
                dataset.
              </p>
            </div>
          </div>

          {/* ===================================================== */}
          {/* FINDING 6 */}
          {/* ===================================================== */}

          <div className="group relative overflow-hidden rounded-2xl border border-indigo-200/70 bg-white/85 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-400 to-blue-500 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/20" />

            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-blue-50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Map
                  className="text-indigo-600 transition-transform duration-500 group-hover:scale-110"
                  size={20}
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.15em] mb-2">
                Finding 06
              </p>

              <h2 className="text-lg font-bold text-slate-900 mb-3">
                Event-Level Records Enable Geographic Analysis
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                The event-level structure preserves geographic fields such as
                administrative areas and coordinates. This allows the project to
                examine where recorded events occurred in addition to analyzing
                changes in reported fatalities over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* EVIDENCE INTERPRETATION */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden border-y border-slate-200/80 bg-white/75 backdrop-blur-xl">
        <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-4xl">
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.15em] mb-3">
              What the Evidence Supports
            </p>

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-5">
              Reading the Results
            </h2>

            <div className="mb-7 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" />

            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <div className="group flex gap-4 rounded-2xl border border-transparent p-5 -ml-5 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/50">
                <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-indigo-500 transition-transform duration-300 group-hover:scale-150" />

                <p>
                  The strongest conclusions supported by this analysis concern{" "}
                  <strong>
                    temporal variation, annual totals, event intensity, and
                    civilian composition
                  </strong>
                  . The dataset shows substantial differences in recorded
                  fatalities across months and years.
                </p>
              </div>

              <div className="group flex gap-4 rounded-2xl border border-transparent p-5 -ml-5 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/50">
                <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-indigo-500 transition-transform duration-300 group-hover:scale-150" />

                <p>
                  The monthly analysis identifies <strong>March 2022</strong> as
                  the highest recorded month, while the annual analysis
                  identifies <strong>2024</strong> as the highest complete
                  calendar year in the available data.
                </p>
              </div>

              <div className="group flex gap-4 rounded-2xl border border-transparent p-5 -ml-5 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/50">
                <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-indigo-500 transition-transform duration-300 group-hover:scale-150" />

                <p>
                  These findings describe the patterns present in the available
                  dataset. They should not be interpreted as a definitive
                  accounting of all fatalities or as an explanation of why
                  particular patterns occurred.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* DASHBOARD CONNECTION */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-md">
            <BarChart3
              size={21}
              className="text-indigo-300"
              aria-hidden="true"
            />
          </div>

          <p className="text-xs font-bold text-indigo-300 uppercase tracking-[0.15em] mb-3">
            Interactive Analysis
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Explore the Evidence Yourself
          </h2>

          <p className="text-slate-400 mb-7 max-w-lg mx-auto leading-relaxed">
            Use the interactive Tableau dashboard to examine monthly reported
            fatalities, yearly patterns, and available geographic views
            directly.
          </p>

          <Link
            href="/russia-ukraine/analysis"
            aria-label="Open Russia–Ukraine interactive analysis"
            className="group inline-flex items-center gap-2 bg-white text-slate-900 px-7 py-3.5 rounded-xl font-semibold shadow-xl shadow-black/20 hover:bg-indigo-50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            Open Analysis

            <BarChart3
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
            />
          </Link>
        </div>
      </section>

      {/* ========================================================= */}
      {/* IMPORTANT NOTE */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-indigo-500/5 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/10" />

          <div className="relative">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />

              <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.15em]">
                Data Context
              </p>
            </div>

            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Globe2
                  size={20}
                  className="text-indigo-600"
                  aria-hidden="true"
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                Important Note
              </h2>
            </div>

            <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />

            <div className="space-y-3 text-sm text-slate-600 leading-relaxed max-w-4xl">
              <div className="group/note rounded-xl border border-transparent p-4 -ml-4 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/40">
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 transition-transform duration-300 group-hover/note:scale-150" />

                  <p>
                    The <strong>37,892</strong> figure refers to filtered UCDP
                    event records used in this project; it is not itself a
                    count of fatalities. The corresponding recorded
                    battle-related death total is <strong>372,593</strong>.
                  </p>
                </div>
              </div>

              <div className="group/note rounded-xl border border-transparent p-4 -ml-4 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/40">
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 transition-transform duration-300 group-hover/note:scale-150" />

                  <p>
                    The Russia-Ukraine dataset covers{" "}
                    <strong>March 2014 through December 2025</strong>. The 2014
                    coverage is partial, so its annual total should not be
                    directly compared with complete calendar years without
                    accounting for the difference in coverage.
                  </p>
                </div>
              </div>

              <div className="group/note rounded-xl border border-transparent p-4 -ml-4 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/40">
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 transition-transform duration-300 group-hover/note:scale-150" />

                  <p>
                    Reported casualty figures may be incomplete or revised as
                    the underlying source datasets are updated. Dataset
                    coverage, definitions, and reporting methodologies can also
                    affect the resulting figures.
                  </p>
                </div>
              </div>

              <div className="group/note rounded-xl border border-transparent p-4 -ml-4 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/40">
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 transition-transform duration-300 group-hover/note:scale-150" />

                  <p>
                    This project focuses on quantitative analysis, trends, and
                    visualization. The findings intentionally avoid political
                    interpretation or causal conclusions that cannot be
                    established from the available data alone.
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
          <Layers3 size={15} />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-300" />
        </div>
      </div>
    </div>
  );
}