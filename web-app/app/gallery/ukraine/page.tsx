"use client";

import Link from "next/link";

import { ArrowLeft, ChevronDown, ExternalLink, RefreshCw } from "lucide-react";

import { useCallback, useEffect, useState } from "react";

type GalleryItem = {
  title: string;
  url: string;
  imageUrl: string;
  source: string;
  publishedAt?: string;
  creator?: string;
  conflict: "Gaza" | "Ukraine";
  category?: "destruction" | "buildings" | "wounded" | "fatalities";
};

const CATEGORY_LABELS = {
  destruction: "Destruction",
  buildings: "Buildings",
  wounded: "Civilian wounded",
  fatalities: "Fatalities",
} as const;

export default function UkraineGalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [graphicGallery, setGraphicGallery] = useState<GalleryItem[]>([]);
  const [graphicLoading, setGraphicLoading] = useState(false);
  const [graphicRefreshing, setGraphicRefreshing] = useState(false);
  const [graphicUpdatedAt, setGraphicUpdatedAt] = useState<string | null>(null);
  const [showGraphicWarning, setShowGraphicWarning] = useState(false);
  const [graphicAccessGranted, setGraphicAccessGranted] = useState(false);

  const loadGallery = useCallback(async (manual = false) => {
    try {
      if (manual) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const response = await fetch(
        `/api/war-gallery?conflict=Ukraine&_=${Date.now()}`,
        {
          cache: "no-store",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to load gallery");
      }

      const data = await response.json();

      const ukraineGallery = Array.isArray(data.gallery)
        ? data.gallery.filter(
            (item: GalleryItem) => item.conflict === "Ukraine",
          )
        : [];

      setGallery(ukraineGallery);
    } catch (error) {
      console.error("Ukraine gallery error:", error);
      setGallery([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  const loadGraphicGallery = useCallback(async (manual = false) => {
    try {
      if (manual) {
        setGraphicRefreshing(true);
      } else {
        setGraphicLoading(true);
      }

      const response = await fetch(
        `/api/war-gallery?conflict=Ukraine&graphic=true&_=${Date.now()}`,
        {
          cache: "no-store",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to load graphic gallery");
      }

      const data = await response.json();

      const ukraineGraphicGallery = Array.isArray(data.gallery)
        ? data.gallery.filter(
            (item: GalleryItem) => item.conflict === "Ukraine",
          )
        : [];

      setGraphicGallery(ukraineGraphicGallery);
      setGraphicUpdatedAt(new Date().toISOString());
    } catch (error) {
      console.error("Ukraine graphic gallery error:", error);
      setGraphicGallery([]);
    } finally {
      setGraphicLoading(false);
      setGraphicRefreshing(false);
    }
  }, []);

  useEffect(() => {
    const loadInitialGallery = async () => {
      await loadGallery();
    };

    loadInitialGallery();

    const interval = setInterval(
      () => {
        loadGallery();
      },
      15 * 60 * 1000,
    );

    return () => clearInterval(interval);
  }, [loadGallery]);

  const formatDate = (value?: string) => {
    if (!value) return null;

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return null;
    }

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  const scrollToGraphicArchive = () => {
    document.getElementById("graphic-archive")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleGraphicAccess = () => {
    setShowGraphicWarning(true);
  };

  const confirmGraphicAccess = async () => {
    setShowGraphicWarning(false);
    setGraphicAccessGranted(true);

    if (!graphicGallery.length) {
      await loadGraphicGallery();
    }
  };

  const groupedGallery = {
    destruction: gallery.filter((item) => item.category === "destruction"),
    buildings: gallery.filter((item) => item.category === "buildings"),
  };

  const groupedGraphicGallery = {
    wounded: graphicGallery.filter((item) => item.category === "wounded"),
    fatalities: graphicGallery.filter((item) => item.category === "fatalities"),
  };

  const renderCard = (item: GalleryItem, index: number) => {
    const formattedDate = formatDate(item.publishedAt);

    return (
      <article
        key={`${item.imageUrl}-${index}`}
        className="group relative overflow-hidden rounded-3xl border border-blue-200/70 bg-gradient-to-br from-white via-blue-50/90 to-indigo-100/80 backdrop-blur-xl shadow-[0_16px_45px_rgba(30,64,175,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-300/80 hover:shadow-[0_24px_65px_rgba(30,64,175,0.16)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={item.imageUrl}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {item.category ? CATEGORY_LABELS[item.category] : "Ukraine"}
          </div>
        </div>

        <div className="p-5">
          <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
            <span>{item.source}</span>

            {formattedDate && (
              <>
                <span>•</span>
                <span>{formattedDate}</span>
              </>
            )}
          </div>

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <h3 className="line-clamp-3 text-base font-semibold leading-relaxed text-slate-950 transition-colors group-hover:text-blue-700">
              {item.title}
            </h3>
          </a>

          {item.creator && (
            <p className="mt-2 text-xs text-slate-500">
              Creator: {item.creator}
            </p>
          )}

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-lg text-sm font-semibold text-slate-800 transition-all hover:translate-x-0.5 hover:text-blue-700"
          >
            View original
            <ExternalLink size={14} />
          </a>
        </div>
      </article>
    );
  };

  const renderCategory = (
    category: keyof typeof CATEGORY_LABELS,
    items: GalleryItem[],
  ) => {
    if (!items.length) return null;

    return (
      <section className="mb-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="ukraine-eyebrow mb-2 text-xs font-semibold uppercase tracking-[0.15em]">
              Visual Archive
            </p>

            <h2 className="ukraine-text-reveal ukraine-delay-1 ukraine-section-title text-2xl font-bold tracking-tight text-slate-950">
              {CATEGORY_LABELS[category]}
            </h2>
          </div>

          <span className="text-sm font-medium text-slate-500">
            {items.length} images
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(renderCard)}
        </div>
      </section>
    );
  };

  return (
    <div className="ukraine-gallery-page relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50 text-slate-900">
      <style>{`
        @keyframes ukraineTextReveal {
          0% {
            opacity: 0;
            transform: translateY(14px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ukraineGradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes ukraineGlowPulse {
          0%, 100% {
            opacity: 0.45;
            transform: scale(1);
          }
          50% {
            opacity: 0.72;
            transform: scale(1.04);
          }
        }

        .ukraine-text-reveal {
          animation: ukraineTextReveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .ukraine-delay-1 {
          animation-delay: 0.08s;
        }

        .ukraine-delay-2 {
          animation-delay: 0.16s;
        }

        .ukraine-delay-3 {
          animation-delay: 0.24s;
        }

        .ukraine-delay-4 {
          animation-delay: 0.32s;
        }

        .ukraine-title-gradient {
          background-image: linear-gradient(
            105deg,
            #0f172a 0%,
            #1d4ed8 32%,
            #2563eb 52%,
            #4f46e5 74%,
            #312e81 100%
          );
          background-size: 180% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: ukraineGradientShift 7s ease-in-out infinite;
          text-shadow: 0 12px 35px rgba(30, 64, 175, 0.08);
        }

        .ukraine-eyebrow {
          background-image: linear-gradient(
            90deg,
            #1d4ed8 0%,
            #2563eb 38%,
            #6366f1 50%,
            #2563eb 62%,
            #1d4ed8 100%
          );
          background-size: 220% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: ukraineGradientShift 6s ease-in-out infinite;
        }

        .ukraine-section-title {
          position: relative;
          width: fit-content;
        }

        .ukraine-section-title::after {
          content: "";
          display: block;
          width: 3.75rem;
          height: 0.2rem;
          margin-top: 0.8rem;
          border-radius: 9999px;
          background: linear-gradient(90deg, #2563eb, #6366f1);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.16);
          transition: width 0.3s ease;
        }

        .ukraine-section-title:hover::after {
          width: 6rem;
        }

        .ukraine-copy {
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.85);
        }

        .ukraine-dark-copy {
          text-shadow: 0 0 18px rgba(96, 165, 250, 0.10);
        }

        .ukraine-orb {
          animation: ukraineGlowPulse 7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .ukraine-text-reveal,
          .ukraine-title-gradient,
          .ukraine-eyebrow,
          .ukraine-orb {
            animation: none !important;
          }

          .ukraine-section-title::after {
            transition: none;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ukraine-orb absolute -right-28 -top-24 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="ukraine-orb absolute -left-32 top-[30rem] h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="ukraine-orb absolute bottom-20 right-0 h-72 w-72 rounded-full bg-sky-300/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/60 to-transparent" />
      </div>

      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        <Link
          href="/"
          className="ukraine-text-reveal inline-flex items-center gap-2 rounded-lg px-2 py-1 -ml-2 mb-6 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-x-0.5 hover:bg-white/80 hover:text-slate-950 hover:shadow-sm"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="ukraine-text-reveal ukraine-delay-1 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-gradient-to-r from-blue-100 via-white to-indigo-100 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-sm">
              Visual Archive / Ukraine
            </div>

            <h1 className="ukraine-text-reveal ukraine-delay-2 ukraine-title-gradient mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ukraine Visual Archive
            </h1>

            <p className="ukraine-text-reveal ukraine-delay-3 ukraine-copy max-w-3xl text-lg leading-relaxed text-slate-700">
              A changing visual archive focused on destruction, damaged
              buildings, and civilian injuries reported during the
              Russia–Ukraine war.
            </p>

            {/* Graphic image notice */}
            <div className="mt-6">
              <button
                type="button"
                onClick={scrollToGraphicArchive}
                className="ukraine-text-reveal ukraine-delay-4 group relative w-full max-w-xl overflow-hidden rounded-2xl border border-rose-200/90 bg-gradient-to-r from-white via-rose-50/80 to-indigo-50/80 px-5 py-4 text-left shadow-[0_16px_45px_rgba(79,70,229,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-[0_22px_55px_rgba(79,70,229,0.16)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Animated 18+ badge */}
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 animate-pulse rounded-full bg-rose-500/30 blur-md" />

                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-rose-500 bg-white text-sm font-extrabold text-rose-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
                        18+
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Graphic images are available further below
                      </p>

                      <p className="mt-1 text-xs text-slate-600">
                        <span className="font-bold text-slate-800">
                          If you want to view graphic images,
                        </span>{" "}
                        click here to continue.
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    size={18}
                    className="shrink-0 text-rose-600 transition-transform group-hover:translate-y-1"
                  />
                </div>
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => loadGallery(true)}
            disabled={refreshing}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200/90 bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCw size={16} className={refreshing ? "animate-spin" : ""} />

            {refreshing ? "Refreshing..." : "Refresh archive"}
          </button>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white"
              >
                <div className="aspect-[16/10] animate-pulse bg-slate-200" />

                <div className="space-y-3 p-5">
                  <div className="h-3 w-24 animate-pulse rounded bg-slate-200" />
                  <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                  <div className="h-4 w-4/5 animate-pulse rounded bg-slate-200" />
                </div>
              </div>
            ))}
          </div>
        ) : gallery.length === 0 ? (
          <div className="relative overflow-hidden rounded-3xl border border-blue-200/70 bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/70 px-6 py-16 text-center shadow-[0_18px_55px_rgba(30,64,175,0.10)]">
            <h2 className="ukraine-soft-heading mb-2 text-lg font-bold text-slate-950">
              No Ukraine images available right now
            </h2>

            <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-600">
              The visual archive could not retrieve matching destruction or
              building imagery. Try refreshing the archive in a moment.
            </p>
          </div>
        ) : (
          <>
            {renderCategory("destruction", groupedGallery.destruction)}

            {renderCategory("buildings", groupedGallery.buildings)}
          </>
        )}
      </section>

      {/* Graphic Archive */}
      <section
        id="graphic-archive"
        className="relative scroll-mt-6 overflow-hidden border-y border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900 to-[#07132f]"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="ukraine-text-reveal inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-gradient-to-r from-rose-500/15 via-white/[0.04] to-indigo-500/15 px-4 py-1.5 text-sm font-semibold text-rose-300 shadow-sm backdrop-blur-sm">
              18+ Graphic Archive
            </div>

            <h2 className="ukraine-text-reveal ukraine-delay-1 ukraine-dark-copy mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Graphic Images
            </h2>

            <p className="ukraine-text-reveal ukraine-delay-2 ukraine-dark-copy text-sm leading-relaxed text-slate-300">
              If you want to view graphic images showing wounded civilians or
              fatalities, click the button below. Graphic material will remain
              hidden until you explicitly give consent.
            </p>

            {!graphicAccessGranted && (
              <button
                type="button"
                onClick={handleGraphicAccess}
                className="ukraine-text-reveal ukraine-delay-3 mt-7 inline-flex items-center gap-2 rounded-xl border border-rose-300/50 bg-gradient-to-r from-rose-600 via-red-600 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(127,29,29,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(127,29,29,0.46)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/70"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40 text-[11px] font-extrabold">
                  18+
                </span>
                View Graphic Images
              </button>
            )}
          </div>

          {graphicAccessGranted && (
            <div className="mt-14">
              {graphicLoading ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
                    >
                      <div className="aspect-[16/10] animate-pulse bg-slate-800" />

                      <div className="space-y-3 p-5">
                        <div className="h-3 w-24 animate-pulse rounded bg-slate-800" />
                        <div className="h-4 w-full animate-pulse rounded bg-slate-800" />
                        <div className="h-4 w-4/5 animate-pulse rounded bg-slate-800" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : graphicGallery.length === 0 ? (
                <div className="relative overflow-hidden rounded-3xl border border-slate-800/90 bg-gradient-to-br from-slate-900 via-slate-900/95 to-rose-950/40 px-6 py-12 text-center shadow-[0_18px_55px_rgba(0,0,0,0.24)]">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    No graphic images available right now
                  </h3>

                  <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-400">
                    The graphic archive could not retrieve matching
                    wounded-civilian or fatality imagery. Try refreshing the
                    archive in a moment.
                  </p>

                  <button
                    type="button"
                    onClick={() => loadGraphicGallery(true)}
                    disabled={graphicRefreshing}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-700/90 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-rose-400/50 hover:bg-white/[0.09] hover:text-rose-300 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <RefreshCw
                      size={15}
                      className={graphicRefreshing ? "animate-spin" : ""}
                    />

                    {graphicRefreshing
                      ? "Refreshing..."
                      : "Refresh graphic archive"}
                  </button>
                </div>
              ) : (
                <>
                  {renderCategory("wounded", groupedGraphicGallery.wounded)}

                  {renderCategory(
                    "fatalities",
                    groupedGraphicGallery.fatalities,
                  )}

                  <div className="flex justify-center pt-2">
                    <button
                      type="button"
                      onClick={() => loadGraphicGallery(true)}
                      disabled={graphicRefreshing}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-700/90 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-rose-400/50 hover:bg-white/[0.08] hover:text-rose-300 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <RefreshCw
                        size={15}
                        className={graphicRefreshing ? "animate-spin" : ""}
                      />

                      {graphicRefreshing
                        ? "Refreshing..."
                        : "Refresh graphic archive"}
                    </button>
                  </div>

                  {graphicUpdatedAt && (
                    <p className="ukraine-dark-copy mt-4 text-center text-xs text-slate-400">
                      Graphic archive updates dynamically from public sources.
                    </p>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Context */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/90">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <p className="ukraine-eyebrow mb-3 text-xs font-semibold uppercase tracking-[0.15em]">
              Archive Context
            </p>

            <h2 className="ukraine-text-reveal ukraine-delay-1 ukraine-dark-copy mb-4 text-2xl font-bold tracking-tight text-white">
              About this visual archive
            </h2>

            <p className="ukraine-text-reveal ukraine-delay-2 ukraine-dark-copy text-sm leading-relaxed text-slate-300">
              Images are retrieved dynamically from public sources and filtered
              for Ukraine-related destruction, buildings, and graphic
              civilian-wounded or fatality imagery. Availability and coverage
              can change as source platforms update their content.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              The gallery is intended as a visual complement to the
              project&apos;s underlying casualty and conflict-data analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Graphic Content Warning */}
      {showGraphicWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-6 backdrop-blur-md">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="graphic-warning-title"
            className="w-full max-w-md overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br from-white via-rose-50/50 to-indigo-50/40 p-7 shadow-[0_28px_90px_rgba(15,23,42,0.32)]"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="absolute inset-0 animate-pulse rounded-full bg-rose-500/30 blur-md" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-rose-500 bg-white text-sm font-extrabold text-rose-600 shadow-md">
                  18+
                </div>
              </div>

              <div>
                <h2
                  id="graphic-warning-title"
                  className="text-lg font-bold text-black"
                >
                  Graphic content warning
                </h2>

                <p className="mt-1 text-xs text-slate-600">
                  This section may contain disturbing imagery.
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-black">
              The following archive may contain photographs showing wounded
              civilians and fatalities. Viewer discretion is advised.
            </p>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowGraphicWarning(false)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-slate-50 hover:border-slate-300"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={confirmGraphicAccess}
                className="rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                I Understand 
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}