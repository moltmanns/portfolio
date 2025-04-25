'use client'
import React from 'react'
import Image from 'next/image'

const images = [
  { src: "/assets/projects/flexsteel-website-thumbnail-2.jpg", link: "./Projects/Flexsteel", width: 488, height: 315 },
  { src: "/assets/projects/lootvault-website-thumbnail.jpg", link: "./Projects/LootVault", width: 488, height: 315 },
  { src: "/assets/projects/doobq-app-design.jpg", link: "./Projects/DooBQ", width: 488, height: 455 },
  { src: "/assets/projects/scm-website-thumbnail.jpg", link: "https://sleepycowmedia.com/", width: 488, height: 315, newTab: true },
  { src: "/assets/projects/culbies-website-thumbnail.jpg", link: "https://culbieseventcenter.com/", width: 488, height: 315, newTab: true },
  { src: "/assets/projects/poopit-ecommerce-website-thumbnail.jpg", link: "https://poopitnbrowntown.com/", width: 488, height: 315, newTab: true },
  { src: "/assets/projects/instylr-app-thumbnail.jpg", link: "./Projects/Instylr", width: 488, height: 375 },
  { src: "/assets/projects/adamsarch-website-thumbnail.jpg", link: "https://simpleswitchdoor.com/", width: 488, height: 315, newTab: true },
  { src: "/assets/projects/bridgebr-website-thumbnail.jpg", link: "https://bridgebr.com/", width: 488, height: 315, newTab: true },
  { src: "/assets/projects/dejurify-saas-thumbnail.jpg", link: "./Projects/Dejurify", width: 488, height: 405 },
]

const VerticalStack: React.FC = () => {
  const renderImage = (item: any, index: number) => {
    const isInternal = item.link.startsWith("./")
    return (
      <a
        key={`stacked-${index}`}
        href={item.link}
        target={item.newTab ? "_blank" : "_self"}
        rel={item.newTab ? "noopener noreferrer" : undefined}
        className="marquee-item block p-0 m-0"
        style={{ height: `${item.height}px` }}
      >
        <div className="relative w-full h-full">
          {isInternal && (
            <div className="absolute top-4 left-4 border border-black text-black text-[10px] px-2 py-1 rounded-full bg-white z-10">
              Case Study
            </div>
          )}
          <Image
            src={item.src}
            alt={`stacked-project-${index}`}
            width={item.width}
            height={item.height}
            className="object-cover w-full h-full transition duration-300 group-hover:brightness-90"
            priority={index < 5}
            unoptimized={!item.src.startsWith('/') && !item.local}
          />
        </div>
      </a>
    )
  }

  return (
    <div className="flex flex-col gap-6 items-center px-0 py-6">
      {images.map((item, index) => renderImage(item, index))}
    </div>
  )
}

export default VerticalStack