import { motion } from 'framer-motion'
import { useSectionInView } from '../../hooks/useSectionInView'

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function About() {
  const { ref, inView } = useSectionInView<HTMLElement>(0.25)

  return (
    <section
      id="about"
      ref={ref}
      className="relative scroll-mt-28 px-4 py-24 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/90">About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Precision engineering.{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              Human creativity.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Systems mindset',
              body: 'Designing modular pipelines and interfaces that feel inevitable — clear structure, measurable outcomes.',
            },
            {
              title: 'AI-first craft',
              body: 'From classical ML to modern deep networks, I focus on reliable training, evaluation, and deployment thinking.',
            },
            {
              title: 'Product polish',
              body: 'Interfaces that behave like premium SaaS: motion, hierarchy, and performance tuned for real users.',
            },
          ].map((c, i) => (
            <motion.article
              key={c.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 shadow-[0_0_40px_rgba(15,23,42,0.65)] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-400/20" />
              <div className="pointer-events-none absolute -bottom-16 left-0 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl transition group-hover:bg-violet-500/20" />
              <h3 className="relative text-lg font-semibold text-slate-50">{c.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-400">{c.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10 overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-950/50 p-8 shadow-[0_0_60px_rgba(34,211,238,0.12)] backdrop-blur-2xl sm:p-10"
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,189,248,0.08),transparent_40%,rgba(167,139,250,0.08))]" />
          <p className="relative mx-auto max-w-3xl text-center text-base leading-relaxed text-slate-300 sm:text-lg">
            I am a passionate AI developer and software engineer with a background in computer science. I enjoy building
            intelligent systems, AI-powered tools, modern web applications, and mobile applications. My focus is on
            combining creativity with technology to create smart digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
