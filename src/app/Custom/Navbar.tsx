import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import {
  FaDribbble,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa"
import SlideoutMenu from "./SlideoutMenu"

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState("matt")
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  useEffect(() => {
    setMounted(true)
  }, [])

  const year = new Date().getFullYear()

  if (!mounted) return null

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex items-center justify-between px-12 h-[60px] bg-[#0D0B0C] border-b-[1px] border-[#373D3F] z-50">
        {/* Left Side: Clickable Logo & Theme Toggle */}
        <div className="flex items-center space-x-10">
          <Link href="/" className="cursor-pointer">
            <Image src="/assets/matto2.svg" alt="Site Logo" width={70} height={56} />
          </Link>
          <p className="text-sm">© 1990 - {year}</p>
        </div>

        {/* Right Side: Project Link + Menu Button */}
        <div className="flex items-center space-x-4">
          <Link
            href="/Projects"
            className="rounded-full px-4 py-1 text-sm text-[#ffffff] hover:text-[#4efcf0] transition"
          >
            VIEW PROJECTS
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            className="rounded-full px-4 py-1 border-2 text-sm text-[#0d0d0d] border-[#0d0d0d] bg-[#ffaedd] hover:bg-[#4efcf0] cursor-pointer"
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
