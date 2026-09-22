"use client";

import Link from "next/link";
import Image from "next/image";

import {
  ArrowLeft,
  TrendingUp,
  Users,
  BarChart3,
  ExternalLink,
} from "lucide-react";

export default function IsraelPalestineAnalysisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <Link
          href="/israel-palestine"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Israel-Palestine
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Israel-Palestine Data Analysis
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl">
          Analysis of reported casualty trends, geographic differences, and
          demographic patterns using Gaza and West Bank casualty data.
        </p>
      </section>

      {/* Analysis Overview */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Time Series */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center mb-5">
              <TrendingUp className="text-red-600" size={20} />
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Time Series Trends
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Daily reported casualty data was analyzed to examine changes over
              time and identify periods of higher reported fatalities.
            </p>

            <ul className="text-sm text-slate-600 space-y-1.5">
              <li>• Gaza daily reported deaths over time</li>
              <li>• Gaza vs West Bank comparison</li>
              <li>• Temporal patterns in reported fatalities</li>
            </ul>
          </div>

          {/* Demographics */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
              <Users className="text-blue-600" size={20} />
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Demographic Analysis
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Individual-level Gaza records were examined to understand the
              reported age and sex distribution of fatalities.
            </p>

            <ul className="text-sm text-slate-600 space-y-1.5">
              <li>• Age distribution of reported fatalities</li>
              <li>• Sex distribution of reported fatalities</li>
              <li>• Age group by sex</li>
            </ul>
          </div>

          {/* Comparative Analysis */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center mb-5">
              <BarChart3 className="text-emerald-600" size={20} />
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Comparative Analysis
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Reported casualty totals were examined across Gaza and the West
              Bank to identify differences in the distribution of fatalities.
            </p>

            <ul className="text-sm text-slate-600 space-y-1.5">
              <li>• Total reported deaths by region</li>
              <li>• Gaza and West Bank trends</li>
              <li>• Regional casualty concentration</li>
            </ul>
          </div>

          {/* Data Scope */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-11 h-11 bg-purple-50 rounded-xl flex items-center justify-center mb-5">
              <Users className="text-purple-600" size={20} />
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Data Scope
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              The analysis combines daily casualty reporting with
              individual-level demographic records to support both aggregate and
              demographic analysis.
            </p>

            <ul className="text-sm text-slate-600 space-y-1.5">
              <li>• Gaza daily casualty records</li>
              <li>• West Bank daily casualty records</li>
              <li>• Gaza individual demographic records</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Analysis Outputs */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-white/80 rounded-2xl border border-slate-200/80 p-7 md:p-8 shadow-sm">
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-[0.15em] mb-2">
                Analysis Outputs
              </p>

              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                From Raw Records to Analytical Views
              </h2>
            </div>

            <p className="hidden md:block text-sm text-slate-500 max-w-sm text-right">
              The analysis combines aggregate time-series data with
              individual-level demographic records.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.12em] mb-2">
                01 · Aggregate
              </p>

              <h3 className="font-semibold text-slate-900 mb-2">
                Daily Reporting
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Daily Gaza and West Bank records are used to examine reported
                fatalities over time and compare geographic reporting patterns.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.12em] mb-2">
                02 · Demographic
              </p>

              <h3 className="font-semibold text-slate-900 mb-2">
                Individual Records
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Individual Gaza records are grouped by age and sex to examine
                the demographic composition of reported fatalities.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.12em] mb-2">
                03 · Visualization
              </p>

              <h3 className="font-semibold text-slate-900 mb-2">
                Interactive & Static
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Power BI, Tableau, and Python-generated visualizations present
                the resulting trends, comparisons, and demographic
                distributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Power BI Dashboard */}
      <section className="max-w-[1200px] mx-auto px-6 pb-16">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6 gap-4">
            <div>
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-[0.15em] mb-2">
                Interactive BI
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                Interactive Power BI Dashboard
              </h2>
            </div>

            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiNWEyMDcyYTYtZGQzYy00MzVmLTliOGMtYzhlM2VmMzEyNWYxIiwidCI6IjM0YmQ4YmVkLTJhYzEtNDFhZS05ZjA4LTRlMGEzZjExNzA2YyJ9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              Open in Power BI
              <ExternalLink size={14} />
            </a>
          </div>

          <div
            className="relative w-full overflow-hidden"
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

          <p className="text-sm text-slate-500 mt-3 text-center">
            Interactive Power BI report containing Israel–Palestine and
            Russia–Ukraine analysis. Use the report tabs to explore both pages.
          </p>
        </div>
      </section>
      {/* Interactive Tableau Dashboard */}
      <section className="max-w-[1200px] mx-auto px-6 pb-16">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6 gap-4">
            <div>
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-[0.15em] mb-2">
                Interactive Visualization
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                Interactive Tableau Dashboard
              </h2>
            </div>

            <a
              href="https://public.tableau.com/views/GlobalWarCasualties-IsraelPalestineAnalysis/CasualtiesDashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              Open in Tableau
              <ExternalLink size={14} />
            </a>
          </div>

          <div
            className="relative w-full overflow-hidden"
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

          <p className="text-sm text-slate-500 mt-3 text-center">
            Interactive Tableau dashboard presenting Israel–Palestine casualty
            trends and analytical views.
          </p>
        </div>
      </section>

      {/* Supporting Visualizations */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="mb-8">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-[0.15em] mb-2">
            Supporting Evidence
          </p>

          <h2 className="text-2xl font-bold text-slate-900">
            Supporting Visualizations
          </h2>

          <p className="text-sm text-slate-500 mt-2 max-w-2xl">
            Static charts provide focused views of the underlying analysis and
            complement the interactive Power BI dashboard above.
          </p>
        </div>

        <div className="space-y-10">
          {/* Time Series */}
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
                title="Gaza vs West Bank Comparison"
                src="/charts/05_gaza_vs_westbank.png"
              />
            </div>
          </div>

          {/* Demographic Analysis */}
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
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-5 py-3 border-b border-slate-100">
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
