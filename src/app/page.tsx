import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Works from "@/components/Works";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import { portfolio } from "@/data/portfolioData";

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Works />
        <Journey />
        <Contact />
      </main>
      <footer className="border-t border-white/10 px-6 py-8 text-sm text-white/50 md:px-12">
        © {new Date().getFullYear()} {portfolio.name}. Built with Next.js.
      </footer>
    </>
  );
}
