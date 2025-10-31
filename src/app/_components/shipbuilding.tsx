'use client'
import React, {useState} from 'react'
import Image from 'next/image' 
import { PlusCircleIcon } from 'lucide-react';

const Shipbuilding = () => {
  


  return (
    <div className='w-full bg-white flex md:mb-10 flex-col gap-6 p-6 md:px-16 md:gap-8'>
        <h1 className='text-2xl md:text-3xl lg:mt-20 w-full text-[#316CE6] font-semibold tracking-tight mt-4 '>Ship Building & Repairs</h1>
        <p>At Helios Shipping and Trading, we provide marine and industrial supplies, including provisions, technical stores, and round-the-clock support at all major Indian ports.</p>
        <div className='flex flex-col md:flex-row md:my-6 my-4  justify-between items-center'>
          <Image src='/images/g12.jpg' alt='shipbuilding' width={400} height={300} className='object-contain md:h-[300px] '/>
          <Image src='/images/g17.jpg' alt='shipbuilding' width={400} height={300} className='object-contain md:h-[300px] '/>
          <Image src='/images/g14.jpg' alt='shipbuilding' width={400} height={300} className='object-contain md:h-[300px] '/>

        </div>
    </div>
  )
}

export default Shipbuilding;