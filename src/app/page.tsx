"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Custom/Navbar";
import VerticalMarquee from "./Custom/VerticalMarquee";
import SocialProof from "./Custom/SocialProof";
import BottomPopup from "./Custom/BottomPopup";
import FloatingBlobs from "./Custom/FloatingBlobs";

export default function Home() {
  const [theme, setTheme] = useState("matt");

  // Function to detect theme changes
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "matt";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "matt" ? "olivia" : "matt";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Navbar />

      {/* Main Content */}
      <FloatingBlobs />
      <main className="flex px-20 h-screen pt-[60px]">
        <div id="left" className="w-[45%] h-full flex flex-col justify-center">
          <div id="top" className="relative">
            <p className="accented absolute top-[-10] left-[-25]">Iowa’s Finest (Web Designer, Not Corn)</p>
            <h1 className="mb-50">Web Design. UIUX. Product Strategy.</h1>

            <p className="absolute top-86 left-50 accented">
              Whether you're a scrappy startup, a well-oiled<br /> enterprise, or somewhere in between.
            </p>
          </div>

          <div id="bottom">
            <p className="max-w-lg text-base text-[#A6A6A6]">
            And yes, I obsess over the little stuff so you don’t have to<br />(and secretly judge when you don’t).
            </p>

            {/* CTA + Social Proof */}
            <div id="cta-buttons" className="flex items-center gap-6 mt-10">
              {/* CTA Button */}
              <div className="inline-block">
                <button
                  className="text-[#010101] cursor-pointer text-lg font-semibold py-2 px-20 rounded-[50px] border-[2px] bg-[#7d92fe] border-[#000000] shadow-[3px_4px_0px_#000000] hover:shadow-none hover:scale-95 hover:bg-[#4efcf0] transition-all"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  LET'S CHAT
                </button>
              </div>

              {/* Social Proof */}
              <SocialProof />
            </div>
          </div>
        </div>

        <div id="right" className="flex-grow h-full flex flex-col justify-center">
          <VerticalMarquee />
        </div>

        <BottomPopup />
      </main>
    </>
  );
}