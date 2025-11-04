import Image from 'next/image'
import React from 'react'

const Imagesection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Helios sliding text section */}
      <div className="absolute top-5 md:top-40 left-0 w-full z-10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-infiniteScroll2">
          {Array(10).fill('Helios').map((text, index) => (
            <h1
              key={index}
              className="text-xl md:text-8xl font-extrabold mx-8 text-black"
            >
              {text}
            </h1>
          ))}
        </div>
      </div>

      {/* Image section */}
      <div className="w-full h-fit relative top-0 z-20">
        <Image
          src="/images/helioshero1.svg"
          alt="Helios Hero"
          width={400}
          height={300}
          className="w-full md:h-[781px] h-[250px] object-cover"
        />
      </div>
    </div>
  )
}

export default Imagesection;

