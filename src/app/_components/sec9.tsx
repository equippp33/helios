import Image from 'next/image';
import React from 'react'

const logos = [
  { src: "/impa.svg", alt: "IMPA" },
  { src: "/iso_.svg", alt: "ISO" },
  { src: "/shipserve.svg", alt: "Shipserve" },
  { src: "/iso.svg", alt: "ISO" },
  { src: "/fssai.svg", alt: "FSSAI" },
];

const Companies = () => {
  return (
    <div className='flex w-[86.5%] px-2 h-fit md:h-[260px]  flex-col gap-4 justify-center items-center rounded-2xl bg-[#F9F9F9] m-4 overflow-hidden'>
      <h1 className='md:text-3xl text-xl md:mb-6 md:mt-4 my-2 font-semibold'>Licenses</h1>
      <div className="w-full overflow-hidden">
        <div className="flex animate-infiniteScroll items-center md:gap-28 gap-8 w-max">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className="w-[100px] h-[100px] object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className="w-[100px] h-[100px] object-contain"
              />
            </div>
          ))}
          {/* Third set for extra smoothness */}
          {logos.map((logo, index) => (
            <div key={`third-${index}`} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className="w-[100px] h-[100px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companies;
