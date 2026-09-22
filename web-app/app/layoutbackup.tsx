import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WarNewsTicker from "./components/WarNewsTicker";
import WarBackground from "./components/WarBackground";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global War Casualties Analysis",
  description:
    "Data analytics project analyzing casualty patterns in Russia-Ukraine and Israel-Palestine conflicts",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <WarBackground />

          <div className="relative z-10 min-h-screen flex flex-col">
            <WarNewsTicker />
            <Navbar />

            <main className="flex-1">{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
