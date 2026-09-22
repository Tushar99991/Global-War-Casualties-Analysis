import { NextResponse } from "next/server";

type NewsItem = {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
  conflict: "Russia–Ukraine" | "Israel–Palestine";
};

const FEEDS = [
  {
    url: "https://news.google.com/rss/search?q=Russia%20Ukraine%20war%20when%3A1d&hl=en-US&gl=US&ceid=US%3Aen",
    conflict: "Russia–Ukraine" as const,
  },
  {
    url: "https://news.google.com/rss/search?q=Israel%20Palestine%20Gaza%20war%20when%3A1d&hl=en-US&gl=US&ceid=US%3Aen",
    conflict: "Israel–Palestine" as const,
  },
];

let cachedNews: NewsItem[] = [];
let cachedAt = 0;

const CACHE_DURATION = 30 * 60 * 1000;

function decodeXml(value: string): string {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function extractTag(item: string, tag: string): string {
  const match = item.match(
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"),
  );

  return match ? decodeXml(match[1]) : "";
}

function extractSource(item: string): string {
  const sourceMatch = item.match(/<source[^>]*>([\s\S]*?)<\/source>/i);

  if (sourceMatch) {
    return decodeXml(sourceMatch[1]);
  }

  return "News source";
}

function parseRss(xml: string, conflict: NewsItem["conflict"]): NewsItem[] {
  const items = xml.match(/<item[\s\S]*?<\/item>/gi);

  if (!items) {
    return [];
  }

  return items
    .map((item) => {
      const title = extractTag(item, "title");
      const url = extractTag(item, "link");
      const publishedAt = extractTag(item, "pubDate");
      const source = extractSource(item);

      if (!title || !url || !publishedAt) {
        return null;
      }

      return {
        title,
        url,
        source,
        publishedAt,
        conflict,
      };
    })
    .filter((item): item is NewsItem => item !== null);
}

async function fetchFeed(
  url: string,
  conflict: NewsItem["conflict"],
): Promise<NewsItem[]> {
  const response = await fetch(url, {
    cache: "no-store",
    headers: {
      Accept: "application/rss+xml, application/xml, text/xml",
    },
  });

  if (!response.ok) {
    throw new Error(`RSS request failed: ${response.status}`);
  }

  const xml = await response.text();

  return parseRss(xml, conflict);
}

export async function GET() {
  const now = Date.now();

  if (cachedNews.length > 0 && now - cachedAt < CACHE_DURATION) {
    return NextResponse.json({
      news: cachedNews,
      updatedAt: new Date(cachedAt).toISOString(),
    });
  }

  try {
    const results = await Promise.allSettled(
      FEEDS.map((feed) => fetchFeed(feed.url, feed.conflict)),
    );

    const news: NewsItem[] = [];

    for (const result of results) {
      if (result.status === "fulfilled") {
        news.push(...result.value);
      } else {
        console.error("War news RSS error:", result.reason);
      }
    }

    const uniqueNews = Array.from(
      new Map(news.map((item) => [item.url, item])).values(),
    );

    uniqueNews.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );

    const finalNews = uniqueNews.slice(0, 20);

    if (finalNews.length > 0) {
      cachedNews = finalNews;
      cachedAt = now;
    }

    return NextResponse.json({
      news: finalNews.length > 0 ? finalNews : cachedNews,
      updatedAt: new Date(
        finalNews.length > 0 ? now : cachedAt || now,
      ).toISOString(),
    });
  } catch (error) {
    console.error("War news RSS error:", error);

    return NextResponse.json({
      news: cachedNews,
      updatedAt: cachedAt
        ? new Date(cachedAt).toISOString()
        : new Date().toISOString(),
    });
  }
}
