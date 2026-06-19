import React from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen() {
  const characters = 'Booting Adhish OS...'.split('')

  return (
    <div className="fixed inset-0 bg-dark-bg flex items-center justify-center z-[9999] overflow-hidden">
      {/* Background animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan via-transparent to-neon-purple" />
      </div>

      {/* Animated circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-neon-cyan/20 animate-float" />
        <div
          className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full border border-neon-purple/20 animate-float"
          style={{ animationDelay: '1s' }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        {/* System window */}
        <div className="glassmorphism rounded-lg p-8 md:p-12 max-w-2xl mx-4 border border-neon-cyan/30">
          {/* Window header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-neon-cyan/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <p className="text-neon-cyan text-xs">System Initialization</p>
          </div>

          {/* Loading text with typing animation */}
          <div className="text-left mb-8">
            <div className="text-neon-cyan font-bold text-xl md:text-2xl font-space-mono tracking-wider min-h-8">
              {characters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity }}
                className="inline-block ml-1"
              >
                _
              </motion.span>
            </div>
          </div>

          {/* Loading bar */}
          <div className="space-y-3">
            <div className="h-1 bg-dark-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.5, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
              />
            </div>

            {/* System info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-neon-cyan/70 text-xs space-y-1 font-space-mono mt-4"
            >
              <p>{'>>'} Loading core modules...</p>
              <p>{'>>'} Initializing neural networks...</p>
              <p>{'>>'} Configuring skill matrices...</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating code elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 left-10 text-neon-cyan/30 text-xs hidden md:block font-mono"
      >
        {'<AdhishOS />'}
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        className="absolute top-10 right-10 text-neon-purple/30 text-xs hidden md:block font-mono"
      >
        {'[SYSTEM.READY]'}
      </motion.div>
    </div>
  )
}
