"use client";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  Database,
  FileText,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

export default function IsraelPalestinePage() {
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
        <div className="pointer-events-none absolute left-0 top-8 h-32 w-32 rounded-full bg-red-400/10 blur-3xl" />

        <Link
          href="/"
          aria-label="Back to Home"
          className="group relative inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-6 transition-all duration-300"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:-translate-x-1 group-hover:border-red-200 group-hover:bg-red-50 group-hover:shadow-md">
            <ArrowLeft size={16} aria-hidden="true" />
          </span>

          <span className="relative">
            Back to Home
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>

        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200/70 bg-white/70 px-4 py-1.5 text-sm font-medium text-red-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-red-300 hover:bg-red-50 hover:shadow-md">
            <Sparkles size={14} className="animate-pulse" />
            Israel–Palestine Analysis
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            <span className="bg-gradient-to-r from-slate-900 via-red-700 to-indigo-700 bg-clip-text text-transparent">
              Israel–Palestine
            </span>
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            A dedicated analysis of reported casualty patterns, demographic
            distributions, and geographic differences using publicly available
            datasets.
          </p>

          <div className="mt-6 h-1 w-24 overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-white/70" />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Navigation Cards */}
      {/* ========================================================= */}

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {/* ===================================================== */}
          {/* Analysis */}
          {/* ===================================================== */}

          <Link
            href="/israel-palestine/analysis"
            aria-label="View Israel–Palestine analysis"
            className="group relative overflow-hidden rounded-2xl border border-red-200/60 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-2xl hover:shadow-red-100/60"
          >
            <div className="absolute left-0 right-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-red-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-300/20 blur-3xl opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 ring-1 ring-red-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-red-100 group-hover:shadow-lg group-hover:shadow-red-100">
                <BarChart3
                  className="text-red-600"
                  size={20}
                  aria-hidden="true"
                />
              </div>

              <h2 className="mb-2 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-red-700">
                Analysis
              </h2>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Explore casualty trends, demographic distributions, supporting
                visualizations, and the interactive Tableau dashboard.
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors group-hover:text-red-600">
                View analysis
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>

          {/* ===================================================== */}
          {/* Findings */}
          {/* ===================================================== */}

          <Link
            href="/israel-palestine/findings"
            aria-label="View Israel–Palestine key findings"
            className="group relative overflow-hidden rounded-2xl border border-blue-200/60 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/60"
          >
            <div className="absolute left-0 right-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-blue-100 group-hover:shadow-lg group-hover:shadow-blue-100">
                <FileText
                  className="text-blue-600"
                  size={20}
                  aria-hidden="true"
                />
              </div>

              <h2 className="mb-2 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                Key Findings
              </h2>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Review the main data-driven observations from casualty,
                demographic, and time-series analysis.
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors group-hover:text-blue-600">
                View findings
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>

          {/* ===================================================== */}
          {/* Methodology */}
          {/* ===================================================== */}

          <Link
            href="/israel-palestine/methodology"
            aria-label="View Israel–Palestine methodology"
            className="group relative overflow-hidden rounded-2xl border border-emerald-200/60 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-100/60"
          >
            <div className="absolute left-0 right-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-emerald-100 group-hover:shadow-lg group-hover:shadow-emerald-100">
                <BookOpen
                  className="text-emerald-600"
                  size={20}
                  aria-hidden="true"
                />
              </div>

              <h2 className="mb-2 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-emerald-700">
                Methodology
              </h2>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Understand the data sources, cleaning process, transformations,
                analytical methods, and limitations.
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors group-hover:text-emerald-600">
                View methodology
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Dataset Overview */}
      {/* ========================================================= */}

      <section className="relative border-y border-slate-200/80 bg-white/70 backdrop-blur-xl">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-indigo-100/30 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* =================================================== */}
            {/* Analysis Scope */}
            {/* =================================================== */}

            <div className="relative">
              <div className="absolute -left-4 top-0 h-24 w-1 rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-600">
                Dataset Overview
              </p>

              <h2 className="mb-5 text-2xl font-bold tracking-tight text-slate-900">
                <span className="bg-gradient-to-r from-slate-900 to-indigo-700 bg-clip-text text-transparent">
                  Analysis Scope
                </span>
              </h2>

              <p className="mb-4 leading-relaxed text-slate-600">
                The Israel–Palestine analysis focuses on reported casualty
                patterns across Gaza and the West Bank, together with
                individual-level demographic records from Gaza.
              </p>

              <p className="leading-relaxed text-slate-600">
                The analysis includes time-series trends, regional
                comparisons, age distributions, sex distributions, and
                interactive visualization through Tableau Public.
              </p>

              {/* Decorative metric strip */}
              <div className="mt-7 flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 rounded-lg border border-indigo-100 bg-indigo-50/70 px-3 py-2 text-xs font-medium text-indigo-700">
                  <BarChart3 size={14} />
                  Time-Series
                </div>

                <div className="inline-flex items-center gap-2 rounded-lg border border-red-100 bg-red-50/70 px-3 py-2 text-xs font-medium text-red-700">
                  <MapPin size={14} />
                  Regional
                </div>

                <div className="inline-flex items-center gap-2 rounded-lg border border-purple-100 bg-purple-50/70 px-3 py-2 text-xs font-medium text-purple-700">
                  <Users size={14} />
                  Demographics
                </div>
              </div>
            </div>

            {/* =================================================== */}
            {/* Data Components */}
            {/* =================================================== */}

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white/90 hover:shadow-xl hover:shadow-indigo-100/40">
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-200/20 blur-3xl opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 ring-1 ring-indigo-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Database
                      className="text-indigo-600"
                      size={18}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-semibold text-slate-900">
                    Data Components
                  </h3>
                </div>

                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="group/item flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 transition-all duration-300 group-hover/item:scale-150 group-hover/item:bg-red-500" />
                    </span>
                    Gaza daily reported casualties
                  </li>

                  <li className="group/item flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 transition-all duration-300 group-hover/item:scale-150 group-hover/item:bg-blue-500" />
                    </span>
                    West Bank daily reported casualties
                  </li>

                  <li className="group/item flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 transition-all duration-300 group-hover/item:scale-150 group-hover/item:bg-purple-500" />
                    </span>
                    Individual demographic records from Gaza
                  </li>

                  <li className="group/item flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 transition-all duration-300 group-hover/item:scale-150 group-hover/item:bg-emerald-500" />
                    </span>
                    Age and sex distributions
                  </li>

                  <li className="group/item flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 transition-all duration-300 group-hover/item:scale-150 group-hover/item:bg-indigo-500" />
                    </span>
                    Daily time-series analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Dashboard CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-slate-900">
        {/* Background glows */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 -bottom-32 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl" />

        {/* Animated top line */}
        <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 py-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 backdrop-blur-sm">
            <BarChart3 size={13} />
            Interactive Visualization
          </div>

          <h2 className="mb-3 text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-white via-slate-100 to-indigo-300 bg-clip-text text-transparent">
              Explore the Interactive Analysis
            </span>
          </h2>

          <p className="mx-auto mb-7 max-w-lg leading-relaxed text-slate-400">
            Explore the Israel–Palestine data through interactive dashboards,
            charts, and detailed findings.
          </p>

          <Link
            href="/israel-palestine/analysis"
            aria-label="Open Israel–Palestine interactive analysis"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-medium text-slate-900 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl hover:shadow-indigo-900/30"
          >
            Open Analysis

            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}