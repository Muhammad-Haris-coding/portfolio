import { motion } from 'framer-motion'
import { profile } from '../../data/portfolio'
import { useSectionInView } from '../../hooks/useSectionInView'

const ease = [0.22, 1, 0.36, 1] as const

const cards = [
  {
    title: 'Computer vision first',
    body: 'My work centres on seeing systems: object detection with YOLO, image classification with CNNs, segmentation with SAM, depth estimation, and CLIP-based visual search with FAISS.',
  },
  {
    title: 'Learning by building',
    body: 'During my Deep Learning internship at AlgoHub I shipped a new project every week — from face mask detection and face verification to a smart agriculture capstone — each one documented in public repositories.',
  },
  {
    title: 'Engineering habits',
    body: 'I care about the parts around the model: clean, modular code, evaluation before claims, FastAPI and Streamlit interfaces, Docker packaging, and automated tests.',
  },
] as const

const facts = [
  { label: 'Location', value: 'Mardan, Pakistan' },
  { label: 'University', value: 'UET Mardan' },
  { label: 'Degree', value: 'BS CS (Artificial Intelligence)' },
  { label: 'CGPA', value: profile.cgpa },
] as const

export function About() {
  const { ref, inView } = useSectionInView<HTMLElement>(0.25)

  return (
    <section id="about" ref={ref} className="relative scroll-mt-28 px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/90">About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            An AI undergraduate who builds vision systems
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08, duration: 0.55, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            I&apos;m Muhammad Haris, a BS Computer Science (Artificial Intelligence) student at the
            University of Engineering and Technology, Mardan. My focus is computer vision and
            machine learning: training and evaluating models, and turning them into working
            systems with real interfaces and measurable results.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            My strongest projects include a CLIP + FAISS visual search system evaluated on 1,000
            images, a smart agriculture monitoring system for plant disease classification, and a
            multi-model pipeline combining detection, segmentation, and depth estimation. I&apos;m
            now looking for paid CV/ML internships, junior engineering roles, and project work
            where I can contribute these skills.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + 0.08 * i, duration: 0.5, ease }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-base font-semibold text-slate-50">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.55, ease }}
          className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {facts.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4 text-center"
            >
              <dt className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                {f.label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-slate-100">{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
