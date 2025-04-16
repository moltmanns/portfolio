'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SiFigma, SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import Navbar from '@/app/Custom/Navbar'

const tools = [
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
]

const images = [
  '/assets/doobq/user-flow-img 2.jpg',
  '/assets/doobq/dbqtourism-wireframe-img.jpg',
  '/assets/doobq/concept-prototype-img.jpg',
  '/assets/doobq/ar-app-feature-img.jpg',
  '/assets/doobq/business-profile-img.jpg',
  '/assets/doobq/events-listings-img.jpg',
  '/assets/doobq/quided-tour-img.jpg',
  '/assets/doobq/user-reviews-img.jpg',
  '/assets/doobq/local-recommendations-img.jpg',
  '/assets/doobq/dbqtourism-styleguide-img.jpg',
  '/assets/doobq/dev-handoff-img.jpg',
]

export default function CaseStudyPage() {
  return (
    <div className="bg-[#0D0B0C] text-[#D9D9D9] min-h-screen">
      <Navbar />

      <div className="relative flex pt-[60px] min-h-[calc(100vh-60px)]">

        {/* Left Column */}
        <aside className="w-[30%] min-w-[320px] px-12 py-10 border-r border-[#222] sticky top-[60px] h-[calc(100vh-60px)] overflow-hidden z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div
              className="text-3xl font-bold uppercase"
              role="heading"
              aria-level={1}
            >
              Dubuque Local Tourism<br /> App Design
            </div>

            {/* Tools */}
            <div>
              <div className="flex flex-wrap gap-3 text-2xl text-[#7efcd2] mb-12">
                {tools.map((tool, i) => (
                  <div key={i} title={tool.name}>
                    {tool.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Role */}
            <div>
              <div className="text-sm font-bold uppercase mt-6 text-[#f2f2f2]" role="heading" aria-level={2}>
                MY ROLE
              </div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
                UI/UX Design, Development, Content Strategy
              </p>
            </div>

            {/* Overview */}
            <div>
              <div className="text-sm font-bold uppercase mt-6 text-[#f2f2f2]" role="heading" aria-level={2}>
                OVERVIEW
              </div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              A tourism app that connects users to Dubuque’s local events, businesses, and attractions—helping locals and small businesses better reach each other.
              </p>
            </div>

            {/* Challenge */}
            <div>
              <div className="text-sm font-bold uppercase mt-6 text-[#f2f2f2]" role="heading" aria-level={3}>
                The Challenge
              </div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              Designing for both locals and tourists with varying tech comfort levels, while keeping content fresh and user-submitted info moderated for quality.
              </p>
            </div>

            {/* Goal */}
            <div>
              <div className="text-sm font-bold uppercase mt-6 text-[#f2f2f2]" role="heading" aria-level={3}>
                The Goal
              </div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
                Build a prototype web experience that could serve as both a proof of concept and a
                usable site, with future conversion to a full mobile app. We focused on scrollability,
                speed, and style.
              </p>
            </div>
          </motion.div>

          {/* GitHub Repo Button */}
          <div className="pt-10">
            <a
              href="https://github.com/moltmanns/doobq-mobile-app" // Replace with your actual GitHub repo
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border-1 border-[#3affca] rounded-full text-xs text-[#3affca] hover:bg-[#3affca] hover:text-black transition-all duration-200 glow-on-hover cursor-pointer"
            >
              View GitHub Repo
            </a>
          </div>

        </aside>

        {/* Right Column (Image Stack) */}
<main className="flex-1 max-h-[calc(100vh-60px)] overflow-y-auto py-10 px-6 space-y-10">
  <div className="space-y-10">
    {/* Grouped Layout */}
    {[
      [images[0]], // full width
      [images[1], images[2]], // 2 up
      [images[3], images[4], images[5]], // 3 up
      [images[6], images[7], images[8]], // 3 up
      [images[9], images[10]], // 2 up
    ].map((group, groupIndex) => (
      <motion.div
        key={groupIndex}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
        viewport={{ once: true }}
        className={`grid gap-6 ${
          group.length === 1
            ? 'grid-cols-1'
            : group.length === 2
            ? 'grid-cols-1 sm:grid-cols-2'
            : 'grid-cols-1 sm:grid-cols-3'
        }`}
      >
        {group.map((src, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden border border-[#2f2f2f] shadow-md"
          >
            <Image
              src={src}
              alt={`Screenshot ${groupIndex}-${i}`}
              width={1600}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    ))}
  </div>
</main>

      </div>
    </div>
  )
}
