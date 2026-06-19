import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const terminalLines = [
    '> whoami',
    'Adhish Kumar',
    '',
    '> skills',
    'Java | MERN | AWS | Docker | MongoDB | Machine Learning',
    '',
    '> goal',
    'To build AI-powered full-stack cloud applications',
  ]

  const [displayedLines, setDisplayedLines] = useState(
    Array(terminalLines.length).fill('')
  )
  const [typingState, setTypingState] = useState({ line: 0, char: 0 })

  useEffect(() => {
    if (typingState.line >= terminalLines.length) return

    const currentLine = terminalLines[typingState.line]
    const isFullLine = typingState.char >= currentLine.length
    const delay = isFullLine ? 300 : 35

    const timeout = setTimeout(() => {
      if (isFullLine) {
        setTypingState((prev) => ({
          line: prev.line + 1,
          char: 0,
        }))
        return
      }

      setDisplayedLines((prev) => {
        const next = [...prev]
        next[typingState.line] = currentLine.slice(0, typingState.char + 1)
        return next
      })
      setTypingState((prev) => ({
        ...prev,
        char: prev.char + 1,
      }))
    }, delay)

    return () => clearTimeout(timeout)
  }, [typingState, terminalLines])

  return (
    <section className="relative min-h-screen overflow-hidden bg-dark-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-72 h-72 rounded-full bg-neon-cyan/10 blur-3xl animate-float" />
        <div className="absolute top-28 right-0 w-96 h-96 rounded-full bg-neon-purple/10 blur-3xl animate-float" />
        <div className="absolute bottom-16 left-6 w-56 h-56 rounded-full bg-neon-cyan/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.9fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-4 py-2 text-sm text-neon-cyan font-semibold font-space-mono backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-neon-cyan animate-pulse-neon" />
              Futuristic developer portfolio
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Adhish Kumar
              </h1>
              <p className="text-xl font-semibold text-neon-cyan lg:text-2xl font-space-mono">
                AI + MERN + Cloud Developer
              </p>
              <p className="max-w-2xl text-gray-300 leading-8">
                Building intelligent web applications with cloud deployment and modern UI.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-8 py-3 text-sm font-semibold text-dark-bg shadow-[0_0_40px_rgba(0,217,255,0.15)] transition-transform duration-300 hover:-translate-y-1"
              >
                <Download size={18} /> Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-white/5 px-8 py-3 text-sm font-semibold text-neon-cyan transition-colors duration-300 hover:bg-neon-cyan/10"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-white/5 px-8 py-3 text-sm font-semibold text-neon-purple transition-colors duration-300 hover:bg-neon-purple/10"
              >
                Contact Me
              </a>
            </div>

            <div className="glassmorphism rounded-3xl border border-neon-cyan/20 p-6 shadow-[0_0_60px_rgba(0,217,255,0.08)]">
              <div className="flex flex-wrap items-center gap-2 border-b border-neon-cyan/15 pb-4 mb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <p className="ml-auto text-xs uppercase tracking-[0.32em] text-neon-cyan/70 font-space-mono">
                  AdhishOS: terminal
                </p>
              </div>
              <div className="space-y-3 font-space-mono text-sm text-cyan-50">
                {terminalLines.map((line, index) => {
                  const isActive = index === typingState.line || (typingState.line >= terminalLines.length && index === terminalLines.length - 1)
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-neon-cyan/80 min-w-[1.4rem]">
                        {line.startsWith('>') ? '>' : ''}
                      </span>
                      <span className="terminal-line">
                        {displayedLines[index]}
                        {isActive && <span className="terminal-cursor">█</span>}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="profile-card glassmorphism relative overflow-hidden rounded-[2rem] border border-neon-purple/20 p-6 shadow-[0_0_60px_rgba(168,85,247,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 ring-1 ring-neon-cyan/20">
                    <div className="h-14 w-14 rounded-3xl bg-gradient-to-br from-neon-cyan to-neon-purple shadow-[0_0_20px_rgba(0,217,255,0.35)]" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-neon-cyan/70 font-semibold font-space-mono">
                      Developer
                    </p>
                    <h2 className="text-2xl font-bold text-white">Adhish Kumar</h2>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-300">
                  <p className="text-neon-cyan font-semibold">Connect with me</p>
                  <p className="text-gray-400">GitHub, LinkedIn, and email access in one floating panel.</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="#" className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-neon-cyan/20 bg-white/5 px-4 py-3 text-sm text-neon-cyan transition hover:border-neon-cyan hover:bg-neon-cyan/10">
                    <Github size={18} /> GitHub
                  </a>
                  <a href="#" className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-neon-purple/20 bg-white/5 px-4 py-3 text-sm text-neon-purple transition hover:border-neon-purple hover:bg-neon-purple/10">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                </div>
                <a href="mailto:adhish@example.com" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-neon-cyan/20 bg-white/5 px-4 py-3 text-sm font-semibold text-neon-cyan transition hover:border-neon-cyan hover:bg-neon-cyan/10">
                  <Mail size={18} /> Email Me
                </a>
              </div>
            </div>
            <div className="absolute -right-10 top-10 hidden h-32 w-32 rounded-full bg-neon-purple/20 blur-2xl lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
