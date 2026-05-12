import { motion } from 'framer-motion'
import { AIAssistantChat } from './components/ai/AIAssistantChat'
import { CursorGlow } from './components/effects/CursorGlow'
import { LoadingScreen } from './components/layout/LoadingScreen'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { AIFeatures } from './components/sections/AIFeatures'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-4 py-10 text-center text-xs text-slate-500 backdrop-blur-xl">
      <p>
        © {new Date().getFullYear()} Muhammad Haris — Crafted with React, Tailwind CSS, and Framer Motion.
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
      transition={{ duration: 0.5 }}
    >
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(56,189,248,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(167,139,250,0.12),transparent_50%)]" />
      </div>

      <LoadingScreen />
      <CursorGlow />
      <Navbar />
      <AIAssistantChat />

      <main id="main-content" tabIndex={-1} className="scroll-mt-[5.5rem] outline-none">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <AIFeatures />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}
