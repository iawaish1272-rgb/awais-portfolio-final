import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolioData";

const display = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: `${portfolio.name} — SOC Analyst & Full-Stack Developer`,
  description: portfolio.statement,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-obsidian font-sans text-white antialiased">{children}</body>
    </html>
  );
}
