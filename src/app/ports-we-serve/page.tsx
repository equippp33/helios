'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Contact from '../_components/contact';
import Navbar from '../_components/navbar';
import Hero from '../_components/hero';

interface PortData {
  id: string;
  name: string;
  image: string;
  address: string;
  phone: string;
  email: string;
}

const portData: PortData[] = [
  { id: 'chennai', name: 'Chennai Port', image: '/ports/portimg.png', address: 'No. 18, 2nd Floor, 1st Main Road, Rajaji Avenue,Valasaravakkam, Chennai - 600 087', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'mumbai', name: 'Mumbai Port', image: '/ports/portimg.png', address: 'Paresh Building, Opposite Heera Panna, Haji Ali, 4-a, Bhulabhai Desai Marg, Mumbai, Maharashtra 400026', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'kolkata', name: 'Kolkata Port', image: '/ports/portimg.png', address: '#145 B, Sarat Bose Rd, Hazra, Kalighat, Kolkata, West Bengal 700026', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'cochin', name: 'Cochin Port', image: '/ports/portimg.png', address: 'No.31/652h, St. Prtric Square, Sahodaran Ayyappan Rd, Vyttila, Ernakulam, Kerala 682019', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'bangalore', name: 'Bangalore', image: '/ports/portimg.png', address: 'No 57, 13th Cross, Baldwins Road, Koramangala, Bengaluru, Karnataka - 560030', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'hyderabad', name: 'Hyderabad', image: '/ports/portimg.png', address: '5th Floor, Unispace, Vaishnavi\'s Cynosure, Gachibowli, Telecom Nagar Extension, Hyderabad, Telangana 500 032', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' }
];

// Lazy-load react-simple-maps only on client side (avoids SSR issues)
const WorldMap = dynamic(
  () => import('./simpleMap/simpleMap'),
  {
    ssr: false,
    loading: () => <div className="w-full h-[500px] bg-[#EFFAFF] animate-pulse"></div>
  }
);

const PortsWeServe = () => {
  const [selectedPort, setSelectedPort] = useState<PortData | null>(null);
  const [markerPosition, setMarkerPosition] = useState<{ x: number; y: number } | null>(null);

  const handlePortClick = (portId: string, position?: { x: number; y: number }) => {
    console.log('Main page handlePortClick called:', portId);
    const port = portData.find(p => p.id === portId);
    if (port) {
      setSelectedPort(port);
      // No need for position calculation anymore - using fixed L-shape
    }
  };

  const handleClosePanel = () => {
    setSelectedPort(null);
  };

  return (
    <div>
      <style jsx global>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        /* Framer Motion handles animations now */
        
        .animate-slide-in {
          animation: slideInRight 0.5s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        /* Prevent unwanted scroll behavior */
        .map-container {
          scroll-behavior: auto !important;
          overflow-anchor: none;
        }
        
        .map-container * {
          scroll-behavior: auto !important;
        }
      `}</style>

      {/* Navbar */}
      <Navbar/>
      
      <section className="flex items-center justify-center h-screen bg-cover bg-center "
               style={{ backgroundImage: "url('/ship.svg')" }}>
        <Hero/>
      </section>

      {/* Map Section - Repositioned */}
      <div 
        className="flex items-start justify-between min-h-screen px-8 py-8 bg-gray-50 relative map-container"
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Framer Motion Animated L-Line */}
        {selectedPort && (
          <motion.svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none" 
            style={{ zIndex: 10 }}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M 580 400 L 730 400 L 730 462"
              stroke="#000000"
              strokeWidth="2"
              fill="none"
              variants={{
                hidden: { pathLength: 0 },
                visible: { pathLength: 1 }
              }}
              transition={{ 
                duration: 1.2, 
                ease: "easeInOut",
                type: "tween"
              }}
            />
          </motion.svg>
        )}
        {/* Map on the LEFT - Fixed width */}
        <div className="w-[60%] flex-shrink-0">
          <WorldMap onPortClick={handlePortClick} />
        </div>

        {/* Concentric Circles and Port Information Panel - Scrolls with map */}
        <div className="w-[35%] flex-shrink-0 ml-8 pt-8" id="port-info-panel">
          {selectedPort && (
            <>
              {/* Concentric Circles */}
              <div className="relative mb-8">
                <svg width="60" height="60" className="mx-auto">
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#000000" strokeWidth="1" />
                  <circle cx="30" cy="30" r="18" fill="none" stroke="#000000" strokeWidth="1" />
                  <circle cx="30" cy="30" r="11" fill="none" stroke="#000000" strokeWidth="1" />
                </svg>
              </div>
              
              {/* Port Image and Name - Right below circles */}
              <div className="mt-4">
                <img 
                  src={selectedPort.image} 
                  alt={selectedPort.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className="text-xl font-bold mt-4 text-black">
                  {selectedPort.name}
                </h2>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Contact Section */}
      <div className='mt-20'>
      <Contact />
      </div>
      
    </div>
  );
};

export default PortsWeServe;