import { motion } from 'framer-motion'
import { aiSkills, devSkills } from '../../data/portfolio'
import { useSectionInView } from '../../hooks/useSectionInView'

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition hover:border-cyan-400/30 hover:shadow-[0_0_32px_rgba(34,211,238,0.12)]"
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-slate-100">{name}</span>
        <span className="font-mono text-xs text-cyan-300/90">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-900/80 ring-1 ring-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 shadow-[0_0_20px_rgba(34,211,238,0.45)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: delay + 0.05, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}

export function Skills() {
  const { ref, inView } = useSectionInView<HTMLElement>(0.15)

  return (
    <section
      id="skills"
      ref={ref}
      className="relative scroll-mt-28 px-4 py-24 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/35 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/90">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Intelligence stack
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            Deep emphasis on AI and ML, complemented by full-stack delivery skills for real-world products.
          </p>
        </motion.div>

        <div className="grid min-w-0 gap-10 lg:grid-cols-2">
          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-200/90">
              AI &amp; programming
            </h3>
            <div className="grid min-w-0 gap-3 sm:grid-cols-2">
              {aiSkills.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={0.04 * i} />
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-200/90">
              Software &amp; development
            </h3>
            <div className="grid min-w-0 gap-3 sm:grid-cols-2">
              {devSkills.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={0.04 * i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
