"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import Magnetic from "./Magnetic";
import { portfolio } from "@/data/portfolioData";

const ease = [0.22, 1, 0.36, 1] as const;

function Line({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease, delay }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="index" className="relative flex min-h-screen items-center px-6 pb-16 pt-32 md:px-12">
      <div className="mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-8 text-xs tracking-[0.25em] text-white/60"
          >
            {portfolio.tagline}
          </motion.p>
          <h1 className="font-display text-[clamp(2.9rem,8.4vw,8rem)] font-light uppercase leading-[0.9] tracking-tight">
            <Line text="Muhammad" delay={0.2} />
            <Line text="Awais" delay={0.35} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.9 }}
            className="mt-10 max-w-xl text-lg leading-relaxed text-white/70"
          >
            {portfolio.statement}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href={portfolio.cv.href}
                download={portfolio.cv.fileName}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-maroon-glow hover:text-white"
              >
                <Download size={18} /> Download Curriculum Vitae
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#works"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 transition-colors hover:border-maroon-glow hover:bg-maroon-primary/40"
              >
                View selected works <ArrowDown size={16} />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.5 }}
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
        >
          <div
            className="relative aspect-[3/4] overflow-hidden border border-white/10 bg-[length:200%_200%] animate-drift"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 30%, #7A1C2E 0%, #58111A 35%, #000 75%)",
            }}
          >
            {photoFailed ? (
              <div className="flex h-full items-center justify-center font-display text-8xl text-white/80">MA</div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={portfolio.photo}
                alt={`Portrait of ${portfolio.name}`}
                onError={() => setPhotoFailed(true)}
                className="h-full w-full object-cover object-top mix-blend-luminosity grayscale transition duration-700 hover:mix-blend-normal hover:grayscale-0"
              />
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
          </div>
          <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-4 py-2 text-xs backdrop-blur">
            <span className="h-2 w-2 animate-pulseDot rounded-full bg-maroon-glow" />
            {portfolio.status}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
