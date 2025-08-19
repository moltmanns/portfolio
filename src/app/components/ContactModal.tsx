'use client'

import React, { useState, useEffect } from 'react'
import { motion} from 'framer-motion'
import { FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [clicked, setClicked] = useState<string | null>(null)
  const [typedIntro, setTypedIntro] = useState('')
  const fullPrompt = '> How would you like to reach Matt?'

  const playCoinSound = () => {
    const audio = new Audio('/sounds/insert-coin.wav')
    audio.volume = 0.4
    audio.play()
  }

  const handleClick = (label: string, action: () => void) => {
    setClicked(label)
    playCoinSound()
    setTimeout(() => setClicked(null), 400)
    action()
  }

  // Typewriter Intro
  useEffect(() => {
    if (!isOpen) {
      setTypedIntro('')
      return
    }
    let i = 0
    const interval = setInterval(() => {
      i++
      setTypedIntro(fullPrompt.slice(0, i))
      if (i >= fullPrompt.length) clearInterval(interval)
    }, 50)
    return () => clearInterval(interval)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-mono overflow-hidden">
      {/* Blurred Background Layer */}
      <div className="absolute inset-0 z-40 bg-black/80 backdrop-blur-sm" />

      {/* CRT Scanlines */}
      <div className="pointer-events-none fixed inset-0 z-40 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:100%_3px]" />

      {/* Modal Box */}
      <div className="relative z-50 w-full max-w-[700px] max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0a0a0a] border border-[#3affca] p-6 sm:p-8 shadow-xl mx-4 text-[#baffc9]">

        {/* Red LED Light + POWER Label */}
        <div className="absolute top-3 left-3 z-50 flex items-center space-x-2">
          <div className="relative">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(255,0,0,0.8)]" />
            <div className="absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          </div>
          <p className="text-[9px] text-[#ff6b6b] font-mono">POWER</p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-sm border border-[#3affca] px-3 py-1 rounded-full hover:bg-[#3affca] hover:text-black transition cursor-pointer z-50"
        >
          EXIT
        </button>

        {/* Typewriter Intro */}
        <div className="mt-8 mb-6 text-sm text-[#78ffd6] tracking-wide px-1">
          {typedIntro}
          {typedIntro.length < fullPrompt.length && <span className="animate-pulse">█</span>}
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              label: 'Email Me',
              icon: <FaEnvelope />,
              action: () => window.open('mailto:moltmanns25@gmail.com', '_blank'),
            },
            {
              label: 'Call Me',
              icon: <FaPhoneAlt />,
              action: () => window.open('tel:+15634950462'),
            },
            {
              label: 'LinkedIn',
              icon: <FaLinkedin />,
              action: () => window.open('https://www.linkedin.com/in/matt-oltmanns/', '_blank'),
            },
          ].map(({ label, icon, action }, i) => (
            <motion.button
              key={label}
              onClick={() => handleClick(label, action)}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className={`relative flex flex-col items-center justify-center p-6 border-2 rounded-lg text-sm bg-[#1a1a1a] hover:border-[#3affca] transition-all duration-300 glow-on-hover cursor-[url('/cursor-retro.png'),pointer] ${
                clicked === label ? 'insert-coin' : ''
              }`}
            >
              <div className="text-2xl mb-2">{icon}</div>
              <span>{label}</span>
              {clicked === label && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute bottom-2 text-xs text-[#78ffd6] animate-pulse"
                >
                  INSERT COIN 💾
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactModal
