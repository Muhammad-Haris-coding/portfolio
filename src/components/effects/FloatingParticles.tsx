import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { createSeededRng } from '../../lib/seededRandom'

export function FloatingParticles({ count = 40 }: { count?: number }) {
  const reduceMotion = useReducedMotion()
  const effectiveCount = reduceMotion ? Math.min(12, count) : count

  const particles = useMemo(() => {
    const rnd = createSeededRng(0x9e3779b9 ^ (effectiveCount << 16))
    return Array.from({ length: effectiveCount }, (_, i) => {
      rnd() // mix index into stream
      return {
        id: i,
        left: `${rnd() * 100}%`,
        top: `${rnd() * 100}%`,
        size: 1 + rnd() * 2.5,
        duration: 10 + rnd() * 14,
        delay: rnd() * 8,
      }
    })
  }, [effectiveCount])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-cyan-300/40 shadow-[0_0_12px_rgba(34,211,238,0.55)]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={
            reduceMotion
              ? { opacity: 0.35 }
              : {
                  y: [0, -30, 0],
                  x: [0, 12, -8, 0],
                  opacity: [0.15, 0.85, 0.2],
                }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: p.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: p.delay,
                }
          }
        />
      ))}
    </div>
  )
}
