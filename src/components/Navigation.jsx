import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'HOME', id: '#' },
    { label: 'ABOUT', id: '#about' },
    { label: 'SKILLS', id: '#skills' },
    { label: 'PROJECTS', id: '#projects' },
    { label: 'TIMELINE', id: '#timeline' },
    { label: 'CONTACT', id: '#contact' },
  ]

  const handleNavClick = (id) => {
    setIsOpen(false)
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="fixed top-0 w-full z-40 glassmorphism-dark border-b border-neon-cyan/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavClick('#')}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
            <span className="text-dark-bg font-bold text-lg">A</span>
          </div>
          <span className="hidden sm:inline text-neon-cyan font-bold terminal-text">ADHISH OS v1.0</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => handleNavClick(item.id)}
              className="px-4 py-2 text-sm font-space-mono text-neon-cyan/80 hover:text-neon-cyan transition-colors border-b-2 border-transparent hover:border-neon-cyan/50"
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neon-cyan p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-neon-cyan/10 glassmorphism-dark"
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 10 }}
                onClick={() => handleNavClick(item.id)}
                className="px-6 py-3 text-left text-sm font-space-mono text-neon-cyan/80 hover:text-neon-cyan hover:bg-neon-cyan/5 transition-colors border-b border-neon-cyan/5"
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
