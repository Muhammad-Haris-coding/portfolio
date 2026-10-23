import { motion } from 'framer-motion'
import { certifications, experience } from '../../data/portfolio'
import { useSectionInView } from '../../hooks/useSectionInView'

const ease = [0.22, 1, 0.36, 1] as const

export function Experience() {
  const { ref, inView } = useSectionInView<HTMLElement>(0.2)

  return (
    <section id="experience" ref={ref} className="relative scroll-mt-28 px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/90">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Experience &amp; certification
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experience.map((role, i) => (
            <motion.article
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.5, ease }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                  <p className="mt-1 text-sm text-cyan-200">
                    {role.org} · {role.type}
                  </p>
                </div>
                <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
                  {role.period}
                </p>
              </div>
              <ul className="mt-5 space-y-2.5">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}

          {certifications.map((cert, i) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 + 0.08 * i, duration: 0.5, ease }}
              className="rounded-2xl border border-white/10 bg-slate-950/50 p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                    Certification
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold text-white">{cert.title}</h3>
                  <p className="mt-1 text-sm text-cyan-200">{cert.org}</p>
                </div>
                <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
                  {cert.period}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{cert.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
