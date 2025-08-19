'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const projects = [
  { src: "/assets/projects/flexsteel-website-thumbnail-2.jpg", link: "/projects/flexsteel", title: "Flexsteel Website" },
  { src: "/assets/projects/doobq-app-design.jpg", link: "/projects/doobq", title: "DooBQ Tourism App Design" },
  { src: "/assets/projects/instylr-app-thumbnail.jpg", link: "/projects/instylr", title: "Instylr WebApp" },
  { src: "/assets/projects/lootvault-website-thumbnail.jpg", link: "/projects/lootvault", title: "LootVault WebApp" },
  { src: "/assets/projects/dejurify-saas-thumbnail.jpg", link: "/projects/dejurify", title: "Dejurify SaaS" },
  { src: "/assets/projects/poopit-ecommerce-website-thumbnail.jpg", link: "https://poopitnbrowntown.com/", title: "PoopIt E-Commerce Website", newTab: true },
  { src: "/assets/projects/culbies-website-thumbnail.jpg", link: "https://culbieseventcenter.com/", title: "Culbie's Website", newTab: true },
  { src: "/assets/projects/bridgebr-website-thumbnail.jpg", link: "https://bridgebr.com/", title: "BridgeBR Website", newTab: true },
  { src: "/assets/projects/scm-website-thumbnail.jpg", link: "https://sleepycowmedia.com", title: "Sleepy Cow Media Website" },
]

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-2xl md:text-4xl font-bold mb-10 text-white">
          Explore Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((item, index) => {
            const isInternal = item.link.startsWith('/projects')
            const Wrapper = isInternal ? Link : 'a'

            return (
              <Wrapper
                key={index}
                href={item.link}
                {...(!isInternal ? {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                } : {})}
                className="group block border border-[#2a2a2a] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full h-[280px] bg-black">
                  {isInternal && (
                    <div className="absolute top-4 left-4 flex gap-2 z-10">
                      <div className="bg-[#ffaedd] text-[#0d0d0d] text-xs font-semibold px-3 py-1 rounded-full">
                        Case Study
                      </div>
                      {item.link === "/projects/flexsteel" && (
                        <div className="bg-[#7efcd2] text-[#0d0d0d] text-xs font-semibold px-3 py-1 rounded-full">
                          A.I.
                        </div>
                      )}
                    </div>
                  )}
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                    unoptimized={!item.src.startsWith('/')}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-base text-white group-hover:text-[#4efcf0] transition">
                    {item.title}
                  </h3>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </>
  )
}
