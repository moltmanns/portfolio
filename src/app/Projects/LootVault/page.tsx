'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SiBootstrap, SiFigma, SiTailwindcss } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import Navbar from '@/app/components/Navbar'

const tools = [
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Bootstrap 5', icon: <SiBootstrap /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
]

const images = [
  {
    src: '/assets/lootvault/lootvault-img1.jpg',
    title: 'Concept Prototype #1'
  },
  {
    src: '/assets/lootvault/lootvault-img2.jpg',
    title: 'Concept Prototype #2'
  },
  {
    src: '/assets/lootvault/lootvault-img3.jpg',
    title: 'Weekly Sessions/Current GM',
    description: "As a Dungeon Master running weekly sessions, my players love exploring city life and often stray from the main quest. No matter how much I nudge them back, they're always chasing side quests and asking what's happening in town. It all started when they asked to build their own fort—and now city content is a must."
  },
  {
    src: '/assets/lootvault/lootvault-img4.jpg',
    title: 'Terrain Builder',
    description: "I've spent years crafting physical terrain for our sessions, and I wanted the same level of creativity and customization in our digital tools. With LootVault, I can theme our party's home base, switch out fort styles, and add story-rich flavor that ties directly into our campaign map. It's a visual storytelling boost I didn't know I was missing."
  },
  {
    src: '/assets/lootvault/lootvault-img5.jpg',
    title: 'Whole Family Gaming',
    description: "My daughter wants to join our games now, and having a friendly, accessible interface means the whole family can get involved. Whether it's sorting loot, naming items, or pillaging the vault, everything is intuitive. It's designed to bring people into the game, regardless of age or experience—with UX that respects both seasoned players and newcomers."
  },
  {
    src: '/assets/lootvault/lootvault-img6.jpg',
    title: 'Fort Upgrades/City Life',
    description: 'Build out your stronghold between adventures with themed designs for forts, cities, and guild halls—perfect for downtime worldbuilding and player investment.'
  },
  {
    src: '/assets/lootvault/lootvault-img7.jpg',
    title: 'Easy, Editable Inventory List',
    description: "Quickly add, edit, or remove loot in real-time—no more scribbled notes or forgotten items. Keep your party's treasure organized and ready to go."
  },
  {
    src: '/assets/lootvault/lootvault-img8.jpg',
    title: 'Responsive User Menu',
    description: "A clean, mobile-first interface means you can manage loot, navigate your world, and adjust settings seamlessly whether you're at the table or on the go."
  },
  {
    src: '/assets/lootvault/lootvault-img9.jpg',
    title: 'Inventory Stats/Info',
    description: 'Tap into detailed stats and flavor text for every item. Everything is autosaved and secure, so you never lose track of rare loot or custom homebrew gear.'
  },
  {
    src: '/assets/lootvault/lootvault-img10.jpg',
    title: 'Modern, Secure Signup',
    description: 'Create an account in seconds. Our sleek, no-friction signup flow gets you from login to looting with zero hassle.'
  },
  {
    src: '/assets/lootvault/lootvault-img11.jpg',
    title: 'Easy Login',
    description: 'Fast, reliable access for returning users. Jump back into your inventory with one click and keep your vault secure with modern auth protection.'
  }
]

export default function CaseStudyPage() {
  return (
    <div className="bg-[#0D0B0C] h-screen overflow-y-auto lg:overflow-hidden">
      <Navbar />

      <div className="relative flex flex-col lg:flex-row pt-[60px] min-h-[calc(100vh-60px)]">
        <aside className="lg:w-[30%] w-full px-6 sm:px-10 lg:px-12 py-10 border-b lg:border-b-0 lg:border-r border-[#222] z-10 lg:max-h-[calc(100vh-60px)] lg:overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-3xl text-[#ffffff] font-bold uppercase mb-1" role="heading" aria-level={1}>
              LootVault
            </div>
            <p className='text-sm'>Simplifying Party Inventory &amp; Player-Driven Worldbuilding</p>

            <div className="flex flex-wrap gap-3 text-2xl text-[#7efcd2] mb-12">
              {tools.map((tool, i) => (
                <div key={i} title={tool.name}>
                  {tool.icon}
                </div>
              ))}
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">MY ROLE</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">UI/UX Design, Development</p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">OVERVIEW</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
                A mobile-friendly D&amp;D Loot &amp; City Builder for players and GMs. Manage loot, track party funds, and build upgradeable cities with streamlined navigation and a clean UI.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">THE CHALLENGE</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
                Most tabletop RPGs offer rules for loot and settlements, but tracking them mid-game is a mess. Paper's chaotic, spreadsheets are clunky, and existing tools ignore party loot or city building.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">THE GOAL</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
                This project offers a clean, mobile-friendly tool for tracking loot and building cities. With coin logs and a drag-and-drop builder, it makes inventory and strongholds part of the story—not just bookkeeping.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">RESEARCH</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
                As a longtime D&amp;D player, new GM, and terrain nerd, I am building LootVault to bring hands-on worldbuilding to the screen. It will let players track loot, build cities, and stay immersed in the game.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">DATA DECISIONS/NEXT STEPS</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
                LootVault focuses on speed and usability for smooth gameplay across all devices. Its inclusive design keeps it accessible to all players and GMs, making sessions faster, easier, and more immersive.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">CONCLUSION</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
                LootVault aims to level up tabletop RPGs with immersive, customizable tools for loot, fort-building, and storytelling. It empowers players to shape their world and gives GMs powerful tools to spark creativity.
              </p>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 w-full">
              <a
                href="https://github.com/moltmanns/doobq-mobile-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#3affca] rounded-full text-xs text-[#3affca] hover:bg-[#3affca] hover:text-black transition-all duration-200 glow-on-hover w-full sm:w-auto mb-3 sm:mb-0"
              >
                <FaGithub className="text-sm" />
                GitHub Repo
              </a>
              <a
                href="https://mylootvault.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#3affca] rounded-full text-xs text-[#3affca] hover:bg-[#3affca] hover:text-black transition-all duration-200 glow-on-hover w-full sm:w-auto"
              >
                Website Progress
              </a>
            </div>
          </motion.div>
        </aside>

        <main className="flex-1 max-h-[calc(100vh-60px)] lg:overflow-y-auto py-10 px-6 space-y-10">
          <div className="space-y-10">
            {[ 
              [images[0], images[1]],
              [images[2], images[3], images[4]],
              [images[5], images[6]],
              [images[7], images[8]],
              [images[9], images[10]]
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
                {group.map((img, i) => (
                  <div
                    key={i}
                    className="relative group rounded-lg overflow-hidden border border-[#2f2f2f] shadow-md"
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      width={1600}
                      height={1000}
                      quality={100}
                      sizes="100vw"
                      className="w-full h-auto object-cover transition duration-300 group-hover:brightness-50 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-20">
                      <h3 className="text-lg font-bold text-white mb-1">{img.title}</h3>
                      <p className="text-sm text-gray-300">{img.description}</p>
                    </div>
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
