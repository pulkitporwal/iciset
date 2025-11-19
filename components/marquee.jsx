"use client";
import React, { useState } from "react";

export default function InfiniteMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="relative w-screen max-w-full bg-[#FFB900] h-6 overflow-x-hidden flex items-center cursor-pointer"
      onClick={() => setPaused(!paused)}
    >
      <div
        className={`absolute whitespace-nowrap will-change-transform [animation:marquee_50s_linear_infinite] ${
          paused ? "[animation-play-state:paused]" : "[animation-play-state:running]"
        }`}
      >
        <a href="/" className="inline-block text-[#0D2C54] font-semibold text-base">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All accepted and presented papers
          will be published in the conference proceedings by Springer in the
          Algorithms for Intelligent Systems series (Proposal submitted for
          approval).
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All accepted and presented papers
          will be published in the conference proceedings by 
        </a>
      </div>

      {/* Tailwind arbitrary keyframes */}
      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
