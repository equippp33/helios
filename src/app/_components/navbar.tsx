'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { MenuIcon, PhoneIcon, X } from 'lucide-react'

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className='px-6 fixed top-5 left-0 w-full z-50 bg-transparent flex flex-row justify-between items-center'>
        <div className='w-full max-w-[1400px] flex flex-row justify-between bg-transparent items-center'>
          <Image src="/logo.svg" alt="logo" width={150} height={150} className='object-contain'/>
          <div className='hidden md:flex flex-row gap-4'>
              <div className='flex flex-row gap-6 text-white bg-white/10 backdrop-blur-sm px-6 py-4 mx-4 rounded-full'>
                  <a href="#" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>Home</a>
                  <a href="#" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>About us</a>
                  <a href="#" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>Services</a>
                  <a href="#" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>Infrastructure</a>
                  <a href="#" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>posts we serve</a>
              </div>
              <button className='bg-[#0000FF] text-white flex px-4 items-center justify-center rounded-full hover:bg-[#0000CC] font-semibold gap-1 text-sm'><PhoneIcon size={18}/>Contact us</button>
  
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
                           <a href="#" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>About us</a>
                           <a href="#" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>Services</a>
                           <a href="#" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>Infrastructure</a>
                           <a href="#" className='text-white hover:text-[#FFFF00] font-semibold text-sm'>posts we serve</a>
                           <button className='bg-[#0000FF] text-white flex px-4 items-center justify-center rounded-full hover:bg-[#0000CC] font-semibold gap-1 text-sm'><PhoneIcon size={18}/>Contact us</button>
                         </div>
                       )}
        </div>
    </nav>
  )
}

export default Navbar;