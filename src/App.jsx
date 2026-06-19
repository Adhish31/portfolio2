import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navigation from './components/Navigation'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import SkillsGalaxy from './components/sections/SkillsGalaxy'
import ProjectExplorer from './components/sections/ProjectExplorer'
import FeaturedProjects from './components/sections/FeaturedProjects'
import Resume from './components/sections/Resume'
import Chatbot from './components/sections/Chatbot'
import Timeline from './components/sections/Timeline'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="min-h-screen bg-dark-bg text-white overflow-hidden"
    >
      <Navigation />
      <Hero />
      <About />
      <SkillsGalaxy />
      <ProjectExplorer />
      <FeaturedProjects />
      <Resume />
      <Chatbot />
      <Timeline />
      <Achievements />
      <Contact />
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full glassmorphism neon-glow-hover flex items-center justify-center cursor-pointer z-50"
        >
          <span className="text-neon-cyan text-xl">↑</span>
        </motion.button>
      )}
    </motion.div>
  )
}

export default App
