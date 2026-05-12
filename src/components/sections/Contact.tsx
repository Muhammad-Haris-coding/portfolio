import { motion, useReducedMotion } from 'framer-motion'
import { type FormEvent, type SVGProps, useId, useState } from 'react'
import { socialLinks } from '../../data/portfolio'
import { useSectionInView } from '../../hooks/useSectionInView'

function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden {...props}>
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  )
}

function IconGH(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 007.86 10.9c.58.1.79-.25.79-.55l-.01-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.1-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 016.2 0c2.22-1.5 3.2-1.18 3.2-1.18.62 1.59.23 2.76.1 3.05.75.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.27 5.66.42.36.8 1.08.8 2.18l-.01 3.23c0 .3.21.66.8.55A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

function IconLI(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13V23h-4v-6.35c0-1.52-.03-3.48-2.12-3.48-2.12 0-2.44 1.66-2.44 3.37V23h-4V8z" />
    </svg>
  )
}

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/25 focus-visible:ring-2 focus-visible:ring-cyan-400/40'

export function Contact() {
  const { ref, inView } = useSectionInView<HTMLElement>(0.2)
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const reduceMotion = useReducedMotion()
  const nameId = useId()
  const emailId = useId()
  const messageId = useId()
  const formId = useId()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sent')
    window.setTimeout(() => setStatus('idle'), 3200)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative scroll-mt-28 px-4 py-24 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent" />
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/90">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Start a conversation
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            Reach out for collaborations, internships, or AI product builds — this form is a front-end demo (wire your
            own backend).
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.form
            id={formId}
            aria-describedby={`${formId}-hint`}
            onSubmit={onSubmit}
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, duration: 0.55 }}
            className="lg:col-span-3 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 shadow-[0_0_50px_rgba(34,211,238,0.1)] backdrop-blur-2xl sm:p-8"
          >
            <p id={`${formId}-hint`} className="sr-only">
              All fields are required. Submission is a demo only.
            </p>
            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
              <div className="min-w-0">
                <label htmlFor={nameId} className="block text-xs font-medium text-slate-300">
                  Name
                </label>
                <input
                  id={nameId}
                  required
                  name="name"
                  autoComplete="name"
                  className={fieldClass}
                  placeholder="Your name"
                />
              </div>
              <div className="min-w-0">
                <label htmlFor={emailId} className="block text-xs font-medium text-slate-300">
                  Email
                </label>
                <input
                  id={emailId}
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className={fieldClass}
                  placeholder="you@domain.com"
                />
              </div>
            </div>
            <div className="mt-4 min-w-0">
              <label htmlFor={messageId} className="block text-xs font-medium text-slate-300">
                Message
              </label>
              <textarea
                id={messageId}
                required
                name="message"
                rows={4}
                className={`${fieldClass} resize-y min-h-[6.5rem]`}
                placeholder="Tell me about your project, timeline, and goals."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={reduceMotion ? undefined : { scale: 1.01 }}
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
              className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.35)] outline-none transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-cyan-200/90 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto sm:px-10"
            >
              Send transmission
            </motion.button>
            <div role="status" aria-live="polite" className="min-h-[1.25rem]">
              {status === 'sent' && (
                <p className="mt-3 text-xs text-emerald-300/90">
                  Received — hook this form to your API or email service.
                </p>
              )}
            </div>
          </motion.form>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="flex min-w-0 flex-col justify-between gap-6 rounded-3xl border border-violet-500/20 bg-slate-950/55 p-6 shadow-[0_0_45px_rgba(167,139,250,0.12)] backdrop-blur-2xl sm:p-8 lg:col-span-2"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-200/90">Direct channels</p>
              <p className="mt-2 text-sm text-slate-400">
                Prefer a faster line? Use email or social — swap these URLs with your real profiles.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={socialLinks.email}
                className="inline-flex min-h-[44px] min-w-[8rem] flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 outline-none transition hover:border-cyan-400/45 hover:shadow-[0_0_28px_rgba(34,211,238,0.25)] focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <IconMail className="h-5 w-5 shrink-0 text-cyan-300" />
                Email
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] min-w-[8rem] flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 outline-none transition hover:border-sky-400/45 hover:shadow-[0_0_28px_rgba(56,189,248,0.25)] focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <IconLI className="h-5 w-5 shrink-0 text-sky-300" />
                LinkedIn
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 outline-none transition hover:border-violet-400/45 hover:shadow-[0_0_28px_rgba(167,139,250,0.25)] focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <IconGH className="h-5 w-5 shrink-0 text-violet-200" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
