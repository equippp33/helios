import React from 'react'
import Image from 'next/image'

const Sec2 = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between w-full bg-[#e9f4fe] px-2 md:px-12 py-12'>
      <div className='flex flex-col w-full max-w-[850px] gap-4 md:gap-6 px-4 '>
        <h2 className='bg-[#FFFF00] text-black w-fit rounded-full text-base font-semibold px-4 md:px-6 py-4'>Delivering Excellence at Every Port</h2>
        <h1 className='text-2xl md:text-3xl font-semibold'>Helios Shipping and Trading: Get Ship Supplies Now</h1>
        <p >As a premier marine provision supplier, Helios Shipping and Trading is dedicated to ensuring your vessel is stocked with the best. We maintain 
          the highest level of freshness and quality across all our provisions. Understanding the diverse needs of global crews, we carry a wide range of 
          specialty foods to cater to all nationalities, making us your trusted partner for vital marine supplies.
        </p>


      </div>
      <Image src="/sec2_ship.svg" alt="ship" width={600} height={300} className='object-contain lg:h-[240px] px-4 '/>

    </div>
  )
}

export default Sec2;