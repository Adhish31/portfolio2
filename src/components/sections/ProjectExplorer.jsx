import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Folder, File, ChevronRight, Eye, Github, ExternalLink, X } from 'lucide-react'

const folderList = [
  { id: 'ai', name: 'AI Projects' },
  { id: 'mern', name: 'MERN Projects' },
  { id: 'cloud', name: 'Cloud Projects' },
  { id: 'devops', name: 'DevOps Projects' },
]

const projectData = [
  {
    id: 'ai-smart-fitness',
    folder: 'ai',
    name: 'AI Smart Fitness Trainer',
    description: 'Personalized fitness coaching using computer vision and machine learning.',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'React'],
    problem: 'Users struggle to maintain correct posture and find personalized workout plans.',
    features: ['Pose detection feedback', 'Custom workout plans', 'Performance tracking', 'Progress analytics'],
    architecture: 'Frontend React app, backend Flask API, ML model inference, and data storage in MongoDB.',
    screenshots: ['Screenshot placeholder 1', 'Screenshot placeholder 2'],
  },
  {
    id: 'careerquest-portal',
    folder: 'mern',
    name: 'CareerQuest Placement Portal',
    description: 'A placement platform connecting students with internships and recruiters.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    problem: 'Students need a centralized platform to discover placement opportunities and track applications.',
    features: ['Job listings', 'Resume uploads', 'Application tracking', 'Recruiter dashboard'],
    architecture: 'MERN application with REST APIs, authentication, and role-based access.',
    screenshots: ['Screenshot placeholder 1', 'Screenshot placeholder 2'],
  },
  {
    id: 'smartdrive-file-sharing',
    folder: 'cloud',
    name: 'SmartDrive Cloud File Sharing Platform',
    description: 'Secure file sync and sharing with cloud storage and permission controls.',
    stack: ['AWS S3', 'React', 'Node.js', 'Docker'],
    problem: 'Users need a reliable way to share files across devices with secure access controls.',
    features: ['Cloud file sync', 'Shared folders', 'Permission management', 'Instant previews'],
    architecture: 'React frontend, Node.js backend, AWS S3 storage, and Docker-based deployment.',
    screenshots: ['Screenshot placeholder 1', 'Screenshot placeholder 2'],
  },
  {
    id: 'credit-card-fraud',
    folder: 'ai',
    name: 'Real-Time Credit Card Fraud Detection',
    description: 'Detect suspicious transactions instantly with anomaly detection models.',
    stack: ['Python', 'Scikit-learn', 'Flask', 'AWS Lambda'],
    problem: 'Financial institutions need fast fraud detection to reduce losses and false positives.',
    features: ['Transaction scoring', 'Alert notifications', 'Model retraining pipeline', 'Dashboard insights'],
    architecture: 'Model API served via Flask, event-driven processing, and cloud notification services.',
    screenshots: ['Screenshot placeholder 1', 'Screenshot placeholder 2'],
  },
  {
    id: 'carbon-footprint-crop',
    folder: 'cloud',
    name: 'Carbon Footprint Guided Crop Selection',
    description: 'Recommends eco-friendly crops based on environmental and economic data.',
    stack: ['React', 'AWS RDS', 'Python', 'AWS EC2'],
    problem: 'Farmers need guidance to choose sustainable crops based on carbon and climate data.',
    features: ['Crop recommendations', 'Emission analysis', 'Climate forecasting', 'Regional insights'],
    architecture: 'Web dashboard with cloud-hosted APIs, relational database storage, and analytics engine.',
    screenshots: ['Screenshot placeholder 1', 'Screenshot placeholder 2'],
  },
  {
    id: 'cloud-monitoring-dashboard',
    folder: 'devops',
    name: 'Cloud Monitoring Dashboard',
    description: 'Visualizes infrastructure health metrics and alerts in real time.',
    stack: ['AWS CloudWatch', 'React', 'Node.js', 'Grafana'],
    problem: 'Teams need centralized visibility into cloud performance and incidents.',
    features: ['Live metrics', 'Alerting', 'Service maps', 'Historical trends'],
    architecture: 'Monitoring collectors, API service, and React-based dashboard UI.',
    screenshots: ['Screenshot placeholder 1', 'Screenshot placeholder 2'],
  },
  {
    id: 'matrix-calculator',
    folder: 'mern',
    name: 'Matrix Calculator',
    description: 'A fast linear algebra tool for matrix operations and transformations.',
    stack: ['React', 'Node.js', 'Express', 'JWT'],
    problem: 'Students and engineers need quick, accurate matrix computation without manual error.',
    features: ['Matrix operations', 'Save workspaces', 'Step-by-step results', 'Export options'],
    architecture: 'Web calculator with backend validation and session-based state.',
    screenshots: ['Screenshot placeholder 1', 'Screenshot placeholder 2'],
  },
  {
    id: 'hostel-maintenance-system',
    folder: 'devops',
    name: 'Hostel Maintenance Tracking System',
    description: 'Streamlines maintenance requests, approvals, and issue resolution.',
    stack: ['MERN', 'Docker', 'AWS', 'Node.js'],
    problem: 'Hostels need a reliable way to manage facility requests and monitor completion.',
    features: ['Request submission', 'Staff assignment', 'Status tracking', 'Reporting dashboard'],
    architecture: 'Containerized MERN app integrated with cloud-hosted services and notifications.',
    screenshots: ['Screenshot placeholder 1', 'Screenshot placeholder 2'],
  },
]

export default function ProjectExplorer() {
  const [activeFolder, setActiveFolder] = useState('ai')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = projectData.filter((project) => project.folder === activeFolder)

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-24 h-40 w-40 rounded-full bg-neon-cyan/10 blur-3xl" />
        <div className="absolute right-10 top-28 h-56 w-56 rounded-full bg-neon-purple/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.45em] text-neon-cyan/70 font-space-mono mb-3">
            Project Explorer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Browse projects in a file manager-style interface
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-8">
            Explore AI, MERN, Cloud and DevOps work through project cards, each designed like a file in your cloud workspace.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-3xl border border-neon-cyan/20 p-6 shadow-[0_30px_80px_rgba(0,217,255,0.08)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-3xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                <Folder size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-neon-cyan/70 font-space-mono">Folders</p>
                <h3 className="text-xl font-bold text-white">Project categories</h3>
              </div>
            </div>

            <div className="space-y-2">
              {folderList.map((folder) => (
                <button
                  key={folder.id}
                  onClick={() => setActiveFolder(folder.id)}
                  className={`w-full rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                    activeFolder === folder.id
                      ? 'border-neon-cyan bg-neon-cyan/10 text-white'
                      : 'border-transparent bg-white/5 text-gray-300 hover:border-neon-cyan/20 hover:bg-neon-cyan/5'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium font-space-mono">{folder.name}</span>
                    <ChevronRight size={18} className={`transition-transform ${activeFolder === folder.id ? 'rotate-90 text-neon-cyan' : 'text-gray-500'}`} />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-neon-cyan/70 font-space-mono mb-2">
                  {folderList.find((folder) => folder.id === activeFolder)?.name}
                </p>
                <h3 className="text-3xl font-bold text-white">Files in this folder</h3>
              </div>
              <div className="rounded-full border border-neon-cyan/20 bg-white/5 px-5 py-3 text-sm text-neon-cyan font-semibold">
                {filteredProjects.length} Projects
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {filteredProjects.map((project) => (
                <div key={project.id} className="glassmorphism rounded-[2rem] border border-neon-cyan/15 p-6 shadow-[0_30px_80px_rgba(0,217,255,0.08)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-neon-cyan font-semibold uppercase tracking-[0.25em] mb-2">
                        {project.folder.toUpperCase()}
                      </p>
                      <h4 className="text-xl font-bold text-white">{project.name}</h4>
                    </div>
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-white">
                      <File size={20} />
                    </div>
                  </div>

                  <p className="mt-4 text-gray-300 leading-7">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-neon-cyan/20 bg-white/5 px-3 py-1 text-xs text-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-full bg-neon-cyan px-4 py-2 text-sm font-semibold text-dark-bg transition hover:-translate-y-0.5"
                    >
                      <Eye size={16} /> View Details
                    </button>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-white/5 px-4 py-2 text-sm font-semibold text-neon-cyan transition hover:bg-neon-cyan/10"
                    >
                      <Github size={16} /> GitHub
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-white/5 px-4 py-2 text-sm font-semibold text-neon-purple transition hover:bg-neon-purple/10"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-neon-cyan/20 bg-[#081228]/95 shadow-[0_30px_120px_rgba(0,0,0,0.6)]"
              initial={{ y: 30, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 30, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center justify-between border-b border-neon-cyan/10 px-6 py-5 bg-[#071022]/90">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-neon-cyan/70 font-space-mono mb-2">Project Details</p>
                  <h3 className="text-3xl font-bold text-white">{selectedProject.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-neon-cyan/20 text-neon-cyan transition hover:bg-neon-cyan/10"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 space-y-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.35em] text-neon-cyan/70 font-space-mono">Problem Statement</p>
                    <p className="text-gray-300 leading-7">{selectedProject.problem}</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.35em] text-neon-purple/70 font-space-mono">Architecture</p>
                    <p className="text-gray-300 leading-7">{selectedProject.architecture}</p>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-3xl border border-neon-cyan/15 bg-[#071226]/90 p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-neon-cyan/70 font-space-mono mb-4">Features</p>
                    <ul className="space-y-3 text-gray-300">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-neon-cyan" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-neon-purple/15 bg-[#071226]/90 p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-neon-purple/70 font-space-mono mb-4">Tech Stack</p>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.35em] text-neon-cyan/70 font-space-mono">Screenshots</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {selectedProject.screenshots.map((shot, index) => (
                      <div key={index} className="rounded-3xl border border-neon-cyan/15 bg-[#06101d]/90 p-8 text-center text-sm text-gray-400">
                        {shot}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
