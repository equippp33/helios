import React from 'react'
import Image from 'next/image'

const Sec2 = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between w-full bg-[#e9f4fe] px-2 md:px-12 py-12'>
      <div className='flex flex-col w-full max-w-[800px] gap-4 px-4 mb-6'>
        <h2 className='bg-[#FFFF00] text-black w-fit rounded-full text-base font-semibold px-4 md:px-6 py-4'>Delivering Excellence at Every Port</h2>
        <h1 className='text-3xl md:text-4xl font-semibold'>India’s Leading Marine Supply Partner</h1>
        <ul className="mt-4 space-y-2 text-gray-700 list-disc px-6">
          <li>
            At Helios Shipping and Trading, we go beyond ship handling — we`&apos;`re
            your complete marine logistics and supply partner.
          </li>
          <li>
            From critical technical equipment to everyday provisions, our team
            ensures on-time delivery, premium quality, and 24/7 service across
            India’s coastline.
          </li>
        </ul>


      </div>
      <Image src="/sec2_ship.svg" alt="ship" width={600} height={300} className='object-contain px-4 py-2'/>

    </div>
  )
}

export default Sec2;