import { Montserrat_Alternates } from 'next/font/google';
import React from 'react'

const montserrat_alt = Montserrat_Alternates({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const Hero = () => {
  return (
    <div className={`w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] bg-[url(/bg.svg)] bg-cover bg-no-repeat bg-center flex items-center justify-center ${montserrat_alt.className}`}>
        <div className='px-4 sm:px-6 flex items-center flex-col gap-y-4 md:gap-y-6'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-3xl text-center text-[#005B96] px-10'>International Conference on <br />Intelligent Systems and Emerging Technologies - (ISET 2026)</h1>
            <span className='text-center text-lg md:text-xl text-[#005B96]'>Organised By</span>
            <h2 className='font-semibold text-2xl md:text-3xl text-center text-[#005B96]'>Amity University Jaipur, Rajasthan</h2>
            <h2 className='font-semibold text-xl md:text-2xl text-center text-[#005B96]'>20<sup>th</sup> & 21<sup>st</sup> April, 2026</h2>
        </div>
    </div>
  )
}

export default Hero