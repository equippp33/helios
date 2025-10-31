import Image from 'next/image';
import React from 'react'

const Imagesection = () => {
  return (
    <div className='object-cover w-full'>
        <Image src='/images/helioshero1.svg' alt='' width={400} height={300} className='w-full md:h-[831px] object-cover h-[250px]'/>
    </div>
    
  )
}

export default Imagesection;