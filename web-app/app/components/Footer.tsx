import Link from "next/link";

import { Mail, ArrowUpRight, BarChart3 } from "lucide-react";
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.38-3.37-1.38-.46-1.22-1.11-1.55-1.11-1.55-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.18 9.18 0 0 1 12 6.96c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.8-4.58 5.06.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7 2 2 0 0 0 5.25 3ZM20.44 13.4c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.09-3.38 1.85V8.5H9.36V20h3.38v-6.17c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.87 2.02 3.31V20h3.35v-6.6Z" />
    </svg>
  );
}

export default function Footer() {
  const links = [
    { href: "/analysis", label: "Analysis" },
    { href: "/findings", label: "Key Findings" },
    { href: "/methodology", label: "Methodology" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 border-t border-slate-800/80">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-8">
        {/* Main Footer */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-7">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-950/40 group-hover:scale-105 group-hover:shadow-indigo-500/20 transition-all duration-300">
                <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <BarChart3 size={19} className="text-white relative z-10" />
              </div>

              <div className="leading-tight">
                <div className="font-semibold text-base text-white tracking-tight">
                  Global War Casualties
                </div>

                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-medium mt-0.5">
                  Data Analytics Project
                </div>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mt-4 max-w-xs">
              A data analytics portfolio project exploring reported casualty
              patterns, trends, and demographic insights across two major
              conflicts.
            </p>

            {/* Built by */}
            <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
              <span>Made by</span>

              <span className="font-medium text-slate-300">Tushar Pandey</span>
            </div>
          </div>

          {/* Navigation + Connect */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            {/* Navigation */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-slate-500 mb-4">
                Explore
              </p>

              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-y-0.5 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-slate-500 mb-4">
                Connect
              </p>

              <div className="flex items-center gap-2">
                {/* GitHub */}
                <a
                  href="https://github.com/Tushar99991"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  title="GitHub"
                  className="w-10 h-10 rounded-xl border border-slate-800 bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <GithubIcon size={18} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/tusharpandey30/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  title="LinkedIn"
                  className="w-10 h-10 rounded-xl border border-slate-800 bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <LinkedinIcon size={18} />
                </a>

                {/* Email */}
                <a
                  href="mailto:tushar2003oct30@gmail.com"
                  aria-label="Send email"
                  title="Email"
                  className="w-10 h-10 rounded-xl border border-slate-800 bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Mail size={18} />
                </a>
              </div>

              {/* Contact Us */}
              <a
                href="mailto:tushar2003oct30@gmail.com"
                className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-950 text-sm font-medium hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-black/20"
              >
                <Mail size={15} />
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-7 pt-4 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
            <span className="text-slate-500">
              Global War Casualties Analysis
            </span>

            <span className="text-slate-500">
              Built with{" "}
              <span className="text-slate-400">
                Python, Tableau, Power BI & Next.js
              </span>
            </span>
          </div>

          {/* Tiny footer signature */}
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span className="text-[11px] text-slate-600">
              © {new Date().getFullYear()} Global War Casualties
            </span>

            <span className="text-[11px] text-slate-600">
              Data • Analysis • Visualization
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
