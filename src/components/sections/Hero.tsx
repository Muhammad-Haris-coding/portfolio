import { motion } from 'framer-motion'
import { NeuralNetworkCanvas } from '../effects/NeuralNetworkCanvas'
import { FloatingParticles } from '../effects/FloatingParticles'
import { useTyping } from '../../hooks/useTyping'

const floatIcons = [
  { label: 'Py', x: '8%', y: '22%', delay: 0 },
  { label: 'AI', x: '86%', y: '18%', delay: 0.4 },
  { label: 'CV', x: '12%', y: '72%', delay: 0.8 },
  { label: 'NN', x: '88%', y: '68%', delay: 1.2 },
  { label: 'JS', x: '6%', y: '48%', delay: 0.2 },
  { label: '⚡', x: '90%', y: '44%', delay: 0.6 },
] as const

export function Hero() {
  const tagline =
    'Building intelligent systems, modern applications, and AI-powered digital experiences.'
  const { display, done } = useTyping(tagline, 28, 900)

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-4 pb-24 pt-32 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/25 blur-[100px] animate-pulse-glow" />
        <div className="absolute -right-20 bottom-10 h-[28rem] w-[28rem] rounded-full bg-violet-600/25 blur-[110px] animate-pulse-glow" />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              'radial-gradient(ellipse 80% 55% at 50% -10%, rgba(56,189,248,0.18), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(167,139,250,0.16), transparent 50%)',
          }}
        />
        <NeuralNetworkCanvas />
        <FloatingParticles count={56} />
      </div>

      {floatIcons.map((ic) => (
        <motion.div
          key={ic.label}
          className="pointer-events-none absolute z-[1] hidden select-none rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-cyan-200/90 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur-md sm:block"
          style={{ left: ic.x, top: ic.y }}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5 + ic.delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6 + ic.delay * 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            {ic.label}
          </motion.span>
        </motion.div>
      ))}

      <div className="relative z-[2] mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
          </span>
          Neural portfolio online
        </motion.div>

        <motion.h1
          className="text-balance bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
            Muhammad Haris
          </span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-2xl text-balance text-base text-slate-300 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7 }}
        >
          <span className="bg-gradient-to-r from-cyan-200 via-sky-200 to-fuchsia-200 bg-clip-text font-medium text-transparent">
            AI Developer • Software Engineer • Web Developer
          </span>
        </motion.p>

        <motion.p
          className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-slate-400 sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          aria-live="polite"
        >
          {display}
          {!done && (
            <span
              className="ml-0.5 inline-block h-[1.1em] w-0.5 translate-y-0.5 bg-cyan-400/90 align-middle animate-pulse motion-reduce:animate-none"
              aria-hidden
            />
          )}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.65 }}
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-2xl px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.45)] outline-none transition hover:shadow-[0_0_55px_rgba(34,211,238,0.6)] focus-visible:ring-2 focus-visible:ring-cyan-300/90 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 transition group-hover:brightness-110" />
            <span className="relative">Explore Projects</span>
          </a>
          <a
            href="/Muhammad-Haris-CV.txt"
            download
            className="rounded-2xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 backdrop-blur-xl outline-none transition hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(167,139,250,0.25)] focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="rounded-2xl border border-cyan-500/30 bg-transparent px-7 py-3 text-sm font-semibold text-cyan-100 outline-none transition hover:border-cyan-300/60 hover:bg-cyan-500/10 hover:shadow-[0_0_28px_rgba(34,211,238,0.25)] focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 z-[2] -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="h-2 w-1 rounded-full bg-cyan-300/80" />
        </motion.div>
      </motion.div>
    </section>
  )
}
