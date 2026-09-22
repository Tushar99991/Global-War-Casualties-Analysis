"use client";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CalendarDays,
  Database,
  ExternalLink,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

export default function IsraelPalestineFindingsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* ========================================================= */}
      {/* Animated Background */}
      {/* ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-red-300/20 blur-3xl animate-pulse" />

        <div
          className="absolute right-[-10rem] top-1/4 h-[32rem] w-[32rem] rounded-full bg-indigo-300/20 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        <div
          className="absolute bottom-[-12rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-purple-300/15 blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />

        <div
          className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-200/10 blur-3xl animate-pulse"
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
        {/* Decorative glow */}
        <div className="pointer-events-none absolute left-0 top-8 h-32 w-32 rounded-full bg-red-400/10 blur-3xl" />

        <Link
          href="/israel-palestine"
          className="group relative inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-6 transition-all duration-300"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:-translate-x-1 group-hover:border-red-200 group-hover:bg-red-50 group-hover:shadow-md">
            <ArrowLeft size={16} />
          </span>

          <span className="relative">
            Back to Israel-Palestine
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>

        <div className="relative">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-200/70 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-red-600 shadow-sm backdrop-blur-md">
            <Sparkles size={13} className="animate-pulse" />
            Data-Driven Findings
          </div>

          <h1 className="relative mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            <span className="bg-gradient-to-r from-slate-900 via-red-700 to-indigo-700 bg-clip-text text-transparent">
              Israel-Palestine Key Findings
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Data-driven findings from the analysis of reported casualty patterns
            and demographic records.
          </p>

          <div className="mt-6 h-1 w-24 overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-white/70" />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* KPI Cards */}
      {/* ========================================================= */}

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* KPI 1 */}
          <div className="group relative overflow-hidden bg-white/80 rounded-2xl p-5 border border-slate-200/80 shadow-sm text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60">
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-slate-200/40 blur-2xl transition-all duration-500 group-hover:scale-150" />

            <div className="absolute inset-x-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-slate-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="relative">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-slate-200">
                ☠️
              </div>

              <p className="text-sm text-slate-500 mb-1">
                Total Reported Deaths
              </p>

              <p className="text-2xl font-bold text-slate-900 transition-all duration-300 group-hover:text-slate-700">
                73,134
              </p>

              <p className="text-xs text-slate-400 mt-1">
                Israel-Palestine
              </p>
            </div>
          </div>

          {/* KPI 2 */}
          <div className="group relative overflow-hidden bg-white/80 rounded-2xl p-5 border border-red-200/70 shadow-sm text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-xl hover:shadow-red-100/70">
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-300/20 blur-2xl transition-all duration-500 group-hover:scale-150" />

            <div className="absolute inset-x-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-red-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="relative">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-red-100">
                📍
              </div>

              <p className="text-sm text-slate-500 mb-1">Gaza Share</p>

              <p className="text-2xl font-bold text-red-600 transition-all duration-300 group-hover:text-red-700">
                99.0%
              </p>

              <p className="text-xs text-slate-400 mt-1">
                72,399 deaths
              </p>
            </div>
          </div>

          {/* KPI 3 */}
          <div className="group relative overflow-hidden bg-white/80 rounded-2xl p-5 border border-blue-200/70 shadow-sm text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/70">
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-300/20 blur-2xl transition-all duration-500 group-hover:scale-150" />

            <div className="absolute inset-x-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="relative">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-blue-100">
                👶
              </div>

              <p className="text-sm text-slate-500 mb-1">
                Children (0–18)
              </p>

              <p className="text-2xl font-bold text-slate-900 transition-all duration-300 group-hover:text-blue-700">
                30.5%
              </p>

              <p className="text-xs text-slate-400 mt-1">
                22,213 fatalities
              </p>
            </div>
          </div>

          {/* KPI 4 */}
          <div className="group relative overflow-hidden bg-white/80 rounded-2xl p-5 border border-purple-200/70 shadow-sm text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/70">
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-300/20 blur-2xl transition-all duration-500 group-hover:scale-150" />

            <div className="absolute inset-x-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="relative">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-purple-100">
                👨
              </div>

              <p className="text-sm text-slate-500 mb-1">Male Fatalities</p>

              <p className="text-2xl font-bold text-slate-900 transition-all duration-300 group-hover:text-purple-700">
                70.0%
              </p>

              <p className="text-xs text-slate-400 mt-1">
                Female: 30.0%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Main Findings */}
      {/* ========================================================= */}

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative mb-7">
          <div className="absolute -left-4 top-0 h-20 w-1 rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-[0.15em] mb-2">
            Analytical Findings
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            <span className="bg-gradient-to-r from-slate-900 to-indigo-700 bg-clip-text text-transparent">
              Core Observations
            </span>
          </h2>

          <p className="text-sm text-slate-500 max-w-3xl">
            The following observations summarize the main patterns identified
            from the reported casualty and demographic datasets used in this
            project.
          </p>
        </div>

        <div className="space-y-6">
          {/* ===================================================== */}
          {/* Finding 1 */}
          {/* ===================================================== */}

          <div className="group relative overflow-hidden bg-white/80 rounded-2xl p-7 border border-slate-200/80 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/40">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 via-red-400 to-transparent transition-all duration-500 group-hover:w-1.5" />

            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-red-200/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-2xl ring-1 ring-red-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-red-100">
                🔴
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-red-700">
                  Heavy Concentration of Casualties in Gaza
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Out of the total <strong>73,134</strong> reported deaths in
                  the Israel-Palestine dataset,{" "}
                  <strong>72,399 (99.0%)</strong> occurred in Gaza, while the
                  West Bank accounted for only{" "}
                  <strong>735 (1.0%)</strong> deaths. Daily time-series
                  analysis shows multiple sharp spikes, including a peak of{" "}
                  <strong>828 reported deaths on 2023-11-21</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* Finding 2 */}
          {/* ===================================================== */}

          <div className="group relative overflow-hidden bg-white/80 rounded-2xl p-7 border border-slate-200/80 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent transition-all duration-500 group-hover:w-1.5" />

            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-200/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl ring-1 ring-blue-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-blue-100">
                👶
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-blue-700">
                  Children Represent 30.5% of Fatalities
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Analysis of <strong>72,835</strong> individual records from
                  Gaza shows that <strong>22,213 people (30.5%)</strong> were
                  children aged 0–18. The largest age group was 19–30, with{" "}
                  <strong>19,455 records (26.71%)</strong>, followed by ages
                  31–45 with <strong>17,786 records (24.42%)</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* Finding 3 */}
          {/* ===================================================== */}

          <div className="group relative overflow-hidden bg-white/80 rounded-2xl p-7 border border-slate-200/80 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/40">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 via-fuchsia-400 to-transparent transition-all duration-500 group-hover:w-1.5" />

            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-purple-200/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-2xl ring-1 ring-purple-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-purple-100">
                👨‍🦰👩
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-purple-700">
                  Sex Distribution of Fatalities
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Among the Gaza demographic records,{" "}
                  <strong>69.96%</strong> of fatalities were male and{" "}
                  <strong>30.04%</strong> were female. These figures describe
                  the sex distribution within the available demographic
                  records and should not be interpreted as a complete
                  population-wide estimate.
                </p>
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* Finding 4 */}
          {/* ===================================================== */}

          <div className="group relative overflow-hidden bg-white/80 rounded-2xl p-7 border border-slate-200/80 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/40">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-500 via-teal-400 to-transparent transition-all duration-500 group-hover:w-1.5" />

            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-emerald-200/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-2xl ring-1 ring-emerald-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-emerald-100">
                📈
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-emerald-700">
                  Strong Temporal Patterns
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  The Gaza daily casualty data shows clear time-based
                  variation, including multiple periods with sharp increases
                  in reported deaths. The highest recorded daily value in the
                  dataset was <strong>828 deaths on 2023-11-21</strong>.
                  The Israel-Palestine daily data covers{" "}
                  <strong>2023-10-07 to 2026-09-17</strong>, with the first and
                  final years representing partial coverage periods.
                </p>
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* Finding 5 */}
          {/* ===================================================== */}

          <div className="group relative overflow-hidden bg-white/80 rounded-2xl p-7 border border-slate-200/80 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/40">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-500 via-amber-400 to-transparent transition-all duration-500 group-hover:w-1.5" />

            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-orange-200/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-2xl ring-1 ring-orange-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-orange-100">
                🧩
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-orange-700">
                  Different Casualty Patterns Across Gaza and the West Bank
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  The combined daily data allows reported fatalities in Gaza
                  and the West Bank to be examined separately and over time.
                  The analysis shows a substantially different concentration
                  of reported deaths between the two regions, with Gaza
                  accounting for <strong>72,399 deaths (99.0%)</strong> compared
                  with <strong>735 deaths (1.0%)</strong> in the West Bank.
                </p>
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* Finding 6 */}
          {/* ===================================================== */}

          <div className="group relative overflow-hidden bg-white/80 rounded-2xl p-7 border border-slate-200/80 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/40">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-violet-400 to-transparent transition-all duration-500 group-hover:w-1.5" />

            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-indigo-200/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-2xl ring-1 ring-indigo-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-indigo-100">
                🖥️
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-indigo-700">
                  Interactive Dashboard Available
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  A live Tableau Public dashboard has been created for the
                  Israel-Palestine data, allowing users to explore reported
                  casualty trends, filter by location, and examine demographic
                  records interactively.
                </p>

                <Link
                  href="/israel-palestine/analysis"
                  className="group/link inline-flex items-center gap-2 mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 transition-all duration-300"
                >
                  Explore the analysis
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Dataset Context */}
        {/* ========================================================= */}

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {/* Coverage */}
          <div className="group relative overflow-hidden bg-white/70 rounded-xl border border-slate-200/80 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-indigo-200/20 blur-2xl transition-transform duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <CalendarDays size={17} />
              </div>

              <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.12em] mb-2">
                Coverage
              </p>

              <p className="text-sm font-semibold text-slate-900">
                2023-10-07 → 2026-09-17
              </p>

              <p className="text-xs text-slate-500 mt-1">
                First and final years are partial coverage periods.
              </p>
            </div>
          </div>

          {/* Demographic Records */}
          <div className="group relative overflow-hidden bg-white/70 rounded-xl border border-slate-200/80 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-blue-200/20 blur-2xl transition-transform duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Users size={17} />
              </div>

              <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.12em] mb-2">
                Demographic Records
              </p>

              <p className="text-sm font-semibold text-slate-900">
                72,835 Gaza records
              </p>

              <p className="text-xs text-slate-500 mt-1">
                Used for age and sex distribution analysis.
              </p>
            </div>
          </div>

          {/* Analytical Focus */}
          <div className="group relative overflow-hidden bg-white/70 rounded-xl border border-slate-200/80 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-purple-200/20 blur-2xl transition-transform duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <BarChart3 size={17} />
              </div>

              <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.12em] mb-2">
                Analytical Focus
              </p>

              <p className="text-sm font-semibold text-slate-900">
                Trends · Geography · Demographics
              </p>

              <p className="text-xs text-slate-500 mt-1">
                Focused on reported data patterns.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Important Note */}
        {/* ========================================================= */}

        <div className="group relative mt-10 overflow-hidden bg-slate-900 rounded-2xl p-8 text-white shadow-2xl shadow-slate-300/30">
          {/* Animated glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-red-500/15" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-indigo-500/15" />

          {/* Top animated line */}
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-70" />

          <div className="relative">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white/15">
                ⚠️
              </div>

              <h3 className="text-lg font-semibold">
                Important Note
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              All figures are based on publicly available datasets used in this
              project, including Tech for Palestine and other cited sources.
              Numbers may be incomplete or revised later by the original
              sources. The Israel-Palestine data covers{" "}
              <strong className="text-white">2023-10-07 to 2026-09-17</strong>,
              and the first and final years are partial coverage periods. This
              project focuses strictly on data patterns and does not include
              political interpretation.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
              <Database size={13} />
              Public dataset analysis
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}