import React from 'react';
// Import your icons or use placeholder SVGs/icons
import { FaUserAlt, FaCogs, FaTruck, FaLightbulb } from 'react-icons/fa';

const steps = [
  {
    step: "STEP 01",
    title: "Customer-Centric Approach",
    description: "We prioritize understanding and exceeding our clients’ needs at every step.",
    icon: <FaUserAlt className="text-yellow-400 text-3xl" />,
  },
  {
    step: "STEP 02",
    title: "Operational Efficiency",
    description: "Streamlined logistics and rigorous quality control guarantee smooth operations.",
    icon: <FaCogs className="text-yellow-400 text-3xl" />,
    active: true, // active step
  },
  {
    step: "STEP 03",
    title: "Punctual Delivery",
    description: "On-time service is our promise to every vessel and port.",
    icon: <FaTruck className="text-yellow-400 text-3xl" />,
  },
  {
    step: "STEP 04",
    title: "Continuous Innovation",
    description: "We constantly enhance our processes and services to stay ahead in the maritime industry.",
    icon: <FaLightbulb className="text-yellow-400 text-3xl" />,
  },
];

const Sec7 = () => {
  return (
    <section className="bg-[#003049] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase text-white opacity-80 mb-2">Our Quality Commitment</p>
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">Excellence in Every Shipment</h2>
        <p className="text-sm md:text-base text-white mb-10 max-w-3xl mx-auto">
          At Helios Shipping and Trading, we uphold the highest standards in ship chandling and technical supplies,
          ensuring reliability, compliance, and customer satisfaction across every port.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          {steps.map(({ step, title, description, icon, active }) => (
            <div key={step} className="relative group">
              <p className="text-xs text-white opacity-70 mb-2 border-b border-gray-500 pb-1">
                {step}
              </p>
              <div className="mb-3">{icon}</div>
              <h3 className="text-sm font-semibold mb-1">{title}</h3>
              <p className="text-xs text-gray-200">{description}</p>

              {/* Highlight underline if active */}
              {active && (
                <div className="absolute top-[22px] left-0 w-full border-b-2 border-blue-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sec7;
