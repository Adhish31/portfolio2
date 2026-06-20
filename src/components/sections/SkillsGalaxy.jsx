import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  { label: 'Programming', skills: [
    { name: 'Java', description: 'Built backend modules and algorithmic pipelines in Java.' },
    { name: 'Python', description: 'AI/ML research, scripting, automation.' },
    { name: 'C', description: 'Systems and performance-critical code.' },
    { name: 'JavaScript', description: 'Interactive frontends and tools.' },
  ]},
  { label: 'Frontend', skills: [
    { name: 'React', description: 'Reusable UI and app architecture.' },
    { name: 'HTML', description: 'Accessible semantic structure.' },
    { name: 'CSS', description: 'Responsive design and animations.' },
    { name: 'Tailwind CSS', description: 'Utility-first rapid styling.' },
  ]},
  { label: 'Backend', skills: [
    { name: 'Node.js', description: 'APIs and server-side logic.' },
    { name: 'Express.js', description: 'Routing and middleware.' },
    { name: 'Flask', description: 'Lightweight ML model APIs.' },
  ]},
  { label: 'Database', skills: [
    { name: 'MongoDB', description: 'NoSQL for flexible schemas.' },
    { name: 'MySQL', description: 'Relational schema design.' },
    { name: 'RDS', description: 'Managed DBs on AWS.' },
  ]},
  { label: 'Cloud & DevOps', skills: [
    { name: 'AWS', description: 'Cloud infrastructure and services.' },
    { name: 'Docker', description: 'Containerization.' },
    { name: 'Terraform', description: 'Infrastructure as code.' },
  ]},
  { label: 'AI/ML', skills: [
    { name: 'Machine Learning', description: 'Predictive models and pipelines.' },
    { name: 'Deep Learning', description: 'Neural networks for vision and language.' },
    { name: 'NLP', description: 'Text analysis and conversational systems.' },
  ]},
]

export default function SkillsGalaxy() {
  const [selected, setSelected] = useState([])
  const [hover, setHover] = useState(null)

  // flatten skills and attach category
  const skills = useMemo(() => {
    return skillGroups.flatMap((g, gi) => g.skills.map((s, i) => ({ ...s, category: g.label, id: `${gi}-${i}`})))
  }, [])

  // deterministic positions around a circle
  const positions = useMemo(() => {
    return skills.map((s, i) => {
      const angle = (i / skills.length) * Math.PI * 2
      const radius = 38 + (i % 6) * 8 // vary radius for depth
      const x = 50 + Math.cos(angle) * radius
      const y = 50 + Math.sin(angle) * radius
      return { x, y }
    })
  }, [skills])

  function toggle(skillName) {
    setSelected((prev) => {
      const next = prev.includes(skillName) ? prev.filter(s => s !== skillName) : [...prev, skillName]
      // dispatch event so other components (like projects) can listen
      window.dispatchEvent(new CustomEvent('skillsFiltered', { detail: next }))
      return next
    })
  }

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.45em] text-neon-cyan/70 font-space-mono mb-3">Skills Cloud</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Interactive Skill Tag Cloud</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-7">Hover to explore skills; click tags to filter related projects.</p>
        </div>

        <div className="relative w-full h-[520px] bg-gradient-to-b from-transparent to-transparent rounded-2xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[520px] h-[520px]">
              {skills.map((s, i) => {
                const pos = positions[i]
                const isSelected = selected.includes(s.name)
                return (
                  <motion.button
                    key={s.id}
                    onClick={() => toggle(s.name)}
                    onMouseEnter={() => setHover(s.id)}
                    onMouseLeave={() => setHover(null)}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.35, zIndex: 50 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1 text-sm font-medium border ${isSelected ? 'bg-neon-cyan/10 border-neon-cyan' : 'bg-white/3 border-transparent'} text-white cursor-pointer`}
                    style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                    aria-pressed={isSelected}
                  >
                    {s.name}
                  </motion.button>
                )
              })}

              {/* tooltip */}
              {hover && (() => {
                const idx = skills.findIndex(s => s.id === hover)
                if (idx === -1) return null
                const s = skills[idx]
                const pos = positions[idx]
                return (
                  <div className="pointer-events-none absolute" style={{ left: `${pos.x}%`, top: `${pos.y - 6}%`, transform: 'translate(-50%, -120%)' }}>
                    <div className="rounded-md bg-[#07102a]/95 border border-neon-cyan/20 p-3 text-xs text-gray-200 w-56 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                      <div className="font-semibold text-white mb-1">{s.name}</div>
                      <div className="text-gray-300">{s.description}</div>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button onClick={() => { setSelected([]); window.dispatchEvent(new CustomEvent('skillsFiltered', { detail: [] })) }} className="px-4 py-2 bg-white/5 border border-white/6 rounded-md text-sm">Clear filters</button>
            <div className="text-sm text-gray-400 ml-3">Selected: <span className="text-white ml-2">{selected.join(', ') || 'None'}</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
