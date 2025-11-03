import Image from 'next/image';
import React from 'react'

const Imagesection = () => {
  return (
    <div className='w-full '>
      <div className='w-full h-fit'>
        <h1 className='text-xl w-fit md:text-6xl font-extrabold bg-url animate-infiniteScroll2'>Helios</h1>
        <Image 
          src='/images/helioshero1.svg' 
          alt='' width={400} height={300} 
          className='w-full  top-0 z-50 md:h-[831px] object-cover h-[250px]'>

        </Image>

      </div>
    </div>
    
  )
}

export default Imagesection;