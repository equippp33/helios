'use client'
import React  from 'react'


const Sec1 = () => {

  const scrollToContact = () => {
     const contactSection = document.getElementById('contact');
     if (contactSection) {
       contactSection.scrollIntoView({ 
         behavior: 'smooth',
         block: 'start'
       });
     } 
   };
  
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
          <source src="https://images.equippp.global/Video1.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 md:mx-8 w-full px-2 md:px-8 flex flex-col justify-center h-full">
        <h1 className="md:text-[58px] text-2xl w-full text-white font-semibold mb-6 leading-tight">
          Trusted Marine Supplier & <br></br>Ship Chandler in India
        </h1>

        <p className="md:text-[20px] text-sm font-grotesk text-white mb-8 w-[90%]">We take pride in providing clients with a wide range of integrated maritime solutions that make sailing easier. Together with a wider range of products and services, 
            our dedication to providing outstanding customer service will enable us to develop solutions that add value for our clients.</p>

        <button 
          onClick={scrollToContact}
         className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition w-fit">
          Request a Quote Now
        </button>

       
         
        </div>
      </div>
    
  );
}

export default Sec1;