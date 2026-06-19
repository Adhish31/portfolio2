import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, FileImage } from 'lucide-react'

const featuredProjects = [
  {
    id: 'fitness-trainer',
    title: 'AI Smart Fitness Trainer',
    description: 'Personalized fitness and diet recommendation system using MERN and ML.',
    tags: ['React', 'Node.js', 'MongoDB', 'Python', 'ML'],
    links: { github: '#', demo: '#' },
    color: '#00D9FF',
  },
  {
    id: 'careerquest-portal',
    title: 'CareerQuest Placement Portal',
    description: 'AI-powered placement preparation platform with mock tests, resume analyzer, code compiler, and AI interview.',
    tags: ['MERN', 'JWT', 'Gemini API', 'Python'],
    links: { github: '#', demo: '#' },
    color: '#A855F7',
  },
  {
    id: 'smartdrive-cloud',
    title: 'SmartDrive Cloud File Sharing',
    description: 'Cloud file sharing platform with AI auto folder organization, natural language search, and duplicate detection.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'AI'],
    links: { github: '#', demo: '#' },
    color: '#22C55E',
  },
  {
    id: 'cloud-dashboard',
    title: 'Cloud Monitoring Dashboard',
    description: 'AWS dashboard to monitor EC2, S3, and cloud resources.',
    tags: ['Flask', 'Boto3', 'AWS EC2', 'S3', 'IAM'],
    links: { github: '#', demo: '#' },
    color: '#F97316',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-20 h-44 w-44 rounded-full bg-neon-cyan/10 blur-3xl" />
        <div className="absolute right-10 top-1/3 h-56 w-56 rounded-full bg-neon-purple/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.45em] text-neon-cyan/70 font-space-mono mb-3">
            Featured Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Modern showcase with glassmorphism and 3D hover effects
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-8">
            Explore my latest work with polished project cards that feel like a developer dashboard.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
              style={{ perspective: 1200 }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative glassmorphism rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] overflow-hidden">
                <div className="absolute -top-1 left-1/2 h-1.5 w-1/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple opacity-50" />
                <div className="mb-5 rounded-[1.75rem] border border-white/10 bg-[#0b122d]/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan/70 font-space-mono">
                        Featured Project
                      </p>
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    </div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-neon-cyan to-neon-purple text-white shadow-[0_15px_40px_rgba(0,217,255,0.25)]">
                      <FileImage size={18} />
                    </div>
                  </div>

                  <div className="mt-5 h-44 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 text-center text-xs text-gray-400 flex items-center justify-center">
                    Project image placeholder
                  </div>
                </div>

                <p className="text-gray-300 leading-7 mb-6">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-neon-cyan/15 bg-neon-cyan/5 px-3 py-1 text-xs text-neon-cyan">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <button className="rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-4 py-3 text-sm font-semibold text-neon-cyan transition hover:bg-neon-cyan/20">
                    View Details
                  </button>
                  <a href={project.links.github} className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-gray-100 transition hover:bg-white/10">
                    <Github size={16} />
                    <span className="ml-2">GitHub</span>
                  </a>
                  <a href={project.links.demo} className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-gray-100 transition hover:bg-white/10">
                    <ExternalLink size={16} />
                    <span className="ml-2">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
