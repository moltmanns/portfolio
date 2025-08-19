'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiGrid } from 'react-icons/fi'
import SlideoutMenu from './SlideoutMenu'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const year = new Date().getFullYear()
  if (!mounted) return null

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex items-center justify-between px-4 sm:px-8 lg:px-12 h-[60px] bg-[#0D0B0C] border-b border-[#373D3F] z-50">
        {/* Left: Logo + Year */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/assets/matto2.svg"
              alt="Site Logo"
              width={60}
              height={40}
              className="w-[60px] sm:w-[80px] h-auto"
            />
          </Link>
          <p className="text-xs sm:text-sm text-[#D9D9D9]">© 1990 - {year}</p>
        </div>

        {/* Right: Projects + Menu */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link
            href="/projects"
            aria-label="View Projects"
            className="text-[#ffffff] hover:text-[#4efcf0] transition px-2 sm:px-3 py-1 rounded-full flex items-center"
          >
            <FiGrid className="block sm:hidden text-xl" />
            <span className="hidden sm:inline text-xs sm:text-sm">VIEW PROJECTS</span>
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            className="text-xs sm:text-sm px-3 sm:px-4 py-1 border-2 border-[#0d0d0d] bg-[#ffaedd] text-[#0d0d0d] hover:bg-[#4efcf0] rounded-full transition-all whitespace-nowrap cursor-pointer"
          >
            BORING STUFF
          </button>
        </div>
      </nav>

      {/* Slideout Menu */}
      <SlideoutMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Navbar
