import React from 'react';
import Image from 'next/image';

// Define the type for a Service card's data
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  titleColor: string;
  descriptionColor: string;
}

// A reusable component for the service card
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, bgColor, titleColor, descriptionColor }) => {
  return (
    <div className={`${bgColor} p-8 rounded-3xl flex flex-col transition duration-300 transform hover:-translate-y-1`}>
      <div className="mb-5 md:mb-30">
        {icon}
      </div>
      <h2 className={`text-2xl font-semibold tracking-tight mb-3 ${titleColor}`}>{title}</h2>
      <p className={`mb-5 ${descriptionColor}`}>{description}</p>
    </div>
  );
};

const Sec8: React.FC = () => {
  // SVG Icons
  const MarineIcon = (
    // Placeholder for boat icon (similar to a cargo ship or supply boat)
    <Image src='/ship1.svg' alt='shipicon' width={90} height={90} className='bg-transparent rounded-2xl'/>
  );

  const InspectionIcon = (
    // Placeholder for calendar/magnifying glass icon (Inspection & Certification)
    <Image src='/plank.svg' alt='shipicon' width={90} height={90} className='bg-transparent rounded-2xl'/>
  );

  const SupportIcon = (
    // Placeholder for headset icon (24/7 Support)
    <Image src='/agent.svg' alt='shipicon' width={90} height={90} className='bg-transparent rounded-2xl'/>
  );

  return (
    <div className="lg:min-h-screen flex justify-center h-fit  py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-[88%] ">
        {/* Header Section */}
        <div className=" mb-12">
          <h3 className="text-[#316CE6] text-md font-semibold tracking-tight mb-2">
            Dependable Marine & Industrial Supplies
          </h3>
          <h1 className="text-4xl font-semibold text-black leading-tight tracking-tight">
            All-in-One Services | Swift and Reliable Solutions
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 h-fit   gap-10">
          <ServiceCard
            icon={MarineIcon}
            title="Marine Provisions"
            description="Top-quality fresh, frozen, and dry provisions, along with bonded goods and technical stores, tailored for every vessel."
            bgColor="bg-[#EDCBCC]"
            titleColor="text-[#B03C41]"
            descriptionColor="text-[#B03C41]"
          />

          <ServiceCard
            icon={InspectionIcon}
            title="Inspection & Certification"
            description="Thorough inspections and certifications for life-saving and navigation equipment, fully compliant with international standards."
            bgColor="bg-[#8CECFA]"
            titleColor="text-[#04515E]"
            descriptionColor="text-[#04515E]"
          />

          <ServiceCard
            icon={SupportIcon}
            title="24/7 Support"
            description="Our team is available around the clock, including holidays, to ensure seamless service and swift delivery at every port."
            bgColor="bg-[#F1E75E]"
            titleColor="text-[#6E670A]"
            descriptionColor="text-[#6E670A]"
          />
        </div>
      </div>
    </div>
  );
};

export default Sec8;