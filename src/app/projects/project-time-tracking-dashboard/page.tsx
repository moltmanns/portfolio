'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SiFigma, SiTailwindcss, SiSupabase, SiVite } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import Navbar from '@/app/components/Navbar'

const tools = [
  { name: 'Vite', icon: <SiVite /> },
  { name: 'Supabase', icon: <SiSupabase /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'Figma', icon: <SiFigma /> },
]

const images = [
  '/assets/dwd/DWD-website-main-img.jpg',
  '/assets/dwd/DWD-case-study-admin-1.jpg',
  '/assets/dwd/DWD-case-study-admin-2.jpg',
  '/assets/dwd/DWD-case-study-user-2.jpg',
  '/assets/dwd/DWD-case-study-user-1.jpg',
]

export default function Project2Page() {
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
              Project QR Time Tracking Dashboard
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
                UI/UX Designer, Developer
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">OVERVIEW</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              The client came to me looking to replace their current time tracking software with a more custom-built process specifically for millwork, and they wanted their users in the shop to be able to download a simple app to scan a QR code tied to the project and input what stage they were in, and start tracking their time from there.  Then all of this info would then be sent to the admin dashboard for admins to keep track of how long each task was taking in the project, attach other invoices, media, etc, needed for the project, all in one place also.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">THE CHALLENGE</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              They had 15 years of project data from their previous software, so they needed a way to import all of that into the new process. So, I set up a client directory, and overall project management, they then wanted a KanBan style board to easily mark across the dashboard, which stage the project was in easily.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">THE GOAL</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              The primary goals were for each project to automatically create a unique QR code and populate project data, then print out a form easily for in-shop users to use when needed, and have all of the project documents live in one place, tied to each project for easy invoices, estimates, budget, etc.
              </p>
            </div>

            <div className="pt-8">
              <a
                href="https://github.com/moltmanns/flowline-time-scribe"
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
                      alt={`Project 2 Screenshot ${groupIndex}-${i}`}
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