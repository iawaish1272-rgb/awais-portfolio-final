import { experience, education, languages } from "@/data/portfolioData";

export default function Journey() {
  return (
    <section id="chronicle" className="border-t border-white/10 px-6 py-28 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-5xl font-light md:text-6xl">Experience</h2>
          <ol className="mt-12 space-y-12 border-l border-maroon-glow/40 pl-8">
            {experience.map((e) => (
              <li key={e.role} className="relative">
                <span className="absolute -left-[2.45rem] top-2 h-3 w-3 rounded-full bg-maroon-glow" />
                <p className="text-sm text-white/50">{e.period}</p>
                <h3 className="mt-1 text-2xl font-semibold">{e.role}</h3>
                <p className="text-white/60">{e.org}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/70">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="font-display text-5xl font-light md:text-6xl">Education</h2>
          <ol className="mt-12 space-y-10 border-l border-white/15 pl-8">
            {education.map((e) => (
              <li key={e.title} className="relative">
                <span className="absolute -left-[2.45rem] top-2 h-3 w-3 rounded-full border border-white/60 bg-black" />
                <p className="text-sm text-white/50">{e.period}</p>
                <h3 className="mt-1 text-xl font-semibold">{e.title}</h3>
                <p className="text-white/60">{e.org}</p>
              </li>
            ))}
          </ol>
          <h3 className="mt-16 font-display text-3xl font-light">Languages</h3>
          <dl className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {languages.map((l) => (
              <div key={l.name} className="flex justify-between py-3 text-sm">
                <dt className="font-semibold">{l.name}</dt>
                <dd className="text-white/60">{l.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
