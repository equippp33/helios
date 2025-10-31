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
    <div className='flex w-full  h-fit md:h-[180px] justify-center items-center rounded-2xl bg-white overflow-hidden'>
      <div className="w-full overflow-hidden">
        <div className="flex animate-infiniteScroll items-center gap-28 w-max">
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
