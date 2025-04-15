'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../Custom/Navbar'

const projects = [
  { src: "/assets/projects/flexsteel-website-thumbnail-2.jpg", link: "/Projects/Flexsteel", title: "Flexsteel Website" },
  { src: "https://placehold.co/800x500", link: "https://example.com/2", title: "Placeholder External" },
  { src: "/assets/projects/doobq-app-design.jpg", link: "/Projects/DooBQ", title: "DooBQ App Design" },
  { src: "/assets/projects/instylr-app-thumbnail.jpg", link: "/Projects/Instylr", title: "Instylr App" },
  { src: "https://placehold.co/800x500", link: "https://example.com/5", title: "Another External" },
  { src: "/assets/projects/dejurify-saas-thumbnail.jpg", link: "/Projects/Dejurify", title: "Dejurify SaaS" },
  { src: "/assets/projects/poopit-ecommerce-website-thumbnail.jpg", link: "https://poopitnbrowntown.com/", title: "PoopIt E-Commerce", newTab: true },
  { src: "/assets/projects/culbies-website-thumbnail.jpg", link: "https://culbieseventcenter.com/", title: "Culbies Website", newTab: true },
  { src: "/assets/projects/bridgebr-website-thumbnail.jpg", link: "https://bridgebr.com/", title: "BridgeBR", newTab: true },
]

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-10 text-center tracking-tight">
          Explore Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((item, index) => {
            const isInternal = item.link.startsWith('/Projects')
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
                    <div className="absolute top-4 left-4 bg-[#ffaedd] text-[#0d0d0d] text-xs font-semibold px-3 py-1 rounded-full z-10">
                      Case Study
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
                  <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-[#4efcf0] transition">
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
