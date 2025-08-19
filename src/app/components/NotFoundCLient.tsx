'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const asciiArt = `
       .-.
      |_:_|
     /(_Y_)\\
    ( \\/M\\/ )    404: PAGE NOT FOUND
     \\ \\_/ /     Looks like you hit a wall.
     _)___(_
    |__===__|
    '-------'
`

export default function NotFoundClient() {
  const [typedText, setTypedText] = useState('')
  const [mounted, setMounted] = useState(false)
  const fullText = `> SYSTEM ERROR\n\n${asciiArt}\n\nPRESS START TO RETURN`

  // Track mounting to prevent hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  // Typewriter effect (only after mounted)
  useEffect(() => {
    if (!mounted) return
    let i = 0
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(interval)
    }, 20)
    return () => clearInterval(interval)
  }, [mounted, fullText])
  

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] text-[#78ffd6] font-mono text-sm overflow-hidden">
      {/* CRT Scanlines */}
      <div className="pointer-events-none fixed inset-0 z-40 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100%_3px]" />

      {/* Red LED */}
      <div className="absolute top-4 left-4 z-50 flex items-center space-x-2">
        <div className="relative">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(255,0,0,0.8)]" />
          <div className="absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
        </div>
        <p className="text-[9px] text-[#ff6b6b] font-mono">POWER</p>
      </div>

      {/* Main Content */}
      <div className="z-50 px-6 text-left whitespace-pre-wrap leading-relaxed tracking-wide max-w-2xl">
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-[#baffc9] mb-6"
        >
          {typedText}
        </motion.pre>

        <motion.button
          onClick={() => window.location.href = '/'}
          whileTap={{ scale: 0.9 }}
          className="mt-4 px-5 py-2 bg-[#3affca] text-black text-sm font-bold rounded-full shadow hover:scale-105 transition-all cursor-pointer"
        >
          🔁 RESTART GAME
        </motion.button>
      </div>
    </div>
  )
}
