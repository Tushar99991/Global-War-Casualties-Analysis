import { NextResponse } from "next/server";

const STOCKS = [
  {
    symbol: "LMT",
    name: "Lockheed Martin Corporation",
    website: "https://www.lockheedmartin.com/",
  },
  {
    symbol: "RTX",
    name: "RTX Corporation",
    website: "https://www.rtx.com/",
  },
  {
    symbol: "NOC",
    name: "Northrop Grumman Corporation",
    website: "https://www.northropgrumman.com/",
  },
  {
    symbol: "GD",
    name: "General Dynamics Corporation",
    website: "https://www.gd.com/",
  },
];

export async function GET() {
  try {
    const results = await Promise.all(
      STOCKS.map(async (stock) => {
        const response = await fetch(
          `https://query1.finance.yahoo.com/v8/finance/chart/${stock.symbol}?range=1d&interval=5m`,
          {
            next: {
              revalidate: 60,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Market request failed for ${stock.symbol}`
          );
        }

        const data = await response.json();
        const result = data?.chart?.result?.[0];

        if (!result) {
          throw new Error(
            `No market data available for ${stock.symbol}`
          );
        }

        const meta = result.meta;

        const timestamps = result.timestamp ?? [];
        const closes =
          result.indicators?.quote?.[0]?.close ?? [];

        const history = timestamps
          .map((timestamp: number, index: number) => ({
            timestamp,
            price: closes[index],
          }))
          .filter(
            (point: {
              timestamp: number;
              price: number | null;
            }) => point.price != null
          );

        const price = meta?.regularMarketPrice ?? null;
        const previousClose =
          meta?.previousClose ?? meta?.chartPreviousClose ?? null;

        const change =
          price != null && previousClose != null
            ? price - previousClose
            : null;

        const changePercent =
          change != null && previousClose
            ? (change / previousClose) * 100
            : null;

        return {
          symbol: stock.symbol,
          name: stock.name,
          website: stock.website,
          currency: meta?.currency ?? "USD",
          exchange: meta?.exchangeName ?? null,
          price,
          previousClose,
          change,
          changePercent,
          history,
          marketState: meta?.marketState ?? null,
          fetchedAt: new Date().toISOString(),
        };
      })
    );

    return NextResponse.json({
      status: "live",
      source: "Yahoo Finance",
      stocks: results,
    });
  } catch (error) {
    console.error("Defense market API error:", error);

    return NextResponse.json(
      {
        status: "error",
        source: "Yahoo Finance",
        stocks: [],
      },
      { status: 500 }
    );
  }
}