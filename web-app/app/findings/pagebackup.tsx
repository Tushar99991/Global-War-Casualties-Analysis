"use client";

import Link from "next/link";

import { ArrowLeft } from "lucide-react";

export default function FindingsPage() {
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
          Key Findings
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Data-Driven Findings
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Data-driven insights from the analysis of casualty patterns across two
          major conflicts.
        </p>
      </section>

      {/* KPI Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/80 shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-purple-200">
            <div className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110">
              ☠️
            </div>

            <p className="text-sm text-slate-500 mb-1">Total Reported Deaths</p>

            <p className="text-2xl font-bold text-slate-900">73,134</p>

            <p className="text-xs text-slate-400 mt-1">Israel-Palestine</p>
          </div>

          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/80 shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-purple-200">
            <div className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110">
              📍
            </div>

            <p className="text-sm text-slate-500 mb-1">Gaza Share</p>

            <p className="text-2xl font-bold text-red-600">99.0%</p>

            <p className="text-xs text-slate-400 mt-1">72,399 deaths</p>
          </div>

          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/80 shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-purple-200">
            <div className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110">
              👶
            </div>

            <p className="text-sm text-slate-500 mb-1">Children (0–18)</p>

            <p className="text-2xl font-bold text-slate-900">30.5%</p>

            <p className="text-xs text-slate-400 mt-1">22,213 fatalities</p>
          </div>

          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/80 shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-purple-200">
            <div className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110">
              👨
            </div>

            <p className="text-sm text-slate-500 mb-1">Male Fatalities</p>

            <p className="text-2xl font-bold text-slate-900">70.0%</p>

            <p className="text-xs text-slate-400 mt-1">Female: 30.0%</p>
          </div>
        </div>
      </section>

      {/* Main Findings */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="mb-7">
          <div className="text-sm font-semibold uppercase tracking-wider text-purple-600 mb-2">
            Analytical Insights
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            What the Data Shows
          </h2>
        </div>

        <div className="space-y-5">
          {/* Finding 1 */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-purple-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-2xl transition-transform duration-300 group-hover:scale-110">
                🔴
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Heavy Concentration of Casualties in Gaza
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Out of the total <strong>73,134</strong> reported deaths in
                  the Israel-Palestine dataset,
                  <strong> 72,399 (99.0%)</strong> occurred in Gaza, while the
                  West Bank accounted for only
                  <strong> 735 (1.0%)</strong> deaths. Daily time-series
                  analysis shows multiple sharp spikes, including a peak of
                  <strong> 828 reported deaths on 2023-11-21</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Finding 2 */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-purple-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-2xl transition-transform duration-300 group-hover:scale-110">
                👶
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Children Represent 30.5% of Fatalities
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Analysis of <strong>72,835</strong> individual records from
                  Gaza shows that
                  <strong> 22,213 people (30.5%)</strong> were children aged
                  0–18. Among the recorded age groups, 19–30 accounted for
                  <strong> 26.71%</strong> and 31–45 accounted for
                  <strong> 24.42%</strong>. Age was missing for 1,072 records.
                </p>
              </div>
            </div>
          </div>

          {/* Finding 3 */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-purple-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-2xl transition-transform duration-300 group-hover:scale-110">
                👨‍🦰👩
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Sex Distribution of Fatalities
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Among the Gaza demographic records, <strong>69.96%</strong> of
                  fatalities were male and <strong>30.04%</strong> were female.
                  These percentages are calculated from the records with
                  reported sex information.
                </p>
              </div>
            </div>
          </div>

          {/* Finding 4 */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-purple-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-2xl transition-transform duration-300 group-hover:scale-110">
                📈
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Strong Temporal Patterns in Both Conflicts
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Both conflicts show substantial time-based variation. Gaza
                  daily data records a highest reported daily total of
                  <strong> 828 deaths on 2023-11-21</strong>, while the
                  Russia-Ukraine dataset records its highest monthly total in
                  <strong> March 2022, with 27,111 deaths</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Finding 5 */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-purple-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-2xl transition-transform duration-300 group-hover:scale-110">
                📊
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  2024 Was the Highest Complete Year in the Russia-Ukraine
                  Dataset
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  The Russia-Ukraine yearly analysis records
                  <strong> 102,120 battle-related deaths in 2024</strong>,
                  compared with 99,473 in 2022, 76,254 in 2023, and 94,741 in
                  2025. The dataset begins in March 2014, so 2014 is treated as
                  a partial year and is not directly compared with complete
                  calendar years.
                </p>
              </div>
            </div>
          </div>

          {/* Finding 6 */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-purple-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-2xl transition-transform duration-300 group-hover:scale-110">
                ⚔️
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Civilian Share Varies Across Russia-Ukraine Years
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Across the Russia-Ukraine dataset, civilian deaths account for{" "}
                  <strong>25,985 deaths (6.97%)</strong> of the recorded total.
                  The yearly civilian share was
                  <strong> 18.26% in 2022</strong>, followed by
                  <strong> 3.09% in 2023</strong>,
                  <strong> 2.55% in 2024</strong>, and
                  <strong> 3.01% in 2025</strong>. These figures describe the
                  composition of deaths recorded in this dataset.
                </p>
              </div>
            </div>
          </div>

          {/* Finding 7 */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-purple-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-2xl transition-transform duration-300 group-hover:scale-110">
                🧩
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Different Data Granularity Between Conflicts
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Israel-Palestine data is available at{" "}
                  <strong>daily resolution</strong>, while Russia-Ukraine data
                  from UCDP is analyzed at{" "}
                  <strong>monthly and yearly resolution</strong>. This
                  difference influences how trends, peaks, and comparisons
                  should be interpreted across the two conflicts.
                </p>
              </div>
            </div>
          </div>

          {/* Finding 8 */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-purple-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-2xl transition-transform duration-300 group-hover:scale-110">
                🖥️
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Interactive Dashboards Support Further Exploration
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Interactive Tableau Public dashboards have been created for
                  both the Israel-Palestine and Russia-Ukraine datasets,
                  allowing users to explore casualty trends and related
                  analytical dimensions interactively.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-10 bg-slate-900 rounded-2xl p-8 text-white shadow-xl shadow-slate-900/10">
          <h3 className="text-lg font-semibold mb-3">⚠️ Important Note</h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            All figures are based on publicly available datasets from UCDP, Our
            World in Data, and Tech for Palestine. Numbers may be incomplete or
            revised later by the original sources. The datasets also have
            different time coverage and levels of granularity, so direct
            numerical comparisons should be interpreted carefully. This project
            focuses strictly on data patterns and does not include political
            interpretation.
          </p>
        </div>
      </section>
    </div>
  );
}
