'use client'
import React, {useState} from 'react'
import Image from 'next/image' 
import { PlusCircleIcon } from 'lucide-react';

const Sec6 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Tracks which item is open

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I Enroll?",
      answer: "You can enroll by visiting our website and selecting the course you're interested in. Then follow the checkout process."
    },
    {
      question: "Do I get Access to previous Session recordings?",
      answer: "Yes, all enrolled students get lifetime access to previous session recordings via our learning portal."
    }
    
  ];


  return (
    <div className='w-full bg-white flex flex-col gap-6 p-6 md:px-16 md:gap-8'>
        <h1 className='text-2xl md:text-3xl w-full font-bold tracking-tight mt-4 '>Reliable Ship Chandlers & Maritime Specialists</h1>
        <div className='flex flex-col lg:flex-row items-center justify-between w-full border-t-2 mt-4 mb-6 border-gray-400 gap-4'>
            <div className='flex flex-col gap-6 mt-8'>
                <h2 className='text-[#316CE6] text-xl font-semibold'>Redefining Marine Supply and Support</h2>
                <Image src='/cargo.svg' alt='cargo' width={400} height={400} className='w-full md:w-[542px] h-auto'/>

            </div>

            <div className='flex flex-col w-full md:max-w-[50%] mt-20 gap-12 '>
                <p className='text-gray-600 text-lg md:text-lg'>At Helios Shipping and Trading, we provide marine and industrial supplies, including provisions, technical stores, and round-the-clock support at all major Indian ports.</p>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-row gap-4'>
                        <Image src='/shipicon.svg' alt='shipicon' width={60} height={60} className='bg-[#316CE6] rounded-2xl'/>
                        <div className='flex flex-col gap-1'>
                            <h3 className='font-semibold text-lg'>Comprehensive Services</h3>
                            <p className='text-black text-sm md:text-base'>Everything from provisions to technical support in one place</p>

                        </div>

                    </div>
                    <div className='flex flex-row gap-4'>
                        <Image src='/shipicon2.svg' alt='shipicon' width={60} height={60} className='bg-[#316CE6] rounded-2xl'/>
                        <div className='flex flex-col gap-1'>
                            <h3 className='font-semibold text-lg'>Nationwide Coverage</h3>
                            <p className='text-black text-sm md:text-base'>Seamless delivery and service at all Indian ports.</p>

                        </div>

                    </div>

                </div>
            </div>

        </div>
        <div className='flex w-full items-center px-2 flex-col gap-4'>
          {faqData.map((item, index) => (
            <div key={index} className='w-full flex flex-col h-fit border-t-2 border-gray-300   bg-white  '>
              <div className='w-full '>
                {/* Header */}
                <div 
                  className='flex w-full  pt-2 h-[80px] justify-between items-center px-6 '
                  onClick={() => toggle(index)}
                >
                <h1 className='text-base md:text-xl font-[500] px-4'>{item.question}</h1>
                <PlusCircleIcon
                  
                  
                  width={25}
                  height={25}
                  className={`text-blue-500 bg-gray-300/50 rounded-full transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''} w-[15px] h-[15px] md:w-[25px] md:h-[25px]`}
                />
              </div>
             {/* Expandable Answer */}
             {openIndex === index && (
               <div  className="px-10 pb-4 text-sm text-gray-700">
                 {item.answer}
               </div>
             )}
               
             </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Sec6;