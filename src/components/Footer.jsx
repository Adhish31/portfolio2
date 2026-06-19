import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Email', href: 'mailto:adhish.kumar@example.com' },
  ]

  return (
    <footer className="border-t border-neon-cyan/10 py-12 px-6 relative overflow-hidden bg-[#050816]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <Code2 size={18} className="text-dark-bg" />
              </div>
              <span className="font-bold text-neon-cyan terminal-text">ADHISH OS</span>
            </div>
            <p className="text-gray-400 text-sm">
              A futuristic developer portfolio showcasing AI, MERN Stack, and Cloud expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-neon-cyan font-bold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm font-space-mono">
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-neon-cyan font-bold mb-4 text-sm">Resources</h4>
            <ul className="space-y-2">
              {['Resume', 'GitHub', 'Blog', 'Contact', 'Sitemap'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm font-space-mono">
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent mb-8"
        />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
        >
          <p className="font-space-mono">
            © {currentYear} Adhish Kumar. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-neon-cyan"
            >
              <Heart size={16} fill="currentColor" />
            </motion.span>
            <span>by Adhish</span>
          </div>

          <div className="flex gap-4">
            {footerLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                whileHover={{ color: '#00D9FF' }}
                className="text-gray-400 hover:text-neon-cyan transition-colors font-space-mono text-xs"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Terminal prompt */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-neon-cyan/50 text-xs font-space-mono text-center mt-8"
        >
          {'>'} Thank you for visiting Adhish OS. Have a great day! 🚀
        </motion.p>
      </div>
    </footer>
  )
}
