'use client'

import React, { useState } from 'react'

const socialProofImages = [
  {
    src: 'https://placehold.co/48x48',
    testimonial:
      'Matt completely transformed our online presence — web traffic doubled within weeks.',
  },
  {
    src: 'https://placehold.co/48x48',
    testimonial:
      'His UI/UX work is next-level. Clean, intuitive, and just *felt* right.',
  },
  {
    src: 'https://placehold.co/48x48',
    testimonial:
      'We handed Matt a mess — he gave us a brand. And a plan. And a site that actually works.',
  },
  {
    src: 'https://placehold.co/48x48',
    testimonial:
      'Matt’s marketing strategies weren’t just smart — they made us money.',
  },
]

const SocialProof: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex items-center gap-4 relative">
      {/* Social Proof Images */}
      <div className="flex -space-x-4">
        {socialProofImages.map((img, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={img.src}
              alt={`User ${index + 1}`}
              className={`w-12 h-12 rounded-full border-2 border-[#010101] object-cover transition-all duration-200 ease-in-out ${
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

            {/* Chat Bubble */}
            {hoveredIndex === index && (
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 z-10 w-56 bg-white text-black border border-black p-3 rounded-xl shadow-md leading-snug text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {img.testimonial}
                <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-l border-b border-black rotate-315" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Social Proof Text */}
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
