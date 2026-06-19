import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Timeline() {
  const milestones = [
    {
      year: '2024',
      title: 'Started programming with C and Java',
      description: 'Dove into foundational programming using C and Java, building problem-solving skills and learning object-oriented concepts.',
      icon: '🧩',
    },
    {
      year: '2025',
      title: 'Built full-stack MERN projects',
      description: 'Created web applications using React, Node.js, Express, and MongoDB for full-stack experiences.',
      icon: '💻',
    },
    {
      year: '2025',
      title: 'Learned MongoDB, Express, React, and Node.js',
      description: 'Mastered the MERN stack and became confident building scalable and dynamic web applications.',
      icon: '⚙️',
    },
    {
      year: '2025',
      title: 'Started AWS cloud projects using EC2, S3, and RDS',
      description: 'Deployed cloud-native applications and learned AWS services for storage, compute, and managed databases.',
      icon: '☁️',
    },
    {
      year: '2026',
      title: 'Working on AI + Cloud + MERN projects',
      description: 'Combining AI capabilities with cloud infrastructure and modern full-stack development for intelligent apps.',
      icon: '🤖',
    },
    {
      year: '2026',
      title: 'Preparing for internships in MERN Stack, Cloud, and AI',
      description: 'Sharpening skills, building portfolio projects, and targeting internship roles across modern tech domains.',
      icon: '🚀',
    },
  ]

  return (
    <section id="timeline" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-neon-cyan/10 blur-3xl" />
        <div className="absolute right-10 top-32 h-56 w-56 rounded-full bg-neon-purple/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.45em] text-neon-cyan/70 font-space-mono mb-3">
            My Developer Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            A timeline of growth from coding foundations to AI + cloud development
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-8">
            Follow the key milestones that shaped my journey into full-stack, cloud, and AI / ML development.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-cyan opacity-40" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col gap-6 md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2"></div>

                <div className="relative md:w-1/2">
                  <span className="absolute left-[-0.875rem] top-6 md:left-auto md:right-[-0.875rem] md:top-6 flex h-7 w-7 items-center justify-center rounded-full bg-dark-bg border-2 border-neon-cyan text-sm text-white shadow-[0_0_20px_rgba(0,217,255,0.2)]">
                    {milestone.icon}
                  </span>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glassmorphism rounded-[2rem] border border-neon-cyan/20 bg-[#081127]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
                  >
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-neon-cyan/10 text-neon-cyan text-lg">
                        {milestone.year}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-7">{milestone.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-neon-cyan text-sm font-space-mono uppercase tracking-[0.4em]">
                      <CheckCircle2 size={16} />
                      <span>Milestone reached</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
