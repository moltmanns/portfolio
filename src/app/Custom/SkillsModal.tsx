'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiFigma,
  SiWordpress, SiShopify, SiGoogleanalytics, SiGoogleads, SiGoogletagmanager, SiMailchimp,
} from 'react-icons/si'

const skills = [
  { icon: <SiHtml5 />, label: 'HTML', color: 'bg-orange-200' },
  { icon: <SiCss3 />, label: 'CSS', color: 'bg-blue-200' },
  { icon: <SiJavascript />, label: 'JavaScript', color: 'bg-yellow-200' },
  { icon: <SiReact />, label: 'React', color: 'bg-cyan-200' },
  { icon: <SiNextdotjs />, label: 'Next.js', color: 'bg-gray-200' },
  { icon: <SiTailwindcss />, label: 'TailwindCSS', color: 'bg-sky-200' },
  { icon: <SiBootstrap />, label: 'Bootstrap', color: 'bg-purple-200' },
  { icon: <SiFigma />, label: 'Figma', color: 'bg-pink-200' },
  { icon: <SiWordpress />, label: 'WordPress', color: 'bg-indigo-200' },
  { icon: <SiShopify />, label: 'Shopify', color: 'bg-green-200' },
  { icon: <SiGoogleanalytics />, label: 'GA4', color: 'bg-amber-200' },
  { icon: <SiGoogleads />, label: 'Google Ads', color: 'bg-lime-200' },
  { icon: <SiGoogletagmanager />, label: 'Tag Manager', color: 'bg-emerald-200' },
  { icon: <SiMailchimp />, label: 'Mailchimp', color: 'bg-rose-200' },
]

const SkillsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const vw = typeof window !== 'undefined' ? window.innerWidth : 800
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800

  const initialPositions = useMemo(() => skills.map((_, i) => {
    const radius = 160 + (i % 4) * 60
    const angle = (360 / skills.length) * i
    const radians = (angle * Math.PI) / 180
    return {
      x: Math.cos(radians) * radius,
      y: Math.sin(radians) * radius,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      startedFloating: false,
      removed: false,
      clicked: false,
    }
  }), []) // ✅ fixed useMemo: no vw/vh deps

  const [positions, setPositions] = useState(initialPositions)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [clickedIndices, setClickedIndices] = useState<number[]>([])
  const [hasWon, setHasWon] = useState(false)
  const [winEffects, setWinEffects] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  useEffect(() => {
    let animationFrame: number
    const move = () => {
      setPositions(prev => prev.map((pos, i) => {
        if (hoveredIndex === i || pos.removed) return pos

        const { x, y, startedFloating } = pos
        let { dx, dy } = pos


        if (!startedFloating) return { ...pos, startedFloating: true }
        if (x > vw / 2 - 40 || x < -vw / 2 + 40) dx = -dx
        if (y > vh / 2 - 40 || y < -vh / 2 + 40) dy = -dy

        return { ...pos, x: x + dx, y: y + dy, dx, dy }
      }))
      animationFrame = requestAnimationFrame(move)
    }

    animationFrame = requestAnimationFrame(move)
    return () => cancelAnimationFrame(animationFrame)
  }, [vw, vh, hoveredIndex])

  const fullMessage = '*My skills have no boundaries—just like these orbits, they take me wherever I go next.'
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        i++
        setDisplayedText(fullMessage.slice(0, i))
        if (i >= fullMessage.length) clearInterval(interval)
      }, 90)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const staticStars = useMemo(() => [...Array(50)].map((_, idx) => (
    <div
      key={`star-${idx}`}
      className="absolute w-[2px] h-[2px] bg-white opacity-20 rounded-full"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`
      }}
    />
  )), [])

  const ringSizes = vw <= 640 ? [100, 150, 200] : [160, 220, 280, 340]
  const targetsRemaining = skills.length - clickedIndices.length

  if (!isOpen) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${winEffects ? 'bg-flash' : 'bg-black/40'} backdrop-blur-sm`}>
      <div className={`
        relative bg-black text-white overflow-visible flex items-center justify-center
        rounded-2xl
        w-[800px] h-[800px] max-w-[95vw] max-h-[95vh]
        sm:w-[600px] sm:h-[600px]
        md:w-[700px] md:h-[700px]
        lg:w-[800px] lg:h-[800px]
        ${winEffects ? 'animate-shake' : ''}
      `}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-sm border border-[#3affca] px-3 py-1 rounded-full hover:bg-[#3affca] hover:text-black transition cursor-pointer z-50"
        >
          EXIT
        </button>

        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {vw > 640 && staticStars}
        </div>

        {ringSizes.map((r, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[#ffffff]/10"
            style={{
              width: `${r * 2}px`,
              height: `${r * 2}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}

        <div className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-teal-400 blur-xl animate-pulse" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />

        {positions.map((pos, i) => (
          !pos.removed && (
            <motion.div
              key={i}
              className="fixed top-1/2 left-1/2"
              animate={{ x: pos.x, y: pos.y }}
              transition={{ ease: 'linear', duration: 0.05 }}
            >
              <motion.div
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  setClickedIndices(prev => [...prev, i])
                  setShowScore(true)
                  setScore(prev => prev + 100)

                  if (clickedIndices.length + 1 === skills.length) {
                    setTimeout(() => {
                      setHasWon(true)
                      setWinEffects(true)
                    }, 850)
                  }

                  setTimeout(() => {
                    setPositions(prev => prev.map((p, idx) => idx === i ? { ...p, removed: true } : p))
                  }, 800)
                }}
                className={`cursor-pointer flex items-center justify-center px-3 py-2 ${skills[i].color} text-[#0d0d0d] shadow-md transition-all duration-300 ${hoveredIndex === i ? 'rounded-full w-auto' : 'w-10 h-10 sm:w-12 sm:h-12 rounded-full'} ${clickedIndices.includes(i) ? 'animate-laser-hit bg-lime-400 border-2 border-lime-300 ring-2 ring-lime-300 ring-inset animate-spin-slow' : ''}`}
              >
                {skills[i].icon}
                {hoveredIndex === i && (
                  <span className="ml-2 text-sm font-semibold whitespace-nowrap">{skills[i].label}</span>
                )}
              </motion.div>
            </motion.div>
          )
        ))}

        {showScore && (
          <div className="absolute top-3 left-4 text-sm font-mono text-green-400 space-y-1">
            <p>SCORE: {score}</p>
            {clickedIndices.length > 0 && (
              <p>Targets Remaining: {targetsRemaining}</p>
            )}
          </div>
        )}

        {hasWon && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-green-400 font-mono pointer-events-none">
            <h1 className="text-4xl sm:text-5xl mb-2 animate-pulse">YOU WIN!</h1>
            <p className="text-lg sm:text-xl">HIGH SCORE: {score}</p>
            <p className="text-sm mt-2 opacity-80">Press F5 to play again.</p>
          </div>
        )}

        <p
          className="absolute bottom-4 left-4 text-xs text-white opacity-80 italic tracking-wide max-w-[85%] sm:max-w-full"
          style={{ fontFamily: 'var(--font-body)', whiteSpace: 'pre', zIndex: 10 }}
        >
          {displayedText}
        </p>
      </div>
    </div>
  )
}

export default SkillsModal
