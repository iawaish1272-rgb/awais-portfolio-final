"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { expertise } from "@/data/portfolioData";

export default function Expertise() {
  const [active, setActive] = useState(expertise[0].id);
  const current = expertise.find((d) => d.id === active) ?? expertise[0];

  return (
    <section id="expertise" className="border-t border-white/10 px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-5xl font-light md:text-7xl">Two disciplines, one workflow</h2>

        <div role="tablist" aria-label="Expertise areas" className="mt-12 flex flex-wrap gap-3">
          {expertise.map((d) => (
            <button
              key={d.id}
              role="tab"
              aria-selected={active === d.id}
              onClick={() => setActive(d.id)}
              className={`rounded-full border px-6 py-3 text-sm transition-colors ${
                active === d.id
                  ? "border-maroon-glow bg-maroon-primary text-white"
                  : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            role="tabpanel"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
            className="mt-12 grid gap-12 lg:grid-cols-12"
          >
            <p className="max-w-md font-display text-2xl font-light leading-snug text-white/80 lg:col-span-4">
              {current.intro}
            </p>
            <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:col-span-8">
              {current.skills.map((s) => (
                <li
                  key={s.name}
                  className="group bg-black p-6 transition-colors hover:bg-gradient-to-br hover:from-maroon-primary/60 hover:to-black"
                >
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 group-hover:text-white/80">{s.note}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
