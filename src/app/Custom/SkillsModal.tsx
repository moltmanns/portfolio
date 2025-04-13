'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { motion } from 'framer-motion'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiWordpress,
  SiShopify,
  SiGoogleanalytics,
  SiGoogleads,
  SiGoogletagmanager,
  SiMailchimp,
} from 'react-icons/si'

const skills = [
  { icon: <SiHtml5 />, label: 'HTML', desc: 'Markup wizardry — like Lego blocks but for browsers.', color: 'bg-orange-200' },
  { icon: <SiCss3 />, label: 'CSS', desc: 'I bend pixels until they submit.', color: 'bg-blue-200' },
  { icon: <SiJavascript />, label: 'JavaScript', desc: 'Add interactivity or chaos, your call.', color: 'bg-yellow-200' },
  { icon: <SiReact />, label: 'React', desc: 'Reusable components? React to that.', color: 'bg-cyan-200' },
  { icon: <SiNextdotjs />, label: 'Next.js', desc: 'Server-rendered, lightning fast — just like me.', color: 'bg-gray-200' },
  { icon: <SiTailwindcss />, label: 'TailwindCSS', desc: 'Utility classes, utility flex. Beautiful chaos.', color: 'bg-sky-200' },
  { icon: <SiBootstrap />, label: 'Bootstrap', desc: 'Grid-based bootstrapped brilliance.', color: 'bg-purple-200' },
  { icon: <SiFigma />, label: 'Figma', desc: 'I design with pixels before I build with code.', color: 'bg-pink-200' },
  { icon: <SiWordpress />, label: 'WordPress', desc: 'The OG CMS — still got it.', color: 'bg-indigo-200' },
  { icon: <SiShopify />, label: 'Shopify', desc: 'Ecom dreams built in liquid logic.', color: 'bg-green-200' },
  { icon: <SiGoogleanalytics />, label: 'GA4', desc: 'Because what gets measured gets better.', color: 'bg-amber-200' },
  { icon: <SiGoogleads />, label: 'Google Ads', desc: 'Spend wisely. Convert wildly.', color: 'bg-lime-200' },
  { icon: <SiGoogletagmanager />, label: 'Tag Manager', desc: 'Tag everything. Track everything.', color: 'bg-emerald-200' },
  { icon: <SiMailchimp />, label: 'Mailchimp', desc: 'Emails that slap. Literally.', color: 'bg-rose-200' },
]

type SkillsModalProps = {
  isOpen: boolean
  onClose: () => void
}

type Position = {
  x: number
  y: number
  dx: number
  dy: number
  gravity: number
  bounce: number
  damping: number
  landed: boolean
  floating: boolean
  mass: number
}

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min

const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [positions, setPositions] = useState<Position[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const animationRef = useRef<number>()

  // Initialize positions when modal opens
  useEffect(() => {
    if (isOpen && containerRef.current) {
      const bounding = containerRef.current.getBoundingClientRect()
      setContainerSize({ width: bounding.width, height: bounding.height })
      
      // Set initial positions above the container
      setPositions(
        skills.map(() => ({
          x: bounding.width / 2 - 24, // Center horizontally
          y: -100 - Math.random() * 200, // Start above the container with random offset
          dx: getRandom(-1, 1), // Slight horizontal variation
          dy: 0,
          gravity: 0.5,
          bounce: 0.7 + Math.random() * 0.2,
          damping: 0.98,
          landed: false,
          floating: false,
          mass: 0.8 + Math.random() * 0.4,
        }))
      )
    }
  }, [isOpen])

  // Animation loop
  useEffect(() => {
    if (!isOpen || positions.length === 0) return

    const animate = () => {
      setPositions(prev => {
        const maxX = containerSize.width - 48
        const maxY = containerSize.height - 48

        return prev.map((pos, i) => {
          if (activeIndex === i) return pos

          let { x, y, dx, dy, gravity, bounce, damping, landed, floating, mass } = pos

          if (!landed) {
            // Apply gravity
            dy += gravity * mass
            
            // Update position
            y += dy
            x += dx

            // Check for floor collision
            if (y >= maxY) {
              y = maxY
              dy = -dy * bounce // Bounce with energy loss
              
              // If bounce is small enough, transition to floating
              if (Math.abs(dy) < 2) {
                return {
                  ...pos,
                  x: x, // Keep current x position
                  y: maxY - 2, // Slightly above floor
                  dx: getRandom(-0.8, 0.8),
                  dy: getRandom(-0.8, 0.8),
                  landed: true,
                  floating: true,
                  damping: 0.99 // Less damping when floating
                }
              }
            }

            return { ...pos, x, y, dx, dy }
          }

          if (floating) {
            // Apply damping (air resistance)
            dx *= damping
            dy *= damping

            // Random floating movement
            if (Math.random() < 0.02) {
              dx += getRandom(-0.3, 0.3)
              dy += getRandom(-0.3, 0.3)
            }

            // Update position
            x += dx
            y += dy

            // Boundary collisions with slight bounce
            if (x < 0) {
              x = 0
              dx = -dx * 0.6
            } else if (x > maxX) {
              x = maxX
              dx = -dx * 0.6
            }

            if (y < 0) {
              y = 0
              dy = -dy * 0.6
            } else if (y > maxY) {
              y = maxY
              dy = -dy * 0.6
            }

            return { ...pos, x, y, dx, dy, landed: true, floating: true }
          }

          return pos
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isOpen, activeIndex, containerSize, positions.length])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black text-white max-w-3xl rounded-2xl p-0 flex flex-col items-center justify-center min-h-[550px]">
        <div ref={containerRef} className="relative w-full h-[550px] overflow-hidden rounded-lg z-10">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className={`absolute w-12 h-12 rounded-full text-black text-xl flex items-center justify-center shadow-md cursor-pointer z-20 transition-all duration-300 ${
                activeIndex === i
                  ? 'bg-white ring-2 ring-purple-400 ring-offset-2 animate-pulse border-teal-400 border'
                  : `${skill.color}`
              }`}
              animate={{ 
                x: positions[i]?.x || containerSize.width / 2 - 24, 
                y: positions[i]?.y || -100,
                scale: activeIndex === i ? 1.1 : 1
              }}
              transition={{ 
                type: 'spring',
                damping: 20,
                stiffness: activeIndex === i ? 300 : 100
              }}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              whileHover={{ scale: 1.05 }}
            >
              {skill.icon}
              {activeIndex === i && (
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs rounded px-3 py-2 shadow z-30">
                  <strong>{skill.label}</strong>: {skill.desc}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SkillsModal