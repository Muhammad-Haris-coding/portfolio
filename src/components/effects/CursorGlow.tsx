import { motion, useSpring } from 'framer-motion'
import { useEffect, useSyncExternalStore } from 'react'

function subscribeFinePointer(onStoreChange: () => void) {
  const mq = window.matchMedia('(pointer: fine)')
  mq.addEventListener('change', onStoreChange)
  return () => mq.removeEventListener('change', onStoreChange)
}

function getFinePointerSnapshot() {
  return window.matchMedia('(pointer: fine)').matches
}

function getServerSnapshot() {
  return false
}

export function CursorGlow() {
  const finePointer = useSyncExternalStore(subscribeFinePointer, getFinePointerSnapshot, getServerSnapshot)
  const x = useSpring(0, { stiffness: 120, damping: 22, mass: 0.4 })
  const y = useSpring(0, { stiffness: 120, damping: 22, mass: 0.4 })

  useEffect(() => {
    if (!finePointer) return
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [finePointer, x, y])

  if (!finePointer) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] mix-blend-screen"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      <div className="h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-500/25 via-violet-500/20 to-fuchsia-500/15 blur-3xl" />
    </motion.div>
  )
}
