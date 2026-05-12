import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useId, useRef, useState } from 'react'
import { navLinks } from '../../data/portfolio'

const linkClass =
  'rounded-lg px-3 py-2 text-xs font-medium text-slate-300 outline-none transition-colors hover:bg-white/5 hover:text-cyan-200 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const panelId = useId()
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      queueMicrotask(() => closeBtnRef.current?.focus())
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={`fixed left-0 right-0 top-0 z-50 px-3 pt-3 transition-all duration-300 sm:px-4 sm:pt-4 ${
        scrolled ? 'sm:pt-3' : 'sm:pt-4'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center gap-2 rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:gap-4 sm:px-6 sm:py-3 ${
          scrolled
            ? 'border-cyan-500/25 bg-slate-950/80 shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur-xl'
            : 'border-white/10 bg-slate-950/50 backdrop-blur-md'
        }`}
      >
        <a
          href="#hero"
          className="group flex shrink-0 items-center gap-2 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/30 to-violet-500/30 font-mono text-xs font-semibold text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.35)] ring-1 ring-white/10">
            MH
          </span>
          <span className="hidden min-w-0 truncate text-sm font-semibold tracking-tight text-slate-100 sm:inline">
            Muhammad Haris
          </span>
        </a>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={`shrink-0 ${linkClass}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-slate-200 outline-none transition hover:border-cyan-400/40 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={panelId}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="flex h-5 w-5 flex-col justify-center gap-[5px]" aria-hidden>
              <span
                className={`h-0.5 w-full rounded-full bg-current transition ${
                  menuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span className={`h-0.5 w-full rounded-full bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition ${
                  menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>

          <a
            href="#contact"
            className="hidden rounded-xl border border-cyan-400/35 bg-gradient-to-r from-cyan-500/20 to-violet-500/15 px-4 py-2 text-xs font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.2)] outline-none transition hover:border-cyan-300/60 hover:shadow-[0_0_32px_rgba(34,211,238,0.35)] focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:inline-flex"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="mobile-nav"
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-label="Site sections"
              className="absolute inset-x-3 top-[4.75rem] max-h-[min(72vh,calc(100dvh-5.5rem))] overflow-y-auto rounded-2xl border border-cyan-500/20 bg-slate-950/96 p-4 shadow-[0_0_50px_rgba(34,211,238,0.15)] backdrop-blur-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200/90">Navigate</p>
                <button
                  ref={closeBtnRef}
                  type="button"
                  className="rounded-lg px-3 py-1.5 text-xs text-slate-400 outline-none hover:bg-white/5 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                  onClick={() => setMenuOpen(false)}
                >
                  Close
                </button>
              </div>
              <nav className="flex flex-col gap-1" aria-label="Mobile primary">
                {navLinks.map((l) => (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-slate-200 outline-none hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 rounded-xl border border-cyan-400/35 bg-gradient-to-r from-cyan-500/15 to-violet-500/10 px-3 py-3 text-center text-sm font-semibold text-cyan-100 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                  onClick={() => setMenuOpen(false)}
                >
                  Let&apos;s talk
                </a>
              </nav>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
