import React from 'react'

const Sec4 = () => {
  return (
    <div className='w-full flex flex-col  p-4 md:p-8 lg:px-16 h-fit bg-[#003751]'>
        <h1 className='my-10 text-white font-bold text-xl md:text-4xl pb-10 border-b-2 border-white'>India&apos;s Premier Marine & Industrial Partner</h1>
        <div className='w-full flex flex-col gap-4 h-fit md:flex-row md:gap-0 justify-between mb-5'>
            <div className='flex w-full md:w-1/2 text-[#FFFF00] text-lg '>Reliable. Efficient. Built for Every Voyage.</div>
            <div className='flex w-full md:w-1/2 text-white text-lg'>Helios Shipping and Trading stands at the forefront of India&apos;s maritime supply industry — delivering over 5,000 premium products and solutions to vessels across every Indian port. From provisions and technical stores to safety gear and essential marine equipment, we ensure your operations stay fully equipped, compliant, and on schedule — every time.</div>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-2 mb-8'>
            <div
              className="relative group w-[95%] group h-80 border border-[#EFFAFF52] text-white p-6 transition-all duration-500 max-sm:bg-[url('/ship.svg')] bg-transparent sm:hover:bg-[url('/ship.svg')] hover:bg-cover hover:bg-center"
            >
              
        
              {/* Text Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Ship Chandling & Provisions</h2>
                </div>
                <p className="text-lg">
                  Dependable ship chandling with fresh supplies, delivered 24/7 to every major port.
                </p>
              </div>
        
              {/* Top right icon box */}
              <a href='#' className="absolute top-0 right-0 w-10 h-10 bg-transparent border-l-2 border-b-2 border-[#EFFAFF52] group-hover:bg-yellow-400 flex items-center justify-center z-20">
                <span className="text-white  text-xl">↗</span>
              </a>
            </div>

            <div
              className="relative group w-[95%] group h-80 border border-[#EFFAFF52] text-white p-6 transition-all duration-500 max-sm:bg-[url('/spares.svg')] bg-transparent sm:hover:bg-[url('/spares.svg')] hover:bg-cover hover:bg-center"
            >
              
        
              {/* Text Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Technical Stores & Spare Parts</h2>
                </div>
                <p className="text-lg">
                 Complete deck, engine, and electrical supplies to ensure your vessel operates flawlessly.
                </p>
              </div>
        
              {/* Top right icon box */}
              <a href='#' className="absolute top-0 right-0 w-10 h-10 bg-transparent border-l-2 border-b-2 border-[#EFFAFF52] group-hover:bg-yellow-400 flex items-center justify-center z-20">
                <span className="text-white  text-xl">↗</span>
              </a>
            </div>

            <div
              className="relative group w-[95%] group h-80 border border-[#EFFAFF52] text-white p-6 transition-all duration-500 max-sm:bg-[url('/systems.svg')] bg-transparent sm:hover:bg-[url('/systems.svg')] hover:bg-cover hover:bg-center"
            >
              
        
              {/* Text Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Safety Systems & Certification</h2>
                </div>
                <p className="text-lg">
                  Certified inspections and servicing to guarantee compliance and protect your crew.
                </p>
              </div>
        
              {/* Top right icon box */}
              <a href='#' className="absolute top-0 right-0 w-10 h-10 bg-transparent border-l-2 border-b-2 border-[#EFFAFF52] group-hover:bg-yellow-400 flex items-center justify-center z-20">
                <span className="text-white  text-xl">↗</span>
              </a>
            </div>

            <div
              className="relative group w-[95%] group h-80 border border-[#EFFAFF52] text-white p-6 transition-all duration-500 max-sm:bg-[url('/mechanical.svg')] bg-transparent sm:hover:bg-[url('/mechanical.svg')] hover:bg-cover hover:bg-center"
            >
              
        
              {/* Text Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Mechanical & Technical Services</h2>
                </div>
                <p className="text-lg " >
                  Professional repair and maintenance, onboard or at port, whenever you need it.
                </p>
              </div>
        
              {/* Top right icon box */}
              <a href='#' className="absolute top-0 right-0 w-10 h-10 bg-transparent border-l-2 border-b-2 border-[#EFFAFF52] group-hover:bg-yellow-400 flex items-center justify-center z-20">
                <span className="text-white  text-xl">↗</span>
              </a>
            </div>

        </div>
    </div>
  )
}

export default Sec4;