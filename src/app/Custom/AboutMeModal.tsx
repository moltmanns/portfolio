'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface AboutMeModalProps {
  isOpen: boolean
  onClose: () => void
}

const funFacts = [
  'I regularly practice arguments in the shower 🧼',
  'I do NOT like bacon 🥓❌',
  'If there’s a more efficient method, I’ll find it ⚙️',
  'Rice > mashed potatoes 🍚 > 🥔',
  'My daughter is secretly my clone (confirmed by my wife) 👯‍♀️',
]

const floatingPolaroids = [
  { image: '/assets/me-and-shorty.png', alt: 'Family', style: 'top-[10%] left-[5%] rotate-[-5deg]' },
  { image: '/assets/me-peaking.png', alt: 'Workstation', style: 'bottom-[10%] left-[10%] rotate-[6deg]' },
  { image: '/assets/family-pic2.jpg', alt: 'Family Pic 2', style: 'bottom-[8%] right-[5%] rotate-[-4deg]' },
  { image: '/assets/family-pic3.jpg', alt: 'Family Pic 3', style: 'top-[10%] right-[5%] rotate-[5deg]' },
  { image: '/assets/hiking-pic1.jpg', alt: 'Hiking', style: 'bottom-[20%] right-[19%] rotate-[-3deg]' },
  { image: '/assets/family-pic1.jpg', alt: 'Family Pic 4', style: 'top-[32%] left-[18%] rotate-[4deg]' },
]

const fridgeMagnets = [
  { src: '/assets/suns-out-stickerv2.webp', alt: 'All-Inclusives', style: 'top-[5%] left-[25%] rotate-[-10deg]' },
  { src: '/assets/lego-magnet-about-me-modal.webp', alt: 'Lego', style: 'top-[25%] right-[22%] rotate-[15deg]' },
  { src: '/assets/warhammer-miniv2.webp', alt: 'Warhammer Painting', style: 'bottom-[36%] left-[6%] rotate-[-5deg]' },
]

const AboutMeModal: React.FC<AboutMeModalProps> = ({ isOpen, onClose }) => {
  const [booted, setBooted] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const fullIntro = `*System Boot Complete...

Hi, I’m Matt Oltmanns — designer, developer, nerd, and officially in "Level 2: Dad Mode."

I live in Dubuque, Iowa with my amazing wife, our 8-year-old daughter Olivia, and our newest party member: Liam, our newborn son.

By day, I craft websites, apps, and experiences with over 12 years of design/dev under my belt. By night? I’m either gaming, watching YouTube tutorials, or apparently my wife is making us take up hiking :/.

I love empathy-driven design, clever UI, and finding efficient solutions to problems most businesses just live with. My brain is: 50% design tricks, 30% “Dad, can I have a snack?”, and 20% 90s arcade games.`

  useEffect(() => {
    setMounted(true)
    const handleResize = () => setIsMobile(window.innerWidth <= 786)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isOpen && mounted) {
      const audio = new Audio('./assets/sounds/gamestart-272829.mp3')
      audio.volume = 0.4
      audio.play()
    }
  }, [isOpen, mounted])

  useEffect(() => {
    if (!isOpen) {
      setBooted(false)
      setTypedText('')
    } else {
      const bootTimer = setTimeout(() => setBooted(true), 2500)
      return () => clearTimeout(bootTimer)
    }
  }, [isOpen])

  useEffect(() => {
    if (booted && typedText.length < fullIntro.length) {
      const typeTimer = setTimeout(() => {
        setTypedText(fullIntro.slice(0, typedText.length + 1))
      }, 45)
      return () => clearTimeout(typeTimer)
    }
  }, [typedText, booted])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm overflow-hidden">
      {/* CRT Scanlines */}
      <div className="pointer-events-none fixed inset-0 z-40 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100%_3px]" />

      {/* Main Modal */}
      <div className="relative z-50 w-full max-w-[750px] max-h-[95vh] overflow-y-auto overflow-x-hidden rounded-2xl bg-[#0a0a0a] text-[#baffc9] border border-[#3affca] p-6 sm:p-8 font-mono shadow-xl mx-4 scrollbar-thin">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-sm border border-[#3affca] px-3 py-1 rounded-full hover:bg-[#3affca] hover:text-black transition z-[999] cursor-pointer"
        >
          EXIT
        </button>

        {/* Boot Sequence */}
        {!booted && (
          <motion.div
            key="boot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-[60vh] text-center"
          >
            <p className="text-xl mb-4 tracking-widest animate-pulse">NOW LOADING... MATT</p>
            <div className="w-[200px] h-[10px] bg-[#2dffcd] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#0a0a0a]"
                initial={{ width: '100%' }}
                animate={{ width: 0 }}
                transition={{ duration: 2.5, ease: 'easeInOut' }}
              />
            </div>
            <p className="text-xs mt-4 text-[#78ffd6]">Please do not blow on the cartridge</p>
          </motion.div>
        )}

        {/* Typewriter Text + Fun Facts */}
        <AnimatePresence>
          {booted && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6 mt-4"
            >
              <pre className="whitespace-pre-wrap text-sm leading-relaxed tracking-wide text-[#baffc9]">
                {typedText}
                {typedText.length < fullIntro.length && <span className="animate-pulse">█</span>}
              </pre>

              {typedText.length === fullIntro.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4 text-sm text-[#e7ffe7]"
                >
                  <div className="pt-4">
                    <h3 className="text-lg font-bold text-[#66ffc2] mb-2">FUN FACTS ↓</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {funFacts.map((fact, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.2 }}
                          className="hover:text-[#aaffee] transition duration-200 cursor-default"
                        >
                          {fact}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Stacked Polaroids on Mobile */}
                  {isMobile && (
                    <div className="pt-8 flex flex-col items-center gap-6">
                      {floatingPolaroids.map((item, i) => (
                        <div key={i} className="bg-white border border-gray-300 rounded-md p-1 pb-2 shadow-lg polaroid w-[220px]">
                          <Image
                            src={item.image}
                            alt={item.alt}
                            width={380}
                            height={380}
                            className="rounded-sm object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="pt-6 text-xs text-[#55ffaa] italic text-center">
                    Thanks for loading my story. Click EXIT to return to the main screen.
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Polaroids (Desktop Only) */}
      {!isMobile && booted &&
        floatingPolaroids.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.6 + i * 0.3 }}
            drag
            dragConstraints={{ top: -300, bottom: 300, left: -300, right: 300 }}
            className={`fixed z-40 ${item.style} w-[220px] cursor-grab`}
          >
            <div className="relative bg-white border border-gray-300 rounded-md p-1 pb-2 shadow-lg polaroid">
              <Image
                src={item.image}
                alt={item.alt}
                width={380}
                height={380}
                className="rounded-sm object-cover"
              />
            </div>
          </motion.div>
        ))
      }

      {/* Fridge Magnets */}
      {booted && fridgeMagnets.map((magnet, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5 + i * 0.2, duration: 0.4, ease: 'easeOut' }}
          className={`fixed z-30 w-[72px] sm:w-[96px] md:w-[112px] pointer-events-none ${magnet.style}`}
        >
          <Image
            src={magnet.src}
            alt={magnet.alt}
            width={128}
            height={128}
            className="object-contain w-full h-auto"
          />
        </motion.div>
      ))}
    </div>
  )
}

export default AboutMeModal
