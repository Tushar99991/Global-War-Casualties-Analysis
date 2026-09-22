"use client";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  ChartNoAxesCombined,
  CheckCircle2,
  Database,
  Globe2,
  Layers3,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

export default function FindingsPage() {
  const kpis = [
    {
      icon: "☠️",
      label: "Total Reported Deaths",
      value: "73,134",
      detail: "Israel-Palestine",
      accent: "from-rose-500/15 to-red-500/5",
      iconBg: "bg-rose-50",
      iconRing: "ring-rose-100",
      valueColor: "text-slate-950",
    },
    {
      icon: "📍",
      label: "Gaza Share",
      value: "99.0%",
      detail: "72,399 deaths",
      accent: "from-red-500/15 to-orange-500/5",
      iconBg: "bg-red-50",
      iconRing: "ring-red-100",
      valueColor: "text-red-600",
    },
    {
      icon: "👶",
      label: "Children (0–18)",
      value: "30.5%",
      detail: "22,213 fatalities",
      accent: "from-violet-500/15 to-purple-500/5",
      iconBg: "bg-violet-50",
      iconRing: "ring-violet-100",
      valueColor: "text-slate-950",
    },
    {
      icon: "👨",
      label: "Male Fatalities",
      value: "70.0%",
      detail: "Female: 30.0%",
      accent: "from-blue-500/15 to-indigo-500/5",
      iconBg: "bg-blue-50",
      iconRing: "ring-blue-100",
      valueColor: "text-slate-950",
    },
  ];

  const findings = [
    {
      number: "01",
      emoji: "🔴",
      eyebrow: "Geographic concentration",
      title: "Heavy Concentration of Casualties in Gaza",
      accent: "red",
      content: (
        <>
          Out of the total <strong>73,134</strong> reported deaths in the
          Israel-Palestine dataset, <strong>72,399 (99.0%)</strong> occurred in
          Gaza, while the West Bank accounted for only
          <strong> 735 (1.0%)</strong> deaths. Daily time-series analysis shows
          multiple sharp spikes, including a peak of
          <strong> 828 reported deaths on 2023-11-21</strong>.
        </>
      ),
      icon: MapPin,
    },
    {
      number: "02",
      emoji: "👶",
      eyebrow: "Demographic profile",
      title: "Children Represent 30.5% of Fatalities",
      accent: "violet",
      content: (
        <>
          Analysis of <strong>72,835</strong> individual records from Gaza shows
          that <strong>22,213 people (30.5%)</strong> were children aged 0–18.
          Among the recorded age groups, 19–30 accounted for
          <strong> 26.71%</strong> and 31–45 accounted for
          <strong> 24.42%</strong>. Age was missing for 1,072 records.
        </>
      ),
      icon: Users,
    },
    {
      number: "03",
      emoji: "👨‍🦰👩",
      eyebrow: "Sex distribution",
      title: "Sex Distribution of Fatalities",
      accent: "blue",
      content: (
        <>
          Among the Gaza demographic records, <strong>69.96%</strong> of
          fatalities were male and <strong>30.04%</strong> were female. These
          percentages are calculated from the records with reported sex
          information.
        </>
      ),
      icon: Users,
    },
    {
      number: "04",
      emoji: "📈",
      eyebrow: "Time-series analysis",
      title: "Strong Temporal Patterns in Both Conflicts",
      accent: "orange",
      content: (
        <>
          Both conflicts show substantial time-based variation. Gaza daily data
          records a highest reported daily total of
          <strong> 828 deaths on 2023-11-21</strong>, while the Russia-Ukraine
          dataset records its highest monthly total in
          <strong> March 2022, with 27,111 deaths</strong>.
        </>
      ),
      icon: ChartNoAxesCombined,
    },
    {
      number: "05",
      emoji: "📊",
      eyebrow: "Annual comparison",
      title: "2024 Was the Highest Complete Year in the Russia-Ukraine Dataset",
      accent: "emerald",
      content: (
        <>
          The Russia-Ukraine yearly analysis records
          <strong> 102,120 battle-related deaths in 2024</strong>, compared with
          99,473 in 2022, 76,254 in 2023, and 94,741 in 2025. The dataset begins
          in March 2014, so 2014 is treated as a partial year and is not directly
          compared with complete calendar years.
        </>
      ),
      icon: CalendarDays,
    },
    {
      number: "06",
      emoji: "⚔️",
      eyebrow: "Recorded composition",
      title: "Civilian Share Varies Across Russia-Ukraine Years",
      accent: "amber",
      content: (
        <>
          Across the Russia-Ukraine dataset, civilian deaths account for
          <strong> 25,985 deaths (6.97%)</strong> of the recorded total. The
          yearly civilian share was <strong>18.26% in 2022</strong>, followed by
          <strong> 3.09% in 2023</strong>, <strong>2.55% in 2024</strong>, and
          <strong> 3.01% in 2025</strong>. These figures describe the composition
          of deaths recorded in this dataset.
        </>
      ),
      icon: Layers3,
    },
    {
      number: "07",
      emoji: "🧩",
      eyebrow: "Data structure",
      title: "Different Data Granularity Between Conflicts",
      accent: "indigo",
      content: (
        <>
          Israel-Palestine data is available at <strong>daily resolution</strong>,
          while Russia-Ukraine data from UCDP is analyzed at
          <strong> monthly and yearly resolution</strong>. This difference
          influences how trends, peaks, and comparisons should be interpreted
          across the two conflicts.
        </>
      ),
      icon: Database,
    },
    {
      number: "08",
      emoji: "🖥️",
      eyebrow: "Interactive exploration",
      title: "Interactive Dashboards Support Further Exploration",
      accent: "slate",
      content: (
        <>
          Interactive Tableau Public dashboards have been created for both the
          Israel-Palestine and Russia-Ukraine datasets, allowing users to explore
          casualty trends and related analytical dimensions interactively.
        </>
      ),
      icon: BarChart3,
    },
  ];

  const accentStyles: Record<
    string,
    {
      border: string;
      bg: string;
      text: string;
      number: string;
      glow: string;
      line: string;
    }
  > = {
    red: {
      border: "hover:border-red-200",
      bg: "bg-red-50/70",
      text: "text-red-600",
      number: "bg-red-50 text-red-600 ring-red-100",
      glow: "group-hover:bg-red-100/50",
      line: "from-red-500/60",
    },
    violet: {
      border: "hover:border-violet-200",
      bg: "bg-violet-50/70",
      text: "text-violet-600",
      number: "bg-violet-50 text-violet-600 ring-violet-100",
      glow: "group-hover:bg-violet-100/50",
      line: "from-violet-500/60",
    },
    blue: {
      border: "hover:border-blue-200",
      bg: "bg-blue-50/70",
      text: "text-blue-600",
      number: "bg-blue-50 text-blue-600 ring-blue-100",
      glow: "group-hover:bg-blue-100/50",
      line: "from-blue-500/60",
    },
    orange: {
      border: "hover:border-orange-200",
      bg: "bg-orange-50/70",
      text: "text-orange-600",
      number: "bg-orange-50 text-orange-600 ring-orange-100",
      glow: "group-hover:bg-orange-100/50",
      line: "from-orange-500/60",
    },
    emerald: {
      border: "hover:border-emerald-200",
      bg: "bg-emerald-50/70",
      text: "text-emerald-600",
      number: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      glow: "group-hover:bg-emerald-100/50",
      line: "from-emerald-500/60",
    },
    amber: {
      border: "hover:border-amber-200",
      bg: "bg-amber-50/70",
      text: "text-amber-600",
      number: "bg-amber-50 text-amber-600 ring-amber-100",
      glow: "group-hover:bg-amber-100/50",
      line: "from-amber-500/60",
    },
    indigo: {
      border: "hover:border-indigo-200",
      bg: "bg-indigo-50/70",
      text: "text-indigo-600",
      number: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      glow: "group-hover:bg-indigo-100/50",
      line: "from-indigo-500/60",
    },
    slate: {
      border: "hover:border-slate-300",
      bg: "bg-slate-50/80",
      text: "text-slate-600",
      number: "bg-slate-100 text-slate-600 ring-slate-200",
      glow: "group-hover:bg-slate-100",
      line: "from-slate-500/60",
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_#f5f3ff_0,_#ffffff_38%,_#eef2ff_100%)] text-slate-900 selection:bg-purple-200 selection:text-purple-950">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-32 h-[30rem] w-[30rem] animate-pulse rounded-full bg-purple-300/20 blur-3xl" />
        <div className="absolute right-[-12rem] top-[18%] h-[34rem] w-[34rem] animate-pulse rounded-full bg-indigo-300/20 blur-3xl [animation-delay:1.5s]" />
        <div className="absolute bottom-[-14rem] left-[25%] h-[30rem] w-[30rem] rounded-full bg-blue-200/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      {/* Header */}
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-10 sm:px-6 sm:pt-14 lg:pt-20">
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
            Key Findings
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            Data-Driven Findings
            <span className="mt-2 block bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              What the data shows.
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Data-driven insights from the analysis of casualty patterns across two
            major conflicts.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {["8 key findings", "Multiple datasets", "Time-series analysis", "Demographic analysis"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200/80 bg-white/75 px-3.5 py-1.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:text-purple-700 hover:shadow-md"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {kpis.map((kpi, index) => (
            <div
              key={kpi.label}
              className={`group relative overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-4 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-[0_28px_70px_-30px_rgba(76,29,149,0.25)] sm:p-5`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${kpi.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/70 blur-2xl transition-transform duration-700 group-hover:scale-150" />

              <div className="relative">
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${kpi.iconBg} text-xl ring-1 ${kpi.iconRing} transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-lg`}
                >
                  {kpi.icon}
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 sm:text-sm">
                  {kpi.label}
                </p>

                <p
                  className={`mt-1 text-2xl font-black tracking-tight ${kpi.valueColor} sm:text-3xl`}
                >
                  {kpi.value}
                </p>

                <p className="mt-1 text-xs font-medium text-slate-400">
                  {kpi.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Findings */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-purple-600">
              <Sparkles size={14} />
              Analytical Insights
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              What the Data Shows
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <ChartNoAxesCombined size={15} />
            Eight documented findings
          </div>
        </div>

        <div className="relative space-y-4">
          {/* vertical timeline accent */}
          <div className="absolute bottom-8 left-[1.7rem] top-8 hidden w-px bg-gradient-to-b from-purple-200 via-indigo-100 to-transparent lg:block" />

          {findings.map((finding) => {
            const style = accentStyles[finding.accent];
            const Icon = finding.icon;

            return (
              <article
                key={finding.number}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.3)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_75px_-30px_rgba(15,23,42,0.25)] ${style.border} sm:p-7`}
              >
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full ${style.bg} opacity-0 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-100`}
                />

                <div className="relative flex items-start gap-4 sm:gap-6">
                  <div className="hidden shrink-0 lg:block">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xs font-black ring-1 ${style.number} shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-md`}
                    >
                      {finding.number}
                    </div>
                  </div>

                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${style.bg} text-2xl ring-1 ring-white/80 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 sm:h-14 sm:w-14`}
                  >
                    {finding.emoji}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1.5 flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[10px] font-black uppercase tracking-[0.17em] ${style.text}`}
                      >
                        {finding.eyebrow}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Finding {finding.number}
                      </span>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="max-w-3xl text-lg font-bold tracking-tight text-slate-950 sm:text-xl">
                        {finding.title}
                      </h3>

                      <div
                        className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white text-slate-400 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${style.text} sm:flex`}
                      >
                        <Icon size={16} />
                      </div>
                    </div>

                    <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
                      {finding.content}
                    </p>

                    <div
                      className={`mt-5 h-px w-0 bg-gradient-to-r ${style.line} to-transparent transition-all duration-700 group-hover:w-32`}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Note */}
        <div className="group relative mt-10 overflow-hidden rounded-[1.75rem] border border-slate-800/80 bg-slate-950 p-6 text-white shadow-[0_25px_80px_-30px_rgba(15,23,42,0.65)] sm:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl transition-transform duration-700 group-hover:scale-125" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl">
              ⚠️
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Source &amp; interpretation
                </span>
                <CheckCircle2 size={13} className="text-slate-500" />
              </div>

              <h3 className="mt-1 text-lg font-bold sm:text-xl">
                Important Note
              </h3>
            </div>
          </div>

          <p className="relative mt-6 max-w-5xl text-sm leading-7 text-slate-300">
            All figures are based on publicly available datasets from UCDP, Our
            World in Data, and Tech for Palestine. Numbers may be incomplete or
            revised later by the original sources. The datasets also have
            different time coverage and levels of granularity, so direct
            numerical comparisons should be interpreted carefully. This project
            focuses strictly on data patterns and does not include political
            interpretation.
          </p>

          <div className="relative mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4 text-xs font-medium text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Globe2 size={13} />
              Publicly available sources
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span className="inline-flex items-center gap-1.5">
              <Database size={13} />
              Dataset-aware analysis
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span className="inline-flex items-center gap-1.5">
              <ArrowUpRight size={13} />
              Interactive exploration available
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
