'use client'

import React, { useEffect, useState } from 'react'

const FloatingBlobs = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#a192e0] via-[#fef2ff] to-[#c3f7ff] opacity-10 blur-3xl animate-floatAround"
        style={{
          animation: 'floatAround 60s ease-in-out infinite alternate',
          top: '10%',
          left: '10%',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#5eead4] via-[#99f6e4] to-[#ccfbf1] opacity-10 blur-3xl animate-floatAround"
        style={{
          animation: 'floatAround 80s ease-in-out infinite alternate',
          animationDelay: '5s',
          top: '40%',
          left: '60%',
        }}
      />
    </div>
  )
}

export default FloatingBlobs
