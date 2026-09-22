"use client";

import Link from "next/link";
import Image from "next/image";

import {
  ArrowLeft,
  TrendingUp,
  Users,
  BarChart3,
  ExternalLink,
  Sparkles,
  Activity,
  Database,
  Layers3,
  Map,
} from "lucide-react";

export default function IsraelPalestineAnalysisPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* ========================================================= */}
      {/* Ambient Background */}
      {/* ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-400/10 blur-3xl animate-pulse" />

        <div className="absolute -right-40 top-[650px] h-[550px] w-[550px] rounded-full bg-red-400/10 blur-3xl animate-pulse [animation-delay:2s]" />

        <div className="absolute left-[35%] top-[1500px] h-[500px] w-[500px] rounded-full bg-indigo-400/10 blur-3xl animate-pulse [animation-delay:4s]" />

        <div className="absolute right-[20%] top-[3000px] h-[450px] w-[450px] rounded-full bg-blue-400/10 blur-3xl animate-pulse [animation-delay:6s]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* ========================================================= */}
      {/* Header */}
      {/* ========================================================= */}

      <section className="relative mx-auto max-w-6xl px-6 pb-10 pt-16">
        <Link
          href="/israel-palestine"
          className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 px-4 py-2 text-sm text-slate-500 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-purple-200 hover:bg-white hover:text-slate-900 hover:shadow-lg"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Israel-Palestine
        </Link>

        <div className="mt-9 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10">
            <Sparkles size={14} className="animate-pulse" />
            Israel-Palestine Analysis
          </div>

          <h1 className="text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl md:text-6xl">
            Israel-Palestine{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Data Analysis
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Analysis of reported casualty trends, geographic differences, and
            demographic patterns using Gaza and West Bank casualty data.
          </p>

          {/* Header chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="group relative overflow-hidden rounded-full border border-red-200/70 bg-gradient-to-r from-red-50 via-white to-rose-50 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:border-red-300 hover:shadow-lg hover:shadow-red-500/15">
              <div className="pointer-events-none absolute -left-8 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-red-400/20 blur-xl transition-all duration-500 group-hover:scale-[2.5]" />

              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-rose-500 text-white shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <TrendingUp size={14} />
                </span>

                <span className="transition-colors duration-300 group-hover:text-red-700">
                  Time Series
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-red-400 transition-all duration-300 group-hover:scale-150" />
              </span>
            </div>

            <div className="group relative overflow-hidden rounded-full border border-blue-200/70 bg-gradient-to-r from-blue-50 via-white to-indigo-50 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/15">
              <div className="pointer-events-none absolute -left-8 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-blue-400/20 blur-xl transition-all duration-500 group-hover:scale-[2.5]" />

              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Users size={14} />
                </span>

                <span className="transition-colors duration-300 group-hover:text-blue-700">
                  Demographics
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 transition-all duration-300 group-hover:scale-150" />
              </span>
            </div>

            <div className="group relative overflow-hidden rounded-full border border-emerald-200/70 bg-gradient-to-r from-emerald-50 via-white to-teal-50 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/15">
              <div className="pointer-events-none absolute -left-8 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-xl transition-all duration-500 group-hover:scale-[2.5]" />

              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <BarChart3 size={14} />
                </span>

                <span className="transition-colors duration-300 group-hover:text-emerald-700">
                  Comparative Analysis
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 transition-all duration-300 group-hover:scale-150" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Analysis Overview */}
      {/* ========================================================= */}

      <section className="relative mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Time Series */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl hover:shadow-red-500/10">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-red-500/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-rose-400 to-orange-400 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-rose-100 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-red-500/20">
                  <TrendingUp className="text-red-600" size={20} />
                </div>

                <span className="rounded-full bg-red-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-red-500">
                  Trends
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                Time Series Trends
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Daily reported casualty data was analyzed to examine changes over
                time and identify periods of higher reported fatalities.
              </p>

              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  Gaza daily reported deaths over time
                </li>
                <li className="flex items-center gap-2 transition-transform duration-300 delay-75 group-hover:translate-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  Gaza vs West Bank comparison
                </li>
                <li className="flex items-center gap-2 transition-transform duration-300 delay-100 group-hover:translate-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  Temporal patterns in reported fatalities
                </li>
              </ul>
            </div>
          </div>

          {/* Demographics */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-blue-500/20">
                  <Users className="text-blue-600" size={20} />
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-500">
                  Demographics
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                Demographic Analysis
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Individual-level Gaza records were examined to understand the
                reported age and sex distribution of fatalities.
              </p>

              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Age distribution of reported fatalities
                </li>
                <li className="flex items-center gap-2 transition-transform duration-300 delay-75 group-hover:translate-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Sex distribution of reported fatalities
                </li>
                <li className="flex items-center gap-2 transition-transform duration-300 delay-100 group-hover:translate-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Age group by sex
                </li>
              </ul>
            </div>
          </div>

          {/* Comparative Analysis */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/10">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-100 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <BarChart3 className="text-emerald-600" size={20} />
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-600">
                  Comparison
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                Comparative Analysis
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Reported casualty totals were examined across Gaza and the West
                Bank to identify differences in the distribution of fatalities.
              </p>

              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Total reported deaths by region
                </li>
                <li className="flex items-center gap-2 transition-transform duration-300 delay-75 group-hover:translate-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Gaza and West Bank trends
                </li>
                <li className="flex items-center gap-2 transition-transform duration-300 delay-100 group-hover:translate-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Regional casualty concentration
                </li>
              </ul>
            </div>
          </div>

          {/* Data Scope */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-500 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-violet-100 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <Users className="text-purple-600" size={20} />
                </div>

                <span className="rounded-full bg-purple-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-purple-600">
                  Data Scope
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                Data Scope
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                The analysis combines daily casualty reporting with
                individual-level demographic records to support both aggregate and
                demographic analysis.
              </p>

              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  Gaza daily casualty records
                </li>
                <li className="flex items-center gap-2 transition-transform duration-300 delay-75 group-hover:translate-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  West Bank daily casualty records
                </li>
                <li className="flex items-center gap-2 transition-transform duration-300 delay-100 group-hover:translate-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  Gaza individual demographic records
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Analysis Outputs */}
      {/* ========================================================= */}

      <section className="relative mx-auto max-w-6xl px-6 pb-12">
        <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-lg backdrop-blur-xl transition-all duration-500 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 md:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

          <div className="pointer-events-none absolute left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />

          <div className="relative">
            <div className="mb-6 flex items-end justify-between gap-6">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-indigo-600">
                  <Layers3 size={13} />
                  Analysis Outputs
                </div>

                <h2 className="text-2xl font-black tracking-tight text-slate-900">
                  From Raw Records to{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Analytical Views
                  </span>
                </h2>
              </div>

              <p className="hidden max-w-sm text-right text-sm text-slate-500 md:block">
                The analysis combines aggregate time-series data with
                individual-level demographic records.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="group/card relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg">
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-purple-400/10 blur-2xl transition-transform duration-500 group-hover/card:scale-150" />

                <div className="relative">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-purple-500">
                    01 · Aggregate
                  </p>

                  <h3 className="mb-2 font-bold text-slate-900">
                    Daily Reporting
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    Daily Gaza and West Bank records are used to examine reported
                    fatalities over time and compare geographic reporting patterns.
                  </p>
                </div>
              </div>

              <div className="group/card relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-400/10 blur-2xl transition-transform duration-500 group-hover/card:scale-150" />

                <div className="relative">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-blue-500">
                    02 · Demographic
                  </p>

                  <h3 className="mb-2 font-bold text-slate-900">
                    Individual Records
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    Individual Gaza records are grouped by age and sex to examine
                    the demographic composition of reported fatalities.
                  </p>
                </div>
              </div>

              <div className="group/card relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl transition-transform duration-500 group-hover/card:scale-150" />

                <div className="relative">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-500">
                    03 · Visualization
                  </p>

                  <h3 className="mb-2 font-bold text-slate-900">
                    Interactive & Static
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    Power BI, Tableau, and Python-generated visualizations present
                    the resulting trends, comparisons, and demographic
                    distributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Interactive Power BI Dashboard */}
      {/* IMPORTANT: dashboard dimensions and iframe positioning preserved */}
      {/* ========================================================= */}

      <section className="relative mx-auto max-w-[1200px] px-6 pb-16">
        <div className="mb-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-indigo-600">
                <Activity size={13} />
                Interactive BI
              </div>

              <h2 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
                Interactive{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Power BI Dashboard
                </span>
              </h2>
            </div>

            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiNWEyMDcyYTYtZGQzYy00MzVmLTliOGMtYzhlM2VmMzEyNWYxIiwidCI6IjM0YmQ4YmVkLTJhYzEtNDFhZS05ZjA4LTRlMGEzZjExNzA2YyJ9"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:shadow-lg"
            >
              Open in Power BI
              <ExternalLink
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Outer visual shell — does NOT alter dashboard dimensions */}
          <div className="group relative rounded-[28px] border border-indigo-100/80 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 p-2 shadow-xl shadow-indigo-500/5 transition-all duration-500 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent" />

            <div className="pointer-events-none absolute -left-16 top-1/3 h-32 w-32 rounded-full bg-indigo-400/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ height: "960px" }}
            >
              <iframe
                title="Global_War_Casualties"
                src="https://app.powerbi.com/view?r=eyJrIjoiNWEyMDcyYTYtZGQzYy00MzVmLTliOGMtYzhlM2VmMzEyNWYxIiwidCI6IjM0YmQ4YmVkLTJhYzEtNDFhZS05ZjA4LTRlMGEzZjExNzA2YyJ9&pageName=22a0a6ba130ee39d137e"
                style={{
                  border: "none",
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "166.67%",
                  height: "1600px",
                  transform: "scale(0.60)",
                  transformOrigin: "top left",
                }}
                allowFullScreen
              />
            </div>
          </div>

          <p className="mt-3 text-center text-sm text-slate-500">
            Interactive Power BI report containing Israel–Palestine and
            Russia–Ukraine analysis. Use the report tabs to explore both pages.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Interactive Tableau Dashboard */}
      {/* IMPORTANT: dashboard dimensions preserved */}
      {/* ========================================================= */}

      <section className="relative mx-auto max-w-[1200px] px-6 pb-16">
        <div className="mb-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-purple-600">
                <Activity size={13} />
                Interactive Visualization
              </div>

              <h2 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
                Interactive{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Tableau Dashboard
                </span>
              </h2>
            </div>

            <a
              href="https://public.tableau.com/views/GlobalWarCasualties-IsraelPalestineAnalysis/CasualtiesDashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:shadow-lg"
            >
              Open in Tableau
              <ExternalLink
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Outer visual shell — does NOT alter dashboard dimensions */}
          <div className="group relative rounded-[28px] border border-purple-100/80 bg-gradient-to-br from-white via-purple-50/20 to-indigo-50/30 p-2 shadow-xl shadow-purple-500/5 transition-all duration-500 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent" />

            <div className="pointer-events-none absolute -right-16 top-1/3 h-32 w-32 rounded-full bg-purple-400/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ height: "827px" }}
            >
              <iframe
                title="Global War Casualties – Israel-Palestine Tableau Dashboard"
                src="https://public.tableau.com/views/GlobalWarCasualties-IsraelPalestineAnalysis/CasualtiesDashboard?:showVizHome=no"
                style={{
                  border: "none",
                  display: "block",
                  width: "100%",
                  height: "827px",
                }}
                allowFullScreen
              />
            </div>
          </div>

          <p className="mt-3 text-center text-sm text-slate-500">
            Interactive Tableau dashboard presenting Israel–Palestine casualty
            trends and analytical views.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Supporting Visualizations */}
      {/* ========================================================= */}

      <section className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 shadow-sm backdrop-blur-md">
            <Database size={13} />
            Supporting Evidence
          </div>

          <h2 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
            Supporting{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Visualizations
            </span>
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
            Static charts provide focused views of the underlying analysis and
            complement the interactive Power BI dashboard above.
          </p>
        </div>

        <div className="space-y-10">
          {/* Time Series */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-200 to-transparent" />

              <div className="flex items-center gap-2 rounded-full border border-red-100 bg-red-50/70 px-4 py-2 text-sm font-bold text-red-600 shadow-sm">
                <TrendingUp size={15} />
                Time Series Trends
              </div>

              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-200 to-transparent" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ChartCard
                title="Gaza – Daily Reported Deaths"
                src="/charts/01_gaza_daily_deaths.png"
              />

              <ChartCard
                title="Gaza vs West Bank Comparison"
                src="/charts/05_gaza_vs_westbank.png"
              />
            </div>
          </div>

          {/* Demographic Analysis */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

              <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-sm font-bold text-blue-600 shadow-sm">
                <Users size={15} />
                Demographic Analysis
              </div>

              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ChartCard
                title="Age Distribution of Fatalities"
                src="/charts/02_gaza_age_distribution.png"
              />

              <ChartCard
                title="Sex Distribution of Fatalities"
                src="/charts/03_gaza_sex_distribution.png"
              />

              <ChartCard
                title="Age Group by Sex"
                src="/charts/06_age_by_sex.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================= */
/* Chart Card */
/* ============================================================= */

function ChartCard({ title, src }: { title: string; src: string }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10">
      {/* Animated top gradient */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-indigo-400/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

      {/* Chart header */}
      <div className="relative flex items-center justify-between border-b border-slate-100 bg-white/80 px-5 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-indigo-100 text-purple-600 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <BarChart3 size={16} />
          </div>

          <h4 className="text-sm font-bold text-slate-800">{title}</h4>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.55)]" />
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
            Analysis
          </span>
        </div>
      </div>

      {/* Chart image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 p-4">
        {/* Inner decorative glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/5 blur-3xl transition-all duration-700 group-hover:scale-150" />

        <div className="relative z-10 overflow-hidden rounded-xl border border-white/80 bg-white shadow-sm">
          <Image
            src={src}
            alt={title}
            width={700}
            height={400}
            className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </div>
      </div>

      {/* Bottom hover accent */}
      <div className="h-0.5 w-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 transition-all duration-700 group-hover:w-full" />
    </div>
  );
}