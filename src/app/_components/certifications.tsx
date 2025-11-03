import Image from 'next/image';
import React from 'react'

const Certifications = () => {
  return (
    <div className='flex w-[86.5%] px-2 h-fit md:h-[370px]  flex-col gap-4 justify-center items-center rounded-2xl bg-[#F9F9F9] m-4 overflow-hidden'>
       <h1 className='font-semibold text-2xl md:text-3xl'>Certifications</h1> 
       <div className='flex flex-col w-full md:flex-row justify-around items-center px-4'>
         <Image src='/images/certificate1.svg' alt='certificate 1' width={200} height={300} className='h-[270px] w-[200px]' />
         <Image src='/images/certificate2.svg' alt='certificate 2' width={200} height={300} className='h-[270px] w-[200px]' />
         <Image src='/images/certificate3.svg' alt='certificate 3' width={200} height={300} className='h-[270px] w-[200px]' />

       </div>
        
    </div>
  )
}

export default Certifications;