"use client";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Database,
  TrendingUp,
  Users,
  Sparkles,
  GitCompare,
  Layers3,
  Activity,
  MapPin,
  Gauge,
} from "lucide-react";

export default function ParallelPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Ambient Background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl animate-pulse" />
        <div
          className="absolute right-[-120px] top-64 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl animate-pulse"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="absolute left-1/3 bottom-[-180px] h-96 w-96 rounded-full bg-blue-300/10 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Decorative Grid */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent)",
        }}
      />

      {/* Hero / Header */}
      <section className="relative max-w-6xl mx-auto px-6 pt-12 md:pt-16 pb-12">
        {/* Decorative Orb */}
        <div
          className="absolute right-8 top-16 hidden md:block h-28 w-28 rounded-full border border-indigo-200/60 bg-white/30 backdrop-blur-sm animate-pulse"
          aria-hidden="true"
        >
          <div className="absolute inset-4 rounded-full border border-purple-200/70" />
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-400/20 to-indigo-400/20" />
        </div>

        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm text-slate-500 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-indigo-200 hover:bg-white hover:text-slate-800 hover:shadow-md"
        >
          <ArrowLeft
            size={16}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Home
        </Link>

        <div className="mt-8 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-indigo-700 shadow-sm backdrop-blur-md">
            <Sparkles size={14} className="text-indigo-500" aria-hidden="true" />
            Comparative Analysis
          </div>

          <div className="relative">
            <div
              className="absolute -left-5 top-1/2 hidden h-20 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 md:block"
              aria-hidden="true"
            />

            <h1 className="bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-900 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl lg:text-6xl">
              Parallel Conflict Analysis
            </h1>
          </div>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            A side-by-side view of the datasets, analytical approaches,
            visualizations, and data characteristics used across both conflict
            analyses.
          </p>

          {/* Mini Visual Indicators */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white/75 px-3 py-2 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              Israel–Palestine
            </div>

            <div className="hidden h-px w-8 bg-gradient-to-r from-rose-300 to-blue-300 sm:block" />

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/75 px-3 py-2 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Russia–Ukraine
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-2 text-xs font-medium text-indigo-700">
              <GitCompare size={13} aria-hidden="true" />
              Side-by-side framework
            </div>
          </div>
        </div>
      </section>

      {/* Quantitative Snapshot */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">
              At a Glance
            </p>
            <h2 className="mt-1 text-xl font-bold text-slate-900">
              Quantitative Snapshot
            </h2>
          </div>

          <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
            <Activity size={14} aria-hidden="true" />
            Dataset characteristics
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Snapshot 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-rose-200 hover:shadow-xl">
            <div
              className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-rose-100/60 blur-2xl transition-transform duration-500 group-hover:scale-150"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-rose-100 bg-gradient-to-br from-rose-50 to-pink-50 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <TrendingUp
                    size={19}
                    className="text-rose-600"
                    aria-hidden="true"
                  />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400">
                  Dataset 01
                </span>
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Israel–Palestine
              </p>

              <p className="mt-1 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-3xl font-extrabold text-transparent">
                73,134
              </p>

              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Reported deaths in daily master
              </p>

              <div className="mt-5 h-1 overflow-hidden rounded-full bg-rose-50">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 transition-all duration-700 group-hover:w-full" />
              </div>
            </div>
          </div>

          {/* Snapshot 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
            <div
              className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100/60 blur-2xl transition-transform duration-500 group-hover:scale-150"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <BarChart3
                    size={19}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                  Dataset 02
                </span>
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Russia–Ukraine
              </p>

              <p className="mt-1 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-extrabold text-transparent">
                372,593
              </p>

              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Reported battle-related deaths
              </p>

              <div className="mt-5 h-1 overflow-hidden rounded-full bg-blue-50">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-700 group-hover:w-3/4" />
              </div>
            </div>
          </div>

          {/* Snapshot 3 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl">
            <div
              className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-100/60 blur-2xl transition-transform duration-500 group-hover:scale-150"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Database
                    size={19}
                    className="text-purple-600"
                    aria-hidden="true"
                  />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">
                  Structure
                </span>
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Data Structures
              </p>

              <p className="mt-1 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-3xl font-extrabold text-transparent">
                2 Models
              </p>

              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Daily vs event-level records
              </p>

              <div className="mt-5 flex items-center gap-1">
                <span className="h-2 flex-1 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400" />
                <span className="h-2 flex-1 rounded-full bg-slate-100 transition-colors group-hover:bg-purple-100" />
              </div>
            </div>
          </div>

          {/* Snapshot 4 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">
            <div
              className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-100/60 blur-2xl transition-transform duration-500 group-hover:scale-150"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Users
                    size={19}
                    className="text-emerald-600"
                    aria-hidden="true"
                  />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  Detail
                </span>
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Demographic Detail
              </p>

              <p className="mt-1 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-3xl font-extrabold text-transparent">
                Gaza
              </p>

              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Individual age and sex records
              </p>

              <div className="mt-5 flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conflict Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="mb-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">
            Two Analytical Tracks
          </p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Conflict-Level Comparison
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Israel–Palestine */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-rose-200 hover:shadow-2xl">
            {/* Card Glow */}
            <div
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-rose-100/60 blur-3xl transition-transform duration-700 group-hover:scale-125"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
                  Conflict 01
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-100 bg-white/80 text-rose-500 shadow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <MapPin size={17} aria-hidden="true" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-rose-700">
                Israel–Palestine
              </h2>

              <p className="mb-7 mt-3 text-sm leading-relaxed text-slate-600">
                Analysis focused on reported casualties across Gaza and the
                West Bank, including temporal patterns and demographic
                characteristics available in the Gaza individual records.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-rose-100 hover:bg-rose-50/50">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-50">
                    <Database
                      size={17}
                      className="text-rose-500"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Data Structure
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                      Daily casualty records and individual demographic records
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-rose-100 hover:bg-rose-50/50">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-50">
                    <TrendingUp
                      size={17}
                      className="text-rose-500"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Time Analysis
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                      Daily reported deaths and temporal patterns
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-rose-100 hover:bg-rose-50/50">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-50">
                    <Users
                      size={17}
                      className="text-rose-500"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Demographics
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                      Age and sex distributions
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/israel-palestine"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-rose-100 bg-rose-50/70 px-4 py-2 text-sm font-semibold text-rose-600 transition-all duration-300 hover:gap-3 hover:border-rose-200 hover:bg-rose-100 hover:text-rose-800"
              >
                Explore Israel–Palestine
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Russia–Ukraine */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl">
            <div
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-100/60 blur-3xl transition-transform duration-700 group-hover:scale-125"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                  Conflict 02
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white/80 text-blue-500 shadow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Gauge size={17} aria-hidden="true" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                Russia–Ukraine
              </h2>

              <p className="mb-7 mt-3 text-sm leading-relaxed text-slate-600">
                Analysis focused on event-level conflict records, reported
                battle-related fatalities, temporal trends, and geographic
                distribution.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/50">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <Database
                      size={17}
                      className="text-blue-500"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Data Structure
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                      Event-level conflict records
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/50">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <TrendingUp
                      size={17}
                      className="text-blue-500"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Time Analysis
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                      Monthly battle-related fatality aggregation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/50">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <BarChart3
                      size={17}
                      className="text-blue-500"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Geographic Analysis
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                      Event locations and geographic patterns
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/russia-ukraine"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:gap-3 hover:border-blue-200 hover:bg-blue-100 hover:text-blue-800"
              >
                Explore Russia–Ukraine
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-xl backdrop-blur-md">
          {/* Table Header Glow */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 opacity-80"
            aria-hidden="true"
          />

          <div className="relative border-b border-slate-200/80 p-7 md:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Side-by-Side View
                </p>

                <h2 className="text-2xl font-bold text-slate-900">
                  Analytical Comparison
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                  The two projects use different source structures and
                  therefore apply analytical methods appropriate to the
                  available data.
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-100 bg-white shadow-sm">
                <Layers3
                  size={21}
                  className="text-indigo-600"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <caption className="sr-only">
                Comparison of analytical data structures, time resolution,
                geographic analysis, demographic analysis, and interactive
                visualization between the Israel–Palestine and Russia–Ukraine
                projects.
              </caption>

              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/90">
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-semibold text-slate-800"
                  >
                    Dimension
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-semibold text-rose-700"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-rose-500" />
                      Israel–Palestine
                    </div>
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-semibold text-blue-700"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                      Russia–Ukraine
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                <tr className="group transition-colors duration-200 hover:bg-rose-50/30">
                  <th
                    scope="row"
                    className="px-6 py-5 text-sm font-semibold text-slate-800"
                  >
                    Primary data structure
                  </th>

                  <td className="px-6 py-5 text-sm leading-relaxed text-slate-600">
                    Daily casualty data and individual demographic records
                  </td>

                  <td className="px-6 py-5 text-sm leading-relaxed text-slate-600">
                    Event-level conflict records
                  </td>
                </tr>

                <tr className="group transition-colors duration-200 hover:bg-indigo-50/30">
                  <th
                    scope="row"
                    className="px-6 py-5 text-sm font-semibold text-slate-800"
                  >
                    Time resolution
                  </th>

                  <td className="px-6 py-5 text-sm leading-relaxed text-slate-600">
                    Daily reporting with derived time-series views
                  </td>

                  <td className="px-6 py-5 text-sm leading-relaxed text-slate-600">
                    Monthly aggregation
                  </td>
                </tr>

                <tr className="group transition-colors duration-200 hover:bg-blue-50/30">
                  <th
                    scope="row"
                    className="px-6 py-5 text-sm font-semibold text-slate-800"
                  >
                    Geographic analysis
                  </th>

                  <td className="px-6 py-5 text-sm leading-relaxed text-slate-600">
                    Gaza and West Bank comparison
                  </td>

                  <td className="px-6 py-5 text-sm leading-relaxed text-slate-600">
                    Event locations and regional patterns
                  </td>
                </tr>

                <tr className="group transition-colors duration-200 hover:bg-purple-50/30">
                  <th
                    scope="row"
                    className="px-6 py-5 text-sm font-semibold text-slate-800"
                  >
                    Demographic analysis
                  </th>

                  <td className="px-6 py-5 text-sm leading-relaxed text-slate-600">
                    Age, sex, and age group by sex
                  </td>

                  <td className="px-6 py-5 text-sm leading-relaxed text-slate-600">
                    Not a primary component of the available analysis
                  </td>
                </tr>

                <tr className="group transition-colors duration-200 hover:bg-emerald-50/30">
                  <th
                    scope="row"
                    className="px-6 py-5 text-sm font-semibold text-slate-800"
                  >
                    Interactive visualization
                  </th>

                  <td className="px-6 py-5 text-sm leading-relaxed text-slate-600">
                    Tableau Public dashboard
                  </td>

                  <td className="px-6 py-5 text-sm leading-relaxed text-slate-600">
                    Tableau Public dashboard
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Analytical Difference */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="group relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-2xl md:p-10">
          {/* Animated Background */}
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl transition-transform duration-700 group-hover:scale-125"
            aria-hidden="true"
          />

          <div
            className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl animate-pulse"
            aria-hidden="true"
          />

          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Data Context
                </p>

                <h2 className="max-w-3xl text-2xl font-bold leading-tight md:text-3xl">
                  Different Data Structures Require Different Analytical Views
                </h2>
              </div>

              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:flex">
                <GitCompare
                  size={23}
                  className="text-indigo-300"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="mb-6 h-px max-w-3xl bg-gradient-to-r from-indigo-500/60 via-purple-400/30 to-transparent" />

            <p className="max-w-4xl text-sm leading-relaxed text-slate-300">
              The two conflict analyses are not based on identical datasets.
              Israel–Palestine includes daily casualty reporting and a
              demographic dataset, while Russia–Ukraine is analyzed using
              event-level conflict records aggregated into monthly trends. The
              comparison therefore focuses on analytical structure and
              observable data characteristics rather than combining the
              underlying casualty figures into a single measure.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="mb-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">
            Continue Exploring
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Conflict Analysis Dashboards
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Israel–Palestine Navigation */}
          <Link
            href="/israel-palestine/analysis"
            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-7 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-rose-200 hover:shadow-xl"
          >
            <div
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-rose-100/50 blur-3xl transition-transform duration-500 group-hover:scale-150"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Conflict Analysis
                </p>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-rose-100 bg-rose-50 text-rose-500 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <BarChart3 size={16} aria-hidden="true" />
                </div>
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-rose-700">
                Israel–Palestine Analysis
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-slate-500">
                Explore the detailed analytical views and visualizations for
                the Israel–Palestine dataset.
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-all duration-300 group-hover:gap-3 group-hover:text-rose-700">
                Open analysis
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>

          {/* Russia–Ukraine Navigation */}
          <Link
            href="/russia-ukraine/analysis"
            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-7 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
          >
            <div
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/50 blur-3xl transition-transform duration-500 group-hover:scale-150"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Conflict Analysis
                </p>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-500 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <BarChart3 size={16} aria-hidden="true" />
                </div>
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                Russia–Ukraine Analysis
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-slate-500">
                Explore the detailed analytical views and visualizations for
                the Russia–Ukraine dataset.
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-all duration-300 group-hover:gap-3 group-hover:text-blue-700">
                Open analysis
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}