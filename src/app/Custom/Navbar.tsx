"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { FaDribbble, FaLinkedin, FaPinterest, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import SlideoutMenu from "./SlideoutMenu";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState("matt");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "olivia" ? "matt" : "olivia";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex items-center justify-between px-12 h-[60px] bg-[#0D0B0C] border-b-[1px] border-[#373D3F] z-50">
        {/* Left Side: Logo & Theme Toggle */}
        <div className="flex items-center space-x-10">
          <Image src="/assets/matto2.svg" alt="Site Logo" width={70} height={56} />
          <p className="text-sm">© 1990 - {new Date().getFullYear()}</p>
        </div>

        {/* Right Side: Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="rounded-full px-4 py-1 border-2 text-sm text-[#0d0d0d] border-[#0d0d0d] bg-[#ffaedd] hover:bg-[#4efcf0] cursor-pointer"
        >
          BORING STUFF
        </button>
      </nav>

      {/* Slideout Menu */}
      <SlideoutMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
