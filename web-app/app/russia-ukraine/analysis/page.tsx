"use client";

import Link from "next/link";
import Image from "next/image";

import {
  ArrowLeft,
  TrendingUp,
  Map,
  BarChart3,
  ExternalLink,
  Sparkles,
  Activity,
  Globe2,
  Layers3,
} from "lucide-react";

export default function RussiaUkraineAnalysisPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* ========================================================= */}
      {/* BACKGROUND DECORATION */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl animate-pulse" />
        <div
          className="absolute top-[25%] -right-40 h-[32rem] w-[32rem] rounded-full bg-purple-300/20 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-[15%] -left-32 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl animate-pulse"
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
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:-translate-x-1 group-hover:border-blue-200 group-hover:bg-blue-50">
            <ArrowLeft size={16} aria-hidden="true" />
          </span>

          <span>Back to Russia–Ukraine</span>
        </Link>

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            Russia–Ukraine Analysis
            <Sparkles size={14} className="text-blue-500" aria-hidden="true" />
          </div>

          <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-5">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-700 bg-clip-text text-transparent">
              Data Analysis
            </span>
          </h1>

          <div className="mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Explore temporal and geographic patterns in reported battle-related
            fatalities across the Russia–Ukraine conflict.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ANALYSIS AREAS */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Temporal Trends */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20" />

            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-blue-500/20">
                <TrendingUp
                  className="text-blue-600 transition-transform duration-500 group-hover:scale-110"
                  size={21}
                  aria-hidden="true"
                />
              </div>

              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                  Temporal
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 mb-2">
                Temporal Trends
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Monthly aggregation of battle-related fatalities is used to
                examine how reported casualty levels change over time.
              </p>
            </div>
          </div>

          {/* Geographic Patterns */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl transition-all duration-500 group-hover:bg-emerald-500/20" />

            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-sm transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110 group-hover:shadow-emerald-500/20">
                <Map
                  className="text-emerald-600 transition-transform duration-500 group-hover:scale-110"
                  size={21}
                  aria-hidden="true"
                />
              </div>

              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                  Geography
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 mb-2">
                Geographic Patterns
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Event locations are used to examine the geographic distribution
                of reported battle-related fatalities.
              </p>
            </div>
          </div>

          {/* Visualization */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:bg-purple-500/20" />

            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-fuchsia-50 shadow-sm transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-purple-500/20">
                <BarChart3
                  className="text-purple-600 transition-transform duration-500 group-hover:scale-110"
                  size={21}
                  aria-hidden="true"
                />
              </div>

              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-purple-600">
                  Visualization
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 mb-2">
                Data Visualization
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Static charts and an interactive Power BI dashboard provide
                different views of the processed conflict data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* POWER BI DASHBOARD */}
      {/* IMPORTANT: EMBED SIZE PRESERVED */}
      {/* ========================================================= */}

      <section className="relative max-w-[1200px] mx-auto px-6 pb-16">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
          {/* Decorative top glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

          <div className="p-7 border-b border-slate-200/80 bg-gradient-to-r from-white via-blue-50/30 to-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.15em]">
                    Interactive Dashboard
                  </p>
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Russia–Ukraine Casualty Analysis
                </h2>

                <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                  Explore the interactive Power BI visualization of reported
                  battle-related fatalities and related analytical views.
                </p>
              </div>

              <a
                href="https://app.powerbi.com/view?r=eyJrIjoiNWEyMDcyYTYtZGQzYy00MzVmLTliOGMtYzhlM2VmMzEyNWYxIiwidCI6IjM0YmQ4YmVkLTJhYzEtNDFhZS05ZjA4LTRlMGEzZjExNzA2YyJ9&pageName=2ac72fb328eed0d96b64"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Russia–Ukraine dashboard in Power BI"
                className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium shadow-lg shadow-slate-900/10 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-blue-500/20 transition-all whitespace-nowrap"
              >
                Open in Power BI
                <ExternalLink
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* DO NOT CHANGE DASHBOARD DIMENSIONS */}
          <div
            className="relative w-full overflow-hidden"
            style={{ height: "960px" }}
          >
            <iframe
              title="Global_War_Casualties"
              src="https://app.powerbi.com/view?r=eyJrIjoiNWEyMDcyYTYtZGQzYy00MzVmLTliOGMtYzhlM2VmMzEyNWYxIiwidCI6IjM0YmQ4YmVkLTJhYzEtNDFhZS05ZjA4LTRlMGEzZjExNzA2YyJ9&pageName=2ac72fb328eed0d96b64"
              style={{
                border: "none",
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                width: "181.82%",
                height: "1745px",
                transform: "scale(0.55)",
                transformOrigin: "top left",
              }}
              allowFullScreen
            />
          </div>

          <p className="text-sm text-slate-500 mt-3 text-center px-4">
            Interactive Power BI report containing Israel–Palestine and
            Russia–Ukraine analysis. Use the report tabs to explore both pages.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TABLEAU DASHBOARD */}
      {/* IMPORTANT: EMBED SIZE PRESERVED */}
      {/* ========================================================= */}

      <section className="relative max-w-[1200px] mx-auto px-6 pb-16">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

          <div className="p-7 border-b border-slate-200/80 bg-gradient-to-r from-white via-indigo-50/30 to-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.15em]">
                    Interactive Visualization
                  </p>
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Russia–Ukraine Tableau Dashboard
                </h2>

                <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                  Explore the interactive Tableau visualization of reported
                  battle-related fatalities and related analytical views.
                </p>
              </div>

              <a
                href="https://public.tableau.com/views/GlobalWarCasualties-RussiaUkraineAnalysis/Dashboard1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Russia–Ukraine dashboard in Tableau"
                className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium shadow-lg shadow-slate-900/10 hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-indigo-500/20 transition-all whitespace-nowrap"
              >
                Open in Tableau
                <ExternalLink
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* DO NOT CHANGE TABLEAU DIMENSIONS */}
          <div
            className="relative w-full overflow-hidden"
            style={{ height: "827px" }}
          >
            <iframe
              title="Global War Casualties – Russia-Ukraine Tableau Dashboard"
              src="https://public.tableau.com/views/GlobalWarCasualties-RussiaUkraineAnalysis/Dashboard1?:showVizHome=no"
              style={{
                border: "none",
                display: "block",
                width: "100%",
                height: "827px",
              }}
              allowFullScreen
            />
          </div>

          <p className="text-sm text-slate-500 px-6 py-3 text-center">
            Interactive Tableau dashboard presenting Russia–Ukraine casualty
            trends and analytical views.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* STATIC VISUALIZATION */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-7">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em]">
              Supporting Visualization
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Monthly Fatality Trends
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />

          <p className="text-sm text-slate-600 mt-3 max-w-3xl leading-relaxed">
            The monthly aggregation provides a compact view of changes in
            reported battle-related fatalities across the conflict period.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="p-6 border-b border-slate-200/80 bg-gradient-to-r from-white via-purple-50/20 to-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 border border-purple-100">
                <Activity
                  size={18}
                  className="text-purple-600"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Russia–Ukraine Monthly Deaths
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Monthly reported battle-related fatalities.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5">
            {/* Image dimensions preserved */}
            <div className="relative w-full overflow-hidden rounded-xl bg-slate-50 border border-slate-100 shadow-inner">
              <Image
                src="/charts/04_ukraine_monthly_deaths.png"
                alt="Russia–Ukraine monthly reported deaths"
                width={1400}
                height={800}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ANALYTICAL SCOPE */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 pb-20">
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-500/5 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/10" />

          <div className="relative">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.15em]">
                Methodological Context
              </p>
            </div>

            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100">
                <Layers3
                  size={20}
                  className="text-indigo-600"
                  aria-hidden="true"
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                Analytical Scope
              </h2>
            </div>

            <div className="space-y-3 text-sm text-slate-600 leading-relaxed max-w-4xl">
              <div className="group/paragraph rounded-xl border border-transparent p-4 -ml-4 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/40">
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 transition-transform duration-300 group-hover/paragraph:scale-150" />

                  <p>
                    The Russia–Ukraine analysis uses event-level conflict data
                    filtered to Russia–Ukraine events and aggregated into
                    monthly totals for time-series analysis.
                  </p>
                </div>
              </div>

              <div className="group/paragraph rounded-xl border border-transparent p-4 -ml-4 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/40">
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 transition-transform duration-300 group-hover/paragraph:scale-150" />

                  <p>
                    The analysis focuses on reported battle-related fatalities,
                    temporal patterns, and geographic distribution. It does not
                    attempt to provide political interpretation or conclusions
                    beyond the observed data.
                  </p>
                </div>
              </div>

              <div className="group/paragraph rounded-xl border border-transparent p-4 -ml-4 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/40">
                <div className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 transition-transform duration-300 group-hover/paragraph:scale-150" />

                  <p>
                    Reported casualty figures may be incomplete or revised as
                    underlying datasets are updated. Results should therefore be
                    interpreted as analysis of the available reported data
                    rather than a definitive count of all fatalities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BOTTOM DECORATIVE ELEMENT */}
      {/* ========================================================= */}

      <div className="relative flex justify-center pb-12">
        <div className="flex items-center gap-3 text-slate-400">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-300" />
          <Globe2 size={15} />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-300" />
        </div>
      </div>
    </div>
  );
}
