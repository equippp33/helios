import Image from 'next/image';
import React from 'react'




const Sec3 = () => {
  return (
    <div className='w-full flex flex-col justify-center h-fit items-center bg-[#e9f4fe]'>
        <div className='bg-gray-400 h-[1px] w-full'></div>
        <div
          className='flex relative h-fit md:h-screen md:px-4 bg-no-repeat bg-[length:90%_auto] bg-[position:center_top] w-[90%] overflow-hidden'
          style={{ backgroundImage: "url('/worldmap.svg')", backgroundSize: 'contain' }}
        >
          {/* Wrapper with relative positioning & full width to clip image */}
          <div className="relative w-full h-[200px] md:h-fit">
              <div
                className="absolute top-0 w-auto flex items-start max-w-[500px] left-0 animate-slideXToFro"
                style={{
                   // Must match your md:h-[550px]
                }}
              >
              <Image
                src="/container.svg"
                alt="container"
                width={700}
                height={550}
                priority
                unoptimized
                className="lg:w-[700px] sm:w-[200px] w-[100px] lg:h-[550px] sm:h-[200px] h-[150px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-10 mt-4 px-4 bg-white lg:h-[200px] h-fit  w-[95%] justify-between items-center">
          <div className='flex flex-col gap-4 w-full sm:w-[250px] h-fit'>
            <div className='flex justify-end w-full px-2'><Image src='/package.svg' alt='package' width={39} height={39} className='  my-4'/></div>
           <h1 className='font-bold px-4 pb-2'>5,450+<br></br>products,<br></br>always in stock</h1>

          </div>

          <div className='flex flex-col gap-4 w-full border-l-2 border-black sm:w-[250px] h-fit'>
            <div className='flex justify-end w-full px-2'><Image src='/circle-half.svg' alt='package' width={39} height={39} className='  my-4'/></div>
           <h1 className='font-bold px-4 pb-2'>Nationwide <br></br>coverage – major & <br></br>minor ports</h1>

          </div>

          <div className='flex flex-col gap-4 w-full border-r-2 border-black sm:w-[250px] h-fit'>
            <div className='flex justify-end w-full px-2'><Image src='/ship-fill.svg' alt='package' width={39} height={39} className='  my-4'/></div>
           <h1 className='font-bold px-4 pb-2'>Round-the-clock <br></br>emergency <br></br>support</h1>

          </div>

          <div className='flex flex-col gap-4 w-full  sm:w-[250px] h-fit'>
            <div className='flex justify-end w-full px-2'><Image src='/space-ship.svg' alt='package' width={39} height={39} className='  my-4'/></div>
           <h1 className='font-bold px-4 pb-2'>Certified expertise<br></br>in marine safety & <br></br>inspections</h1>

          </div>
        </div>

    </div>
  );
}

export default Sec3;