"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Radio } from "lucide-react";

type NewsItem = {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
  conflict: "Russia–Ukraine" | "Israel–Palestine";
};

export default function WarNewsTicker() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadNews = async () => {
      try {
        const response = await fetch("/api/war-news", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch war news");
        }

        const data = await response.json();

        if (!cancelled && Array.isArray(data.news)) {
          setNews(data.news);
        }
      } catch (error) {
        if (!cancelled) {
          console.error("War news ticker error:", error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadNews();

    const interval = window.setInterval(loadNews, 10 * 60 * 1000);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  if (loading && news.length === 0) {
    return (
      <div className="w-full bg-[#f8efe3] text-white overflow-hidden">
        <div className="max-w-full mx-auto flex items-center h-10">
          <div className="live-news-label shrink-0 flex items-center gap-2 px-4 h-full bg-red-600 text-xs font-bold tracking-wider">
            <Radio size={13} />
            LATEST WAR NEWS
          </div>

          <div className="px-5 text-xs text-slate-400">
            Loading latest headlines...
          </div>
        </div>
      </div>
    );
  }

  const tickerItems = [...news, ...news];

  return (
    <div className="w-full bg-[#f8efe3] text-white overflow-hidden">
      <div className="flex items-center h-10">
        <div className="live-news-label relative z-20 shrink-0 flex items-center gap-2 px-4 h-full bg-red-600/85 text-white text-xs font-bold tracking-wider shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          <Radio size={13} />
          LATEST WAR NEWS
        </div>

        <div className="relative flex-1 min-w-0 overflow-hidden">
          {news.length > 0 ? (
            <div className="ticker-track flex w-max items-center hover:[animation-play-state:paused]">
              {tickerItems.map((item, index) => (
                <a
                  key={`${item.url}-${index}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 whitespace-nowrap px-6 text-xs text-slate-300 transition-colors hover:text-white"
                >
                  <span
                    className={
                      item.conflict === "Russia–Ukraine"
                        ? "font-semibold text-blue-400"
                        : "font-semibold text-red-400"
                    }
                  >
                    {item.conflict}
                  </span>

                  <span className="text-slate-600">•</span>

                  <span className="text-slate-800 transition-colors group-hover:text-red-700">
                    {item.title}
                  </span>

                  <span className="text-slate-600 transition-colors group-hover:text-indigo-700">
                    {item.source}
                  </span>

                  <ExternalLink
                    size={11}
                    className="text-slate-600 group-hover:text-slate-300"
                  />

                  <span className="text-slate-700 px-2">◆</span>
                </a>
              ))}
            </div>
          ) : (
            <div className="flex items-center h-full px-5 text-xs text-slate-400">
              Loading latest headlines...
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .ticker-track {
          animation: ticker-scroll 120s linear infinite;
        }

        @keyframes ticker-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .live-news-label {
            width: 30%;
            padding-left: 6px;
            padding-right: 6px;
            gap: 4px;
            font-size: 8px;
            letter-spacing: 0.05em;
            white-space: nowrap;
            justify-content: center;
            overflow: hidden;
          }

          .live-news-label svg {
            width: 11px;
            height: 11px;
            flex-shrink: 0;
          }

          .live-news-label > span {
            width: 6px;
            height: 6px;
            flex-shrink: 0;
          }

          .ticker-track {
            animation-duration: 95s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
