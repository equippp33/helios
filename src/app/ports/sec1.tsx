import React  from 'react'


const Sec1 = () => {
  
  return (
    <div className='relative w-full h-screen px-8 overflow-hidden'>
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
      <div className="relative z-10 mx-8 w-full px-8 flex flex-col justify-center h-full">
        <h1 className="text-[58px] text-white font-semibold mb-6 leading-tight">
         Trusted Marine and Industrial<br></br> Support Across India
        </h1>

        <p className="text-[20px] font-grotesk text-white mb-8 w-[90%]">At Helios Shipping and Trading, we provide seamless supplies and services to all major Indian ports.
           From essential provisions to technical support, our dedicated team ensures efficiency, reliability, and excellence at every port we operate.</p>

        <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition w-fit">
          Request a Quote Now
        </button>

       
         
        </div>
      </div>
    
  );
}

export default Sec1;