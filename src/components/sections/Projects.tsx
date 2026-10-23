import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'
import { useSectionInView } from '../../hooks/useSectionInView'

const ease = [0.22, 1, 0.36, 1] as const

export function Projects() {
  const { ref, inView } = useSectionInView<HTMLElement>(0.08)

  return (
    <section id="projects" ref={ref} className="relative scroll-mt-28 px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/90">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Featured projects
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            Real, public work from my GitHub — vision systems I designed, implemented, and
            evaluated. Every card links to its actual repository.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * i, duration: 0.5, ease }}
              className="flex flex-col rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-cyan-400/30"
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-300/80">
                {p.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.description}</p>

              <ul className="mt-4 space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-300">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-xl bg-cyan-400 px-4 py-2.5 text-xs font-semibold text-slate-950 outline-none transition hover:bg-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  View on GitHub
                </a>
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-100 outline-none transition hover:border-cyan-400/40 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    Live demo
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
