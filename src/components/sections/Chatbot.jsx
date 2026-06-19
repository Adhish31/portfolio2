import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, X } from 'lucide-react'

const exampleQuestions = [
  'What projects has Adhish built?',
  'What is his strongest tech stack?',
  'Is Adhish suitable for a MERN internship?',
  'Show his cloud projects.',
  'What AI projects has he completed?',
]

const initialMessages = [
  {
    id: 1,
    sender: 'assistant',
    text: 'Hello! Ask me anything about my skills, projects, resume, or experience.',
  },
]

const getPlaceholderResponse = (question) => {
  const normalized = question.toLowerCase()

  if (normalized.includes('projects')) {
    return 'I have built AI, MERN, cloud, and DevOps projects, including a smart fitness trainer, placement portal, cloud file sharing platform, and monitoring dashboard.'
  }
  if (normalized.includes('strongest') || normalized.includes('tech stack')) {
    return 'My strongest tech stack is MERN combined with AI/ML tools. I also work extensively with AWS and Python for cloud and data-driven applications.'
  }
  if (normalized.includes('mern internship')) {
    return 'Yes, I am a strong fit for a MERN internship because I build full-stack applications with React, Node.js, Express, MongoDB, and deploy them in the cloud.'
  }
  if (normalized.includes('cloud projects')) {
    return 'My cloud projects include SmartDrive file sharing on AWS S3, a cloud monitoring dashboard, and a carbon footprint guided crop selection platform using AWS services.'
  }
  if (normalized.includes('ai projects')) {
    return 'My AI work includes the Smart Fitness Trainer, credit card fraud detection, computer vision and NLP-focused applications, and intelligent backend automation.'
  }
  return 'That is a great question! I am happy to help you learn more about my work and background.'
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, open])

  const sendMessage = (text) => {
    if (!text.trim()) return

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: text.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const assistantMessage = {
        id: Date.now() + 1,
        sender: 'assistant',
        text: getPlaceholderResponse(text),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 900)
  }

  const handleExampleClick = (example) => {
    sendMessage(example)
  }

  return (
    <>
      <section id="chatbot" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-10 top-20 h-36 w-36 rounded-full bg-neon-cyan/10 blur-3xl" />
          <div className="absolute right-10 top-28 h-52 w-52 rounded-full bg-neon-purple/10 blur-3xl" />
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
              Ask AI About Adhish
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Visitors can ask questions about my skills, projects, resume, and experience
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-8">
              Start a conversation using the chat widget or try these example questions to learn more about my work.
            </p>
          </motion.div>

          <div className="glassmorphism rounded-[2rem] border border-neon-cyan/20 p-8 shadow-[0_40px_120px_rgba(0,217,255,0.08)]">
            <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr] items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-3xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-white shadow-[0_20px_60px_rgba(0,217,255,0.2)]">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI Chat Assistant</h3>
                    <p className="text-gray-400 mt-1">A modern glass UI chat experience powered by placeholder AI responses.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-300 leading-7">
                    Visitors can ask questions like what projects I have built, which stacks I specialize in, and whether I am a good fit for MERN or cloud roles.
                  </p>
                  <div className="rounded-3xl border border-neon-cyan/15 bg-[#071026]/90 p-5">
                    <p className="text-sm uppercase tracking-[0.35em] text-neon-cyan/70 font-space-mono mb-4">Try these questions</p>
                    <div className="flex flex-wrap gap-3">
                      {exampleQuestions.map((question) => (
                        <button
                          key={question}
                          onClick={() => handleExampleClick(question)}
                          className="rounded-full border border-neon-cyan/20 bg-white/5 px-4 py-2 text-sm text-gray-200 transition hover:border-neon-cyan/40 hover:bg-neon-cyan/10"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-neon-cyan/15 bg-[#06101f]/95 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
                <div className="flex items-center justify-between px-4 py-3 border-b border-neon-cyan/10">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan/70 font-space-mono">Chat Preview</p>
                    <p className="text-white font-semibold">Tap the floating button to start chatting.</p>
                  </div>
                  <div className="h-11 w-11 rounded-2xl bg-white/5 flex items-center justify-center text-neon-cyan">
                    <MessageCircle size={18} />
                  </div>
                </div>
                <div className="grid gap-3 p-4">
                  {messages.slice(-3).map((message) => (
                    <div
                      key={message.id}
                      className={`rounded-3xl p-4 ${
                        message.sender === 'user'
                          ? 'self-end bg-neon-cyan/10 text-white border border-neon-cyan/20'
                          : 'self-start bg-white/5 text-gray-200 border border-white/10'
                      }`}
                    >
                      <p className="text-sm leading-6">{message.text}</p>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="self-start rounded-3xl bg-white/5 border border-white/10 px-4 py-3 text-gray-200">
                      <div className="flex items-center gap-2">
                        <span className="block h-2.5 w-2.5 rounded-full bg-neon-cyan animate-pulse" />
                        <span className="block h-2.5 w-2.5 rounded-full bg-neon-cyan/70 animate-pulse delay-150" />
                        <span className="block h-2.5 w-2.5 rounded-full bg-neon-cyan/50 animate-pulse delay-300" />
                        <span className="text-sm text-gray-400">Typing...</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-end bg-slate-950/80 px-4 py-6 md:items-center md:justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-md rounded-[2rem] border border-neon-cyan/20 bg-[#071227]/95 shadow-[0_40px_120px_rgba(0,0,0,0.7)] backdrop-blur-xl"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center justify-between border-b border-neon-cyan/10 px-5 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-neon-cyan/70 font-space-mono">Ask AI About Adhish</p>
                  <h3 className="text-lg font-bold text-white">Chat with AI</h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-neon-cyan/20 text-neon-cyan transition hover:bg-neon-cyan/10"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex h-[420px] flex-col p-5 gap-4 overflow-hidden">
                <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`max-w-[85%] rounded-[2rem] px-4 py-3 ${
                        message.sender === 'user'
                          ? 'ml-auto bg-neon-cyan/15 text-white border border-neon-cyan/20'
                          : 'bg-white/5 text-gray-200 border border-white/10'
                      }`}
                    >
                      <p className="text-sm leading-6">{message.text}</p>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <div className="rounded-[2rem] border border-neon-cyan/15 bg-[#061029]/95 p-3">
                  <div className="flex items-center gap-3">
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                      placeholder="Type your question..."
                      className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                    />
                    <button
                      onClick={() => sendMessage(input)}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-neon-cyan text-dark-bg transition hover:brightness-110"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 z-50 inline-flex items-center gap-2 rounded-full bg-neon-cyan px-5 py-3 text-sm font-semibold text-dark-bg shadow-[0_25px_80px_rgba(0,217,255,0.25)] transition transform duration-300 hover:-translate-y-1"
      >
        <MessageCircle size={18} />
        Ask AI About Adhish
      </button>
    </>
  )
}
