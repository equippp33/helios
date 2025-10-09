import React from 'react';

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
    <div className={`${bgColor} p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1`}>
      <div className="mb-4">
        {icon}
      </div>
      <h2 className={`text-2xl font-semibold mb-3 ${titleColor}`}>{title}</h2>
      <p className={`${descriptionColor}`}>{description}</p>
    </div>
  );
};

const Sec8: React.FC = () => {
  // SVG Icons
  const MarineIcon = (
    // Placeholder for boat icon (similar to a cargo ship or supply boat)
    <svg
      className="w-12 h-12 text-gray-800"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21 12l-7-6m7 6l-7 6m7-6H3m0 0l3.75-2.25M3 12l3.75 2.25M9 6h1.5l-3 6m0 0L9 18h1.5M15 18l-3-6m0 0l3-6"
      />
    </svg>
  );

  const InspectionIcon = (
    // Placeholder for calendar/magnifying glass icon (Inspection & Certification)
    <svg
      className="w-12 h-12 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zm11-4a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  const SupportIcon = (
    // Placeholder for headset icon (24/7 Support)
    <svg
      className="w-12 h-12 text-gray-800"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-blue-600 text-lg font-semibold tracking-wide uppercase mb-2">
            Dependable Marine & Industrial Supplies
          </h3>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            All-in-One Services | <span className="text-teal-600">Swift and Reliable</span> Solutions
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ServiceCard
            icon={MarineIcon}
            title="Marine Provisions"
            description="Top-quality fresh, frozen, and dry provisions, along with bonded goods and technical stores, tailored for every vessel."
            bgColor="bg-red-50"
            titleColor="text-gray-800"
            descriptionColor="text-gray-600"
          />

          <ServiceCard
            icon={InspectionIcon}
            title="Inspection & Certification"
            description="Thorough inspections and certifications for life-saving and navigation equipment, fully compliant with international standards."
            bgColor="bg-teal-500"
            titleColor="text-white"
            descriptionColor="text-teal-100"
          />

          <ServiceCard
            icon={SupportIcon}
            title="24/7 Support"
            description="Our team is available around the clock, including holidays, to ensure seamless service and swift delivery at every port."
            bgColor="bg-yellow-400"
            titleColor="text-gray-800"
            descriptionColor="text-yellow-900"
          />
        </div>
      </div>
    </div>
  );
};

export default Sec8;