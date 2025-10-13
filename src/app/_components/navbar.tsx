'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { MenuIcon, PhoneIcon, X } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   const scrollToContact = () => {
     const contactSection = document.getElementById('contact');
     if (contactSection) {
       contactSection.scrollIntoView({ 
         behavior: 'smooth',
         block: 'start'
       });
     }
     setIsMenuOpen(false); // Close mobile menu if open
   };

   useEffect(() => {
     const handleScroll = () => {
       const scrollPosition = window.scrollY;
       const heroHeight = window.innerHeight;
       setIsScrolled(scrollPosition > heroHeight * 0.8);
     };

     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);

  return (
    <nav className={`px-6 fixed top-0 left-0 w-full z-50 flex flex-row justify-between items-center transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        <div className='w-full max-w-[1400px] flex flex-row justify-between bg-transparent items-center'>
          <Image src="/logo.svg" alt="logo" width={150} height={150} className='object-contain'/>
          <div className='hidden md:flex flex-row gap-4'>
              <div className={`flex flex-row gap-6 px-6 py-4 mx-4 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'text-black' 
                  : 'text-white bg-white/10 backdrop-blur-sm'
              }`}>
                  <a href="" className={`font-semibold text-sm transition-colors ${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-[#FFFF00]'}`}>Home</a>
                  <a href="" className={`font-semibold text-sm transition-colors ${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-[#FFFF00]'}`}>About Us</a>
                  <a href="" className={`font-semibold text-sm transition-colors ${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-[#FFFF00]'}`}>Services</a>
                  <a href="" className={`font-semibold text-sm transition-colors ${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-[#FFFF00]'}`}>Infrastructure</a>
                  <a href="/ports-we-serve/" className={`font-semibold text-sm transition-colors ${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-[#FFFF00]'}`}>Ports We Serve</a>
              </div>
              <button 
                onClick={scrollToContact}
                className='bg-[#0000FF] text-white flex px-4 items-center justify-center rounded-full hover:bg-[#0000CC] font-semibold gap-1 text-sm transition-colors cursor-pointer'
              >
                <PhoneIcon size={18}/>Contact us
              </button>
          </div>
          <div className='md:hidden z-[50]'>
                         {isMenuOpen ? (
                           <X
                             onClick={() => setIsMenuOpen(false)}
                             className='hover:cursor-pointer hover:border-2'
                             style={{ color:  'white' }}
                           />
                         ) : (
                           <MenuIcon
                             onClick={() => setIsMenuOpen(true)}
                             className='hover:cursor-pointer hover:border-2'
                             style={{ color: 'white' }}
                           />
                         )}
                       </div>
                        {/* Mobile Menu */}
                       {isMenuOpen && (
                         <div className='absolute top-[70px] right-0 bg-white/20  backdrop-blur-sm w-full flex flex-col items-center gap-4 py-4 z-40 md:hidden'>
                           <a href="#" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>Home</a>
                           <a href="#" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>About Us</a>
                           <a href="#" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>Services</a>
                           <a href="#" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>Infrastructure</a>
                           <a href="/ports-we-serve" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>Ports We Serve</a>
                           <button 
                             onClick={scrollToContact}
                             className='bg-[#0000FF] text-white flex px-4 items-center justify-center rounded-full hover:bg-[#0000CC] font-semibold gap-1 text-sm transition-colors cursor-pointer'
                           >
                             <PhoneIcon size={18}/>Contact us
                           </button>
                         </div>
                       )}
        </div>
    </nav>
  )
}

export default Navbar;