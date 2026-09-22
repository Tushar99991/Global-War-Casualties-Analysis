"use client";

import { useCallback, useEffect, useState } from "react";

import Link from "next/link";

import {
  ArrowLeft,
  ChevronDown,
  ExternalLink,
  Image as ImageIcon,
  RefreshCw,
  ShieldAlert,
  X,
} from "lucide-react";

type GalleryCategory =
  | "destruction"
  | "buildings"
  | "deaths"
  | "wounded"
  | "fatalities";

type GalleryItem = {
  title: string;
  url: string;
  imageUrl: string;
  source: string;
  publishedAt: string;
  creator?: string;
  conflict: "Gaza" | "Ukraine";
  category?: GalleryCategory;
};

export default function GazaGalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [graphicGallery, setGraphicGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [graphicLoading, setGraphicLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [graphicRefreshing, setGraphicRefreshing] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
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
        `/api/war-gallery?conflict=Gaza&_=${Date.now()}`,
        {
          cache: "no-store",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch gallery");
      }

      const data = await response.json();

      if (Array.isArray(data.gallery)) {
        const gazaGallery = data.gallery.filter(
          (item: GalleryItem) => item.conflict === "Gaza",
        );

        setGallery(gazaGallery);
      } else {
        setGallery([]);
      }

      setUpdatedAt(data.updatedAt ?? null);
    } catch (error) {
      console.error("Gaza gallery error:", error);
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
        `/api/war-gallery?conflict=Gaza&graphic=true&_=${Date.now()}`,
        {
          cache: "no-store",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch graphic gallery");
      }

      const data = await response.json();

      if (Array.isArray(data.gallery)) {
        const gazaGraphicGallery = data.gallery.filter(
          (item: GalleryItem) => item.conflict === "Gaza",
        );

        setGraphicGallery(gazaGraphicGallery);
      } else {
        setGraphicGallery([]);
      }

      setGraphicUpdatedAt(data.updatedAt ?? null);
    } catch (error) {
      console.error("Gaza graphic gallery error:", error);
    } finally {
      setGraphicLoading(false);
      setGraphicRefreshing(false);
    }
  }, []);

  useEffect(() => {
    const initialLoad = window.setTimeout(() => {
      loadGallery();
    }, 0);

    const interval = window.setInterval(
      () => {
        loadGallery();
      },
      15 * 60 * 1000,
    );

    return () => {
      window.clearTimeout(initialLoad);
      window.clearInterval(interval);
    };
  }, [loadGallery]);

  const handleGraphicAccess = async () => {
    setShowGraphicWarning(false);
    setGraphicAccessGranted(true);
    await loadGraphicGallery();
  };

  const scrollToGraphicArchive = () => {
    document.getElementById("graphic-archive")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const formatPublishedAt = (value: string) => {
    if (!value) {
      return null;
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return null;
    }

    return date.toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const formatUpdatedAt = (value: string) => {
    if (!value) {
      return null;
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return null;
    }

    return date.toLocaleString();
  };

  const getCategoryLabel = (category?: GalleryCategory) => {
    switch (category) {
      case "destruction":
        return "Destruction";

      case "buildings":
        return "Buildings";

      case "deaths":
        return "Deaths";

      case "wounded":
        return "Wounded civilians";

      case "fatalities":
        return "Fatalities";

      default:
        return "Gaza";
    }
  };

  const renderGallery = (items: GalleryItem[], isGraphic = false) => {
    if (items.length === 0) {
      return (
        <div
          className={`relative overflow-hidden rounded-3xl border p-12 text-center shadow-sm ${
            isGraphic
              ? "border-white/10 bg-gradient-to-br from-white/10 via-slate-900/80 to-rose-950/50 text-white"
              : "border-rose-200/70 bg-gradient-to-br from-white/95 via-rose-50/80 to-orange-50/70 text-slate-900"
          }`}
        >
          <div
            className={`absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl ${
              isGraphic ? "bg-rose-500/10" : "bg-rose-300/20"
            }`}
          />

          <div
            className={`absolute -bottom-20 -left-16 h-44 w-44 rounded-full blur-3xl ${
              isGraphic ? "bg-orange-500/10" : "bg-orange-300/20"
            }`}
          />

          <div
            className={`relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm ${
              isGraphic
                ? "border-white/10 bg-white/10 text-slate-300"
                : "border-rose-200 bg-white text-rose-500"
            }`}
          >
            <ImageIcon size={28} />
          </div>

          <h2
            className={`relative text-lg font-semibold mb-2 ${
              isGraphic ? "text-white" : "text-slate-900"
            }`}
          >
            No visual coverage available
          </h2>

          <p
            className={`relative text-sm max-w-md mx-auto leading-relaxed ${
              isGraphic ? "text-slate-300" : "text-slate-600"
            }`}
          >
            No matching visual coverage was returned by the external image
            search. Try refreshing the gallery later.
          </p>
        </div>
      );
    }

    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const publishedAt = formatPublishedAt(item.publishedAt);

          return (
            <article
              key={`${item.url}-${item.imageUrl}`}
              className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 ${
                isGraphic
                  ? "border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/95 to-rose-950/70 shadow-[0_18px_55px_rgba(0,0,0,0.28)] hover:border-rose-400/20 hover:shadow-[0_24px_70px_rgba(0,0,0,0.38)]"
                  : "border-rose-200/70 bg-gradient-to-br from-white/95 via-rose-50/85 to-orange-50/75 shadow-[0_16px_45px_rgba(159,18,57,0.08)] hover:border-rose-300/80 hover:shadow-[0_22px_65px_rgba(159,18,57,0.16)]"
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-px opacity-80 ${
                  isGraphic
                    ? "bg-gradient-to-r from-transparent via-rose-400/60 to-transparent"
                    : "bg-gradient-to-r from-transparent via-rose-400/50 to-transparent"
                }`}
              />

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10 opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/30 to-transparent" />

                  <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                    <span
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-white text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur-md border shadow-sm ${
                        isGraphic
                          ? "bg-slate-950/75 border-white/10"
                          : "bg-rose-600/90 border-rose-300/20"
                      }`}
                    >
                      {getCategoryLabel(item.category)}
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 right-3.5">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md shadow-lg transition-all duration-300 group-hover:scale-110 ${
                        isGraphic
                          ? "border-white/15 bg-black/45 text-white group-hover:text-rose-300"
                          : "border-white/70 bg-white/90 text-slate-700 group-hover:text-rose-600"
                      }`}
                    >
                      <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
              </a>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3.5">
                  <span
                    className={`text-xs font-bold tracking-wide ${
                      isGraphic ? "text-rose-300" : "text-rose-600"
                    }`}
                  >
                    {item.source}
                  </span>

                  {publishedAt && (
                    <span
                      className={`text-[11px] text-right leading-relaxed ${
                        isGraphic ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {publishedAt}
                    </span>
                  )}
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h2
                    className={`text-sm font-semibold leading-relaxed transition-colors ${
                      isGraphic
                        ? "text-white group-hover:text-rose-200"
                        : "text-slate-900 group-hover:text-rose-700"
                    }`}
                  >
                    {item.title}
                  </h2>
                </a>

                {item.creator && (
                  <p
                    className={`text-[11px] mt-3 leading-relaxed ${
                      isGraphic ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    <span
                      className={`font-semibold ${
                        isGraphic ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Creator:
                    </span>{" "}
                    {item.creator}
                  </p>
                )}

                <p
                  className={`text-[11px] mt-3 ${
                    isGraphic ? "text-slate-500" : "text-slate-500"
                  }`}
                >
                  View original source
                </p>
              </div>
            </article>
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-white to-orange-50 text-slate-900">
      <style>{`
        @keyframes gazaTextReveal {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gazaSoftFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes gazaGradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gazaEyebrowShimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .gaza-text-reveal {
          animation: gazaTextReveal 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .gaza-text-reveal-delay-1 {
          animation-delay: 0.08s;
        }

        .gaza-text-reveal-delay-2 {
          animation-delay: 0.16s;
        }

        .gaza-text-reveal-delay-3 {
          animation-delay: 0.24s;
        }

        .gaza-text-reveal-delay-4 {
          animation-delay: 0.32s;
        }

        .gaza-eyebrow {
          background-image: linear-gradient(
            90deg,
            rgba(190, 24, 93, 1) 0%,
            rgba(225, 29, 72, 1) 35%,
            rgba(249, 115, 22, 1) 50%,
            rgba(225, 29, 72, 1) 65%,
            rgba(190, 24, 93, 1) 100%
          );
          background-size: 220% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gazaEyebrowShimmer 5s ease-in-out infinite;
        }

        .gaza-main-title {
          background-image: linear-gradient(
            100deg,
            #7f1d1d 0%,
            #be123c 32%,
            #e11d48 56%,
            #ea580c 82%,
            #9a3412 100%
          );
          background-size: 180% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gazaGradientShift 7s ease-in-out infinite;
          text-shadow: 0 8px 30px rgba(190, 24, 93, 0.08);
        }

        .gaza-copy {
          text-shadow: 0 1px 0 rgba(255,255,255,0.9);
        }

        .gaza-section-title {
          position: relative;
          width: fit-content;
        }

        .gaza-section-title::after {
          content: "";
          display: block;
          width: 3.75rem;
          height: 0.2rem;
          margin-top: 0.75rem;
          border-radius: 9999px;
          background: linear-gradient(90deg, #e11d48, #f97316);
          box-shadow: 0 5px 18px rgba(225, 29, 72, 0.16);
          transform-origin: left center;
          transition: width 0.3s ease;
        }

        .gaza-section-title:hover::after {
          width: 5.5rem;
        }

        .gaza-soft-glow {
          text-shadow:
            0 0 18px rgba(225, 29, 72, 0.08),
            0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .gaza-dark-glow {
          text-shadow:
            0 0 22px rgba(244, 63, 94, 0.12),
            0 2px 18px rgba(0, 0, 0, 0.18);
        }

        .gaza-pulse-label {
          animation: gazaSoftFloat 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .gaza-text-reveal,
          .gaza-eyebrow,
          .gaza-main-title,
          .gaza-pulse-label {
            animation: none !important;
          }

          .gaza-section-title::after {
            transition: none;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -right-28 h-80 w-80 rounded-full bg-rose-300/20 blur-3xl" />
        <div className="absolute top-[28rem] -left-32 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />
        <div className="absolute bottom-40 right-0 h-72 w-72 rounded-full bg-indigo-200/10 blur-3xl" />
      </div>

      {/* Header */}
      <section className="relative max-w-7xl mx-auto px-6 pt-14 pb-10">
        <Link
          href="/"
          className="gaza-text-reveal inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950 mb-7 transition-all duration-300 rounded-lg px-2 py-1 -ml-2 hover:bg-white/80 hover:shadow-sm hover:-translate-x-0.5"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="gaza-text-reveal gaza-text-reveal-delay-1 gaza-pulse-label inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 via-white to-orange-100 border border-rose-200/80 text-rose-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 shadow-sm">
              <ImageIcon size={15} />
              Visual Archive
            </div>

            <h1 className="gaza-text-reveal gaza-text-reveal-delay-2 gaza-main-title text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Gaza Visual Archive
            </h1>

            <p className="gaza-text-reveal gaza-text-reveal-delay-3 gaza-copy gaza-soft-glow text-lg text-slate-700 max-w-2xl leading-relaxed">
              Current visual coverage related to destruction, buildings,
              reported deaths, and the humanitarian situation in Gaza.
            </p>

            {/* Graphic Image Notice */}
            <div className="mt-6">
              <button
                type="button"
                onClick={scrollToGraphicArchive}
                className="w-full max-w-xl rounded-2xl border border-rose-300/80 bg-gradient-to-r from-white via-rose-50 to-orange-50 px-5 py-4 text-left shadow-[0_14px_40px_rgba(159,18,57,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(159,18,57,0.16)] group"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Animated 18+ badge */}
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 animate-pulse rounded-full bg-rose-500/40 blur-md" />

                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-rose-500 bg-white text-sm font-extrabold text-rose-600 shadow-md transition-transform duration-300 group-hover:scale-105">
                        18+
                      </div>
                    </div>

                    <div>
                      <p className="gaza-soft-glow text-sm font-bold text-slate-900">
                        Graphic images are available further below
                      </p>

                      <p className="mt-1 text-xs text-slate-600 leading-relaxed gaza-copy">
                        <span className="font-bold text-slate-700">
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
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/90 border border-slate-200/90 text-sm font-semibold text-slate-700 shadow-sm hover:-translate-y-0.5 hover:shadow-lg hover:text-rose-700 hover:border-rose-200 transition-all disabled:opacity-60 backdrop-blur-sm"
          >
            <RefreshCw size={15} className={refreshing ? "animate-spin" : ""} />

            {refreshing ? "Refreshing..." : "Refresh Gallery"}
          </button>
        </div>

        {updatedAt && (
          <p className="gaza-text-reveal gaza-text-reveal-delay-4 text-xs font-medium text-slate-500 mt-5">
            Updated {formatUpdatedAt(updatedAt)}
          </p>
        )}
      </section>

      {/* Normal Gallery */}
      <section className="relative max-w-7xl mx-auto px-6 pb-16">
        <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7">
          <div>
            <p className="gaza-text-reveal gaza-eyebrow text-xs font-semibold uppercase tracking-[0.15em] mb-2">
              Documentary Archive
            </p>

            <h2 className="gaza-text-reveal gaza-text-reveal-delay-1 gaza-section-title text-2xl font-bold tracking-tight text-slate-950">
              Destruction, Buildings & Reported Deaths
            </h2>

            <p className="gaza-text-reveal gaza-text-reveal-delay-2 text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed gaza-copy">
              Non-graphic visual coverage selected from the external image
              sources.
            </p>
          </div>
        </div>

        <div className="relative z-10">
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white/90 rounded-3xl overflow-hidden border border-rose-200/60 shadow-sm animate-pulse"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-rose-100 via-slate-100 to-orange-100" />

                  <div className="p-5 space-y-3 bg-gradient-to-br from-white to-rose-50/60">
                    <div className="h-3 bg-slate-200 rounded w-1/3" />
                    <div className="h-4 bg-slate-200 rounded w-full" />
                    <div className="h-4 bg-slate-200 rounded w-4/5" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            renderGallery(gallery)
          )}
        </div>
      </section>

      {/* Graphic Images */}
      <section
        id="graphic-archive"
        className="relative border-y border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900 to-[#220812] scroll-mt-6 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-rose-500/10 blur-3xl" />
            <div className="absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.03] to-transparent" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7">
            <div className="max-w-3xl">
              <div className="gaza-text-reveal gaza-text-reveal-delay-1 inline-flex items-center gap-2 bg-white/[0.07] border border-white/10 text-slate-200 text-xs font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5 shadow-sm backdrop-blur-sm gaza-pulse-label">
                <ShieldAlert size={14} />
                Graphic Images
              </div>

              <h2 className="gaza-text-reveal gaza-text-reveal-delay-2 text-2xl md:text-3xl font-bold text-white mb-4 gaza-dark-glow">
                Wounded civilians & fatalities
              </h2>

              <p className="gaza-text-reveal gaza-text-reveal-delay-3 text-slate-300 leading-relaxed max-w-2xl gaza-dark-glow">
                If you want to view graphic images showing wounded civilians or
                fatalities, click the button below. Graphic material will remain
                hidden until you explicitly give consent.
              </p>
            </div>

            {!graphicAccessGranted && (
              <div className="relative shrink-0 inline-block">
                <div className="absolute inset-0 rounded-2xl bg-rose-500/30 blur-2xl animate-pulse" />

                <button
                  type="button"
                  onClick={() => setShowGraphicWarning(true)}
                  className="group relative inline-flex items-center justify-center gap-3 rounded-2xl border border-rose-300/50 bg-gradient-to-r from-rose-600 via-red-600 to-orange-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(127,29,29,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(127,29,29,0.48)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/70"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/60 bg-white/10 text-xs font-extrabold shadow-sm">
                    18+
                  </span>

                  <span>View Graphic Images</span>

                  <ChevronDown
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                </button>
              </div>
            )}
          </div>

          {graphicAccessGranted && (
            <div className="mt-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <p className="gaza-eyebrow text-xs font-semibold text-rose-300 uppercase tracking-[0.15em]">
                    Consent granted
                  </p>

                  <p className="text-sm text-slate-300 mt-1 gaza-dark-glow">
                    Graphic material is now visible.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => loadGraphicGallery(true)}
                  disabled={graphicRefreshing}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.07] border border-white/10 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all disabled:opacity-60 backdrop-blur-sm"
                >
                  <RefreshCw
                    size={15}
                    className={graphicRefreshing ? "animate-spin" : ""}
                  />

                  {graphicRefreshing
                    ? "Refreshing..."
                    : "Refresh Graphic Images"}
                </button>
              </div>

              {graphicLoading ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="bg-white/[0.06] rounded-3xl overflow-hidden border border-white/10 animate-pulse"
                    >
                      <div className="aspect-[16/10] bg-gradient-to-br from-white/10 via-slate-800/80 to-rose-950/40" />

                      <div className="p-5 space-y-3">
                        <div className="h-3 bg-white/10 rounded w-1/3" />
                        <div className="h-4 bg-white/10 rounded w-full" />
                        <div className="h-4 bg-white/10 rounded w-4/5" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                renderGallery(graphicGallery, true)
              )}

              {graphicUpdatedAt && (
                <p className="gaza-text-reveal text-xs text-slate-400 mt-5 gaza-dark-glow">
                  Graphic images updated {formatUpdatedAt(graphicUpdatedAt)}
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Source Note */}
      <section className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/90 rounded-3xl p-8 text-white border border-slate-800/80 shadow-[0_18px_55px_rgba(15,23,42,0.20)]">
          <p className="gaza-eyebrow text-xs font-semibold text-indigo-300 uppercase tracking-[0.15em] mb-2">
            Gallery Context
          </p>

          <h2 className="text-xl font-semibold mb-3 text-white gaza-dark-glow">
            External visual reporting
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl gaza-dark-glow">
            Images displayed here are associated with external visual sources.
            Metadata such as creator and publication time is shown only when
            supplied by the source. Visual matching is automated and may contain
            inaccuracies. The gallery is provided for documentary and analytical
            context and may change as new visual coverage becomes available.
          </p>
        </div>
      </section>

      {/* Graphic Warning Modal */}
      {showGraphicWarning && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-md px-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="graphic-warning-title"
        >
          <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-gradient-to-br from-white via-rose-50/30 to-orange-50/40 border border-white/80 shadow-[0_28px_90px_rgba(15,23,42,0.30)]">
            <div className="p-7">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-200/80 flex items-center justify-center mb-5 shadow-sm">
                <ShieldAlert size={22} className="text-amber-600" />
              </div>

              <h2
                id="graphic-warning-title"
                className="text-xl font-bold text-slate-950 mb-3 gaza-soft-glow"
              >
                Graphic content warning
              </h2>

              <p className="text-sm text-black leading-relaxed">
                The next section may contain disturbing images of severe
                injuries, wounded civilians, and fatalities.
              </p>

              <p className="text-sm text-black leading-relaxed">
                Continue only if you are comfortable viewing this material. The
                graphic images are optional and remain hidden unless you choose
                to continue.
              </p>
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 px-7 py-5 bg-white/70 border-t border-slate-200/80">
              <button
                type="button"
                onClick={() => setShowGraphicWarning(false)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                <X size={15} />
                Go Back
              </button>

              <button
                type="button"
                onClick={handleGraphicAccess}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-rose-950 text-white text-sm font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Continue to Graphic Images
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
