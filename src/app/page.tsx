'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'
import VerticalMarquee from './components/VerticalMarquee'
import SocialProof from './components/SocialProof'
import BottomPopup from './components/BottomPopup'
import FloatingBlobs from './components/FloatingBlobs'
import VerticalStack from './components/VerticalStack'
import ContactModal from './components/ContactModal'

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <>
      <Navbar />
      <FloatingBlobs />

      <main className="flex flex-col lg:flex-row px-6 sm:px-8 md:px-16 lg:px-20 min-h-[calc(100vh-60px)]">
        {/* Left Side */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center pt-[60px] mt-12 lg:mt-0 mb-8 lg:mb-0">
          <div className="relative">
            {/* Accented top-left */}
            <p className="accented absolute top-[-9] left-[-8] lg:-top-3 lg:left-[-30] text-lg sm:text-xl lg:text-2xl">
              Iowa’s Finest (Web Designer, Not Corn)
            </p>

            <h1 className="text-[6rem] lg:text-[8.75rem] font-bold uppercase mb-16 leading-[0.85em]">
              Web Design. UIUX. Product Strategy.
            </h1>

            <p className="accented absolute bottom-5 right-0 lg:-bottom-0 lg:right-[80] lg:mt-[-32px] text-base sm:text-lg lg:text-xl">
              Whether you're a scrappy startup,<br />
              a well-oiled enterprise, or somewhere in between.
            </p>
          </div>

          <div className="mt-12 lg:mt-36">
            <p className="max-w-lg text-base text-[#A6A6A6] mb-6">
              And yes, I obsess over the little stuff so you don’t have to (and secretly judge when you don’t).
            </p>

            {/* CTA + Social Proof */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-6 w-full sm:justify-start justify-center">
              <button
                onClick={() => setShowContactModal(true)}
                className="w-full sm:w-auto text-[#010101] cursor-pointer text-base sm:text-lg font-semibold py-2 px-8 sm:px-20 rounded-[50px] border-[2px] bg-[#7d92fe] border-[#000000] shadow-[3px_4px_0px_#000000] hover:shadow-none hover:scale-95 hover:bg-[#4efcf0] transition-all"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                LET'S CHAT
              </button>

              {/* Contact Modal */}
              <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />

              {/* Social Proof */}
              <div className="flex justify-center sm:justify-start w-full sm:w-auto">
                <SocialProof />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:flex-1 lg:flex items-center justify-center mt-4 lg:mt-0 hidden">
          <VerticalMarquee />
        </div>
        <div className="w-full lg:hidden flex items-center justify-center mt-4 lg:mt-0">
          <VerticalStack />
        </div>

        <BottomPopup />
      </main>
    </>
  )
}
