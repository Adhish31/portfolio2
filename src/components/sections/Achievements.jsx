import React from 'react'
import { motion } from 'framer-motion'
import { Award, Trophy, Star, Zap } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Top Performer',
      description: 'Ranked in top 10% of CS students in university',
      category: 'Academic',
      color: '#FFD93D',
    },
    {
      icon: Star,
      title: 'Project Excellence',
      description: 'Won 3 hackathons with innovative AI solutions',
      category: 'Competition',
      color: '#6BCB77',
    },
    {
      icon: Award,
      title: 'Skill Mastery',
      description: 'Completed 20+ online certifications',
      category: 'Certification',
      color: '#4ECDC4',
    },
    {
      icon: Zap,
      title: 'Innovation Leader',
      description: 'Led team projects with 50+ GitHub stars',
      category: 'Open Source',
      color: '#FF6B6B',
    },
    {
      icon: Award,
      title: 'Tech Mentor',
      description: 'Mentored 10+ junior developers',
      category: 'Community',
      color: '#A855F7',
    },
    {
      icon: Star,
      title: 'Published Articles',
      description: 'Written 15+ technical articles on Medium',
      category: 'Technical Writing',
      color: '#00D9FF',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-1/3 right-1/3 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-neon">Achievements & Recognition</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Accomplishments that showcase my dedication and expertise
          </p>
        </motion.div>

        {/* Achievements grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, i) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Glow background */}
                <div
                  className="absolute inset-0 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ backgroundColor: achievement.color }}
                />

                <div className="relative glassmorphism p-6 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 h-full flex flex-col overflow-hidden group-hover:neon-glow">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: achievement.color }} />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="mb-4 w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: `${achievement.color}20` }}
                  >
                    <Icon size={28} style={{ color: achievement.color }} />
                  </motion.div>

                  {/* Category badge */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold font-space-mono mb-3 w-fit"
                    style={{
                      backgroundColor: `${achievement.color}20`,
                      color: achievement.color,
                    }}
                  >
                    {achievement.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm flex-grow">{achievement.description}</p>

                  {/* Bottom shine effect */}
                  <div className="mt-4 pt-4 border-t border-neon-cyan/10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: achievement.color }} />
                    <span className="text-neon-cyan/50 text-xs font-space-mono">Achievement Unlocked</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Hackathons', value: '3' },
            { label: 'Certifications', value: '20+' },
            { label: 'GitHub Stars', value: '150+' },
            { label: 'Articles', value: '15+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism p-6 rounded-lg border border-neon-cyan/20 text-center"
            >
              <p className="text-3xl font-bold gradient-neon mb-2">{stat.value}</p>
              <p className="text-gray-400 text-sm font-space-mono">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
