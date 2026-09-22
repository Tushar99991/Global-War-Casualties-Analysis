"use client";

import Link from "next/link";

import Image from "next/image";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  TrendingUp,
  Users,
  Map,
  ExternalLink,
} from "lucide-react";

export default function AnalysisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-7 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
          Data Analysis
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Data Analysis
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Exploration of casualty trends, demographic patterns, and comparative
          insights across the Russia-Ukraine and Israel-Palestine conflicts.
        </p>
      </section>

      {/* Analysis Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center mb-5">
              <TrendingUp className="text-red-600" size={20} />
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Time Series Trends
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Daily and monthly casualty trends were analyzed to identify peaks,
              periods of escalation, and changes over time in both conflicts.
            </p>

            <ul className="text-sm text-slate-600 space-y-1.5">
              <li>• Gaza daily reported deaths over time</li>
              <li>• Russia-Ukraine monthly battle-related deaths</li>
              <li>• Gaza vs West Bank comparison</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
              <Users className="text-blue-600" size={20} />
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Demographic Analysis
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Individual-level records from Gaza were examined to understand the
              age and sex distribution of reported fatalities.
            </p>

            <ul className="text-sm text-slate-600 space-y-1.5">
              <li>• Age group distribution (0-12 to 60+)</li>
              <li>• Sex breakdown of fatalities</li>
              <li>• Proportion of children (0-18 years)</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center mb-5">
              <BarChart3 className="text-emerald-600" size={20} />
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Comparative KPIs
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Key performance indicators were calculated to summarize the scale
              and characteristics of each conflict.
            </p>

            <ul className="text-sm text-slate-600 space-y-1.5">
              <li>• Total reported deaths by region</li>
              <li>• Peak daily and monthly figures</li>
              <li>• Average daily casualty rates</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-11 h-11 bg-purple-50 rounded-xl flex items-center justify-center mb-5">
              <Map className="text-purple-600" size={20} />
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Geographic Distribution
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Event-level data from UCDP was used to examine the geographic
              spread of violence in the Russia-Ukraine conflict.
            </p>

            <ul className="text-sm text-slate-600 space-y-1.5">
              <li>• Event locations and coordinates</li>
              <li>• Regional concentration of fatalities</li>
              <li>• Civilian vs combatant deaths</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conflict-Specific Analysis */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">
            Explore by Conflict
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Conflict-Specific Analysis
          </h2>

          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            Explore each conflict separately through its dedicated analysis
            page, including the interactive Power BI dashboard, findings, and
            methodology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Israel-Palestine */}
          <Link
            href="/israel-palestine/analysis"
            className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center">
                <BarChart3 className="text-red-600" size={20} />
              </div>

              <ArrowRight
                className="text-slate-300 group-hover:text-red-500 group-hover:translate-x-1 transition-all"
                size={18}
              />
            </div>

            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-red-500 mb-2">
              Conflict Analysis
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Israel-Palestine Analysis
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              Explore reported casualty trends, demographic distributions,
              geographic differences, findings, methodology, and the interactive
              Power BI dashboard.
            </p>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-red-600 transition-colors">
              Explore Israel-Palestine
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </Link>

          {/* Russia-Ukraine */}
          <Link
            href="/russia-ukraine/analysis"
            className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
                <BarChart3 className="text-blue-600" size={20} />
              </div>

              <ArrowRight
                className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                size={18}
              />
            </div>

            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-500 mb-2">
              Conflict Analysis
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Russia-Ukraine Analysis
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              Explore reported battle-related deaths, civilian fatalities, event
              trends, findings, methodology, and the interactive Power BI
              dashboard.
            </p>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
              Explore Russia-Ukraine
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </Link>
        </div>
      </section>

      {/* Interactive Tableau Dashboards */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        {/* Israel-Palestine Dashboard */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-red-500 mb-2">
                Interactive Dashboard
              </div>

              <h2 className="text-2xl font-bold text-slate-900">
                Israel-Palestine Analysis
              </h2>
            </div>

            <a
              href="https://public.tableau.com/app/profile/tushar.pandey3714/viz/GlobalWarCasualties-IsraelPalestineAnalysis/CasualtiesDashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              Open in Tableau Public
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
            <div className="w-full overflow-hidden" style={{ height: "750px" }}>
              <iframe
                src="https://public.tableau.com/views/GlobalWarCasualties-IsraelPalestineAnalysis/CasualtiesDashboard?:embed=y&:showVizHome=no&:toolbar=yes&:animate_transition=yes&:display_static_image=yes&:display_spinner=yes&:display_overlay=yes&:display_count=yes&:language=en-US"
                width="100%"
                height="750"
                style={{ border: "none" }}
                title="Global War Casualties - Israel Palestine Dashboard"
                allowFullScreen
              />
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-3 text-center">
            Interactive Tableau dashboard for reported casualties in the
            Israel-Palestine conflict. Use filters and hover for details.
          </p>
        </div>

        {/* Russia-Ukraine Dashboard */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500 mb-2">
                Interactive Dashboard
              </div>

              <h2 className="text-2xl font-bold text-slate-900">
                Russia-Ukraine Analysis
              </h2>
            </div>

            <a
              href="https://public.tableau.com/app/profile/tushar.pandey3714/viz/GlobalWarCasualties-RussiaUkraineAnalysis/Dashboard1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              Open in Tableau Public
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
            <div className="w-full overflow-hidden" style={{ height: "750px" }}>
              <iframe
                src="https://public.tableau.com/views/GlobalWarCasualties-RussiaUkraineAnalysis/Dashboard1?:embed=y&:showVizHome=no&:toolbar=yes&:animate_transition=yes&:display_static_image=yes&:display_spinner=yes&:display_overlay=yes&:display_count=yes&:language=en-US"
                width="100%"
                height="750"
                style={{ border: "none" }}
                title="Global War Casualties - Russia Ukraine Dashboard"
                allowFullScreen
              />
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-3 text-center">
            Interactive Tableau dashboard for Russia-Ukraine conflict
            casualties. Use filters and hover for details.
          </p>
        </div>
      </section>

      {/* Static Charts Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">
            Supporting Analysis
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Supporting Visualizations
          </h2>

          <p className="text-sm text-slate-600 max-w-2xl">
            Static visualizations supporting the interactive dashboards and
            highlighting key analytical dimensions of the datasets.
          </p>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Time Series Trends
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <ChartCard
                title="Gaza – Daily Reported Deaths"
                src="/charts/01_gaza_daily_deaths.png"
              />

              <ChartCard
                title="Russia-Ukraine – Monthly Deaths"
                src="/charts/04_ukraine_monthly_deaths.png"
              />

              <ChartCard
                title="Gaza vs West Bank Comparison"
                src="/charts/05_gaza_vs_westbank.png"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Demographic Analysis
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
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

function ChartCard({ title, src }: { title: string; src: string }) {
  return (
    <div className="bg-white/95 rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="px-5 py-3.5 border-b border-slate-100">
        <h4 className="font-medium text-slate-800 text-sm">{title}</h4>
      </div>

      <div className="p-4 bg-slate-50">
        <Image
          src={src}
          alt={title}
          width={700}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}
