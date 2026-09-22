"use client";

import Link from "next/link";

import Image from "next/image";

import {
  ArrowLeft,
  TrendingUp,
  Map,
  BarChart3,
  ExternalLink,
} from "lucide-react";

export default function RussiaUkraineAnalysisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <Link
          href="/russia-ukraine"
          aria-label="Back to Russia–Ukraine"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 mb-6 transition-colors"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Russia–Ukraine
        </Link>

        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
          Russia–Ukraine Analysis
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Data Analysis
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Explore temporal and geographic patterns in reported battle-related
          fatalities across the Russia–Ukraine conflict.
        </p>
      </section>

      {/* Analysis Areas */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Temporal Trends */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
              <TrendingUp
                className="text-blue-600"
                size={20}
                aria-hidden="true"
              />
            </div>

            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Temporal Trends
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Monthly aggregation of battle-related fatalities is used to
              examine how reported casualty levels change over time.
            </p>
          </div>

          {/* Geographic Patterns */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center mb-5">
              <Map className="text-emerald-600" size={20} aria-hidden="true" />
            </div>

            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Geographic Patterns
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Event locations are used to examine the geographic distribution of
              reported battle-related fatalities.
            </p>
          </div>

          {/* Visualization */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-11 h-11 bg-purple-50 rounded-xl flex items-center justify-center mb-5">
              <BarChart3
                className="text-purple-600"
                size={20}
                aria-hidden="true"
              />
            </div>

            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Data Visualization
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Static charts and an interactive Power BI dashboard provide
              different views of the processed conflict data.
            </p>
          </div>
        </div>
      </section>

      {/* Power BI Dashboard */}
      <section className="max-w-[1200px] mx-auto px-6 pb-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="p-7 border-b border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.15em] mb-2">
                  Interactive Dashboard
                </p>

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
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                Open in Power BI
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

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

          <p className="text-sm text-slate-500 mt-3 text-center">
            Interactive Power BI report containing Israel–Palestine and
            Russia–Ukraine analysis. Use the report tabs to explore both pages.
          </p>
        </div>
      </section>
      {/* Interactive Tableau Dashboard */}
      <section className="max-w-[1200px] mx-auto px-6 pb-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="p-7 border-b border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.15em] mb-2">
                  Interactive Visualization
                </p>

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
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                Open in Tableau
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

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

      {/* Static Visualization */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-7">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.15em] mb-2">
            Supporting Visualization
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Monthly Fatality Trends
          </h2>

          <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
            The monthly aggregation provides a compact view of changes in
            reported battle-related fatalities across the conflict period.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">
              Russia–Ukraine Monthly Deaths
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Monthly reported battle-related fatalities.
            </p>
          </div>

          <div className="p-5">
            <div className="relative w-full overflow-hidden rounded-xl bg-slate-50">
              <Image
                src="/charts/04_ukraine_monthly_deaths.png"
                alt="Russia–Ukraine monthly reported deaths"
                width={1400}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analytical Scope */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/80 shadow-sm">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-[0.15em] mb-3">
            Methodological Context
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-5">
            Analytical Scope
          </h2>

          <div className="space-y-4 text-sm text-slate-600 leading-relaxed max-w-4xl">
            <p>
              The Russia–Ukraine analysis uses event-level conflict data
              filtered to Russia–Ukraine events and aggregated into monthly
              totals for time-series analysis.
            </p>

            <p>
              The analysis focuses on reported battle-related fatalities,
              temporal patterns, and geographic distribution. It does not
              attempt to provide political interpretation or conclusions beyond
              the observed data.
            </p>

            <p>
              Reported casualty figures may be incomplete or revised as
              underlying datasets are updated. Results should therefore be
              interpreted as analysis of the available reported data rather than
              a definitive count of all fatalities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
