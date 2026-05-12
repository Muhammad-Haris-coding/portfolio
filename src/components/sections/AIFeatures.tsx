import { motion } from 'framer-motion'
import { useEffect, useId, useMemo, useState } from 'react'
import { NeuralNetworkCanvas } from '../effects/NeuralNetworkCanvas'
import { socialLinks } from '../../data/portfolio'
import { useSectionInView } from '../../hooks/useSectionInView'

const terminalScript = [
  '> initializing AI systems...',
  '> neural networks loaded...',
  '> portfolio ready...',
]

function AnimatedTerminal() {
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    let lineIndex = 0
    const id = window.setInterval(() => {
      if (lineIndex >= terminalScript.length) {
        window.clearInterval(id)
        return
      }
      const line = terminalScript[lineIndex]!
      lineIndex += 1
      setLines((prev) => [...prev, line])
    }, 700)
    return () => {
      window.clearInterval(id)
    }
  }, [])

  return (
    <div className="rounded-2xl border border-emerald-500/25 bg-slate-950/80 p-4 font-mono text-xs text-emerald-100/90 shadow-[0_0_40px_rgba(16,185,129,0.12)] backdrop-blur-xl sm:text-sm">
      <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-2 text-[10px] uppercase tracking-widest text-slate-500">haris@neural-core</span>
      </div>
      <div className="space-y-2" aria-live="polite" aria-atomic="false">
        {lines.map((l) => (
          <motion.p
            key={l}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-emerald-200/90"
          >
            {l}
          </motion.p>
        ))}
        <span className="inline-block h-4 w-2 animate-pulse bg-emerald-400/80 align-middle motion-reduce:hidden" aria-hidden />
      </div>
    </div>
  )
}

function Stat({ label, value, suffix = '' }: { label: string; value: number; suffix?: string }) {
  const [n, setN] = useState(0)
  const { ref, inView } = useSectionInView<HTMLDivElement>(0.4)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    let cancelled = false
    const start = performance.now()
    const dur = 1400
    const tick = (now: number) => {
      if (cancelled) return
      const t = Math.min(1, (now - start) / dur)
      const eased = 1 - (1 - t) ** 3
      setN(Math.round(value * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
    }
  }, [inView, value])

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-xl">
      <p className="font-mono text-2xl font-semibold text-cyan-200 sm:text-3xl">
        {n}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-slate-400">{label}</p>
    </div>
  )
}

function GlowGraph() {
  const uid = useId().replace(/:/g, '')
  const strokeId = `g-${uid}`
  const fillId = `fill-${uid}`
  const path = useMemo(
    () => 'M0,70 C40,20 80,110 120,40 160,90 200,30 240,60 280,10 320,80 360,35',
    [],
  )
  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-4 backdrop-blur-xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">Signal throughput</p>
      <svg viewBox="0 0 360 120" className="h-32 w-full" aria-hidden>
        <defs>
          <linearGradient id={strokeId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(34,211,238,0.35)" />
            <stop offset="100%" stopColor="rgba(15,23,42,0)" />
          </linearGradient>
        </defs>
        <path d={`${path} L360,120 L0,120 Z`} fill={`url(#${fillId})`} />
        <path
          d={path}
          fill="none"
          stroke={`url(#${strokeId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          className="graph-line"
        />
      </svg>
    </div>
  )
}

export function AIFeatures() {
  const { ref, inView } = useSectionInView<HTMLElement>(0.15)

  return (
    <section
      id="ai-lab"
      ref={ref}
      className="relative scroll-mt-28 px-4 py-24 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/35 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-300/90">AI lab</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Systems telemetry
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            A live-feeling console: synthetic metrics, animated graphs, and a compact neural field — all front-end only.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, duration: 0.55 }}
            className="lg:col-span-2"
          >
            <AnimatedTerminal />
          </motion.div>
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Experiments indexed" value={128} suffix="+" />
            <Stat label="Model accuracy (demo)" value={97} suffix="%" />
            <Stat label="API latency (sim)" value={42} suffix="ms" />
            <Stat label="Deployments" value={24} suffix="+" />
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.55 }}
          >
            <GlowGraph />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.55 }}
            className="relative h-64 overflow-hidden rounded-2xl border border-violet-500/25 bg-slate-950/70 shadow-[0_0_50px_rgba(167,139,250,0.15)] backdrop-blur-xl"
          >
            <div className="absolute inset-0 opacity-90">
              <NeuralNetworkCanvas />
            </div>
            <div className="relative z-[1] flex h-full flex-col justify-end p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-200/90">Neural field</p>
              <p className="mt-1 max-w-sm text-xs text-slate-300">
                Lightweight canvas graph simulating interconnected activations — symbolic of CV + deep learning work.
              </p>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-max items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:border-cyan-400/40"
              >
                View code universe
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
