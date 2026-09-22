"use client";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  FileText,
  BookOpen,
  Database,
  TrendingUp,
  Users,
  Sparkles,
  MapPin,
  CalendarDays,
  Activity,
  Layers3,
} from "lucide-react";

export default function RussiaUkrainePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* ========================================================= */}
      {/* Animated Background */}
      {/* ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-blue-400/15 blur-3xl animate-pulse" />

        <div
          className="absolute right-[-12rem] top-[12%] h-[36rem] w-[36rem] rounded-full bg-purple-400/15 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        <div
          className="absolute bottom-[-15rem] left-[25%] h-[34rem] w-[34rem] rounded-full bg-indigo-400/10 blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />

        <div
          className="absolute left-[45%] top-[38%] h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl animate-pulse"
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

      <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="pointer-events-none absolute left-[-5rem] top-10 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />

        <Link
          href="/"
          aria-label="Back to Home"
          className="group relative inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-7 transition-all duration-300"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:-translate-x-1 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:shadow-md">
            <ArrowLeft size={16} aria-hidden="true" />
          </span>

          <span className="relative">
            Back to Home
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>

        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md">
            <Sparkles size={14} className="animate-pulse" />
            Russia–Ukraine Analysis
          </div>

          <h1 className="mb-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            <span className="bg-gradient-to-r from-slate-900 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              Russia–Ukraine Conflict
            </span>
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            Data-driven analysis of reported battle-related fatalities,
            temporal patterns, geographic distribution, and casualty trends
            across the Russia–Ukraine conflict.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <div className="h-1 w-24 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
              <div className="h-full w-1/2 animate-pulse rounded-full bg-white/70" />
            </div>

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Data Analysis
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Dataset Snapshot */}
      {/* ========================================================= */}

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Event Records */}
          <div className="group relative overflow-hidden rounded-2xl border border-blue-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50">
            <div className="absolute left-0 right-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-300/20 blur-2xl opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-blue-100 group-hover:shadow-lg group-hover:shadow-blue-100">
                <Database
                  className="text-blue-600"
                  size={19}
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Event Records
              </p>

              <p className="mt-1 text-2xl font-bold text-slate-900 transition-all duration-300 group-hover:text-blue-700">
                37,892
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Filtered conflict events
              </p>
            </div>
          </div>

          {/* Reported Deaths */}
          <div className="group relative overflow-hidden rounded-2xl border border-purple-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-100/50">
            <div className="absolute left-0 right-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-purple-300/20 blur-2xl opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 ring-1 ring-purple-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-purple-100 group-hover:shadow-lg group-hover:shadow-purple-100">
                <TrendingUp
                  className="text-purple-600"
                  size={19}
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Reported Deaths
              </p>

              <p className="mt-1 text-2xl font-bold text-slate-900 transition-all duration-300 group-hover:text-purple-700">
                372,593
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Battle-related fatalities
              </p>
            </div>
          </div>

          {/* Civilian Deaths */}
          <div className="group relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-100/50">
            <div className="absolute left-0 right-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-300/20 blur-2xl opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-emerald-100 group-hover:shadow-lg group-hover:shadow-emerald-100">
                <Users
                  className="text-emerald-600"
                  size={19}
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Civilian Deaths
              </p>

              <p className="mt-1 text-2xl font-bold text-slate-900 transition-all duration-300 group-hover:text-emerald-700">
                25,985
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Recorded civilian fatalities
              </p>
            </div>
          </div>

          {/* Coverage */}
          <div className="group relative overflow-hidden rounded-2xl border border-indigo-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100/50">
            <div className="absolute left-0 right-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-indigo-300/20 blur-2xl opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 ring-1 ring-indigo-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-indigo-100 group-hover:shadow-lg group-hover:shadow-indigo-100">
                <BarChart3
                  className="text-indigo-600"
                  size={19}
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Coverage
              </p>

              <p className="mt-1 text-2xl font-bold text-slate-900 transition-all duration-300 group-hover:text-indigo-700">
                50 Months
              </p>

              <p className="mt-1 text-xs text-slate-500">
                March 2014 – December 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Section Navigation */}
      {/* ========================================================= */}

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-7">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-600">
            Explore the Project
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Analysis, findings, and methodology
          </h2>

          <p className="mt-2 max-w-2xl leading-relaxed text-slate-600">
            Navigate through the analytical workflow, from interactive
            exploration to documented findings and methodology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Analysis */}
          <Link
            href="/russia-ukraine/analysis"
            aria-label="View Russia–Ukraine analysis"
            className="group relative overflow-hidden rounded-2xl border border-blue-200/70 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50"
          >
            <div className="absolute right-[-3rem] top-[-3rem] h-32 w-32 rounded-full bg-blue-300/20 blur-2xl opacity-0 transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-full" />

            <div className="relative">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-blue-100 group-hover:shadow-lg">
                <BarChart3
                  className="text-blue-600"
                  size={20}
                  aria-hidden="true"
                />
              </div>

              <h2 className="mb-2 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                Analysis
              </h2>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Explore temporal trends, geographic patterns, and interactive
                visualizations built from the Russia–Ukraine datasets.
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors group-hover:text-blue-600">
                View analysis
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>

          {/* Findings */}
          <Link
            href="/russia-ukraine/findings"
            aria-label="View Russia–Ukraine key findings"
            className="group relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-100/50"
          >
            <div className="absolute right-[-3rem] top-[-3rem] h-32 w-32 rounded-full bg-emerald-300/20 blur-2xl opacity-0 transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 group-hover:w-full" />

            <div className="relative">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-emerald-100 group-hover:shadow-lg">
                <FileText
                  className="text-emerald-600"
                  size={20}
                  aria-hidden="true"
                />
              </div>

              <h2 className="mb-2 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-emerald-700">
                Key Findings
              </h2>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Review the main data findings and patterns identified during
                the Russia–Ukraine analysis.
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors group-hover:text-emerald-600">
                View findings
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>

          {/* Methodology */}
          <Link
            href="/russia-ukraine/methodology"
            aria-label="View Russia–Ukraine methodology"
            className="group relative overflow-hidden rounded-2xl border border-purple-200/70 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-100/50"
          >
            <div className="absolute right-[-3rem] top-[-3rem] h-32 w-32 rounded-full bg-purple-300/20 blur-2xl opacity-0 transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-500 group-hover:w-full" />

            <div className="relative">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 ring-1 ring-purple-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-purple-100 group-hover:shadow-lg">
                <BookOpen
                  className="text-purple-600"
                  size={20}
                  aria-hidden="true"
                />
              </div>

              <h2 className="mb-2 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-purple-700">
                Methodology
              </h2>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Understand the datasets, cleaning process, analytical approach,
                and limitations behind the Russia–Ukraine analysis.
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors group-hover:text-purple-600">
                View methodology
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Scope */}
      {/* ========================================================= */}

      <section className="relative border-y border-slate-200/80 bg-white/60">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50" />

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 p-8 shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/40 md:p-10">
            <div className="absolute left-0 right-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-indigo-300/15 blur-3xl opacity-0 transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

            <div className="relative">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-600">
                Dataset Overview
              </p>

              <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Analysis Scope
              </h2>

              <p className="max-w-4xl leading-relaxed text-slate-600">
                The Russia–Ukraine analysis uses event-level conflict data to
                examine battle-related fatalities over time and across
                locations. The dataset is aggregated into monthly trends to
                support comparison and visualization of changes in reported
                fatalities.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {/* Temporal */}
                <div className="group/scope relative overflow-hidden rounded-xl border border-blue-100 bg-slate-50/90 p-5 transition-all duration-400 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-lg">
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-500 group-hover/scope:w-full" />

                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-all duration-300 group-hover/scope:scale-110">
                    <CalendarDays size={17} />
                  </div>

                  <p className="text-sm font-semibold text-slate-800">
                    Temporal Analysis
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Monthly battle-related fatalities
                  </p>
                </div>

                {/* Geographic */}
                <div className="group/scope relative overflow-hidden rounded-xl border border-purple-100 bg-slate-50/90 p-5 transition-all duration-400 hover:-translate-y-1 hover:border-purple-200 hover:bg-purple-50/60 hover:shadow-lg">
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-purple-500 transition-all duration-500 group-hover/scope:w-full" />

                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-purple-600 transition-all duration-300 group-hover/scope:scale-110">
                    <MapPin size={17} />
                  </div>

                  <p className="text-sm font-semibold text-slate-800">
                    Geographic Analysis
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Event locations and regional patterns
                  </p>
                </div>

                {/* Interactive */}
                <div className="group/scope relative overflow-hidden rounded-xl border border-emerald-100 bg-slate-50/90 p-5 transition-all duration-400 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50/60 hover:shadow-lg">
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover/scope:w-full" />

                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 transition-all duration-300 group-hover/scope:scale-110">
                    <Activity size={17} />
                  </div>

                  <p className="text-sm font-semibold text-slate-800">
                    Interactive Analysis
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Tableau Public dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Dashboard CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-950/60 via-slate-950 to-purple-950/60" />

        <div className="pointer-events-none absolute -left-32 top-[-10rem] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

        <div
          className="pointer-events-none absolute -right-32 bottom-[-12rem] h-[30rem] w-[30rem] rounded-full bg-purple-500/10 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 backdrop-blur-md">
            <Layers3 size={14} className="text-blue-400" />
            Interactive Visualization
          </div>

          <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Explore the Russia–Ukraine Dashboard
            </span>
          </h2>

          <p className="mx-auto mb-7 max-w-lg leading-relaxed text-slate-400">
            Explore monthly casualty trends, geographic patterns, and other
            available views through the interactive Tableau dashboard.
          </p>

          <Link
            href="/russia-ukraine/analysis"
            aria-label="Open Russia–Ukraine interactive analysis"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-7 py-3.5 font-medium text-slate-900 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-2xl hover:shadow-blue-900/20"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-100/70 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative">Open Analysis</span>

            <ArrowRight
              size={18}
              aria-hidden="true"
              className="relative transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}