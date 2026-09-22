"use client";

import Link from "next/link";

import {
  ArrowLeft,
  Database,
  Filter,
  BarChart3,
  FileText,
  Globe,
  Layers,
} from "lucide-react";

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 mb-6 transition-all hover:-translate-x-0.5"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-purple-600">
          Project Methodology
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Methodology
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Overview of data sources, cleaning pipeline, analytical approach, and
          tools used in this project.
        </p>
      </section>

      {/* Methodology Roadmap */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-7 md:p-8 border border-slate-200/80 shadow-sm">
          <div className="mb-7">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600 mb-2">
              Analysis Workflow
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Methodology Roadmap
            </h2>

            <p className="text-sm text-slate-600 max-w-2xl">
              A structured workflow from raw conflict data to cleaned datasets,
              analytical insights, and interactive visualizations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            <div className="relative">
              <div className="h-full rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                <div className="text-xs font-bold text-blue-600 mb-2">01</div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Data Sources
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Collect datasets from documented public sources.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="h-full rounded-xl border border-emerald-100 bg-emerald-50/70 p-4">
                <div className="text-xs font-bold text-emerald-600 mb-2">
                  02
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Data Pipeline
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Organize raw, cleaned, and BI-ready files.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="h-full rounded-xl border border-purple-100 bg-purple-50/70 p-4">
                <div className="text-xs font-bold text-purple-600 mb-2">03</div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Clean & Transform
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Standardize fields, handle missing values, and derive
                  variables.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="h-full rounded-xl border border-orange-100 bg-orange-50/70 p-4">
                <div className="text-xs font-bold text-orange-600 mb-2">04</div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Analyze
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Explore trends, demographics, and comparative KPIs.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="h-full rounded-xl border border-slate-200 bg-slate-50/80 p-4">
                <div className="text-xs font-bold text-slate-600 mb-2">05</div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Visualize
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Build charts and interactive Tableau dashboards.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="h-full rounded-xl border border-indigo-100 bg-indigo-50/70 p-4">
                <div className="text-xs font-bold text-indigo-600 mb-2">06</div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Extract Insights
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Present findings with transparent limitations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 pb-20 space-y-6">
        {/* Data Sources */}
        <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-purple-200">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Database className="text-blue-600" size={18} />
            </div>

            <h2 className="text-xl font-semibold text-slate-900">
              1. Data Sources
            </h2>
          </div>

          <div className="space-y-5 text-sm text-slate-600 leading-relaxed">
            <div>
              <p className="font-medium text-slate-800 mb-1">
                Russia – Ukraine
              </p>

              <ul className="list-disc list-inside space-y-1 ml-1">
                <li>
                  Uppsala Conflict Data Program (UCDP) – Georeferenced Event
                  Dataset
                </li>
                <li>
                  Our World in Data – War & Peace (aggregated conflict deaths)
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-slate-800 mb-1">
                Israel – Palestine
              </p>

              <ul className="list-disc list-inside space-y-1 ml-1">
                <li>Tech for Palestine – Gaza Daily Casualties</li>
                <li>Tech for Palestine – West Bank Daily Casualties</li>
                <li>
                  Tech for Palestine – Killed in Gaza (individual demographic
                  records)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Pipeline */}
        <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-purple-200">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Layers className="text-emerald-600" size={18} />
            </div>

            <h2 className="text-xl font-semibold text-slate-900">
              2. Data Pipeline
            </h2>
          </div>

          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <span className="font-semibold text-slate-800 min-w-[90px]">
                Raw
              </span>
              <span>
                Original CSV files stored in{" "}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">
                  data/raw/
                </code>
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-semibold text-slate-800 min-w-[90px]">
                Cleaned
              </span>
              <span>
                Standardized and cleaned files saved in{" "}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">
                  data/processed/
                </code>
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-semibold text-slate-800 min-w-[90px]">
                BI-Ready
              </span>
              <span>
                Analysis-ready files prepared in{" "}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">
                  data/bi_ready/
                </code>
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-semibold text-slate-800 min-w-[90px]">
                Dashboard
              </span>
              <span>Interactive Tableau Public dashboard + static charts</span>
            </div>
          </div>
        </div>

        {/* Data Cleaning */}
        <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-purple-200">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Filter className="text-purple-600" size={18} />
            </div>

            <h2 className="text-xl font-semibold text-slate-900">
              3. Data Cleaning & Transformation
            </h2>
          </div>

          <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
            <li>• Standardized date formats across all datasets</li>
            <li>
              • Converted death counts to numeric types and handled missing
              values
            </li>
            <li>
              • Filtered UCDP data to Russia-Ukraine related events only (45,830
              events retained)
            </li>
            <li>
              • Created derived fields: daily killed, age groups, conflict
              labels, location
            </li>
            <li>• Generated monthly aggregates for Russia-Ukraine data</li>
            <li>
              • Built a combined daily master file for Israel-Palestine (Gaza +
              West Bank)
            </li>
            <li>
              • Cleaned demographic records (sex standardization + age group
              binning)
            </li>
          </ul>
        </div>

        {/* Analytical Approach */}
        <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-purple-200">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <BarChart3 className="text-orange-600" size={18} />
            </div>

            <h2 className="text-xl font-semibold text-slate-900">
              4. Analytical Approach
            </h2>
          </div>

          <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
            <li>
              • Exploratory Data Analysis (EDA) using Pandas, Matplotlib, and
              Seaborn
            </li>
            <li>• Time-series analysis of daily and monthly casualty trends</li>
            <li>• Demographic breakdown by age group and sex (Gaza)</li>
            <li>• Comparative KPIs between the two conflicts</li>
            <li>• Preparation of clean, analysis-ready files for BI tools</li>
            <li>• Interactive dashboard created in Tableau Public</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-purple-200">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <FileText className="text-slate-600" size={18} />
            </div>

            <h2 className="text-xl font-semibold text-slate-900">
              5. Tools & Technologies
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              Python, Pandas, NumPy
            </div>

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              Matplotlib & Seaborn
            </div>

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              Tableau Public
            </div>

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              Power BI (optional)
            </div>

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              Next.js + Tailwind CSS
            </div>

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              Vercel (Deployment)
            </div>
          </div>
        </div>

        {/* Limitations */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl shadow-slate-900/10">
          <div className="flex items-center gap-3 mb-4">
            <Globe size={18} className="text-slate-400" />

            <h2 className="text-lg font-semibold">Limitations & Notes</h2>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Casualty figures, especially during active conflict periods, may be
            incomplete or revised later by the original data providers. This
            project treats all numbers as reported figures from the cited
            sources. No political interpretation or judgment is applied — the
            focus remains strictly on data patterns, trends, and demographic
            distribution.
          </p>
        </div>
      </section>
    </div>
  );
}
