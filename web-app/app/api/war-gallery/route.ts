import { NextResponse } from "next/server";

type Conflict = "Gaza" | "Ukraine";

type GazaCategory =
  | "destruction"
  | "buildings"
  | "deaths"
  | "wounded"
  | "fatalities";

type UkraineCategory = "destruction" | "buildings" | "wounded" | "fatalities";

type GalleryItem = {
  title: string;
  url: string;
  imageUrl: string;
  source: string;
  creator: string;
  creatorUrl?: string;
  publishedAt: string;
  conflict: Conflict;
  category?: GazaCategory | UkraineCategory;
};

type WikimediaPage = {
  pageid?: number;
  ns?: number;
  title?: string;
  imageinfo?: Array<{
    url?: string;
    thumburl?: string;
    descriptionurl?: string;
    timestamp?: string;
    extmetadata?: {
      ImageDescription?: {
        value?: string;
      };
      Credit?: {
        value?: string;
      };
      Artist?: {
        value?: string;
      };
      DateTimeOriginal?: {
        value?: string;
      };
    };
  }>;
};

type WikimediaResponse = {
  query?: {
    pages?: Record<string, WikimediaPage>;
  };
};

type PexelsPhoto = {
  id?: number;
  url?: string;
  photographer?: string;
  photographer_url?: string;
  width?: number;
  height?: number;
  alt?: string;
  src?: {
    original?: string;
    large2x?: string;
    large?: string;
    landscape?: string;
  };
};

type PexelsResponse = {
  photos?: PexelsPhoto[];
};

const CACHE_TTL = 15 * 60 * 1000;

const cache = new Map<
  string,
  {
    expiresAt: number;
    gallery: GalleryItem[];
  }
>();

/* =========================================================
   Gaza visual categories
   ========================================================= */

const GAZA_VISUAL_CATEGORIES: Record<GazaCategory, string[]> = {
  destruction: [
    "destruction",
    "destroyed",
    "damaged",
    "rubble",
    "ruins",
    "aftermath",
    "bombing",
    "airstrike",
    "debris",
  ],

  buildings: [
    "building",
    "buildings",
    "infrastructure",
    "urban",
    "city",
    "neighborhood",
    "house",
    "houses",
    "residential",
    "architecture",
  ],

  deaths: [
    "funeral",
    "funerals",
    "mourning",
    "casualty",
    "casualties",
    "death",
    "deaths",
    "burial",
    "burials",
    "hospital",
    "mourners",
  ],

  wounded: [
    "wounded",
    "injured",
    "injury",
    "injuries",
    "civilian wounded",
    "civilian injury",
    "hospital",
    "medical treatment",
    "ambulance",
    "emergency room",
  ],

  fatalities: [
    "fatality",
    "fatalities",
    "dead",
    "death",
    "deaths",
    "killed",
    "killed civilians",
    "corpse",
    "bodies",
    "body",
    "funeral",
    "burial",
    "morgue",
  ],
};

/* =========================================================
   Ukraine visual categories
   ========================================================= */

const UKRAINE_VISUAL_CATEGORIES: Record<UkraineCategory, string[]> = {
  destruction: [
    "destruction",
    "destroyed",
    "damaged",
    "rubble",
    "ruins",
    "debris",
    "aftermath",
    "bombing",
    "airstrike",
    "missile strike",
    "shelling",
  ],

  buildings: [
    "building",
    "buildings",
    "damaged building",
    "damaged buildings",
    "destroyed building",
    "destroyed buildings",
    "infrastructure",
    "residential",
    "house",
    "houses",
    "apartment",
    "apartments",
    "school",
    "hospital",
    "city",
    "urban",
  ],

  wounded: [
    "wounded",
    "injured",
    "injury",
    "injuries",
    "wounded civilians",
    "injured civilians",
    "civilian injuries",
    "civilian wounded",
    "hospital",
    "medical treatment",
    "ambulance",
    "emergency room",
  ],

  fatalities: [
    "fatality",
    "fatalities",
    "dead",
    "death",
    "deaths",
    "killed",
    "killed civilians",
    "corpse",
    "bodies",
    "body",
    "funeral",
    "burial",
    "morgue",
  ],
};

/* =========================================================
   Gaza search terms
   ========================================================= */

const GAZA_SEARCH_TERMS: Record<GazaCategory, string[]> = {
  destruction: [
    "Gaza destruction",
    "Gaza destroyed buildings",
    "Gaza rubble",
    "Gaza damaged buildings",
    "Gaza war destruction",
    "Gaza destruction aftermath",
  ],

  buildings: [
    "Gaza buildings",
    "Gaza damaged buildings",
    "Gaza urban destruction",
    "Gaza infrastructure",
    "Gaza city buildings",
    "Gaza residential buildings",
  ],

  deaths: [
    "Gaza funerals",
    "Gaza casualties",
    "Gaza mourning",
    "Gaza deaths",
    "Gaza burial",
    "Gaza hospital casualties",
  ],

  wounded: [
    "Gaza wounded civilians",
    "Gaza injured civilians",
    "Gaza civilian injuries",
    "Gaza wounded hospital",
    "Gaza injured hospital",
    "Gaza medical casualties",
  ],

  fatalities: [
    "Gaza fatalities",
    "Gaza civilian fatalities",
    "Gaza dead civilians",
    "Gaza bodies",
    "Gaza funeral casualties",
    "Gaza burial fatalities",
  ],
};

/* =========================================================
   Ukraine search terms
   ========================================================= */

const UKRAINE_SEARCH_TERMS: Record<UkraineCategory, string[]> = {
  destruction: [
    "Ukraine war destruction",
    "Ukraine destroyed buildings",
    "Ukraine war rubble",
    "Ukraine damaged buildings",
    "Ukraine destruction aftermath",
    "Ukraine missile strike destruction",
  ],

  buildings: [
    "Ukraine damaged buildings",
    "Ukraine destroyed buildings",
    "Ukraine war buildings",
    "Ukraine damaged infrastructure",
    "Ukraine residential buildings war",
    "Ukraine city buildings war",
  ],

  wounded: [
    "Ukraine wounded civilians",
    "Ukraine injured civilians",
    "Ukraine civilian injuries",
    "Ukraine wounded hospital",
    "Ukraine injured hospital",
    "Ukraine civilian casualties hospital",
  ],

  fatalities: [
    "Ukraine fatalities",
    "Ukraine civilian fatalities",
    "Ukraine dead civilians",
    "Ukraine bodies",
    "Ukraine funeral casualties",
    "Ukraine burial fatalities",
  ],
};

/* =========================================================
   Background-specific search terms
   ========================================================= */

const GAZA_BACKGROUND_SEARCH_TERMS = [
  "Gaza destroyed buildings",
  "Gaza damaged buildings",
  "Gaza building destruction",
  "Gaza destroyed residential buildings",
  "Gaza damaged residential buildings",
  "Gaza destroyed apartments",
  "Gaza damaged apartments",
  "Gaza ruins destroyed buildings",
  "Gaza rubble destroyed buildings",
  "Gaza building rubble",
  "Gaza building debris",
  "Gaza destroyed infrastructure",
  "Gaza damaged infrastructure",
  "Gaza urban destruction buildings",
  "Gaza city destruction buildings",
  "Gaza buildings destruction aftermath",
];

const UKRAINE_BACKGROUND_SEARCH_TERMS = [
  "Ukraine destroyed buildings",
  "Ukraine damaged buildings",
  "Ukraine building destruction",
  "Ukraine destroyed residential buildings",
  "Ukraine damaged residential buildings",
  "Ukraine destroyed apartments",
  "Ukraine damaged apartments",
  "Ukraine ruins destroyed buildings",
  "Ukraine rubble destroyed buildings",
  "Ukraine building rubble",
  "Ukraine building debris",
  "Ukraine destroyed infrastructure",
  "Ukraine damaged infrastructure",
  "Ukraine urban destruction buildings",
  "Ukraine city destruction buildings",
  "Ukraine buildings destruction aftermath",
];

const BACKGROUND_REQUIRED_KEYWORDS = [
  "destroyed building",
  "destroyed buildings",
  "damaged building",
  "damaged buildings",
  "building destruction",
  "destroyed residential building",
  "destroyed residential buildings",
  "damaged residential building",
  "damaged residential buildings",
  "destroyed apartment",
  "destroyed apartments",
  "damaged apartment",
  "damaged apartments",
  "building rubble",
  "building debris",
  "destroyed infrastructure",
  "damaged infrastructure",
  "urban destruction",
  "city destruction",
  "building destruction aftermath",
  "buildings destruction aftermath",
  "ruins",
  "rubble",
  "debris",
];

const BACKGROUND_EXCLUDED_KEYWORDS = [
  "funeral",
  "funerals",
  "mourning",
  "corpse",
  "corpses",
  "body",
  "bodies",
  "dead",
  "death",
  "deaths",
  "killed",
  "fatality",
  "fatalities",
  "casualty",
  "casualties",
  "wounded",
  "wounded civilians",
  "injured",
  "injuries",
  "hospital",
  "ambulance",
  "medical treatment",
  "morgue",
  "soldier",
  "soldiers",
  "military",
  "weapon",
  "weapons",
  "gun",
  "guns",
  "tank",
  "tanks",
  "missile",
  "missiles",
  "rocket",
  "rockets",
];

/* =========================================================
   Normal and graphic category lists
   ========================================================= */

const NORMAL_GAZA_CATEGORIES: GazaCategory[] = [
  "destruction",
  "buildings",
  "deaths",
];

const GRAPHIC_GAZA_CATEGORIES: GazaCategory[] = ["wounded", "fatalities"];

const NORMAL_UKRAINE_CATEGORIES: UkraineCategory[] = [
  "destruction",
  "buildings",
  "wounded",
];

const GRAPHIC_UKRAINE_CATEGORIES: UkraineCategory[] = ["wounded", "fatalities"];

/* =========================================================
   Conflict keywords
   ========================================================= */

const CONFLICT_KEYWORDS: Record<Conflict, string[]> = {
  Gaza: [
    "gaza",
    "palestine",
    "palestinian",
    "rafah",
    "khan younis",
    "khan yunis",
    "west bank",
    "israel",
  ],

  Ukraine: [
    "ukraine",
    "ukrainian",
    "kyiv",
    "kharkiv",
    "donetsk",
    "mariupol",
    "odesa",
    "odessa",
    "bakhmut",
    "zaporizhzhia",
    "russia",
  ],
};

/* =========================================================
   Text helpers
   ========================================================= */

function cleanText(value?: string) {
  if (!value) {
    return "";
  }

  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#39;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeText(value?: string) {
  return cleanText(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ");
}

function containsKeyword(text: string, keywords: string[]) {
  const normalized = normalizeText(text);

  return keywords.some((keyword) =>
    normalized.includes(normalizeText(keyword)),
  );
}

function isRelevant(conflict: Conflict, values: Array<string | undefined>) {
  const text = values.filter(Boolean).join(" ");

  return containsKeyword(text, CONFLICT_KEYWORDS[conflict]);
}

/* =========================================================
   Background filtering
   ========================================================= */

function isSuitableBackground(values: Array<string | undefined>) {
  const text = values.filter(Boolean).join(" ");

  if (containsKeyword(text, BACKGROUND_EXCLUDED_KEYWORDS)) {
    return false;
  }

  return containsKeyword(text, BACKGROUND_REQUIRED_KEYWORDS);
}

/* =========================================================
   Category detection
   ========================================================= */

function getGazaCategory(
  values: Array<string | undefined>,
): GazaCategory | null {
  const text = values.filter(Boolean).join(" ");

  const categoryPriority: GazaCategory[] = [
    "fatalities",
    "wounded",
    "deaths",
    "destruction",
    "buildings",
  ];

  for (const category of categoryPriority) {
    if (containsKeyword(text, GAZA_VISUAL_CATEGORIES[category])) {
      return category;
    }
  }

  return null;
}

function getUkraineCategory(
  values: Array<string | undefined>,
): UkraineCategory | null {
  const text = values.filter(Boolean).join(" ");

  const categoryPriority: UkraineCategory[] = [
    "fatalities",
    "wounded",
    "destruction",
    "buildings",
  ];

  for (const category of categoryPriority) {
    if (containsKeyword(text, UKRAINE_VISUAL_CATEGORIES[category])) {
      return category;
    }
  }

  return null;
}

/* =========================================================
   Title helper
   ========================================================= */

function createTitle(title: string | undefined, fallback: string) {
  const cleaned = cleanText(title);

  if (!cleaned) {
    return fallback;
  }

  const firstSentence = cleaned.split(/[.!?]/)[0]?.trim();

  if (
    firstSentence &&
    firstSentence.length >= 8 &&
    firstSentence.length <= 140
  ) {
    return firstSentence;
  }

  return cleaned.length > 140 ? `${cleaned.slice(0, 137)}...` : cleaned;
}

/* =========================================================
   Search helpers
   ========================================================= */

function getRandomGazaSearchTerm(category: GazaCategory) {
  const terms = GAZA_SEARCH_TERMS[category];

  return terms[Math.floor(Math.random() * terms.length)];
}

function getRandomUkraineSearchTerm(category: UkraineCategory) {
  const terms = UKRAINE_SEARCH_TERMS[category];

  return terms[Math.floor(Math.random() * terms.length)];
}

function getRandomBackgroundSearchTerm(conflict: Conflict) {
  const terms =
    conflict === "Gaza"
      ? GAZA_BACKGROUND_SEARCH_TERMS
      : UKRAINE_BACKGROUND_SEARCH_TERMS;

  return terms[Math.floor(Math.random() * terms.length)];
}

function getRandomPage() {
  return Math.floor(Math.random() * 4) + 1;
}

function isRefreshRequest(request: Request) {
  const { searchParams } = new URL(request.url);

  return searchParams.has("_");
}

/* =========================================================
   Cache helper
   ========================================================= */

function getCacheKey(
  conflict: Conflict,
  graphic: boolean,
  background: boolean,
) {
  return `${conflict}-${
    background ? "background" : graphic ? "graphic" : "normal"
  }`;
}

function getBackgroundCategories(
  conflict: Conflict,
): GazaCategory[] | UkraineCategory[] {
  return conflict === "Gaza"
    ? ["destruction", "buildings"]
    : ["destruction", "buildings"];
}

/* =========================================================
   Wikimedia Commons
   ========================================================= */

async function fetchWikimedia(
  conflict: Conflict,
  graphic: boolean,
  background = false,
): Promise<GalleryItem[]> {
  const isGaza = conflict === "Gaza";

  const categories = background
    ? getBackgroundCategories(conflict)
    : isGaza
      ? graphic
        ? GRAPHIC_GAZA_CATEGORIES
        : NORMAL_GAZA_CATEGORIES
      : graphic
        ? GRAPHIC_UKRAINE_CATEGORIES
        : NORMAL_UKRAINE_CATEGORIES;

  const category = categories[Math.floor(Math.random() * categories.length)];

  const searchTerm = background
    ? getRandomBackgroundSearchTerm(conflict)
    : isGaza
      ? getRandomGazaSearchTerm(category as GazaCategory)
      : getRandomUkraineSearchTerm(category as UkraineCategory);

  const searchParams = new URLSearchParams({
    action: "query",
    format: "json",
    generator: "search",
    gsrsearch: searchTerm,
    gsrnamespace: "6",
    gsrlimit: "50",
    prop: "imageinfo",
    iiprop: "url|timestamp|extmetadata",
    iiurlwidth: "1400",
    origin: "*",
  });

  const endpoint =
    `https://commons.wikimedia.org/w/api.php?` + searchParams.toString();

  console.log(
    `[war-gallery] Fetching ${conflict} ${
      graphic ? "graphic" : "normal"
    } imagery from Wikimedia Commons: ${searchTerm}`,
  );

  const response = await fetch(endpoint, {
    cache: "no-store",
    headers: {
      "User-Agent": "GlobalWarCasualties/1.0 portfolio project",
    },
  });

  if (!response.ok) {
    throw new Error(`Wikimedia request failed: ${response.status}`);
  }

  const data: WikimediaResponse = await response.json();

  const pages = data.query?.pages ? Object.values(data.query.pages) : [];

  return pages
    .map((page): GalleryItem | null => {
      const imageInfo = page.imageinfo?.[0];

      if (!imageInfo) {
        return null;
      }

      const imageUrl = imageInfo.thumburl ?? imageInfo.url ?? "";

      const pageUrl =
        imageInfo.descriptionurl ??
        `https://commons.wikimedia.org/wiki/${encodeURIComponent(
          page.title ?? "",
        )}`;

      const metadata = imageInfo.extmetadata;

      const description = cleanText(metadata?.ImageDescription?.value);

      const artist = cleanText(metadata?.Artist?.value);

      const credit = cleanText(metadata?.Credit?.value);

      const rawTitle = page.title?.replace(/^File:/, "");

      const searchableText = [rawTitle, description, artist, credit];

      if (!isRelevant(conflict, searchableText)) {
        return null;
      }

      if (background && !isSuitableBackground(searchableText)) {
        return null;
      }

      /*
       * The search category is authoritative.
       *
       * We do not let generic metadata such as
       * "hospital" or "building" move the image
       * into another category.
       */

      const matchedCategory = category as GazaCategory | UkraineCategory;

      return {
        title: createTitle(
          description || rawTitle,
          isGaza ? "Gaza conflict imagery" : "Ukraine conflict imagery",
        ),
        url: pageUrl,
        imageUrl,
        source: "Wikimedia Commons",
        creator: artist || credit || "Unknown creator",
        creatorUrl: pageUrl,
        publishedAt:
          metadata?.DateTimeOriginal?.value || imageInfo.timestamp || "",
        conflict,
        category: matchedCategory,
      };
    })
    .filter(
      (item): item is GalleryItem =>
        item !== null &&
        item.url.startsWith("http") &&
        item.imageUrl.startsWith("http"),
    );
}

/* =========================================================
   Pexels
   ========================================================= */

async function fetchPexels(
  conflict: Conflict,
  graphic: boolean,
  background = false,
): Promise<GalleryItem[]> {
  const apiKey = process.env.PEXELS_API_KEY;

  if (!apiKey) {
    console.log("[war-gallery] Pexels API key not configured");

    return [];
  }

  const isGaza = conflict === "Gaza";

  const categories = background
    ? getBackgroundCategories(conflict)
    : isGaza
      ? graphic
        ? GRAPHIC_GAZA_CATEGORIES
        : NORMAL_GAZA_CATEGORIES
      : graphic
        ? GRAPHIC_UKRAINE_CATEGORIES
        : NORMAL_UKRAINE_CATEGORIES;

  const category = categories[Math.floor(Math.random() * categories.length)];

  const query = background
    ? getRandomBackgroundSearchTerm(conflict)
    : isGaza
      ? getRandomGazaSearchTerm(category as GazaCategory)
      : getRandomUkraineSearchTerm(category as UkraineCategory);

  const page = getRandomPage();

  const searchParams = new URLSearchParams({
    query,
    orientation: "landscape",
    size: "large",
    page: String(page),
    per_page: "40",
  });

  console.log(
    `[war-gallery] Fetching ${conflict} ${
      graphic ? "graphic" : "normal"
    } imagery from Pexels: ${query}`,
  );

  const response = await fetch(
    `https://api.pexels.com/v1/search?${searchParams.toString()}`,
    {
      cache: "no-store",
      headers: {
        Authorization: apiKey,
      },
    },
  );

  if (!response.ok) {
    console.error(`[war-gallery] Pexels request failed: ${response.status}`);

    return [];
  }

  const data: PexelsResponse = await response.json();

  return (data.photos ?? [])
    .map((photo): GalleryItem | null => {
      const altText = cleanText(photo.alt);

      if (background && !isSuitableBackground([altText, query])) {
        return null;
      }

      /*
       * Pexels search query determines the category.
       *
       * Alt text is not reliable enough to reclassify
       * the image.
       */

      const matchedCategory = category as GazaCategory | UkraineCategory;

      const imageUrl =
        photo.src?.large2x ??
        photo.src?.large ??
        photo.src?.landscape ??
        photo.src?.original ??
        "";

      if (!imageUrl || !photo.url) {
        return null;
      }

      return {
        title: createTitle(
          altText,
          isGaza ? "Gaza conflict imagery" : "Ukraine conflict imagery",
        ),
        url: photo.url,
        imageUrl,
        source: "Pexels",
        creator: photo.photographer ?? "Unknown creator",
        creatorUrl: photo.photographer_url,
        publishedAt: "",
        conflict,
        category: matchedCategory,
      };
    })
    .filter(
      (item): item is GalleryItem =>
        item !== null &&
        item.url.startsWith("http") &&
        item.imageUrl.startsWith("http"),
    );
}

/* =========================================================
   Combined gallery
   ========================================================= */

async function fetchGallery(
  conflict: Conflict,
  graphic: boolean,
  forceRefresh = false,
  background = false,
): Promise<GalleryItem[]> {
  const cacheKey = getCacheKey(conflict, graphic, background);

  const cached = cache.get(cacheKey);

  if (!forceRefresh && cached && cached.expiresAt > Date.now()) {
    console.log(
      `[war-gallery] Using cached ${conflict} ${
        graphic ? "graphic" : "normal"
      } gallery`,
    );

    return cached.gallery;
  }

  console.log(
    `[war-gallery] Fetching ${conflict} ${
      graphic ? "graphic" : "normal"
    } imagery from Wikimedia + Pexels`,
  );

  const results = await Promise.allSettled([
    fetchWikimedia(conflict, graphic, background),
    fetchPexels(conflict, graphic, background),
  ]);

  const gallery: GalleryItem[] = [];

  for (const result of results) {
    if (result.status === "fulfilled") {
      gallery.push(...result.value);
    } else {
      console.error("[war-gallery] Provider error:", result.reason);
    }
  }

  /*
   * Keep only items with a valid category.
   */

  const uniqueGallery = Array.from(
    new Map(
      gallery
        .filter((item) => item.imageUrl && item.url && item.category)
        .map((item) => [`${item.imageUrl}-${item.category}`, item]),
    ).values(),
  );

  /*
   * Newer Wikimedia records appear first.
   * Pexels records have no publication date.
   */

  uniqueGallery.sort((a, b) => {
    const aTime = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;

    const bTime = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;

    return bTime - aTime;
  });

  const finalGallery = uniqueGallery.slice(0, 30);

  cache.set(cacheKey, {
    expiresAt: Date.now() + CACHE_TTL,
    gallery: finalGallery,
  });

  console.log(
    `[war-gallery] ${conflict} ${
      graphic ? "graphic" : "normal"
    }: ${finalGallery.length} images`,
  );

  return finalGallery;
}

/* =========================================================
   API route
   ========================================================= */

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const requestedConflict = searchParams.get("conflict");

    const conflict: Conflict =
      requestedConflict === "Ukraine" ? "Ukraine" : "Gaza";

    /*
     * Graphic content is opt-in.
     *
     * Without ?graphic=true, only normal gallery
     * categories are fetched.
     */

    const graphic = searchParams.get("graphic") === "true";

    const background = searchParams.get("background") === "true";

    const forceRefresh = isRefreshRequest(request);

    const gallery = await fetchGallery(
      conflict,
      graphic,
      forceRefresh,
      background,
    );

    return NextResponse.json({
      gallery,
      updatedAt: new Date().toISOString(),
      source: "Wikimedia Commons + Pexels",
      conflict,
      graphic,
      background,
    });
  } catch (error) {
    console.error("[war-gallery] API error:", error);

    return NextResponse.json(
      {
        error: "Unable to load visual war gallery",
        gallery: [],
      },
      {
        status: 500,
      },
    );
  }
}
