import { motion } from 'framer-motion'
import { education, educationFocus } from '../../data/portfolio'
import { useSectionInView } from '../../hooks/useSectionInView'

const ease = [0.22, 1, 0.36, 1] as const

export function Education() {
  const { ref, inView } = useSectionInView<HTMLElement>(0.2)

  return (
    <section id="education" ref={ref} className="relative scroll-mt-28 px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/90">
            Education
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Education
          </h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.5, ease }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-cyan-200">{item.org}</p>
                </div>
                <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
                  {item.period}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{item.detail}</p>

              <p className="mt-6 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                Focus areas
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {educationFocus.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
