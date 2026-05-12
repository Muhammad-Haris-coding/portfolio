import { memo, useEffect, useRef } from 'react'

type NodeT = { x: number; y: number; vx: number; vy: number }

export const NeuralNetworkCanvas = memo(function NeuralNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let nodes: NodeT[] = []
    let visible = !document.hidden

    const onVisibility = () => {
      visible = !document.hidden
    }
    document.addEventListener('visibilitychange', onVisibility)

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { clientWidth, clientHeight } = canvas.parentElement ?? canvas
      canvas.width = clientWidth * dpr
      canvas.height = clientHeight * dpr
      canvas.style.width = `${clientWidth}px`
      canvas.style.height = `${clientHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.floor((clientWidth * clientHeight) / 22000)
      nodes = Array.from({ length: Math.max(28, Math.min(64, count)) }, () => ({
        x: Math.random() * clientWidth,
        y: Math.random() * clientHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement ?? canvas)

    const step = () => {
      raf = requestAnimationFrame(step)
      if (!visible) return

      const w = canvas.clientWidth
      const h = canvas.clientHeight
      ctx.clearRect(0, 0, w, h)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }

      const maxDist = Math.min(w, h) * 0.12
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]!
          const b = nodes[j]!
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.35
            ctx.strokeStyle = `rgba(56,189,248,${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 4)
        g.addColorStop(0, 'rgba(167,139,250,0.95)')
        g.addColorStop(1, 'rgba(34,211,238,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(n.x, n.y, 3.2, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    raf = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
      aria-hidden
    />
  )
})
