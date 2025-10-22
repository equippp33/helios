import React  from 'react'


const Sec1 = () => {
  
  return (
    <div className='relative w-full h-screen px-4 md:px-8 overflow-hidden'>
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://images.equippp.global/Video2.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 md:mx-8 w-full px-2 md:px-8 flex flex-col justify-center h-full">
        <h1 className="md:text-[58px] text-2xl w-full text-white font-semibold mb-6 leading-tight">
         Comprehensive Marine and <br></br>Industrial Solutions
        </h1>

        <p className="md:text-[20px] text-sm font-grotesk text-white mb-8 w-[90%]">Coinfusion offers a complete range of solutions for ships and industries alike—provision supply, technical stores, life raft servicing, ship repairs, firefighting systems, and spare parts.
With years of expertise and a network that spans all Indian ports, we deliver quality, efficiency, and peace of mind—so your crew and operations never miss a beat.</p>

        <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition w-fit">
          Request a Quote Now
        </button>

       
         
        </div>
      </div>
    
  );
}

export default Sec1;