import React from 'react'
import Image from 'next/image'

const ImageSection = () => {
  return (
    <div className='flex flex-col w-full mx-auto px-2 py-2 my-6 gap-2'>
        <div className='flex flex-row flex-wrap justify-center items-center mt-8 lg:flex-row gap-2'>
            <Image src="/g1.svg" alt="gallery1" width={800} height={400} className='w-full h-[150px] md:h-[500px] object-cover lg:max-w-[800px] ' />
            <Image src="/g2.svg" alt="gallery1" width={600} height={400} className='w-full h-[150px] md:h-[500px] object-cover lg:max-w-[300px] ' />
            <Image src="/g3.svg" alt="gallery1" width={600} height={400} className='w-full h-[150px] md:h-[500px] object-cover lg:max-w-[300px] ' /> 
        </div>

        <div className='flex flex-row flex-wrap w-full justify-center items-center  lg:flex-row gap-2'>
            <Image src="/g4.svg" alt="gallery1" width={400} height={300} className='w-full h-[150px] md:h-[300px] object-cover lg:max-w-[400px] ' />
            <Image src="/g5.svg" alt="gallery1" width={200} height={300} className='w-full h-[150px] md:h-[300px] object-cover lg:max-w-[200px] ' />
            <Image src="/g6.svg" alt="gallery1" width={200} height={300} className='w-full h-[150px] md:h-[300px] object-cover lg:max-w-[200px] ' /> 
             <Image src="/g7.svg" alt="gallery1" width={600} height={300} className='w-full h-[150px] md:h-[300px] object-cover lg:max-w-[600px] ' />
        </div>

        <div className='flex flex-row flex-wrap w-full justify-center items-center mb-8 lg:flex-row gap-2'>
            <Image src="/g8.svg" alt="gallery1" width={500} height={300} className='w-full h-[150px] md:h-[300px] object-cover lg:max-w-[400px] ' />
            <Image src="/g9.svg" alt="gallery1" width={300} height={300} className='w-full h-[150px] md:h-[300px] object-cover lg:max-w-[300px] ' />
            <Image src="/g10.svg" alt="gallery1" width={500} height={300} className='w-full h-[150px] md:h-[300px] object-cover lg:max-w-[400px] ' /> 
             <Image src="/g11.svg" alt="gallery1" width={300} height={300} className='w-full h-[150px] md:h-[300px] object-cover lg:max-w-[300px] ' />
        </div>

    </div>
  )
}

export default ImageSection;