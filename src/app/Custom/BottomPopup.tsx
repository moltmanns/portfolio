'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const BottomPopup: React.FC = () => {
  const [showImage, setShowImage] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Show popup after 10 seconds
    const showTimer = setTimeout(() => {
      setShowImage(true)
      setShowBubble(true)

      // Hide popup after 15 seconds
      const hideTimer = setTimeout(() => {
        setIsExiting(true)

        // Wait for slide-down animation to finish, then fully hide
        setTimeout(() => {
          setShowImage(false)
          setShowBubble(false)
          setIsExiting(false)
        }, 700)
      }, 15000)

      return () => clearTimeout(hideTimer)
    }, 10000)

    return () => clearTimeout(showTimer)
  }, [])

  return (
    <AnimatePresence>
      {showImage && (
        <motion.div
          key="popup"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="fixed bottom-0 right-6 z-40 w-auto h-auto"
        >
          {/* Chat Bubble */}
          {showBubble && (
            <div
              className="absolute -top-7 -left-0 z-10 w-56 bg-white text-black border border-black p-4 rounded-xl shadow-md leading-snug text-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {isExiting
                ? 'ok thanks bye! see you later 👋'
                : 'click on any one of those bad boys to learn more! 😎'}
              <div className="absolute bottom-[-6px] left-[75%] transform -translate-x-1/2 w-3 h-3 bg-white border-l border-b border-black rotate-315" />
            </div>
          )}

          {/* Matt on a T-Rex */}
          <Image
            src="/assets/me-illustrated-riding-a-freaking-trex-baby.webp"
            alt="Matt Oltmanns riding a T-Rex"
            width={300}
            height={250}
            className="w-auto h-auto"
            priority
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BottomPopup
