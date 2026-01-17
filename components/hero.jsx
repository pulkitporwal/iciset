import { Montserrat_Alternates } from 'next/font/google';
import React from 'react'

const montserrat_alt = Montserrat_Alternates({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const Hero = () => {
  return (
    <div
      className={`relative w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] bg-[url(/amity-campus.webp)] bg-cover bg-no-repeat bg-center flex items-center justify-center ${montserrat_alt.className}`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50"></div>

      {/* Content */}
      <div className="relative px-4 sm:px-6 flex items-center flex-col gap-y-4 md:gap-y-6 py-2 pb-5">
        <div className='flex items-center justify-between gap-14 mt-5'>
          <img className='w-[100px] md:w-[150px]' src="/iset-logo.jpg" alt="International Conference on Intelligent Systems and Emerging Technologies" />
          <img className='w-[150px] md:w-[200px]' src="/amity-logo.png" alt="Amity University Rajasthan" />
        </div>

        <h1 className='font-bold text-2xl md:text-3xl text-center text-[#005B96] px-10'>
          International Conference on <br />
          Intelligent Systems and Emerging Technologies - (ISET 2026)
        </h1>

        <span className='text-center text-lg md:text-xl text-[#005B96]'>
          Organised By
        </span>

        <h2 className='font-semibold text-2xl text-center text-[#005B96]'>
          IoT (Internet of Things) Center of Excellence - Amity University Rajasthan, Jaipur
        </h2>

        <h2 className='font-semibold text-xl md:text-2xl text-center text-[#005B96]'>
          20<sup>th</sup> & 21<sup>st</sup> April, 2026
        </h2>
      </div>
    </div>

  )
}

export default Hero