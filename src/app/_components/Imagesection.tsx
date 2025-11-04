import Image from 'next/image'
import React from 'react'

const Imagesection = () => {
  return (
    <div className="relative w-full">
      {/* Helios sliding text section */}
      <div className="absolute top-40 left-0 w-full z-10 pointer-events-none">
        <h1 className="text-xl md:text-8xl w-fit font-extrabold animate-infiniteScroll2 text-black bg-clip-text ">
          Helios
        </h1>
      </div>

      {/* Image section */}
      <div className="w-full h-fit relative top-0 z-20">
        <Image
          src="/images/helioshero1.svg"
          alt="Helios Hero"
          width={400}
          height={300}
          className="w-full md:h-[821px] h-[250px] object-cover"
        />
      </div>
    </div>
  )
}

export default Imagesection;
