import { motion } from 'framer-motion'
import { skillGroups } from '../../data/portfolio'
import { useSectionInView } from '../../hooks/useSectionInView'

const ease = [0.22, 1, 0.36, 1] as const

export function Skills() {
  const { ref, inView } = useSectionInView<HTMLElement>(0.15)

  return (
    <section id="skills" ref={ref} className="relative scroll-mt-28 px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/90">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Technical skills
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            The tools and techniques behind the projects above — grouped by area, with computer
            vision and deep learning first.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.07 * gi, duration: 0.5, ease }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-cyan-400/35 hover:text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
