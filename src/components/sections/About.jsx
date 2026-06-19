import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Rocket, Lightbulb } from 'lucide-react'

export default function About() {
  const stats = [
    { label: 'Projects Built', value: '8+' },
    { label: 'Tech Stack', value: 'MERN + AWS + AI' },
    { label: 'Focus', value: 'Full Stack Development' },
    { label: 'Goal', value: 'Cloud Engineer / MERN Developer Internship' },
  ]

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 h-40 w-40 rounded-full bg-neon-cyan/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-56 w-56 rounded-full bg-neon-purple/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-neon-cyan/80 font-space-mono mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Clean, modern, and professional storytelling for your portfolio
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="animated-gradient-border rounded-[2rem] p-[1.5px]"
        >
          <div className="glassmorphism rounded-[1.85rem] border border-white/10 p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-neon-cyan animate-pulse-neon" />
                  <p className="text-neon-cyan uppercase text-xs tracking-[0.4em] font-semibold font-space-mono">
                    Meet Adhish Kumar
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-3xl font-bold text-white sm:text-4xl">
                    Artificial Intelligence & Data Science student building real-world applications.
                  </p>
                  <p className="text-gray-300 leading-8 text-lg">
                    I am Adhish Kumar, an Artificial Intelligence and Data Science student passionate about building real-world projects using MERN stack, cloud computing, and AI/ML. I enjoy creating full-stack applications, deploying them on AWS, and adding intelligent features using machine learning.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-neon-cyan/15 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,217,255,0.08)]">
                    <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan/80 font-space-mono mb-2">
                      Career goal
                    </p>
                    <p className="text-white font-semibold text-lg">Cloud Engineer / MERN Developer Internship</p>
                  </div>
                  <div className="rounded-3xl border border-neon-purple/15 bg-white/5 p-6 shadow-[0_20px_60px_rgba(168,85,247,0.08)]">
                    <p className="text-sm uppercase tracking-[0.3em] text-neon-purple/80 font-space-mono mb-2">
                      What I build
                    </p>
                    <p className="text-white font-semibold text-lg">Full-stack applications with AWS-hosted deployments and AI-enhanced UX.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glassmorphism rounded-[1.6rem] border border-neon-cyan/15 p-6 shadow-[0_20px_80px_rgba(0,217,255,0.1)]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-white text-lg font-bold">
                      <Rocket size={22} />
                    </div>
                    <div>
                      <p className="text-gray-400 uppercase text-xs tracking-[0.35em] font-space-mono">Core strengths</p>
                      <h3 className="text-xl font-semibold text-white">AI + MERN + Cloud</h3>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="rounded-3xl bg-[#081128]/80 p-4 border border-white/5">
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-space-mono mb-2">
                          {stat.label}
                        </p>
                        <p className="text-white font-semibold">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glassmorphism rounded-[1.6rem] border border-neon-purple/15 p-6 text-gray-300">
                  <h3 className="text-neon-purple font-semibold mb-3">Why it works</h3>
                  <p className="leading-7">
                    The combination of clean design, strong technical fundamentals, and cloud-ready deployments helps me deliver polished and production-ready solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
