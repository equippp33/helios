import React from 'react'
import Image from 'next/image'

const Ourmission = () => {
  return (
    <div className='w-full justify-center items-center flex flex-col px-8 mt-10'>
        <div className='w-[90%] flex flex-col gap-4'>
            <h1 className='text-[30px] font-semibold '>Our Mission</h1>
            <div className='w-full flex flex-col md:flex-row gap-4 mb-4 border-t-2 items-start border-gray-300 justify-between py-4 '>
                <Image src="/m1.svg" alt="mission1" width={700} height={500} className='object-contain'/>
                <p className='text-[22px] text-justify w-full max-w-[700px] px-4 '>To deliver dependable, cost-effective, and timely marine supply and technical services — while upholding integrity, safety, and customer satisfaction across the maritime industry.</p>

            </div>

            <h1 className='text-[30px] font-semibold '>Ship chandling& technical supplies</h1>
            <div className='w-full flex flex-col md:flex-row gap-4 mb-4 border-t-2 items-start border-gray-300 justify-between py-4 '>
                <Image src="/m2.svg" alt="mission2" width={700} height={500} className='object-contain'/>
                <p className='sm:text-[22px] text-[20px] text-justify w-full max-w-[700px] px-4 '>Helios shipping & trading offers all kinds of goods to all kinds 
                    of vessels and offshore areas through a dependable network that is manned by highly skilled workers that are knowledgeable about 
                    the local market in an economical and effective way.</p>

            </div>

            <h1 className='text-[30px] font-semibold '>Desludging & used oils management</h1>
            <div className='w-full flex flex-col md:flex-row gap-4 mb-4 border-t-2 items-start border-gray-300 justify-between py-4 '>
                <Image src="/m3.svg" alt="mission3" width={700} height={500} className='object-contain'/>
                <p className='text-[22px] text-justify w-full max-w-[700px] px-4 '>We offer desludging services. To guarantee that the service is of the necessary Caliber, 
                    our staff has years of experience in the desludging industry. Sludge Oil Slop can safely and successfully
                     remove ship slop oils thanks to our experience with environmental policies of waste oil minimization and recovery, frequently resulting 
                     in financial rewards for the ship owner. We have everything we need to collect the slop oil, transport it for safe disposal, and use our 
                     organic waste oil treatment plant to turn it into a product that can be used.</p>

            </div>

        </div>

    </div>
  )
}

export default Ourmission;