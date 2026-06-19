import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Download } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'adhish.kumar@example.com', href: 'mailto:adhish.kumar@example.com' },
    { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
    { icon: MapPin, label: 'Location', value: 'India', href: '#' },
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', color: '#ffffff' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: '#0A66C2' },
    { icon: Twitter, label: 'Twitter', href: '#', color: '#1DA1F2' },
  ]

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [-50, 50, -50],
            y: [0, 50, 0],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"
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
            <span className="gradient-neon">Let's Connect</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind or want to collaborate? Get in touch!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          {contactInfo.map((info, i) => {
            const Icon = info.icon
            return (
              <motion.a
                key={i}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glassmorphism p-6 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mx-auto mb-4 group-hover:from-neon-cyan/40 group-hover:to-neon-purple/40 transition-colors">
                  <Icon className="text-neon-cyan" size={24} />
                </div>
                <h3 className="text-neon-cyan font-bold mb-2">{info.label}</h3>
                <p className="text-gray-400 text-sm break-words">{info.value}</p>
              </motion.a>
            )
          })}
        </div>

        {/* Resume & Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 mb-12 justify-center items-center"
        >
          {/* Resume Download */}
          <a href="#" className="group flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg font-bold text-dark-bg hover:shadow-xl hover:shadow-neon-cyan/50 transition-all duration-300">
            <Download size={20} />
            <span>Download Resume</span>
          </a>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, i) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-lg glassmorphism border border-neon-cyan/20 hover:border-neon-cyan/50 flex items-center justify-center transition-all duration-300 group"
                  title={social.label}
                >
                  <Icon className="text-neon-cyan group-hover:text-neon-purple transition-colors" size={20} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-lg p-8 border border-neon-cyan/30 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-neon-cyan mb-6 font-space-mono">Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name and Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-neon-cyan text-sm font-bold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-dark-secondary border border-neon-cyan/20 hover:border-neon-cyan/50 focus:border-neon-cyan/80 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 transition-colors focus:outline-none focus:ring-1 focus:ring-neon-cyan/30"
                />
              </div>
              <div>
                <label className="block text-neon-cyan text-sm font-bold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-dark-secondary border border-neon-cyan/20 hover:border-neon-cyan/50 focus:border-neon-cyan/80 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 transition-colors focus:outline-none focus:ring-1 focus:ring-neon-cyan/30"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-neon-cyan text-sm font-bold mb-2">Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                className="w-full bg-dark-secondary border border-neon-cyan/20 hover:border-neon-cyan/50 focus:border-neon-cyan/80 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 transition-colors focus:outline-none focus:ring-1 focus:ring-neon-cyan/30"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-neon-cyan text-sm font-bold mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or opportunity..."
                rows="5"
                className="w-full bg-dark-secondary border border-neon-cyan/20 hover:border-neon-cyan/50 focus:border-neon-cyan/80 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 transition-colors focus:outline-none focus:ring-1 focus:ring-neon-cyan/30 resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={submitted}
              className="w-full py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg font-bold text-dark-bg hover:shadow-xl hover:shadow-neon-cyan/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
                    ✓
                  </motion.span>
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>

          {/* Form note */}
          <p className="text-gray-400 text-xs text-center mt-4">
            * All fields are required. I'll get back to you within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
