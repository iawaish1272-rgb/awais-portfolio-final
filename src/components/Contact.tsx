"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Copy, Github, Linkedin, Download, Send } from "lucide-react";
import Magnetic from "./Magnetic";
import { portfolio } from "@/data/portfolioData";

const field =
  "w-full border-b border-white/20 bg-transparent py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-maroon-glow focus:ring-0";

export default function Contact() {
  const [toast, setToast] = useState<string | null>(null);

  const copy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setToast(`${label} copied`);
    } catch {
      setToast(`Copy failed. Select the ${label.toLowerCase()} manually.`);
    }
    setTimeout(() => setToast(null), 2200);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\nReply to: ${f.get("email")}`);
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="border-t border-white/10 px-6 py-28 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-5xl font-light leading-tight md:text-7xl">Let&apos;s talk about your SOC or your next build</h2>
          <div className="mt-12 space-y-4">
            {[
              { label: "Email", value: portfolio.email },
              { label: "Phone", value: portfolio.phone },
            ].map((c) => (
              <button
                key={c.label}
                onClick={() => copy(c.label, c.value)}
                className="group flex w-full items-center justify-between border border-white/15 px-6 py-4 text-left transition-colors hover:border-maroon-glow hover:bg-maroon-primary/30"
              >
                <span>
                  <span className="block text-xs text-white/50">{c.label}</span>
                  <span className="text-lg">{c.value}</span>
                </span>
                <Copy size={18} className="text-white/50 group-hover:text-white" />
              </button>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic strength={0.2}>
              <a href={portfolio.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm hover:border-maroon-glow hover:bg-maroon-primary/40">
                <Github size={16} /> GitHub
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm hover:border-maroon-glow hover:bg-maroon-primary/40">
                <Linkedin size={16} /> LinkedIn
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href={portfolio.cv.href} download={portfolio.cv.fileName} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-maroon-glow hover:text-white">
                <Download size={16} /> Download CV
              </a>
            </Magnetic>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-8 self-end">
          <label className="block text-sm text-white/60">
            Your name
            <input name="name" required placeholder="Full name" className={field} />
          </label>
          <label className="block text-sm text-white/60">
            Your email
            <input name="email" type="email" required placeholder="you@company.com" className={field} />
          </label>
          <label className="block text-sm text-white/60">
            Message
            <textarea name="message" required rows={4} placeholder="What would you like to discuss?" className={field} />
          </label>
          <Magnetic>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-maroon-primary px-7 py-3 font-semibold transition-colors hover:bg-maroon-glow">
              <Send size={16} /> Send message
            </button>
          </Magnetic>
        </form>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 z-[80] -translate-x-1/2 border border-maroon-glow bg-black px-6 py-3 text-sm shadow-[0_0_40px_rgba(122,28,46,0.5)]"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
