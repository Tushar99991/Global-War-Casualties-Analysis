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
  Activity,
  Database,
  Sparkles,
  Globe2,
  Layers3,
} from "lucide-react";

export default function AnalysisPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f7f4ff] via-white to-[#eef2ff]">
      {/* Ambient background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl animate-pulse" />
        <div className="absolute right-[-120px] top-[30rem] h-[32rem] w-[32rem] rounded-full bg-indigo-300/20 blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute left-1/3 top-[75rem] h-80 w-80 rounded-full bg-blue-300/10 blur-3xl animate-pulse [animation-delay:4s]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* Header */}
      <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-12">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm text-slate-500 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-purple-200 hover:bg-white hover:text-slate-900 hover:shadow-md"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />
          Back to Home
        </Link>

        <div className="mt-9 max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-600 shadow-sm backdrop-blur-md">
            <Sparkles size={14} />
            Data Analysis
          </div>

          <h1 className="text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Data{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Analysis
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Exploration of casualty trends, demographic patterns, and
            comparative insights across the Russia-Ukraine and Israel-Palestine
            conflicts.
          </p>

          {/* Header visual stats */}
          <div className="mt-8 flex flex-wrap gap-3">
            {/* Trend Analysis */}
            <div className="group relative overflow-hidden rounded-full border border-purple-200/70 bg-gradient-to-r from-purple-50 via-white to-indigo-50 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/15">
              {/* animated glow */}
              <div className="pointer-events-none absolute -left-8 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-purple-400/20 blur-xl transition-all duration-500 group-hover:scale-[2.5] group-hover:bg-purple-400/30" />

              {/* shimmer */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-purple-500/30">
                  <BarChart3 size={14} />
                </span>

                <span className="transition-colors duration-300 group-hover:text-purple-700">
                  Trend Analysis
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-purple-400 opacity-70 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100" />
              </span>
            </div>

            {/* Demographics */}
            <div className="group relative overflow-hidden rounded-full border border-blue-200/70 bg-gradient-to-r from-blue-50 via-white to-indigo-50 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/15">
              {/* animated glow */}
              <div className="pointer-events-none absolute -left-8 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-blue-400/20 blur-xl transition-all duration-500 group-hover:scale-[2.5] group-hover:bg-blue-400/30" />

              {/* shimmer */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:shadow-blue-500/30">
                  <Users size={14} />
                </span>

                <span className="transition-colors duration-300 group-hover:text-blue-700">
                  Demographics
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 opacity-70 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100" />
              </span>
            </div>

            {/* Comparative Insights */}
            <div className="group relative overflow-hidden rounded-full border border-emerald-200/70 bg-gradient-to-r from-emerald-50 via-white to-teal-50 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/15">
              {/* animated glow */}
              <div className="pointer-events-none absolute -left-8 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-xl transition-all duration-500 group-hover:scale-[2.5] group-hover:bg-emerald-400/30" />

              {/* shimmer */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-emerald-500/30">
                  <Globe2 size={14} />
                </span>

                <span className="transition-colors duration-300 group-hover:text-emerald-700">
                  Comparative Insights
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-70 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Cards */}
      <section className="relative max-w-6xl mx-auto px-6 pb-14">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl hover:shadow-red-500/10">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-500/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-rose-100 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <TrendingUp className="text-red-600" size={21} />
                </div>

                <span className="rounded-full bg-red-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-red-500">
                  Trends
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                Time Series Trends
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Daily and monthly casualty trends were analyzed to identify
                peaks, periods of escalation, and changes over time in both
                conflicts.
              </p>

              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  Gaza daily reported deaths over time
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  Russia-Ukraine monthly battle-related deaths
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  Gaza vs West Bank comparison
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <Users className="text-blue-600" size={21} />
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-500">
                  Demographics
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                Demographic Analysis
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Individual-level records from Gaza were examined to understand
                the age and sex distribution of reported fatalities.
              </p>

              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Age group distribution (0-12 to 60+)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Sex breakdown of fatalities
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Proportion of children (0-18 years)
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/10">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-100 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <BarChart3 className="text-emerald-600" size={21} />
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-600">
                  KPIs
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                Comparative KPIs
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Key performance indicators were calculated to summarize the
                scale and characteristics of each conflict.
              </p>

              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Total reported deaths by region
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Peak daily and monthly figures
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Average daily casualty rates
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-violet-100 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <Map className="text-purple-600" size={21} />
                </div>

                <span className="rounded-full bg-purple-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-purple-600">
                  Geography
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                Geographic Distribution
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Event-level data from UCDP was used to examine the geographic
                spread of violence in the Russia-Ukraine conflict.
              </p>

              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  Event locations and coordinates
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  Regional concentration of fatalities
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  Civilian vs combatant deaths
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conflict-Specific Analysis */}
      <section className="relative max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 shadow-sm backdrop-blur-md">
            <Layers3 size={13} />
            Explore by Conflict
          </div>

          <h2 className="mb-2 text-3xl font-black tracking-tight text-slate-900">
            Conflict-Specific{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Analysis
            </span>
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
            Explore each conflict separately through its dedicated analysis
            page, including the interactive Power BI dashboard, findings, and
            methodology.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Israel-Palestine */}
          <Link
            href="/israel-palestine/analysis"
            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl hover:shadow-red-500/10"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-rose-400 to-orange-400 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-red-500/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

            <div className="relative">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-rose-100 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <BarChart3 className="text-red-600" size={20} />
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-300 transition-all duration-300 group-hover:border-red-200 group-hover:bg-red-50 group-hover:text-red-500">
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>

              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-red-500">
                Conflict Analysis
              </div>

              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                Israel-Palestine Analysis
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Explore reported casualty trends, demographic distributions,
                geographic differences, findings, methodology, and the
                interactive Power BI dashboard.
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors group-hover:text-red-600">
                Explore Israel-Palestine
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>

          {/* Russia-Ukraine */}
          <Link
            href="/russia-ukraine/analysis"
            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

            <div className="relative">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <BarChart3 className="text-blue-600" size={20} />
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-300 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-500">
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>

              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-500">
                Conflict Analysis
              </div>

              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                Russia-Ukraine Analysis
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Explore reported battle-related deaths, civilian fatalities,
                event trends, findings, methodology, and the interactive Power
                BI dashboard.
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors group-hover:text-blue-600">
                Explore Russia-Ukraine
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Interactive Tableau Dashboards */}
      <section className="relative max-w-6xl mx-auto px-6 pb-16">
        {/* Israel-Palestine Dashboard */}
        <div className="mb-14">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-red-500">
                <Activity size={13} />
                Interactive Dashboard
              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-900">
                Israel-Palestine{" "}
                <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
                  Analysis
                </span>
              </h2>
            </div>

            <a
              href="https://public.tableau.com/app/profile/tushar.pandey3714/viz/GlobalWarCasualties-IsraelPalestineAnalysis/CasualtiesDashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md"
            >
              Open in Tableau Public
              <ExternalLink
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-red-100/80 bg-white p-2 shadow-xl shadow-red-500/5 transition-all duration-500 hover:border-red-200 hover:shadow-2xl hover:shadow-red-500/10">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-red-400/70 to-transparent" />

            <div
              className="w-full overflow-hidden rounded-2xl"
              style={{ height: "750px" }}
            >
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

          <p className="mt-3 text-center text-sm text-slate-500">
            Interactive Tableau dashboard for reported casualties in the
            Israel-Palestine conflict. Use filters and hover for details.
          </p>
        </div>

        {/* Russia-Ukraine Dashboard */}
        <div>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-500">
                <Activity size={13} />
                Interactive Dashboard
              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-900">
                Russia-Ukraine{" "}
                <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Analysis
                </span>
              </h2>
            </div>

            <a
              href="https://public.tableau.com/app/profile/tushar.pandey3714/viz/GlobalWarCasualties-RussiaUkraineAnalysis/Dashboard1"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md"
            >
              Open in Tableau Public
              <ExternalLink
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-blue-100/80 bg-white p-2 shadow-xl shadow-blue-500/5 transition-all duration-500 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

            <div
              className="w-full overflow-hidden rounded-2xl"
              style={{ height: "750px" }}
            >
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

          <p className="mt-3 text-center text-sm text-slate-500">
            Interactive Tableau dashboard for Russia-Ukraine conflict
            casualties. Use filters and hover for details.
          </p>
        </div>
      </section>

      {/* Static Charts Section */}
      <section className="relative max-w-6xl mx-auto px-6 pb-20">
        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 shadow-sm backdrop-blur-md">
            <BarChart3 size={13} />
            Supporting Analysis
          </div>

          <h2 className="mb-2 text-3xl font-black tracking-tight text-slate-900">
            Supporting{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Visualizations
            </span>
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
            Static visualizations supporting the interactive dashboards and
            highlighting key analytical dimensions of the datasets.
          </p>
        </div>

        <div className="space-y-10">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-purple-200 to-transparent" />
              <h3 className="text-lg font-bold text-slate-800">
                Time Series Trends
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-purple-200 to-transparent" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
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
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent" />
              <h3 className="text-lg font-bold text-slate-800">
                Demographic Analysis
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-blue-200 to-transparent" />
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

function ChartCard({ title, src }: { title: string; src: string }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/10">
      {/* Animated top accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header */}
      <div className="relative flex items-center justify-between border-b border-slate-100 bg-white/80 px-5 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-indigo-100 text-purple-600 shadow-sm transition-transform duration-500 group-hover:scale-110">
            <BarChart3 size={16} />
          </div>

          <h4 className="text-sm font-bold text-slate-800">{title}</h4>
        </div>

        <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.55)]" />
      </div>

      {/* Chart */}
      <div className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50/40 p-4">
        <div className="pointer-events-none absolute inset-4 rounded-xl border border-white/80 shadow-inner" />

        <Image
          src={src}
          alt={title}
          width={700}
          height={400}
          className="relative z-10 h-auto w-full rounded-xl shadow-sm transition-transform duration-500 group-hover:scale-[1.015]"
        />
      </div>
    </div>
  );
}
