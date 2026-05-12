import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'
import { useSectionInView } from '../../hooks/useSectionInView'

export function Projects() {
  const { ref, inView } = useSectionInView<HTMLElement>(0.12)

  return (
    <section
      id="projects"
      ref={ref}
      className="relative scroll-mt-28 px-4 py-24 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/90">Projects</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Selected work
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            High-signal builds spanning AI research tooling, vision systems, premium web, and mobile experiences.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/55 shadow-[0_0_50px_rgba(15,23,42,0.85)] backdrop-blur-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <motion.img
                  src={p.image}
                  alt={`Project preview: ${p.title}`}
                  decoding="async"
                  loading="lazy"
                  fetchPriority="low"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-cyan-100/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-100 transition hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]"
                  >
                    GitHub
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-4 py-2.5 text-xs font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:brightness-110"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
