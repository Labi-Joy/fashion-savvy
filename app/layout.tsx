import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import { DemoCartSeed } from "@/components/common/demo-cart-seed";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FashionSavvy — Discover your style",
  description:
    "FashionSavvy is a marketplace for African-inspired fashion. Shop curated collections, manage your store, and grow your fashion business.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body className="min-h-screen bg-surface text-ink-900 antialiased">
        <DemoCartSeed />
        {children}
      </body>
    </html>
  );
}
