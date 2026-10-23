import { motion } from 'framer-motion'
import { LoadingScreen } from './components/layout/LoadingScreen'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { profile, socialLinks } from './data/portfolio'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-4 py-10 text-center text-xs text-slate-500">
      <p>
        © {new Date().getFullYear()} {profile.name} — {profile.role}. Based in {profile.location}.
      </p>
      <p className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-400 underline-offset-2 transition hover:text-cyan-300 hover:underline"
        >
          GitHub
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-400 underline-offset-2 transition hover:text-cyan-300 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href={socialLinks.portfolioRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-400 underline-offset-2 transition hover:text-cyan-300 hover:underline"
        >
          Portfolio source
        </a>
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <motion.div
      className="relative min-h-svh overflow-x-hidden bg-[#030712]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <LoadingScreen />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="scroll-mt-[5.5rem] outline-none">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}
