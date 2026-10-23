import { motion } from 'framer-motion'
import { profile, socialLinks } from '../../data/portfolio'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-4 pb-24 pt-32 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(56,189,248,0.10),transparent_55%)]" />
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-100"
        >
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
          </span>
          {profile.availability}
        </motion.p>

        <motion.h1
          className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.65, ease }}
        >
          Muhammad Haris
        </motion.h1>

        <motion.p
          className="mt-5 text-balance text-lg font-medium text-cyan-200 sm:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.6, ease }}
        >
          {profile.role}
          <span className="mt-1 block text-sm font-normal text-slate-400 sm:text-base">
            {profile.roleDetail}
          </span>
        </motion.p>

        <motion.p
          className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-slate-400 sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.7 }}
        >
          {profile.summary}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.55, ease }}
        >
          <a
            href="#projects"
            className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 outline-none transition hover:bg-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            View Projects
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 outline-none transition hover:border-cyan-400/40 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 outline-none transition hover:border-cyan-400/40 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            LinkedIn
          </a>
          <a
            href={socialLinks.cvPath}
            download
            className="rounded-xl border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 outline-none transition hover:border-white/30 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="rounded-xl px-6 py-3 text-sm font-semibold text-cyan-200 outline-none transition hover:bg-cyan-500/10 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.p
          className="mt-8 text-xs text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          {profile.degree} · {profile.university} · {profile.location}
        </motion.p>
      </div>
    </section>
  )
}
