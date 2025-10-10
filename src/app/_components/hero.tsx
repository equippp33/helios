'use client'
import React, { useState } from 'react'

type ContentKey = 1 | 2 | 3;

const Hero = () => {
  const [active, setActive] = useState<ContentKey>(1);

  const content: Record<ContentKey, { title: string; subtitle: string; button: string }> = {
    1: {
      title: "India’s Fastest Certified Marine Supplier",
      subtitle:
        "Supplying provisions, technical stores, and safety equipment across all major Indian ports — 24/7, certified, and guaranteed.",
      button: "Request a Quote Now",
    },
    2: {
      title: "Partner with Us Today",
      subtitle:
        " Experience efficient, reliable marine services across all Indian ports, supporting seamless operations and fueling global trade.",
      button: "Partner Now",
    },
    3: {
      title: "Your Marine Logistics Partner ",
      subtitle:
        "Providing comprehensive marine supplies and ship repair services across all major Indian ports. Committed to quality, reliability, and seamless operations.",
      button: "Get Started",
    },
  };
  return (
    <div className='w-full px-8 mt-30 sm:mt-20'>
      
      
      {/* Content */}
      <div className="relative z-10 max-[1400px] px-8">
        <h1 className="text-5xl text-white font-bold mb-6 leading-tight">
          {content[active].title}
        </h1>

        <p className="text-lg font-grotesk text-white mb-8 max-w-2xl">{content[active].subtitle}</p>

        <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition">
          {content[active].button}
        </button>

        {/* Boxes */}
        <div className="flex flex-col sm:flex-row w-full mb-4 gap-6 mt-12">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
             onClick={() => setActive(num as ContentKey)}
              className={`flex sm:flex-col flex-row justify-center items-center border-2 px-8 py-6 gap-2 sm:w-45 text-center transition ${
                active === num
                  ? "bg-white/10 backdrop-blur-md text-white border-white"
                  : "border-white text-white hover:bg-transparent hover:backdrop-blur-sm"
              }`}
            >
              <span className="text-xl font-bold mb-2">
                {num.toString().padStart(2, "0")}
              </span>
              {num === 1 && <p className=''>Get Ship Supplies now</p>}
              {num === 2 && <p className=''>Partner with Us Today</p>}
              {num === 3 && <p className=''>Your Marine Logistics Partner</p>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;