'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type Slide = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: '/supply1.svg',
    title: '01',
    subtitle: 'Deck & Engine Materials',
    description:
      'Essential tools and equipment to keep your decks and engines running efficiently.',
  },
  {
    id: 2,
    image: '/supply2.svg',
    title: '02',
    subtitle: 'Waste Oil & Sludge Management',
    description:
      'Safe and compliant removal of sludge and waste oil from vessels',
  },
  {
    id: 3,
    image: '/supply3.svg',
    title: '03',
    subtitle: 'Marine Provisions',
    description:
      'Fresh, frozen, and dry food supplies tailored for every crew’s needs',
  },

  {
    id: 4,
    image: '/supply4.svg',
    title: '04',
    subtitle: 'Lifeboat & Safety Certification',
    description:
      'Professional inspection and certification services for lifeboats and life rafts',
  },

  {
    id: 5,
    image: '/supply5.svg',
    title: '05',
    subtitle: 'Navigation & Electronics',
    description:
      'Maintenance and repair for navigation systems and electronic instruments',
  },

  {
    id: 6,
    image: '/supply6.svg',
    title: '06',
    subtitle: 'General Technical Stores',
    description:
      'All-around supply of deck, engine, saloon items, charts, publications, and other marine essentials',
  },

  {
    id: 7,
    image: '/supply7.svg',
    title: '07',
    subtitle: 'Industrial Chemicals & Gases',
    description:
      'Supply of critical chemicals, Freon, and cylinder refills for oxygen and acetylene',
  },

  {
    id: 8,
    image: '/supply8.svg',
    title: '08',
    subtitle: 'Safety & Nautical Gear',
    description:
      'Anti-piracy items, LSA/FFA gear, and cargo hold cleaning equipment',
  },

  {
    id: 9,
    image: '/supply9.svg',
    title: '09',
    subtitle: 'Mooring & Steel Wire Ropes',
    description:
      'Durable ropes and wire products to support mooring and operational needs',
  },

  {
    id: 10,
    image: '/supply10.svg',
    title: '10',
    subtitle: 'Marine Paints & Cleaning Kits',
    description:
      'High-quality paints and chemicals for maintenance and cargo hold cleaning',
  },

  {
    id: 11,
    image: '/supply11.svg',
    title: '11',
    subtitle: 'Ship System Repairs',
    description:
      'Onboard and dock repairs, including motor rewinds and auxiliary systems',
  },

  {
    id: 12,
    image: '/supply12.svg',
    title: '12',
    subtitle: 'Pilot Ladders & Embarkation Gear',
    description:
      'Premium-grade ladders and embarkation equipment ensuring safety and compliance',
  },
];

const SectionShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [sectionHeight, setSectionHeight] = useState(0);

  // Dynamically set section height so scrolling through all slides keeps the div fixed
  useEffect(() => {
    if (sectionRef.current) {
      setSectionHeight(window.innerHeight * slides.length);
    }
  }, []);

  // Handle scroll position for slide switching
 useEffect(() => {
  const handleScroll = () => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;

    // Before section starts → show first slide
    if (scrollY < sectionTop) {
      setIsFixed(false);
      setActiveIndex(0);
      return;
    }

    // While scrolling through section → fixed
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight - windowH) {
      setIsFixed(true);

      const progress = (scrollY - sectionTop) / (sectionHeight - windowH);
      const newIndex = Math.min(
        slides.length - 1,
        Math.floor(progress * slides.length)
      );
      setActiveIndex(newIndex);
      return;
    }

    // After scrolling past section → show last slide anchored at bottom
    setIsFixed(false);
    setActiveIndex(slides.length - 1);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [sectionHeight]);

 const currentSlide = slides[activeIndex];

// ✅ Guard clause — ensures TypeScript knows it’s safe
if (!currentSlide) return null;

return (
  <section ref={sectionRef} style={{ height: sectionHeight }} className="relative">
  <div
    className={`w-full h-screen flex flex-col md:flex-row items-center justify-center transition-all duration-500 ease-in-out ${
      isFixed ? 'fixed top-0 left-0'
      : activeIndex === slides.length - 1
      ? 'absolute bottom-0 left-0'
      : 'relative'
    }`}
  >
    {/* --- Split Background (Left Yellow / Right Transparent) --- */}
    <div className="absolute inset-0  flex">
      <div className="w-1/2 bg-[#FFFF00]" />  {/* Left half */}
      <div className="w-1/2 bg-transparent" /> {/* Right half */}
    </div>

    {/* --- Background Curves Layer (sits above split bg) --- */}
    <div className="absolute inset-0 bg-[url('/bgcurves.svg')] bg-no-repeat bg-center  [background-size:190%] opacity-90 z-0 pointer-events-none" />

    {/* --- Content Wrapper --- */}
    <div className="relative flex flex-col md:flex-row items-center justify-center w-full h-full z-10">
      
      {/* Left Image Section */}
      <div className="flex-1 h-[60vh] mt-20 sm:mt-0 md:h-[70vh] w-full max-w-[800px] p-2 flex items-center justify-center relative">
        <div className="relative w-[80%] h-[80%] z-20 transition-opacity duration-700">
          <Image
            src={currentSlide.image}
            alt={currentSlide.subtitle}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="flex-1 flex flex-col justify-center ml-4 w-[96%] items-start px-10 bg-transparent h-[60vh] md:h-[70vh] relative z-10">
        <div className='flex flex-col items-start justify-center'>
           <h2 className="text-gray-800 text-lg font-semibold">{currentSlide.title}</h2>
           <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
             {currentSlide.subtitle}
           </h1>
           <p className="text-gray-700 mt-4 max-w-md">{currentSlide.description}</p>
        </div>
        
      </div>
    </div>
  </div>
</section>


);
};

export default SectionShowcase;
