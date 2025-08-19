'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SiFigma, SiNextdotjs, SiReact, SiShopify, SiTailwindcss } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import Navbar from '@/app/components/Navbar'

const tools = [
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'NextJS', icon: <SiNextdotjs /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Shopify', icon: <SiShopify /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
]

const images = [
  {
    src: '/assets/instylr/instylr-img1.jpg',
    title: 'Concept Prototype'
  },
  {
    src: '/assets/instylr/instylr-img2.jpg',
    title: 'Client Dashboard Concept'
  },
  {
    src: '/assets/instylr/instylr-img3.jpg',
    title: 'Trending Interior Styles',
    description: 'Choose from 20 different interior design styles that will suit your needs.'
  },
  {
    src: '/assets/instylr/instylr-img4.jpg',
    title: 'Customer Photo Upload',
    description: 'Simply take a photo of the room you want to focus on, make sure to get as many corners as possible.'
  },
  {
    src: '/assets/instylr/instylr-img5.jpg',
    title: 'Information Security',
    description: 'Making sure your personal images and information is protected at all times, and we delete photos after scan.'
  },
  {
    src: '/assets/instylr/instylr-img6.jpg',
    title: 'Product Hotspot',
    description: 'Easy to use hotspots that are a staple in online shopping today, simply over over product and add to cart.'
  },
  {
    src: '/assets/instylr/instylr-img7.jpg',
    title: 'Quick, Add All to Cart',
    description: 'Don&apos;t want to go one by one and love the entire look, this gathers all products in the image to purchase easily.'
  },
  {
    src: '/assets/instylr/instylr-img8.jpg',
    title: 'Easy Product Additions',
    description: 'Simple interface to upload product catalog via different file types and train the AI to use these in the redesign.'
  },
  {
    src: '/assets/instylr/instylr-img9.jpg',
    title: 'Simple Page Tool'
  },
  {
    src: '/assets/instylr/instylr-img10.jpg',
    title: 'Footer CTA'
  },
  {
    src: '/assets/instylr/instylr-img12.jpg',
    title: 'Featured Sections'
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
            <div className="text-3xl text-[#ffffff] font-bold uppercase mb-4" role="heading" aria-level={1}>
            AI Interior Design<br />
            Product MVP
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
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">UI/UX Design, Development</p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">OVERVIEW</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              E-commerce is getting stale — I'm aiming to refresh it with simple, powerful tools. Imagine uploading a room photo and getting AI-styled designs with clickable product hotspots, all powered by a trainable AI catalog for big-box stores.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">THE CHALLENGE</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              The main challenge is optimizing AI performance and designing seamless product integration so stores of any size can easily implement it.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">THE GOAL</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              A plug-and-play app for easy store integration, where uploading a .csv or product catalog trains the AI. 3D modeling and AI setup made as simple as uploading files. Lofty goal, I know!
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">RESEARCH</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              Personalization is reshaping e-commerce, and focusing on a customer's actual room with instant visual feedback could strongly drive purchase decisions and full-room makeovers.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">DATA DECISIONS/NEXT STEPS</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              Prioritizing function over form ensures fast, accessible e-commerce experiences across all devices. Inclusive design broadens the audience and boosts user satisfaction.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">CONCLUSION</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              I&apos;m excited to keep building this project — it has the potential to reshape how online stores use AI beyond gimmicks. This could be the next evolution of real-world AI in e-commerce.
              </p>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 w-full">
              <a
                href="https://github.com/moltmanns/instylr-webapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#3affca] rounded-full text-xs text-[#3affca] hover:bg-[#3affca] hover:text-black transition-all duration-200 glow-on-hover w-full sm:w-auto mb-3 sm:mb-0"
              >
                <FaGithub className="text-sm" />
                GitHub Repo
              </a>
              {/* <a
                href="https://mylootvault.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#3affca] rounded-full text-xs text-[#3affca] hover:bg-[#3affca] hover:text-black transition-all duration-200 glow-on-hover w-full sm:w-auto"
              >
                Website Progress
              </a> */}
            </div>
          </motion.div>
        </aside>

        <main className="flex-1 max-h-[calc(100vh-60px)] lg:overflow-y-auto py-10 px-6 space-y-10">
          <div className="space-y-10">
            {[
              [images[0], images[1]],
              [images[2], images[3], images[4]],
              [images[5], images[6], images[7]],
              [images[8]],
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