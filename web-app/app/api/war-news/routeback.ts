import { NextResponse } from "next/server";

type NewsApiArticle = {
  title: string;
  url: string;
  source?: {
    name?: string;
  };
  publishedAt: string;
  description?: string | null;
};

type NewsApiResponse = {
  status: string;
  articles?: NewsApiArticle[];
  code?: string;
  message?: string;
};

type NewsItem = {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
  conflict: "Russia–Ukraine" | "Israel–Palestine";
};

let cachedNews: NewsItem[] = [];
let cachedAt = 0;

const CACHE_DURATION = 60 * 60 * 1000;

async function fetchNews(
  query: string,
  conflict: NewsItem["conflict"],
  apiKey: string,
): Promise<NewsItem[]> {
  const params = new URLSearchParams({
    q: query,
    language: "en",
    sortBy: "publishedAt",
    pageSize: "10",
    apiKey,
  });

  const response = await fetch(
    `https://newsapi.org/v2/everything?${params.toString()}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  const data: NewsApiResponse = await response.json();

  if (!response.ok) {
    throw new Error(
      `NewsAPI ${response.status}: ${
        data.message ?? "Unknown NewsAPI error"
      }${data.code ? ` (${data.code})` : ""}`,
    );
  }

  if (data.status !== "ok" || !Array.isArray(data.articles)) {
    throw new Error(
      `NewsAPI returned an invalid response: ${
        data.message ?? "Missing articles"
      }`,
    );
  }

  return data.articles
    .filter((article) => article.title && article.url && article.publishedAt)
    .map((article) => ({
      title: article.title,
      url: article.url,
      source: article.source?.name ?? "News source",
      publishedAt: article.publishedAt,
      conflict,
    }));
}

export async function GET() {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error: "NEWS_API_KEY is not configured",
        news: [],
      },
      { status: 500 },
    );
  }

  const now = Date.now();

  if (cachedNews.length > 0 && now - cachedAt < CACHE_DURATION) {
    return NextResponse.json({
      news: cachedNews,
      updatedAt: new Date(cachedAt).toISOString(),
    });
  }

  try {
    const results = await Promise.allSettled([
      fetchNews(
        '"Russia" AND "Ukraine" AND (war OR conflict)',
        "Russia–Ukraine",
        apiKey,
      ),

      fetchNews(
        '("Israel" AND "Palestine") OR (Israel AND Gaza)',
        "Israel–Palestine",
        apiKey,
      ),
    ]);

    const news: NewsItem[] = [];

    for (const result of results) {
      if (result.status === "fulfilled") {
        news.push(...result.value);
      } else {
        console.error("War news source error:", result.reason);
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
    console.error("War news API error:", error);

    return NextResponse.json({
      news: cachedNews,
      updatedAt: cachedAt
        ? new Date(cachedAt).toISOString()
        : new Date().toISOString(),
    });
  }
}
