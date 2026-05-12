import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ms = prefersReduced ? 400 : 2200
    const t = window.setTimeout(() => setVisible(false), ms)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="relative h-20 w-20"
              initial={reduceMotion ? false : { scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/40 via-sky-500/30 to-violet-500/40 blur-xl motion-reduce:animate-none animate-pulse-glow" />
              <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl">
                <motion.span
                  className="font-mono text-sm tracking-[0.35em] text-cyan-200"
                  animate={reduceMotion ? { opacity: 1 } : { opacity: [0.4, 1, 0.4] }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 1.6, repeat: Infinity }}
                >
                  AI
                </motion.span>
              </div>
            </motion.div>
            <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full w-1/3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400"
                initial={reduceMotion ? false : { x: '-120%' }}
                animate={reduceMotion ? { x: '0%' } : { x: '320%' }}
                transition={
                  reduceMotion ? { duration: 0 } : { duration: 1.6, repeat: Infinity, ease: 'linear' }
                }
              />
            </div>
            <p className="font-mono text-xs text-slate-400">Initializing neural interface…</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
