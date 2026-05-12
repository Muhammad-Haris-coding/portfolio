import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useId, useRef, useState } from 'react'

export function AIAssistantChat() {
  const reduceMotion = useReducedMotion()
  const dialogLabelId = useId()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Hi — I am a lightweight on-site assistant. Ask about Haris’s AI work.' },
  ])
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return
    const t = window.setTimeout(() => inputRef.current?.focus(), 80)
    return () => window.clearTimeout(t)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const send = () => {
    const q = input.trim()
    if (!q) return
    setMessages((m) => [...m, { role: 'user', text: q }])
    setInput('')
    window.setTimeout(() => {
      const lower = q.toLowerCase()
      let reply =
        'Haris builds intelligent systems with a focus on practical ML, computer vision, and polished interfaces.'
      if (lower.includes('project'))
        reply =
          'Check the Projects grid for AI market research, CNN classifiers, dashboards, and Flutter apps.'
      if (lower.includes('skill') || lower.includes('stack'))
        reply = 'Core stack: Python, ML/CV, CNNs, OpenCV, plus Flutter, Firebase, and modern web (React, Tailwind).'
      if (lower.includes('contact'))
        reply = 'Use the contact section to reach out — email and social links are there.'
      setMessages((m) => [...m, { role: 'ai', text: reply }])
    }, 450)
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-4 z-[70] flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/30 to-violet-600/30 text-lg shadow-[0_0_40px_rgba(34,211,238,0.45)] backdrop-blur-xl outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:bottom-8 sm:right-8"
        whileHover={reduceMotion ? undefined : { scale: 1.05 }}
        whileTap={reduceMotion ? undefined : { scale: 0.96 }}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls="ai-assistant-panel"
        aria-label={open ? 'Close AI assistant' : 'Open AI assistant'}
      >
        <span className="font-mono text-xs font-bold text-cyan-50">AI</span>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            id="ai-assistant-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogLabelId}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: reduceMotion ? 0.12 : 0.25 }}
            className="fixed bottom-24 right-4 z-[70] flex w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950/95 shadow-[0_0_50px_rgba(34,211,238,0.25)] backdrop-blur-2xl sm:bottom-28 sm:right-8"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <p id={dialogLabelId} className="text-xs font-semibold text-slate-100">
                On-device assistant
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-1 text-xs text-slate-400 outline-none hover:bg-white/5 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-cyan-400/60"
              >
                Close
              </button>
            </div>
            <div
              className="max-h-64 space-y-2 overflow-y-auto px-3 py-3 text-xs"
              role="log"
              aria-relevant="additions"
              aria-live="polite"
            >
              {messages.map((m, i) => (
                <div
                  key={`${i}-${m.text.slice(0, 24)}`}
                  className={`rounded-xl px-3 py-2 ${
                    m.role === 'user'
                      ? 'ml-6 bg-cyan-500/15 text-cyan-50'
                      : 'mr-4 border border-white/10 bg-white/5 text-slate-200'
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>
            <div className="flex gap-2 border-t border-white/10 p-3">
              <label htmlFor="ai-assistant-input" className="sr-only">
                Message to assistant
              </label>
              <input
                ref={inputRef}
                id="ai-assistant-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    send()
                  }
                }}
                placeholder="Ask about skills, projects…"
                className="flex-1 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400/50 focus-visible:ring-2 focus-visible:ring-cyan-400/40"
              />
              <button
                type="button"
                onClick={send}
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-3 py-2 text-xs font-semibold text-slate-950 outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/80"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
