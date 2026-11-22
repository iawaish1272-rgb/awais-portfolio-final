"use client";
import { Download } from "lucide-react";
import Magnetic from "./Magnetic";
import { portfolio } from "@/data/portfolioData";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-md">
        <a href="#index" className="font-display text-2xl tracking-tight" aria-label="Back to top">
          {portfolio.monogram}
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {portfolio.nav.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <Magnetic strength={0.2}>
          <a
            href={portfolio.cv.href}
            download={portfolio.cv.fileName}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-maroon-glow hover:text-white"
          >
            <Download size={15} /> Download CV
          </a>
        </Magnetic>
      </div>
    </header>
  );
}
