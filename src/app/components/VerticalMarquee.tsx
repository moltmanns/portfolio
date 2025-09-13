'use client'
import React from 'react'
import Image from 'next/image'

interface MarqueeImage {
  src: string
  link: string
  width: number
  height: number
  newTab?: boolean
}

const images = [
  { src: "/assets/projects/flexsteel-website-thumbnail-2.jpg", link: "/projects/flexsteel", width: 488, height: 315 },
  { src: "/assets/projects/lootvault-website-thumbnail.jpg", link: "/projects/lootvault", width: 488, height: 315 },
  { src: "/assets/projects/doobq-app-design.jpg", link: "/projects/doobq", width: 488, height: 455 },
  { src: "/assets/projects/scm-website-thumbnail.jpg", link: "https://sleepycowmedia.com/", width: 488, height: 315, newTab: true  },
  { src: "/assets/projects/culbies-website-thumbnail.jpg", link: "https://culbieseventcenter.com/", width: 488, height: 315, newTab: true },
]

const images2 = [
  { src: "/assets/projects/poopit-ecommerce-website-thumbnail.jpg", link: "https://poopitnbrowntown.com/", width: 488, height: 315, newTab: true },
  { src: "/assets/projects/instylr-app-thumbnail.jpg", link: "/projects/instylr", width: 488, height: 375 },
  { src: "/assets/projects/adamsarch-website-thumbnail.jpg", link: "https://simpleswitchdoor.com/", width: 488, height: 315, newTab: true },
  { src: "/assets/projects/bridgebr-website-thumbnail.jpg", link: "https://bridgebr.com/", width: 488, height: 315, newTab: true },
  { src: "/assets/projects/pps-thumbnail.jpg", link: "/projects/pps-webapp", width: 488, height: 405 },
]

const VerticalMarquee: React.FC = () => {
  const renderImage = (item: MarqueeImage, index: number, direction: 'up' | 'down') => {
    const isInternal = item.link.startsWith("/projects")
    return (
      <a
        key={`${direction}-${index}`}
        href={item.link}
        target={item.newTab ? "_blank" : "_self"}
        rel={item.newTab ? "noopener noreferrer" : undefined}
        className="marquee-item block p-[10px]"
        style={{ width: `${item.width}px`, height: `${item.height}px` }}
      >
        <div className="relative w-full h-full">
          {isInternal && (
            <div className="absolute top-4 left-4 flex gap-2 z-10">
              <div className="border-1 border-[#0d0d0d] text-[#0d0d0d] text-[10px] px-2 py-1 rounded-full bg-white/90">
                Case Study
              </div>
              {item.link === "/projects/flexsteel" && (
                <div className="border-1 border-[#0d0d0d] text-[#0d0d0d] text-[10px] px-2 py-1 rounded-full bg-[#7efcd2]">
                  A.I.
                </div>
              )}
            </div>
          )}
          <Image
            src={item.src}
            alt={`scrolling-${direction}-${index}`}
            width={item.width}
            height={item.height}
            className="object-cover"
            priority={index < 5}
            unoptimized={!item.src.startsWith('/')}
          />

        </div>
      </a>
    )
  }
  

  return (
    <div className="flex gap-4 overflow-hidden h-screen">
      {/* Upward Scrolling Marquee */}
      <div className="relative w-full overflow-visible">
        <div className="marquee-scroll marquee-up">
          {[...images, ...images].map((item, index) =>
            renderImage(item, index, 'up')
          )}
        </div>
      </div>

      {/* Downward Scrolling Marquee */}
      <div className="relative w-full overflow-visible">
        <div className="marquee-scroll marquee-down">
          {[...images2, ...images2].map((item, index) =>
            renderImage(item, index, 'down')
          )}
        </div>
      </div>
    </div>
  )
}

export default VerticalMarquee
