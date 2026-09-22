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
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function MethodologyPage() {
  const roadmap = [
    {
      number: "01",
      title: "Data Sources",
      description: "Collect datasets from documented public sources.",
      icon: Database,
      color: "blue",
      bg: "bg-blue-50/80",
      border: "border-blue-100/80",
      text: "text-blue-600",
      glow: "group-hover:shadow-blue-500/15",
    },
    {
      number: "02",
      title: "Data Pipeline",
      description: "Organize raw, cleaned, and BI-ready files.",
      icon: Layers,
      color: "emerald",
      bg: "bg-emerald-50/80",
      border: "border-emerald-100/80",
      text: "text-emerald-600",
      glow: "group-hover:shadow-emerald-500/15",
    },
    {
      number: "03",
      title: "Clean & Transform",
      description:
        "Standardize fields, handle missing values, and derive variables.",
      icon: Filter,
      color: "purple",
      bg: "bg-purple-50/80",
      border: "border-purple-100/80",
      text: "text-purple-600",
      glow: "group-hover:shadow-purple-500/15",
    },
    {
      number: "04",
      title: "Analyze",
      description: "Explore trends, demographics, and comparative KPIs.",
      icon: BarChart3,
      color: "orange",
      bg: "bg-orange-50/80",
      border: "border-orange-100/80",
      text: "text-orange-600",
      glow: "group-hover:shadow-orange-500/15",
    },
    {
      number: "05",
      title: "Visualize",
      description: "Build charts and interactive Tableau dashboards.",
      icon: FileText,
      color: "slate",
      bg: "bg-slate-50/90",
      border: "border-slate-200/80",
      text: "text-slate-600",
      glow: "group-hover:shadow-slate-500/15",
    },
    {
      number: "06",
      title: "Extract Insights",
      description: "Present findings with transparent limitations.",
      icon: Sparkles,
      color: "indigo",
      bg: "bg-indigo-50/80",
      border: "border-indigo-100/80",
      text: "text-indigo-600",
      glow: "group-hover:shadow-indigo-500/15",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_#f5f3ff_0,_#ffffff_38%,_#eef2ff_100%)] text-slate-900 selection:bg-purple-200 selection:text-purple-950">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 animate-pulse rounded-full bg-purple-300/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-1/4 h-[32rem] w-[32rem] animate-pulse rounded-full bg-indigo-300/20 blur-3xl [animation-delay:1.5s]" />
        <div className="absolute bottom-[-12rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-blue-200/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      {/* Header */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-6 sm:pt-14 lg:pt-20">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm font-medium text-slate-500 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:border-purple-200 hover:bg-white hover:text-slate-900 hover:shadow-md"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />
          Back to Home
        </Link>

        <div className="relative">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-purple-600 shadow-sm backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-600" />
            </span>
            Project Methodology
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl leading-[1.15]">
            Methodology
            <span className="mt-2 block pb-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              From raw data to insight.
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Overview of data sources, cleaning pipeline, analytical approach,
            and tools used in this project.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {["Data-driven", "Reproducible", "Transparent", "BI-ready"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200/80 bg-white/75 px-3.5 py-1.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:text-purple-700 hover:shadow-md"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Methodology Roadmap */}
      <section className="mx-auto max-w-6xl px-5 pb-10 sm:px-6">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_24px_80px_-35px_rgba(76,29,149,0.28)] backdrop-blur-2xl sm:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl transition-transform duration-700 group-hover:scale-125" />

          <div className="relative mb-8">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-purple-600">
              <Sparkles size={14} />
              Analysis Workflow
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Methodology Roadmap
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              A structured workflow from raw conflict data to cleaned datasets,
              analytical insights, and interactive visualizations.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {roadmap.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="group/step relative">
                  {index < roadmap.length - 1 && (
                    <div className="absolute left-[calc(100%+2px)] top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                      <ArrowRight
                        size={15}
                        className="text-slate-300 transition-all duration-300 group-hover/step:translate-x-1 group-hover/step:text-purple-400"
                      />
                    </div>
                  )}

                  <div
                    className={`relative h-full overflow-hidden rounded-2xl border ${step.border} ${step.bg} p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl ${step.glow}`}
                  >
                    <div className="absolute -right-5 -top-5 h-16 w-16 rounded-full bg-white/50 blur-xl transition-transform duration-500 group-hover/step:scale-150" />

                    <div className="relative flex items-center justify-between">
                      <span className={`text-xs font-black ${step.text}`}>
                        {step.number}
                      </span>
                      <Icon
                        size={16}
                        className={`${step.text} opacity-70 transition-transform duration-500 group-hover/step:rotate-6 group-hover/step:scale-110`}
                      />
                    </div>

                    <h3 className="relative mt-3 text-sm font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="relative mt-1.5 text-xs leading-5 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl space-y-5 px-5 pb-20 sm:px-6">
        {/* Data Sources */}
        <div className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.3)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_70px_-30px_rgba(37,99,235,0.25)] sm:p-8">
          <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-blue-100/40 blur-2xl transition-transform duration-700 group-hover:scale-150" />

          <div className="relative flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 ring-1 ring-blue-100 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/10">
              <Database className="text-blue-600" size={20} />
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
                Foundation
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                1. Data Sources
              </h2>
            </div>
          </div>

          <div className="relative mt-7 grid gap-4 text-sm leading-relaxed text-slate-600 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/40">
              <p className="mb-3 font-bold text-slate-800">Russia – Ukraine</p>
              <ul className="space-y-2.5">
                <li className="flex gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-blue-500"
                  />
                  <span>
                    Uppsala Conflict Data Program (UCDP) – Georeferenced Event
                    Dataset
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-blue-500"
                  />
                  <span>
                    Our World in Data – War & Peace (aggregated conflict deaths)
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/40">
              <p className="mb-3 font-bold text-slate-800">
                Israel – Palestine
              </p>
              <ul className="space-y-2.5">
                <li className="flex gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-blue-500"
                  />
                  <span>Tech for Palestine – Gaza Daily Casualties</span>
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-blue-500"
                  />
                  <span>Tech for Palestine – West Bank Daily Casualties</span>
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-blue-500"
                  />
                  <span>
                    Tech for Palestine – Killed in Gaza (individual demographic
                    records)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Pipeline */}
        <div className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.3)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_25px_70px_-30px_rgba(16,185,129,0.22)] sm:p-8">
          <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-emerald-100/40 blur-2xl transition-transform duration-700 group-hover:scale-150" />

          <div className="relative flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100 transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/10">
              <Layers className="text-emerald-600" size={20} />
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-600">
                Organization
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                2. Data Pipeline
              </h2>
            </div>
          </div>

          <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-emerald-50/40">
              <span className="block text-xs font-bold uppercase tracking-wider text-emerald-600">
                Raw
              </span>
              <span className="mt-1.5 block text-sm text-slate-600">
                Original CSV files stored in{" "}
                <code className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                  data/raw/
                </code>
              </span>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-emerald-50/40">
              <span className="block text-xs font-bold uppercase tracking-wider text-emerald-600">
                Cleaned
              </span>
              <span className="mt-1.5 block text-sm text-slate-600">
                Standardized and cleaned files saved in{" "}
                <code className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                  data/processed/
                </code>
              </span>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-emerald-50/40">
              <span className="block text-xs font-bold uppercase tracking-wider text-emerald-600">
                BI-Ready
              </span>
              <span className="mt-1.5 block text-sm text-slate-600">
                Analysis-ready files prepared in{" "}
                <code className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                  data/bi_ready/
                </code>
              </span>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-emerald-50/40">
              <span className="block text-xs font-bold uppercase tracking-wider text-emerald-600">
                Dashboard
              </span>
              <span className="mt-1.5 block text-sm text-slate-600">
                Interactive Tableau Public dashboard + static charts
              </span>
            </div>
          </div>
        </div>

        {/* Data Cleaning */}
        <div className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.3)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-purple-200 hover:shadow-[0_25px_70px_-30px_rgba(147,51,234,0.22)] sm:p-8">
          <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-purple-100/40 blur-2xl transition-transform duration-700 group-hover:scale-150" />

          <div className="relative flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 ring-1 ring-purple-100 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/10">
              <Filter className="text-purple-600" size={20} />
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-purple-600">
                Transformation
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                3. Data Cleaning &amp; Transformation
              </h2>
            </div>
          </div>

          <ul className="relative mt-7 grid gap-3 text-sm leading-relaxed text-slate-600 md:grid-cols-2">
            {[
              "Standardized date formats across all datasets",
              "Converted death counts to numeric types and handled missing values",
              "Filtered UCDP data to Russia-Ukraine related events only (45,830 events retained)",
              "Created derived fields: daily killed, age groups, conflict labels, location",
              "Generated monthly aggregates for Russia-Ukraine data",
              "Built a combined daily master file for Israel-Palestine (Gaza + West Bank)",
              "Cleaned demographic records (sex standardization + age group binning)",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-transparent bg-slate-50/60 p-3 transition-all duration-300 hover:border-purple-100 hover:bg-purple-50/50"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-purple-500 shadow-sm shadow-purple-500/50" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Analytical Approach */}
        <div className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.3)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_25px_70px_-30px_rgba(249,115,22,0.22)] sm:p-8">
          <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-orange-100/40 blur-2xl transition-transform duration-700 group-hover:scale-150" />

          <div className="relative flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 ring-1 ring-orange-100 transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/10">
              <BarChart3 className="text-orange-600" size={20} />
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-orange-600">
                Analysis
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                4. Analytical Approach
              </h2>
            </div>
          </div>

          <ul className="relative mt-7 grid gap-3 md:grid-cols-2">
            {[
              "Exploratory Data Analysis (EDA) using Pandas, Matplotlib, and Seaborn",
              "Time-series analysis of daily and monthly casualty trends",
              "Demographic breakdown by age group and sex (Gaza)",
              "Comparative KPIs between the two conflicts",
              "Preparation of clean, analysis-ready files for BI tools",
              "Interactive dashboard created in Tableau Public",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3.5 text-sm text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-100 hover:bg-orange-50/50"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-100/70 text-xs font-bold text-orange-600">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.3)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_25px_70px_-30px_rgba(15,23,42,0.24)] sm:p-8">
          <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-slate-200/50 blur-2xl transition-transform duration-700 group-hover:scale-150" />

          <div className="relative flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 ring-1 ring-slate-200 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-lg">
              <FileText className="text-slate-600" size={20} />
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                Stack
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                5. Tools &amp; Technologies
              </h2>
            </div>
          </div>

          <div className="relative mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Python, Pandas, NumPy",
              "Matplotlib & Seaborn",
              "Tableau Public",
              "Power BI (optional)",
              "Next.js + Tailwind CSS",
              "Vercel (Deployment)",
            ].map((tool) => (
              <div
                key={tool}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3.5 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:bg-white hover:text-slate-900 hover:shadow-md"
              >
                <div className="h-2 w-2 shrink-0 rounded-full bg-slate-400 transition-all duration-300 group-hover:bg-slate-600" />
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Limitations */}
        <div className="group relative overflow-hidden rounded-[1.75rem] border border-slate-800/80 bg-slate-950 p-6 text-white shadow-[0_25px_80px_-30px_rgba(15,23,42,0.65)] sm:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl transition-transform duration-700 group-hover:scale-125" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <Globe size={18} className="text-slate-300" />
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                Transparency
              </div>
              <h2 className="text-lg font-bold sm:text-xl">
                Limitations &amp; Notes
              </h2>
            </div>
          </div>

          <p className="relative mt-6 max-w-4xl text-sm leading-7 text-slate-300">
            Casualty figures, especially during active conflict periods, may be
            incomplete or revised later by the original data providers. This
            project treats all numbers as reported figures from the cited
            sources. No political interpretation or judgment is applied — the
            focus remains strictly on data patterns, trends, and demographic
            distribution.
          </p>

          <div className="relative mt-6 h-px w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
          <div className="relative mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
            <CheckCircle2 size={14} />
            Transparent methodology and source-aware reporting
          </div>
        </div>
      </section>
    </div>
  );
}
