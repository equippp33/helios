import React from 'react';
import Image from 'next/image';
// Import your icons or use placeholder SVGs/icons


const steps = [
  {
    step: "STEP 01",
    title: "Customer-Centric Approach",
    description: "We prioritize understanding and exceeding our clients’ needs at every step.",
    icon: <Image src='/images/userstar.svg' alt='parcel' width={75} height={75} className="" />,
  },
  {
    step: "STEP 02",
    title: "Operational Efficiency",
    description: "Streamlined logistics and rigorous quality control guarantee smooth operations.",
    icon: <Image src='/images/deliveryparcel.svg' alt='parcel' width={75} height={75} className="" />,
    
  },
  {
    step: "STEP 03",
    title: "Punctual Delivery",
    description: "On-time service is our promise to every vessel and port.",
    icon: <Image src='/images/truck.svg' alt='parcel' width={75} height={75} className="" />,
    
  },
  {
    step: "STEP 04",
    title: "Continuous Innovation",
    description: "We constantly enhance our processes and services to stay ahead in the maritime industry.",
    icon: <Image src='/images/hand.svg' alt='parcel' width={75} height={75} className="" />,
  },
];

const Quality = () => {
  return (
    <section className="bg-[#003049] h-fit w-full text-white py-12 px-6">
      <div className="mx-auto mb-10 w-full max-w-[90%] px-4">
        <div className='flex flex-col w-full gap-6 mb-12  '>
          <p className="text-[20px] uppercase text-white">Our Quality Commitment</p>
          <h2 className="text-2xl md:text-[35px] font-semibold text-[#FFFF00] mb-4">Excellence in Every Shipment</h2>
          <p className="text-[20px]   text-white mb-10  mx-auto">
            At Helios Shipping and Trading, we uphold the highest standards in ship chandling and technical supplies,
            ensuring reliability, compliance, and customer satisfaction across every port.
          </p>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          {steps.map(({ step, title, description, icon }) => (
            <div key={step} className="relative group">
              <p className="text-[18px] text-white opacity-70 mb-4 border-b border-gray-500 pb-4">
                {step}
              </p>
              <div className="my-6 ">{icon}</div>
              <h3 className="text-[18px] font-semibold mb-1">{title}</h3>
              <p className="text-[18px] text-white opacity-80">{description}</p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;
