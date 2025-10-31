'use client'
import React, { useState } from 'react'

type ContentKey = 1 | 2 | 3;

const Hero = () => {
  const [active, setActive] = useState<ContentKey>(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
  const scrollToContact = () => {
     const contactSection = document.getElementById('contact');
     if (contactSection) {
       contactSection.scrollIntoView({ 
         behavior: 'smooth',
         block: 'start'
       });
     }
     setIsMenuOpen(false); // Close mobile menu if open
   };

  const content: Record<ContentKey, { title: string; subtitle: string; button: string; video: string }> = {
    1: {
      title: "WELCOME TO HELIOS",
      subtitle:
        "Helios Shipping and Trading offers offshore and marine services. We have created a network of strong and close business relationships over the years, offering clients with rapid and trustworthy services, high quality products, and always competitive costs. Across all Indian major ports, we provide 24/7 service.",
      button: "Request a Quote Now",
      video: "https://images.equippp.global/Video1.webm",
    },
    2: {
      title: "Navya Logistics: Your Marine Logistics Partner",
      subtitle:
        "Navya Logistics is your dedicated marine logistics partner, specializing in the reliable delivery of critical vessel resources. Our core service includes the supply of bunker fuel and fresh water by dedicated barge, ensuring prompt and efficient service directly to your vessel. We are committed to keeping your operations running smoothly and on schedule.",
      button: "Partner Now",
      video: "https://images.equippp.global/Video2.webm",
    },
    3: {
      title: "Navya Waste and Used Oil Refining and Recycling Industry: Marine Environmental Solutions ♻️",
      subtitle:
        "We specialize in efficient and environmentally responsible sludge removal services for ships. Sludge, a byproduct of fuel oil purification and other onboard processes, can accumulate in tanks and machinery, posing operational and environmental challenges.",
      button: "Get Started",
      video: "https://images.equippp.global/Video3.webm",
    },
  };
  return (
    <div className='relative w-full h-screen md:px-8 px-4 overflow-hidden'>
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
              <source src="https://images.equippp.global/Video1.webm" type="video/webm" />
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
              <source src="https://images.equippp.global/Video2.webm" type="video/webm" />
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
              <source src="https://images.equippp.global/Video3.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full mt-20 flex flex-col justify-center max-w-[900px] md:px-8 px-4">
        <h1 className="md:text-4xl text-2xl text-white font-semibold mb-2 leading-tight tracking-tight">
          {content[active].title}
        </h1>

        <p className="md:text-base text-sm font-grotesk text-white mb-4 max-w-[900px]">{content[active].subtitle}</p>

        <button
         onClick={scrollToContact} 
         className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition w-fit">
          {content[active].button}
        </button>

        {/* Boxes */}
        <div className="flex flex-col sm:flex-row w-full mb-4 gap-4 lg:gap-6 mt-4 md:mt-12">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
             onClick={() => setActive(num as ContentKey)}
              className={`flex sm:flex-col flex-row justify-center items-center border-2 md:px-8 md:py-6 py-4 px-2 gap-2 sm:w-45 text-center transition ${
                active === num
                  ? "bg-white/10 backdrop-blur-md text-white border-white"
                  : "border-white text-white hover:bg-transparent hover:backdrop-blur-sm"
              }`}
            >
              <span className="md:text-xl text-sm font-bold ">
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