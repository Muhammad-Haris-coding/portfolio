import { motion } from 'framer-motion'
import { education } from '../../data/portfolio'
import { useSectionInView } from '../../hooks/useSectionInView'

export function Education() {
  const { ref, inView } = useSectionInView<HTMLElement>(0.2)

  return (
    <section
      id="education"
      ref={ref}
      className="relative scroll-mt-28 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300/90">Education</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Learning trajectory
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            Formal computer science foundations with a strong tilt toward AI, vision, and modern product delivery.
          </p>
        </motion.div>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[0.55rem] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/70 via-violet-500/55 to-fuchsia-500/45 sm:left-[0.7rem]" />
          <ul className="space-y-8">
            {education.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.07 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <span className="absolute -left-[1.35rem] top-3 flex h-3.5 w-3.5 items-center justify-center sm:-left-[1.55rem]">
                  <span className="absolute h-5 w-5 rounded-full bg-cyan-400/25 blur-[2px]" />
                  <span className="relative h-3 w-3 rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 shadow-[0_0_18px_rgba(34,211,238,0.85)] ring-2 ring-slate-950" />
                </span>
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 shadow-[0_0_40px_rgba(15,23,42,0.75)] backdrop-blur-xl transition hover:border-cyan-400/35 hover:shadow-[0_0_48px_rgba(34,211,238,0.16)]">
                  <h3 className="text-base font-semibold text-slate-50">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.detail}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
