'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const socialProofImages = [
  {
    src: '/assets/profilepic1.jpg',
    name: 'Charlotte Cohen',
    title: 'Founder, Willow Digital Studio',
    testimonial: 'Matt completely transformed our online presence — web traffic doubled within weeks.',
  },
  {
    src: '/assets/pixelpine-logo.jpg',
    name: 'Marcus Nguyen',
    title: 'Marketing Director, Pixel & Pine',
    testimonial: 'His UI/UX work is next-level. Clean, intuitive, and just *felt* right.',
  },
  {
    src: '/assets/profilepic3.jpg',
    name: 'Lena Jackson',
    title: 'Creative Lead, Forge Studio',
    testimonial: 'We handed Matt a mess — he gave us a brand. And a plan. And a site that actually works.',
  },
  {
    src: '/assets/profilepic4.jpg',
    name: 'David Kim',
    title: 'CEO, Conversion Works',
    testimonial: "Matt's marketing strategies weren't just smart — they made us money.",
  },
]

const SocialProof: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex items-center gap-4 relative">
      {/* Avatars */}
      <div className="flex -space-x-4">
        {socialProofImages.map((img, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={img.src}
              alt={img.name}
              width={48}
              height={48}
              className={`w-12 h-12 rounded-full border border-[#010101] object-cover transition-all duration-200 ease-in-out ${
                hoveredIndex === index ? 'hover:-translate-y-1' : 'animate-bob'
              } ${
                hoveredIndex !== index
                  ? index === 0
                    ? 'animation-delay-0'
                    : index === 1
                    ? 'animation-delay-300'
                    : index === 2
                    ? 'animation-delay-600'
                    : 'animation-delay-900'
                  : ''
              }`}
            />


            {/* Tooltip */}
            {hoveredIndex === index && (
              <div
                className="absolute -top-32 left-1/2 -translate-x-1/2 z-10 w-64 bg-white text-black border border-black p-3 rounded-xl shadow-md leading-snug text-sm space-y-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {/* Avatar + Name/Title */}
                <div className="flex items-center space-x-3">
                <Image
                    src={img.src}
                    alt={img.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border border-gray-300"
                  />

                  <div>
                    <p className="font-semibold text-[13px]">{img.name}</p>
                    <p className="text-xs text-gray-600">{img.title}</p>
                  </div>
                </div>

                {/* Testimonial */}
                <p className="text-xs mt-1">“{img.testimonial}”</p>

                {/* Bubble tail */}
                <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-l border-b border-black rotate-315" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Label */}
      <p
        className="text-sm text-[#A6A6A6] leading-[1.25em]"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        Trusted with
        <br />
        a few projects!
      </p>
    </div>
  )
}

export default SocialProof
