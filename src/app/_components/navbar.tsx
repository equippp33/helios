'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { MenuIcon, PhoneIcon, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

   const handleDropdownItemClick = () => {
     setIsDropdownOpen(false);
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

   // Close dropdown when clicking outside
   useEffect(() => {
     const handleClickOutside = (event: MouseEvent) => {
       const target = event.target as Element;
       if (!target.closest('.dropdown-container')) {
         setIsDropdownOpen(false);
       }
     };

     if (isDropdownOpen) {
       document.addEventListener('mousedown', handleClickOutside);
     }

     return () => {
       document.removeEventListener('mousedown', handleClickOutside);
     };
   }, [isDropdownOpen]);

  return (
    <nav className={`px-6 fixed top-0 left-0 w-full z-50 flex flex-row justify-between items-center transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        <div className='w-full max-w-full flex flex-row justify-between bg-transparent items-center'>
          <Image src="/logo.svg" alt="logo" width={100} height={100} className='object-contain'/>
          <div className='hidden md:flex flex-row gap-4'>
              <div className={`flex flex-row gap-6 px-6 py-4 mx-4 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'text-black' 
                  : 'text-white bg-white/10 backdrop-blur-sm'
              }`}>
                  <Link href="/" className={`font-semibold text-sm transition-colors ${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-[#FFFF00]'}`}>Home</Link>
                  <a href="/aboutus" className={`font-semibold text-sm transition-colors ${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-[#FFFF00]'}`}>About Us</a>
                  <a href="/services" className={`font-semibold text-sm transition-colors ${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-[#FFFF00]'}`}>Services</a>
                  <a href="/gallery" className={`font-semibold text-sm transition-colors ${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-[#FFFF00]'}`}>Gallery</a>
                  <div className="relative dropdown-container">
                    <button 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`font-semibold text-sm transition-colors flex items-center gap-1 ${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-[#FFFF00]'}`}
                    >
                      Ports We Serve
                      <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[180px] z-50">
                        <Link href="/ports-we-serve" onClick={handleDropdownItemClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                          Ports We Serve
                        </Link>
                        <Link href="/supply" onClick={handleDropdownItemClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                          What We Supply
                        </Link>
                      </div>
                    )}
                  </div>
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
                           <Link href="/ports-we-serve" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>Ports We Serve</Link>
                           <Link href="/supply" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>What We Supply</Link>
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