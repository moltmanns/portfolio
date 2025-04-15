'use client'
import React from 'react'
import Image from 'next/image'

const images = [
  { src: "/assets/projects/flexsteel-website-thumbnail-2.jpg", link: "./Projects/Flexsteel", width: 488, height: 315 },
  { src: "https://placehold.co/488x315", link: "https://example.com/2", width: 488, height: 315 },
  { src: "/assets/projects/doobq-app-design.jpg", link: "./Projects/DooBQ", width: 488, height: 455 },
  { src: "/assets/projects/instylr-app-thumbnail.jpg", link: "./Projects/Instylr", width: 488, height: 375 },
  { src: "https://placehold.co/488x315", link: "https://example.com/5", width: 488, height: 315 },
]

const images2 = [
  { src: "/assets/projects/dejurify-saas-thumbnail.jpg", link: "./Projects/Dejurify", width: 488, height: 405 },
  { src: "/assets/projects/poopit-ecommerce-website-thumbnail.jpg", link: "https://poopitnbrowntown.com/", width: 488, height: 315, newTab: true },
  { src: "/assets/projects/culbies-website-thumbnail.jpg", link: "https://culbieseventcenter.com/", width: 488, height: 315, newTab: true },
  { src: "/assets/projects/bridgebr-website-thumbnail.jpg", link: "https://bridgebr.com/", width: 488, height: 315, newTab: true },
  { src: "https://placehold.co/488x315", link: "https://example.com/5", width: 488, height: 315 },
]

const VerticalMarquee: React.FC = () => {
  const renderImage = (item: any, index: number, direction: 'up' | 'down') => {
    const isInternal = item.link.startsWith("./")
    return (
      <a
        key={`${direction}-${index}`}
        href={item.link}
        target={item.newTab ? "_blank" : "_self"}
        rel={item.newTab ? "noopener noreferrer" : undefined}
        className="marquee-item block"
        style={{ width: `${item.width}px`, height: `${item.height}px` }}
      >
        <div className="relative w-full h-full">
          {isInternal && (
            <div className="absolute top-4 left-4 border-1 border-[#0d0d0d] text-[#0d0d0d] text-[10px] px-2 py-1 rounded-full z-10">
              Case Study
            </div>
          )}
          <Image
            src={item.src}
            alt={`scrolling-${direction}-${index}`}
            width={item.width}
            height={item.height}
            className="object-cover"
            priority={index < 5}
            unoptimized={!item.src.startsWith('/') && !item.local}
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
