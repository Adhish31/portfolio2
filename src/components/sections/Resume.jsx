import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Github, Linkedin } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-16 h-40 w-40 rounded-full bg-neon-cyan/10 blur-3xl" />
        <div className="absolute right-10 top-32 h-56 w-56 rounded-full bg-neon-purple/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.45em] text-neon-cyan/70 font-space-mono mb-3">Resume</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Download my latest resume</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-8">
            Download my latest resume to view my skills, projects, education, and achievements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-[2rem] border border-neon-cyan/20 bg-[#071227]/95 p-8 shadow-[0_40px_120px_rgba(0,217,255,0.12)]"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] items-center">
            <div className="flex flex-col items-center justify-center gap-4 rounded-[1.5rem] border border-neon-cyan/10 bg-[#0f1a36]/95 p-8 text-center shadow-[0_20px_60px_rgba(0,217,255,0.15)]">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-neon-cyan to-neon-purple text-white shadow-[0_20px_60px_rgba(0,217,255,0.25)]">
                <FileText size={32} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-neon-cyan/70 font-space-mono mb-2">Resume</p>
                <h3 className="text-2xl font-bold text-white">Professional CV</h3>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0a1125]/95 p-6">
                <p className="text-gray-300 leading-7">
                  Get the most up-to-date version of my resume, including my skills, projects, education, and achievements. It is ready for recruiters and hiring managers looking for a strong MERN, cloud, and AI candidate.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-5 py-3 text-sm font-semibold text-dark-bg transition duration-300 btn-glow"
                >
                  <Download size={18} /> Download Resume
                </a>
                <a
                  href="https://github.com/dashboard"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-neon-cyan/20 bg-white/5 px-5 py-3 text-sm font-semibold text-neon-cyan transition duration-300 hover:bg-neon-cyan/10 btn-glow"
                >
                  <Github size={18} /> View GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/adhish-e-b2b76b327/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-neon-purple/20 bg-white/5 px-5 py-3 text-sm font-semibold text-neon-purple transition duration-300 hover:bg-neon-purple/10 btn-glow"
                >
                  <Linkedin size={18} /> View LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
