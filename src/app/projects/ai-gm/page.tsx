'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SiFigma, SiReact, SiTailwindcss } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import Navbar from '@/app/components/Navbar'

const tools = [
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
]

const images = [
  '/assets/projects/project1-img1.jpg',
  '/assets/projects/project1-img2.jpg',
  '/assets/projects/project1-img3.jpg',
  '/assets/projects/project1-img4.jpg',
  '/assets/projects/project1-img5.jpg',
]

export default function Project1Page() {
  return (
    <div className="bg-[#0D0B0C] min-h-screen">
      <Navbar />

      <div className="relative flex flex-col lg:flex-row pt-[60px] min-h-[calc(100vh-60px)]">
        <aside className="lg:w-[30%] w-full px-6 sm:px-10 lg:px-12 py-10 border-b lg:border-b-0 lg:border-r border-[#222] z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-3xl text-[#ffffff] font-bold uppercase" role="heading" aria-level={1}>
              Project 1 Title<br /> Case Study
            </div>

            <div className="flex flex-wrap gap-3 text-2xl text-[#7efcd2] mb-12">
              {tools.map((tool, i) => (
                <div key={i} title={tool.name}>
                  {tool.icon}
                </div>
              ))}
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">MY ROLE</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
                UI/UX Designer, Developer, Project Lead
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">OVERVIEW</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
                Project 1 description goes here. This is a comprehensive overview of what the project entails and its main objectives.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">THE CHALLENGE</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
                Description of the main challenges faced during this project and how they were approached.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">THE GOAL</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
                The primary goals and objectives that were set for this project and what success looks like.
              </p>
            </div>

            <div className="pt-8">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#3affca] rounded-full text-xs text-[#3affca] hover:bg-[#3affca] hover:text-black transition-all duration-200 glow-on-hover"
              >
                <FaGithub className="text-sm" />
                GitHub Repo
              </a>
            </div>
          </motion.div>
        </aside>

        <main className="flex-1 max-h-[calc(100vh-60px)] lg:overflow-y-auto py-10 px-6 space-y-10">
          <div className="space-y-10">
            {[
              [images[0]],
              [images[1], images[2]],
              [images[3], images[4]],
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
                    : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
                }`}
              >
                {group.map((src, i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden border border-[#2f2f2f] shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`Project 1 Screenshot ${groupIndex}-${i}`}
                      width={1600}
                      height={1000}
                      quality={100}
                      sizes="100vw"
                      className="w-full h-auto object-cover rounded-lg"
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