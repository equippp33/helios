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
    image: "/offering1.svg",
  },
  {
    id: "03",
    title: "Marine Provisions",
    description: "Fresh, frozen, and dry food supplies tailored for every crew’s needs",
    image: "/offering1.svg",
  },
  {
    id: "04",
    title: "Lifeboat & Safety Certification",
    description: "Professional inspection and certification services for lifeboats and life rafts",
    image: "/offering1.svg",
  },
  {
    id: "05",
    title: "Navigation & Electronics",
    description: "Maintenance and repair for navigation systems and electronic instruments",
    image: "/ship.svg",
  },
];

const OfferingRow = ({ id, title, description, image }: Offering) => {
  return (
    <div className="group flex justify-between  items-start border-t border-gray-300 py-6 relative">
      <div className="flex items-start gap-4 md:gap-14">
        <span className="text-4xl md:text-6xl text-yellow-400 font-semibold w-16">{id}/</span>
        <div className='flex flex-col gap-2'>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm md:text-base text-gray-600">{description}</p>
        </div>
      </div>

      {/* Hover Image - shown only on hover */}
      <div className="hidden group-hover:block absolute right-0 top-1/2 -translate-y-1/2">
        <img
          src={image}
          alt="Preview"
          className="w-40 h-20 object-cover rounded shadow-lg transition-opacity duration-300"
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
              <span className="text-black">Explore Our Offerings</span>
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
