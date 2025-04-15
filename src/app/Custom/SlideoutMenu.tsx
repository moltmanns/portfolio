'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from './Modal'
import SkillsModal from './SkillsModal'
import AboutMeModal from './AboutMeModal'
import ContactModal from './ContactModal'
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaPinterest,
  FaDribbble,
} from 'react-icons/fa'

export default function SlideoutMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [activeModal, setActiveModal] = useState<null | 'services'>(null)
  const [showSkillsModal, setShowSkillsModal] = useState(false)
  const [showAboutMeModal, setShowAboutMeModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  const openModal = (type: typeof activeModal) => {
    setActiveModal(type)
    onClose()
  }

  const handleOpenSkills = () => {
    setShowSkillsModal(true)
    onClose()
  }

  const handleOpenAbout = () => {
    setShowAboutMeModal(true)
    onClose()
  }

  const handleOpenContact = () => {
    setShowContactModal(true)
    onClose()
  }

  const closeModal = () => setActiveModal(null)

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm"
            onClick={onClose}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 h-full w-[375px] max-w-full bg-[#4efcf0] text-[#0d0d0d] flex flex-col px-8 py-6 border-l border-[#0d0d0d] shadow-[ -15px_0px_5px_rgba(1,1,1,0.1)] z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="rounded-full px-4 py-1 border-2 text-sm ml-auto mb-6 border-[#0d0d0d] bg-[#F2F2F0] text-[#0d0d0d] hover:bg-black hover:text-white shadow-[3px_4px_0px_#010101] hover:shadow-none transition-all cursor-pointer"
              >
                CLOSE
              </button>

              {/* Big Menu Items */}
              <div className="space-y-16 mb-16 flex flex-col">
                <button
                  onClick={handleOpenSkills}
                  className="text-left text-5xl font-black cursor-pointer"
                >
                  SKILLS
                  <span className="menu-accented block text-sm font-normal">
                    I got the fries that will cross your eyes
                  </span>
                </button>

                <button
                  onClick={handleOpenAbout}
                  className="text-left text-5xl font-black cursor-pointer"
                >
                  ABOUT
                  <span className="menu-accented block text-sm font-normal -mt-1">
                    So you want to get to know me ehhh...
                  </span>
                </button>

                <button
                  onClick={handleOpenContact}
                  className="text-left text-5xl font-black cursor-pointer"
                >
                  CONTACT
                  <span className="menu-accented block text-sm font-normal -mt-1">
                    How would you like to reach me?
                  </span>
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-auto">
                <p className="text-sm mb-4 flex justify-center">Follow Me? Maybe?!</p>
                <div className="flex justify-center space-x-8 text-xl mb-4">
                  <a href="https://dribbble.com" target="_blank" rel="noreferrer"><FaDribbble /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                  <a href="https://pinterest.com" target="_blank" rel="noreferrer"><FaPinterest /></a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feature Modals */}
      <SkillsModal isOpen={showSkillsModal} onClose={() => setShowSkillsModal(false)} />
      <AboutMeModal isOpen={showAboutMeModal} onClose={() => setShowAboutMeModal(false)} />
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </>
  )
}
