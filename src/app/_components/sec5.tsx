import Image from 'next/image';
import React from 'react';

type Offering = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const offerings = [
  {
    id: "01",
    title: "Deck & Engine Materials",
    description: "Essential tools and equipment to keep your decks and engines running efficiently",
    image: "/offering1.svg",
  },
  {
    id: "02",
    title: "Waste Oil & Sludge Management",
    description: "Safe and compliant removal of sludge and waste oil from vessels",
    image: "/sludgemanagement.svg",
  },
  {
    id: "03",
    title: "Marine Provisions",
    description: "Fresh, frozen, and dry food supplies tailored for every crew’s needs",
    image: "/marineprovisions.svg",
  },
  {
    id: "04",
    title: "Lifeboat & Safety Certification",
    description: "Professional inspection and certification services for lifeboats and life rafts",
    image: "/lifeboat.svg",
  },
  {
    id: "05",
    title: "Navigation & Electronics",
    description: "Maintenance and repair for navigation systems and electronic instruments",
    image: "/navigation.svg",
  },
];

const OfferingRow = ({ id, title, description, image }: Offering) => {
  return (
    <div className="group flex items-center bg-gray-50 rounded-lg p-6 mb-4 relative">
      {/* Large Yellow Number */}
      <div className="flex-shrink-0">
        <span className="text-6xl md:text-8xl text-yellow-400 font-semibold">{id}/</span>
      </div>

      {/* Content Section */}
      <div className="flex-1 px-10">
        <h3 className="text-2xl md:text-2xl font-bold text-black mb-2 tracking-tight">{title}</h3>
        <p className="text-base md:text-md text-gray-600 tracking-tight">{description}</p>
      </div>

      {/* Hover Image - shown only on hover */}
      <div className="hidden group-hover:block absolute right-6 top-1/2 -translate-y-1/2 z-10">
        <Image
          width={200}
          height={100}
          src={image}
          alt={title}
          className="w-48 h-24 md:w-56 md:h-28 object-cover rounded-lg shadow-lg transition-opacity duration-300"
        />
      </div>
    </div>
  );
};

const Sec5 = () => {
  return (
    <div className="w-full flex flex-col gap-4 lg:gap-8 mx-auto mb-5 p-6 md:px-16 md:py-8 ">
      <div className="flex flex-col mt-6 md:flex-row justify-between items-center h-fit mb-8">
        <div className='flex flex-col gap-4'>
           <h2 className="text-xl md:text-3xl font-bold">
              <span className="text-black tracking-tight">Explore Our Offerings</span>
           </h2>
           <p className="text-sm md:text-md text-black">
             Complete Marine & Industrial Solutions, Delivered Nationwide
           </p>
        </div>
        
        <button className="mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full">
          View our Offerings
        </button>
      </div>

      <div className="space-y-4">
        {offerings.map((item) => (
          <OfferingRow key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sec5;
