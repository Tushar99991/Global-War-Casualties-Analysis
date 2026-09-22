"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  Image,
  MapPin,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [navbarState, setNavbarState] = useState<
    "default" | "attached" | "hidden"
  >("default");

  const navbarStateRef = useRef<"default" | "attached" | "hidden">("default");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    let ticking = false;

    const changeNavbarState = (state: "default" | "attached" | "hidden") => {
      navbarStateRef.current = state;
      setNavbarState(state);
    };

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      // At the very top, always return to the original position
      // underneath the News Headline.
      if (currentScrollY <= 10) {
        changeNavbarState("default");
      } else if (currentScrollY < lastScrollY) {
        // Scrolling upward:
        // attach the navbar smoothly to the top.
        changeNavbarState("attached");
      } else if (currentScrollY > lastScrollY) {
        // Scrolling downward:
        // hide the navbar completely.
        changeNavbarState("hidden");
      }

      lastScrollY = currentScrollY;

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);

        ticking = true;
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const currentScrollY = window.scrollY;

      // At the actual top of the page, restore the navbar
      // to its normal position below the News Headline.
      if (currentScrollY <= 10) {
        changeNavbarState("default");

        return;
      }

      // Hovering near the upper edge brings the navbar back
      // and attaches it directly to the top.
      if (event.clientY <= 24) {
        changeNavbarState("attached");

        return;
      }

      // If the navbar was brought back by hovering at the top,
      // moving the cursor down below the navbar hides it again.
      //
      // The navbar is approximately 68px tall, so 90px gives
      // enough room to move across it without accidentally hiding it.
      if (
        navbarStateRef.current === "attached" &&
        event.clientY > window.innerHeight * 0.7
      ) {
        changeNavbarState("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Close mobile navigation whenever the route changes.

  const links = [
    { href: "/", label: "Home" },
    { href: "/analysis", label: "Analysis" },
    { href: "/findings", label: "Key Findings" },
    { href: "/methodology", label: "Methodology" },
    { href: "/about-developer", label: "About Developer" },
  ];

  const isGalleryActive = pathname.startsWith("/gallery");

  const navbarTransform =
    navbarState === "default"
      ? "translate-y-10"
      : navbarState === "attached"
        ? "translate-y-0"
        : "-translate-y-full";

  return (
    <nav
      className={`fixed left-0 top-0 w-full z-50 bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 backdrop-blur-xl border-b border-indigo-900/60 shadow-lg shadow-slate-950/20 transform-gpu transition-transform duration-500 ease-out ${navbarTransform}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-14 py-2.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 min-w-0"
          >
            <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 shrink-0">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <BarChart3 size={18} className="text-white relative z-10" />
            </div>

            <div className="leading-tight min-w-0">
              <div className="font-bold text-base sm:text-lg text-white tracking-tight truncate">
                Global War Casualties
              </div>

              <div className="hidden xs:block text-[10px] uppercase tracking-[0.18em] text-slate-400 font-medium">
                Data Analytics Project
              </div>
            </div>
          </Link>

          {/* ===================================================== */}
          {/* Desktop Navigation                                   */}
          {/* ===================================================== */}

          <div className="ml-auto hidden md:flex items-center">
            <div className="flex items-center gap-1.5 text-sm font-medium bg-white/5 border border-white/10 rounded-xl p-1 shadow-sm">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-500/25 to-purple-500/25 text-white shadow-sm border border-indigo-400/20"
                        : "text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/15 hover:to-purple-500/15"
                    }`}
                  >
                    {link.label}

                    {isActive && (
                      <span className="absolute left-1/2 -bottom-[1px] -translate-x-1/2 w-5 h-0.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                    )}
                  </Link>
                );
              })}

              {/* Gallery Dropdown */}
              <div className="relative group ml-1">
                <button
                  type="button"
                  className={`relative flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all duration-200 ${
                    isGalleryActive
                      ? "bg-gradient-to-r from-rose-500/20 via-orange-500/15 to-amber-500/10 text-white shadow-sm border border-rose-400/20"
                      : "text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-rose-500/15 hover:via-orange-500/10 hover:to-amber-500/10 hover:border hover:border-rose-400/10"
                  }`}
                >
                  <Image size={15} className="shrink-0" />

                  <span className="leading-none">Gallery</span>

                  <ChevronDown
                    size={14}
                    className="shrink-0 transition-transform duration-300 group-hover:rotate-180"
                  />

                  {isGalleryActive && (
                    <span className="absolute left-1/2 -bottom-[1px] -translate-x-1/2 w-6 h-0.5 rounded-full bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 shadow-[0_0_10px_rgba(251,113,133,0.45)]" />
                  )}
                </button>

                <div className="absolute right-0 top-full pt-3 opacity-0 invisible translate-y-2 scale-[0.98] origin-top-right group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 transition-all duration-250 ease-out">
                  <div className="w-72 overflow-hidden rounded-2xl bg-white/95 backdrop-blur-2xl border border-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/70">
                    {/* Header */}
                    <div className="px-4 pt-4 pb-3 bg-gradient-to-br from-rose-50/80 via-white to-orange-50/70">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-100 to-orange-100 text-rose-600 flex items-center justify-center shadow-sm">
                          <Image size={15} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[10px] uppercase tracking-[0.16em] font-semibold text-rose-500">
                            Visual Archive
                          </p>

                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                            Explore visual coverage of both conflicts.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Gallery Items */}
                    <div className="p-2">
                      {/* Gaza */}
                      <Link
                        href="/gallery/gaza"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileGalleryOpen(false);
                        }}
                        className="group/item relative flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 hover:bg-gradient-to-r hover:from-rose-50 hover:via-orange-50/70 hover:to-amber-50/50 hover:shadow-sm"
                      >
                        <div className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-gradient-to-b from-rose-400 to-orange-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />

                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-100 to-orange-100 text-rose-600 flex items-center justify-center shadow-sm group-hover/item:scale-105 group-hover/item:shadow-md transition-all duration-200">
                          <MapPin size={17} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-slate-800 group-hover/item:text-rose-700 transition-colors">
                            Gaza
                          </div>

                          <div className="text-[11px] text-slate-400 mt-0.5">
                            Destruction & civilian crisis
                          </div>
                        </div>

                        <ArrowRight
                          size={14}
                          className="text-slate-300 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-rose-500 transition-all duration-200"
                        />
                      </Link>

                      {/* Ukraine */}
                      <Link
                        href="/gallery/ukraine"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileGalleryOpen(false);
                        }}
                        className="group/item relative flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:via-indigo-50/70 hover:to-sky-50/50 hover:shadow-sm"
                      >
                        <div className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-gradient-to-b from-blue-400 to-indigo-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />

                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 flex items-center justify-center shadow-sm group-hover/item:scale-105 group-hover/item:shadow-md transition-all duration-200">
                          <MapPin size={17} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-slate-800 group-hover/item:text-blue-700 transition-colors">
                            Ukraine
                          </div>

                          <div className="text-[11px] text-slate-400 mt-0.5">
                            Destruction & civilian crisis
                          </div>
                        </div>

                        <ArrowRight
                          size={14}
                          className="text-slate-300 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-blue-500 transition-all duration-200"
                        />
                      </Link>
                    </div>

                    {/* Footer Note */}
                    <div className="mx-3 mb-3 pt-3 border-t border-slate-100">
                      <div className="flex items-start gap-2 px-1">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-rose-400 to-orange-400 shrink-0" />

                        <p className="text-[10px] text-slate-400 leading-relaxed">
                          Images and visual coverage are sourced from external
                          reporting and may update over time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* Mobile Menu Button                                    */}
          {/* ===================================================== */}

          <button
            type="button"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="md:hidden relative ml-3 w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 text-slate-200 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-indigo-400/30 transition-all duration-300"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* ======================================================= */}
        {/* Mobile Navigation                                      */}
        {/* ======================================================= */}

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen
              ? "max-h-[620px] opacity-100 mt-3 pb-2"
              : "max-h-0 opacity-0 mt-0 pb-0 pointer-events-none"
          }`}
        >
          <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg shadow-slate-950/20 p-2">
            {/* Main mobile links */}
            <div className="space-y-1">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`relative flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-500/25 to-purple-500/25 text-white border border-indigo-400/20"
                        : "text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/15 hover:to-purple-500/15"
                    }`}
                  >
                    {link.label}

                    {isActive && (
                      <span className="absolute right-4 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                    )}
                  </Link>
                );
              })}

              {/* ================================================= */}
              {/* Mobile Gallery                                    */}
              {/* ================================================= */}

              <div className="pt-1">
                <button
                  type="button"
                  aria-expanded={mobileGalleryOpen}
                  onClick={() => setMobileGalleryOpen((open) => !open)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isGalleryActive
                      ? "bg-gradient-to-r from-rose-500/20 to-orange-500/20 text-white border border-rose-400/20"
                      : "text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-rose-500/15 hover:to-orange-500/15"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Image size={16} />

                    <span>Gallery</span>
                  </span>

                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileGalleryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileGalleryOpen
                      ? "max-h-72 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-3 mt-1 pl-3 border-l border-white/10 space-y-1">
                    {/* Mobile Gaza */}
                    <Link
                      href="/gallery/gaza"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-rose-500/10 hover:to-orange-500/10 transition-all duration-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500/15 to-orange-500/15 text-rose-300 flex items-center justify-center shrink-0">
                        <MapPin size={15} />
                      </div>

                      <div className="min-w-0">
                        <div className="text-sm font-semibold">Gaza</div>

                        <div className="text-[10px] text-slate-500">
                          Destruction & civilian crisis
                        </div>
                      </div>
                    </Link>

                    {/* Mobile Ukraine */}
                    <Link
                      href="/gallery/ukraine"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-indigo-500/10 transition-all duration-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/15 to-indigo-500/15 text-blue-300 flex items-center justify-center shrink-0">
                        <MapPin size={15} />
                      </div>

                      <div className="min-w-0">
                        <div className="text-sm font-semibold">Ukraine</div>

                        <div className="text-[10px] text-slate-500">
                          Destruction & civilian crisis
                        </div>
                      </div>
                    </Link>

                    <div className="px-3 py-2">
                      <p className="text-[10px] text-slate-500 leading-relaxed">
                        Images and visual coverage are sourced from external
                        reporting and may update over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
