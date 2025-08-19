'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ToastPopup: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [triggerExit, setTriggerExit] = useState(false)

  useEffect(() => {

    if (typeof window !== 'undefined') {
      const hasClosed = localStorage.getItem('toast-dismissed')
      if (hasClosed === 'true') return
    }

    const timer = setTimeout(() => {
      setVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const dismissToast = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('toast-dismissed', 'true')
    }

    // trigger the slingshot animation before fully hiding
    setTriggerExit(true)

    // allow time for animation to finish before unmount
    setTimeout(() => {
      setVisible(false)
      setTriggerExit(false)
    }, 600)
  }

  const animationVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: {
      x: triggerExit ? [0, 100, -500] : -100,
      opacity: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={animationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed bottom-6 left-6 z-50 bg-gradient-to-br from-[#0d0d0d] to-[#100c1a] text-[#e4e4e7] border border-[#3a3a3c] shadow-xl rounded-lg px-5 py-4 text-sm text-center max-w-sm w-full backdrop-blur-sm"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {/* Close Button */}
          <button
            onClick={dismissToast}
            className="absolute top-2 right-3 text-sm text-[#888] hover:text-white transition cursor-pointer"
          >
            ✕
          </button>

          {/* Message */}
          <p className="my-5 leading-snug">
              👋 Just wanted to say hey and welcome... No cookies here though — shame you&apos;d like my welcome email.
            </p>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={dismissToast}
              className="px-4 py-1 border border-[#555] rounded-full text-sm bg-[#0d0d0d] text-white hover:bg-white hover:text-black transition cursor-pointer"
            >
              Accept
            </button>
            <button
              onClick={dismissToast}
              className="px-4 py-1 border border-[#555] rounded-full text-sm text-[#e4e4e7] hover:bg-[#444] hover:text-white transition cursor-pointer"
            >
              I want cookies! 🍪
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ToastPopup
