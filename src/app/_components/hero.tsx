'use client'
import React, { useState } from 'react'

type ContentKey = 1 | 2 | 3;

const Hero = () => {
  const [active, setActive] = useState<ContentKey>(1);

  const content: Record<ContentKey, { title: string; subtitle: string; button: string; video: string }> = {
    1: {
      title: "India's Fastest Certified Marine Supplier",
      subtitle:
        "Supplying provisions, technical stores, and safety equipment across all major Indian ports — 24/7, certified, and guaranteed.",
      button: "Request a Quote Now",
      video: "/video1.webm",
    },
    2: {
      title: "Partner with Us Today",
      subtitle:
        " Experience efficient, reliable marine services across all Indian ports, supporting seamless operations and fueling global trade.",
      button: "Partner Now",
      video: "/video2.webm",
    },
    3: {
      title: "Your Marine Logistics Partner ",
      subtitle:
        "Providing comprehensive marine supplies and ship repair services across all major Indian ports. Committed to quality, reliability, and seamless operations.",
      button: "Get Started",
      video: "/video1.webm",
    },
  };
  return (
    <div className='relative w-full h-screen px-8 overflow-hidden'>
      {/* Background Video Carousel */}
      <div className="absolute inset-0 z-0">
        <div 
          className="flex w-[300%] h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${(active - 1) * 33.333}%)` }}
        >
          {/* Video 1 */}
          <div className="w-1/3 h-full flex-shrink-0">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/video1.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Video 2 */}
          <div className="w-1/3 h-full flex-shrink-0">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/video2.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Video 3 */}
          <div className="w-1/3 h-full flex-shrink-0">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/video1.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-[1400px] px-8">
        <h1 className="text-5xl text-white font-semibold mb-6 leading-tight tracking-tight">
          {content[active].title}
        </h1>

        <p className="text-lg font-grotesk text-white mb-8 max-w-2xl">{content[active].subtitle}</p>

        <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition w-fit">
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