"use client"
import React from "react";


export default function InfiniteMarquee() {
  return (
    <div className="relative w-screen max-w-full bg-[#FFB900] h-6 overflow-x-hidden flex items-center">
      <div
        className="absolute whitespace-nowrap will-change-transform animate-marquee"
      >
        <div className="inline-block text-[#0D2C54] font-semibold text-base">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All accepted and presented papers will be published in the conference proceedings by Springer in the Algorithms for Intelligent Systems series (Proposal submitted for approval).&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All accepted and presented papers will be published in the conference proceedings by Springer in the Algorithms for Intelligent Systems series (Proposal submitted for approval).&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All accepted and presented papers will be published in the conference proceedings by Springer in the Algorithms for Intelligent Systems series (Proposal submitted for approval).&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All accepted and presented papers will be published in the conference proceedings by Springer in the Algorithms for Intelligent Systems series (Proposal submitted for approval).&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All accepted and presented papers will be published in the conference proceedings by Springer in the Algorithms for Intelligent Systems series (Proposal submitted for approval).&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All accepted and presented papers will be published in the conference proceedings by Springer in the Algorithms for Intelligent Systems series (Proposal submitted for approval).
        </div>
      </div>

      {/* Custom animation using Tailwind's arbitrary keyframes */}
      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
      `}</style>
    </div>
  );
}

/**
 * Usage example:
 *
 * import SimpleMarquee from "./SimpleMarquee";
 *
 * export default function Page() {
 *   return (
 *     <div>
 *       <SimpleMarquee />
 *     </div>
 *   );
 * }
 */