"use client";

import { useEffect, useState } from "react";

type WarBackgroundItem = {
  imageUrl: string;
  title?: string;
  source?: string;
  conflict?: string;
  category?: string;
};

export default function WarBackground() {
  const [image, setImage] = useState<WarBackgroundItem | null>(null);
  const [nextImage, setNextImage] = useState<WarBackgroundItem | null>(null);
  const [backgroundTop, setBackgroundTop] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const updateBackgroundPosition = () => {
      const navbar =
        document.querySelector("nav") || document.querySelector("header");

      if (navbar) {
        const bottom = navbar.getBoundingClientRect().bottom;

        if (!cancelled) {
          setBackgroundTop(Math.max(0, bottom));
        }
      }
    };

    updateBackgroundPosition();

    const navbar =
      document.querySelector("nav") || document.querySelector("header");

    let resizeObserver: ResizeObserver | null = null;

    if (navbar) {
      resizeObserver = new ResizeObserver(() => {
        updateBackgroundPosition();
      });

      resizeObserver.observe(navbar);
    }

    window.addEventListener("resize", updateBackgroundPosition);

    const getConflict = () => {
      return window.location.pathname.includes("russia-ukraine")
        ? "Ukraine"
        : "Gaza";
    };

    const loadBackground = async (initial = false) => {
      try {
        const conflict = getConflict();

        const response = await fetch(
          `/api/war-gallery?conflict=${conflict}&background=true&_${Date.now()}`,
          {
            cache: "no-store",
          },
        );

        if (!response.ok) {
          throw new Error("Failed to load war background");
        }

        const data = await response.json();

        if (cancelled || !data?.gallery?.length) {
          return;
        }

        const gallery = data.gallery as WarBackgroundItem[];

        let randomImage = gallery[Math.floor(Math.random() * gallery.length)];

        /*
         * Try to avoid showing the exact same
         * image immediately again.
         */
        if (image?.imageUrl && gallery.length > 1) {
          const differentImages = gallery.filter(
            (item) => item.imageUrl !== image.imageUrl,
          );

          if (differentImages.length) {
            randomImage =
              differentImages[
                Math.floor(Math.random() * differentImages.length)
              ];
          }
        }

        if (initial) {
          setImage(randomImage);
          return;
        }

        /*
         * Preload the next image before
         * starting the transition.
         */
        const preload = new Image();

        preload.src = randomImage.imageUrl;

        preload.onload = () => {
          if (cancelled) {
            return;
          }

          setNextImage(randomImage);
          setFade(false);

          setTimeout(() => {
            if (cancelled) {
              return;
            }

            setImage(randomImage);
            setNextImage(null);
            setFade(true);
          }, 1200);
        };

        preload.onerror = () => {
          if (!cancelled) {
            setNextImage(null);
          }
        };
      } catch {
        // Keep the page usable if the background API is unavailable.
      }
    };

    loadBackground(true);

    /*
     * TEST MODE:
     * Change this to 30000 later for 30 seconds.
     */
    const rotationInterval = setInterval(() => {
      loadBackground();
    }, 5000);

    return () => {
      cancelled = true;

      window.removeEventListener("resize", updateBackgroundPosition);

      resizeObserver?.disconnect();
      clearInterval(rotationInterval);
    };
  }, []);

  if (!image?.imageUrl) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-0 overflow-hidden"
      style={{
        top: `${backgroundTop}px`,
      }}
    >
      {/* Current background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1200ms]"
        style={{
          backgroundImage: `url("${image.imageUrl}")`,
          opacity: fade ? 1 : 0,
        }}
      />

      {/* Incoming background */}
      {nextImage?.imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1200ms]"
          style={{
            backgroundImage: `url("${nextImage.imageUrl}")`,
            opacity: fade ? 0 : 1,
          }}
        />
      )}

      <div className="absolute inset-0 bg-white/75" />

      <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/78 to-white/88" />
    </div>
  );
}
