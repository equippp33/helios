'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const images = [
  '/crane.svg',
  '/s2.svg',
  '/s3.svg',
  '/s4.svg',
  '/s5.svg',
  '/s6.svg',
  '/s7.svg',
  '/s8.svg',
] as const;

const textBlocks = [
  {
    key: 'provisions',
    title: 'Ship Chandling & Provisions',
    description: 'Fresh and reliable supplies delivered 24/7 across all major ports.',
    list: [
      'Fresh, frozen & dry provisions',
      'Bonded stores & mineral/drinking water',
      'Daily vessel supply with port-compliant handling',
    ],
  },
  {
    key: 'technical-stores',
    title: 'Technical Stores & Spare Parts',
    description: 'Keep your vessel running smoothly with complete deck, engine, and electrical supplies.',
    list: [
      'Ropes, tools, tarpaulins, lubricants',
      'Filters, pumps, ISSA/IMPA coded spares',
      'Urgent sourcing & delivery support',
    ],
  },
  {
    key: 'safety',
    title: 'Safety Systems & Certification',
    description: 'Ensure crew safety and regulatory compliance with certified inspections and servicing.',
    list: [
      'Lifeboat & life-raft servicing',
      'Fire-fighting equipment inspection & certification',
      'EEBDs, immersion suits, SCBA servicing',
      'Crane & lifting appliance load testing',
    ],
  },
  {
    key: 'mechanical',
    title: 'Mechanical & Technical Services',
    description: 'Expert repair and maintenance, onboard or at port, whenever you need it.',
    list: [
      'Welding & fabrication',
      'HVAC & refrigeration repairs',
      'Navigation & electronic equipment servicing',
      'Electrical works, pump & filter repairs',
    ],
  },
  {
    key: 'sludge',
    title: 'Sludge & Oil Removal',
    description: 'Specialized handling of sludge and waste oil with full MARPOL compliance.',
    list: [
      'Sludge collection & disposal',
      'Waste oil recovery & documentation',
      'Oily water separation & treatment',
    ],
  },
  {
    key: 'environment',
    title: 'Waste & Environmental Services',
    description: 'Environmentally responsible solutions for sustainable port operations.',
    list: [
      'Garbage collection & disposal',
      'Hazardous waste segregation',
      'Environmental compliance documentation support',
    ],
  },
  {
    key: 'logistics',
    title: 'Port Agency & Logistics',
    description: 'Seamless port operations and crew support across India.',
    list: [
      'Launch/crew boat services',
      'Customs & bonded store handling',
      'Local port agency coordination',
      'Offshore service coverage',
    ],
  },
  {
    key: 'emergency',
    title: 'Emergency Support & Ordering',
    description: '24/7 rapid response with instant order processing and tracking.',
    list: [
      '24/7 hotline & WhatsApp support',
      'Instant quote form',
      'PO upload & order tracking',
      'Urgent delivery across ports',
    ],
  },
];

const Section2 = () => {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollDeltaRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollDeltaRef.current += e.deltaY;

      const threshold = 150; // Adjust scroll sensitivity
      if (Math.abs(scrollDeltaRef.current) > threshold) {
        const direction = scrollDeltaRef.current > 0 ? 1 : -1;
        setIsFading(true);
        setTimeout(() => {
          setIndex((prev) => {
            const next = (prev + direction + images.length) % images.length;
            return next;
          });
          setIsFading(false);
        }, 200);
        scrollDeltaRef.current = 0;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  const currentBlock = textBlocks[index]!;

  return (
    <div className="flex flex-col w-[85%] h-fit mx-auto my-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left: Static Header Section */}
        <div className="flex w-full max-w-[600px] flex-col gap-6">
          <h1 className="text-[35px] font-semibold">
            Reliable, Cost-Efficient Solutions for All Maritime Needs
          </h1>
          <button className="flex items-center justify-center bg-blue-500 px-4 py-2 rounded-full w-full max-w-[160px] text-white text-[16px]">
            Contact us
          </button>
        </div>

        {/* Right: Scroll-Triggered Image + Text */}
        <div
          ref={scrollRef}
          className={`flex flex-col items-center justify-center gap-6 rounded-3xl p-4 w-full md:w-[800px] h-fit overflow-hidden transition-opacity duration-500 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Image
            key={`img-${index}`}
            src={images[index]!}
            alt={`image-${index}`}
            width={300}
            height={350}
            className="rounded-3xl object-cover w-full h-[250px] md:h-full"
          />
          <div key={currentBlock.key} className="flex flex-col justify-center items-start w-full h-full text-start px-2 gap-2">
            <h1 className="text-start text-[25px] font-semibold">{currentBlock.title}</h1>
            <p className="text-start text-[18px] px-2">{currentBlock.description}</p>
            <ul className="text-start px-3 list-disc ml-5">
              {currentBlock.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;


