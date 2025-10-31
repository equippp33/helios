'use client';

import React from 'react';
import Image from 'next/image';

const images = [
  '/images/crane.svg',
  '/images/s2.svg',
  '/images/s3.svg',
  '/images/s4.svg',
  '/images/s5.svg',
  '/images/s6.svg',
  '/images/s7.svg',
  '/images/s8.svg',
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
  return (
    <div className="flex flex-col w-[85%]   h-fit mx-auto my-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left: Static Header Section */}
        <div className="flex w-full max-w-[600px] flex-col gap-6">
          <h1 className="text-4xl font-semibold tracking-tight">
            Reliable, Cost-Efficient Solutions for All Maritime Needs
          </h1>
          <button className="flex items-center justify-center bg-blue-500 px-4 py-2 rounded-full w-full max-w-[160px] text-white text-[16px]">
            Contact us
          </button>
        </div>

        {/* Right: Scrollable Text Blocks */}
        <div className="w-full md:w-[800px] h-[530px] overflow-y-scroll scrollbar-hide">
          <div className="space-y-8 pr-4">
            {textBlocks.map((block, index) => (
              <div key={block.key} className="flex flex-col gap-6 p-6 bg-gray-50 rounded-3xl">
                <Image
                  src={images[index]!}
                  alt={block.title}
                  width={300}
                  height={250}
                  className="rounded-3xl object-cover w-full h-[250px]"
                />
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold tracking-tight">{block.title}</h2>
                  <p className="text-[18px] text-gray-700">{block.description}</p>
                  <ul className="list-disc ml-5 space-y-1">
                    {block.list.map((item, i) => (
                      <li key={i} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;


