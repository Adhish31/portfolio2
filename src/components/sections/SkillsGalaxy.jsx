import React, { useState } from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'Programming',
    radius: 140,
    duration: 18,
    skills: [
      { name: 'Java', description: 'Built backend modules and algorithmic pipelines in Java.' },
      { name: 'Python', description: 'Used Python for AI/ML research, scripting, and automation.' },
      { name: 'C', description: 'Implemented efficient data structures and systems logic.' },
      { name: 'JavaScript', description: 'Created interactive frontend experiences and browser tools.' },
    ],
  },
  {
    label: 'Frontend',
    radius: 220,
    duration: 24,
    skills: [
      { name: 'React', description: 'Built dynamic user interfaces and reusable component systems.' },
      { name: 'HTML', description: 'Structured accessible layouts and semantic page content.' },
      { name: 'CSS', description: 'Styled polished responsive experiences from scratch.' },
      { name: 'Tailwind CSS', description: 'Rapidly designed UI systems with utility-first styling.' },
    ],
  },
  {
    label: 'Backend',
    radius: 300,
    duration: 30,
    skills: [
      { name: 'Node.js', description: 'Developed RESTful APIs and server-side applications.' },
      { name: 'Express.js', description: 'Structured middleware flows and backend routing systems.' },
      { name: 'Flask', description: 'Built lightweight ML model APIs and prototypes.' },
    ],
  },
  {
    label: 'Database',
    radius: 380,
    duration: 36,
    skills: [
      { name: 'MongoDB', description: 'Managed NoSQL data for scalable web apps.' },
      { name: 'MySQL', description: 'Designed relational schemas and optimized queries.' },
      { name: 'RDS', description: 'Hosted managed databases on AWS for production workloads.' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    radius: 460,
    duration: 42,
    skills: [
      { name: 'AWS EC2', description: 'Deployed servers and managed compute infrastructure.' },
      { name: 'S3', description: 'Stored static assets and user-generated content securely.' },
      { name: 'IAM', description: 'Defined secure access controls for cloud resources.' },
      { name: 'Docker', description: 'Containerized apps for consistent development and deployment.' },
      { name: 'Jenkins', description: 'Automated CI/CD pipelines for build and deployment.' },
      { name: 'Terraform', description: 'Provisioned infrastructure as code on AWS.' },
    ],
  },
  {
    label: 'AI/ML',
    radius: 540,
    duration: 48,
    skills: [
      { name: 'Machine Learning', description: 'Built predictive models and feature pipelines.' },
      { name: 'Deep Learning', description: 'Trained neural networks for image and language tasks.' },
      { name: 'NLP', description: 'Created text analysis and conversational systems.' },
      { name: 'Computer Vision', description: 'Developed object detection and image classification solutions.' },
    ],
  },
]

export default function SkillsGalaxy() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-24 h-36 w-36 rounded-full bg-neon-cyan/10 blur-3xl" />
        <div className="absolute right-10 top-1/4 h-56 w-56 rounded-full bg-neon-purple/10 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 rounded-full bg-neon-purple/10 blur-3xl" />
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
            Skills Galaxy
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Orbiting skill clusters for a Full Stack + AI Developer
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-8">
            Visualize my technology universe with animated skill planets that highlight where I have applied each tool in real projects.
          </p>
        </motion.div>

        <div className="relative mx-auto flex h-[720px] w-full max-w-[780px] items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-[680px] h-full max-h-[680px]">
              {skillGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.label}
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: group.duration, ease: 'linear' }}
                  className="orbit-ring absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon-cyan/10"
                  style={{ width: group.radius * 2, height: group.radius * 2 }}
                >
                  {group.skills.map((skill, skillIndex) => {
                    const angle = (360 / group.skills.length) * skillIndex
                    const rad = (angle * Math.PI) / 180
                    const x = Math.cos(rad) * group.radius
                    const y = Math.sin(rad) * group.radius

                    return (
                      <motion.div
                        key={skill.name}
                        className="skill-planet absolute"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                        }}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: groupIndex * 0.1 + skillIndex * 0.05, duration: 0.6 }}
                        onMouseEnter={() => setHoveredSkill(`${group.label}-${skill.name}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="relative flex items-center justify-center rounded-full border border-white/10 bg-[#0b122d]/90 px-4 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:border-neon-cyan/30 hover:bg-[#101b37]/95 cursor-pointer">
                          <span className="text-sm font-semibold text-white text-center px-2">
                            {skill.name}
                          </span>
                          {hoveredSkill === `${group.label}-${skill.name}` && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              className="skill-tooltip absolute left-1/2 top-full mt-3 w-60 -translate-x-1/2 rounded-2xl border border-neon-cyan/20 bg-[#070c1f]/95 p-3 text-xs text-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                            >
                              {skill.description}
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              ))}

              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-10 flex h-[180px] w-[180px] items-center justify-center rounded-[2.5rem] border border-neon-purple/30 bg-[#07102a]/90 shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
              >
                <div className="text-center space-y-3 px-4">
                  <p className="text-sm uppercase tracking-[0.45em] text-neon-cyan/70 font-space-mono">
                    Core Identity
                  </p>
                  <h3 className="text-xl font-semibold text-white">Full Stack + AI Developer</h3>
                  <p className="text-gray-400 text-sm leading-6">
                    Building responsive applications powered by cloud and intelligent systems.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
