"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Plus } from "lucide-react";
import { projects, type Project } from "@/data/portfolioData";

export default function Works() {
  const [open, setOpen] = useState<Project | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="works" className="border-t border-white/10 px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-5xl font-light md:text-7xl">Selected works & security labs</h2>
        <p className="mt-6 max-w-xl text-white/60">
          Self-directed work in my own lab or on legal practice platforms. Open a case study for the details.
        </p>

        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-6">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setOpen(p)}
              className={`group relative flex min-h-[18rem] flex-col justify-between bg-black p-8 text-left transition-colors hover:bg-gradient-to-br hover:from-maroon-primary hover:to-black ${
                i < 2 ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              <span className="text-sm text-white/50">{p.kind}</span>
              <div>
                <h3 className="font-display text-3xl font-light leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-white/60 group-hover:text-white/80">{p.summary}</p>
              </div>
              <Plus className="absolute right-6 top-6 text-white/40 transition-transform group-hover:rotate-90 group-hover:text-white" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="scrim"
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(null)}
            />
            <motion.aside
              key="drawer"
              role="dialog"
              aria-modal="true"
              aria-label={open.title}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-xl overflow-y-auto border-l border-maroon-glow/40 bg-black p-8 md:p-12"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              data-lenis-prevent
            >
              <button
                onClick={() => setOpen(null)}
                aria-label="Close case study"
                className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
              >
                <X size={18} /> Close
              </button>
              <p className="text-sm text-white/50">{open.kind}</p>
              <h3 className="mt-2 font-display text-4xl font-light leading-tight">{open.title}</h3>
              <p className="mt-6 text-white/70">{open.summary}</p>
              <ul className="mt-8 space-y-4 border-t border-white/10 pt-8">
                {open.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-maroon-glow" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-2">
                {open.stack.map((s) => (
                  <span key={s} className="rounded-full border border-maroon-glow/50 px-3 py-1 text-xs text-white/80">
                    {s}
                  </span>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
