"use client"

import Navbar from "./Custom/Navbar"
import VerticalMarquee from "./Custom/VerticalMarquee"
import SocialProof from "./Custom/SocialProof"
import BottomPopup from "./Custom/BottomPopup"
import FloatingBlobs from "./Custom/FloatingBlobs"

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingBlobs />

      <main className="flex flex-col lg:flex-row px-6 sm:px-8 md:px-16 lg:px-20 min-h-[calc(100vh-60px)]">
        {/* Left Side */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center pt-[60px]">
          <div className="relative">
            {/* Accented top-left */}
            <p className="accented absolute -top-4 -left-6 text-lg sm:text-xl lg:text-2xl">
              Iowa’s Finest (Web Designer, Not Corn)
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[8.75rem] font-bold uppercase mb-16 leading-[0.85em]">
              Web Design. UIUX. Product Strategy.
            </h1>

            <p className="accented absolute top-93 mt-[-28px] left-50 text-base sm:text-lg lg:text-xl">
              Whether you're a scrappy startup,<br />
              a well-oiled enterprise, or somewhere in between.
            </p>
          </div>

          <div className="mt-24 lg:mt-36">
            <p className="max-w-lg text-base text-[#A6A6A6] mb-6">
              And yes, I obsess over the little stuff so you don’t have to<br />
              (and secretly judge when you don’t).
            </p>

            {/* CTA + Social Proof */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-6 w-full">
              {/* CTA Button */}
              <button
                className="w-full sm:w-auto text-[#010101] cursor-pointer text-base sm:text-lg font-semibold py-2 px-8 sm:px-20 rounded-[50px] border-[2px] bg-[#7d92fe] border-[#000000] shadow-[3px_4px_0px_#000000] hover:shadow-none hover:scale-95 hover:bg-[#4efcf0] transition-all"
                style={{ fontFamily: "var(--font-body)" }}
              >
                LET'S CHAT
              </button>

              {/* Social Proof */}
              <SocialProof />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:flex-1 flex items-center justify-center mt-10 lg:mt-0">
          <VerticalMarquee />
        </div>

        <BottomPopup />
      </main>
    </>
  )
}
