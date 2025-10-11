'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Contact from '../_components/contact';
import Navbar from '../_components/navbar';
import Hero from '../_components/hero';
import Footer from '../_components/footer';

interface PortData {
  id: string;
  name: string;
  image: string;
  address: string;
  phone: string;
  email: string;
}

const portData: PortData[] = [
  // West Coast Ports
  { id: 'okha', name: 'Okha', image: '/ports/portimg.png', address: 'Okha Port, Devbhumi Dwarka, Gujarat - 361350', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'kandla', name: 'Kandla', image: '/ports/portimg.png', address: 'Kandla Port Trust, Gandhidham, Kutch, Gujarat - 370201', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'gandhidham', name: 'Gandhidham', image: '/ports/portimg.png', address: 'Gandhidham, Kutch, Gujarat - 370201', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'jamnagar', name: 'Jamnagar', image: '/ports/portimg.png', address: 'Jamnagar, Gujarat - 361001', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'pipavav', name: 'Pipavav', image: '/ports/portimg.png', address: 'Gujarat Pipavav Port Limited, Pipavav, Amreli, Gujarat - 365560', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'sikka', name: 'Sikka', image: '/ports/portimg.png', address: 'Sikka Port, Jamnagar, Gujarat - 361142', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'mundra', name: 'Mundra', image: '/ports/portimg.png', address: 'Adani Ports, Mundra, Kutch, Gujarat - 370421', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'mumbai', name: 'Mumbai', image: '/ports/portimg.png', address: 'Paresh Building, Opposite Heera Panna, Haji Ali, 4-a, Bhulabhai Desai Marg, Mumbai, Maharashtra 400026', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'mumbai / jnpt', name: 'Mumbai / Jnpt', image: '/ports/portimg.png', address: 'JNPT, Nhava Sheva, Raigad, Maharashtra - 400707', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'nhava sheva', name: 'Nhava Sheva', image: '/ports/portimg.png', address: 'JNPT, Nhava Sheva, Raigad, Maharashtra - 400707', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'mormugao (goa)', name: 'Mormugao (Goa)', image: '/ports/portimg.png', address: 'Mormugao Port Trust, Headland Sada, Vasco-da-Gama, Goa - 403804', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'mangalore', name: 'Mangalore', image: '/ports/portimg.png', address: 'New Mangalore Port Trust, Panambur, Mangalore, Karnataka - 575010', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'cochin', name: 'Cochin', image: '/ports/portimg.png', address: 'No.31/652h, St. Prtric Square, Sahodaran Ayyappan Rd, Vyttila, Ernakulam, Kerala 682019', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  
  // East Coast Ports
  { id: 'kolkata', name: 'Kolkata', image: '/ports/portimg.png', address: '#145 B, Sarat Bose Rd, Hazra, Kalighat, Kolkata, West Bengal 700026', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'haldia', name: 'Haldia', image: '/ports/portimg.png', address: 'Haldia Dock Complex, Haldia, West Bengal - 721602', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'dhamra', name: 'Dhamra', image: '/ports/portimg.png', address: 'Dhamra Port Company Limited, Dhamra, Bhadrak, Odisha - 756171', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'paradip', name: 'Paradip', image: '/ports/portimg.png', address: 'Paradip Port Trust, Paradip, Jagatsinghpur, Odisha - 754142', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'visakhapatnam', name: 'Visakhapatnam', image: '/ports/portimg.png', address: 'Visakhapatnam Port Trust, Administrative Building, Visakhapatnam - 530035', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'kakinada', name: 'Kakinada', image: '/ports/portimg.png', address: 'Kakinada Port Trust, Kakinada, Andhra Pradesh - 533001', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'karaikal', name: 'Karaikal', image: '/ports/portimg.png', address: 'Karaikal Port, Karaikal, Puducherry - 609602', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'krishnapatnam', name: 'Krishnapatnam', image: '/ports/portimg.png', address: 'Krishnapatnam Port Company Limited, Nellore, Andhra Pradesh - 524344', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'chennai', name: 'Chennai', image: '/ports/portimg.png', address: 'No. 18, 2nd Floor, 1st Main Road, Rajaji Avenue,Valasaravakkam, Chennai - 600 087', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  { id: 'ennore', name: 'Ennore', image: '/ports/portimg.png', address: 'Kamarajar Port Limited, Ennore, Chennai, Tamil Nadu - 600057', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' },
  
  // Maritime Services
  { id: 'maritime lawyers', name: 'Maritime Lawyers', image: '/ports/portimg.png', address: 'Maritime Legal Services, South India', phone: '+91 - 96770 88801', email: 'sales@unicareservices.in' }
];

// Lazy-load react-simple-maps only on client side (avoids SSR issues)
const WorldMap = dynamic(
  () => import('./simpleMap/simpleMap'),
  {
    ssr: false,
    loading: () => <div className="w-full h-[500px] bg-transparent animate-pulse"></div>
  }
);

const PortsWeServe = () => {
  const [selectedPort, setSelectedPort] = useState<PortData | null>(null);
  const [markerPosition, setMarkerPosition] = useState<{ x: number; y: number } | null>(null);

  const handlePortClick = (portId: string, position?: { x: number; y: number }) => {
    console.log('Main page handlePortClick called:', portId, position);
    const port = portData.find(p => p.id === portId);
    if (port) {
      setSelectedPort(port);
      if (position) {
        setMarkerPosition(position);
      }
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
        className="flex items-start justify-between h-screen px-8 py-8 bg-gray-50 relative map-container mb-20"
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Simple Line from Ship to Image */}
        {selectedPort && markerPosition && (
          <motion.svg 
            className="absolute top-10 left-0 w-full h-full pointer-events-none" 
            style={{ zIndex: 15}}
            initial="hidden"
            animate="visible"
          >
            <motion.line
              x1={markerPosition.x + 15}
              y1={markerPosition.y}
              x2={window.innerWidth * 0.7}
              y2={500}
              stroke="#0D0D0D"
              strokeWidth="1"
              variants={{
                hidden: { pathLength: 0 },
                visible: { pathLength: 0.767 }
              }}
              transition={{ 
                duration: 1.0, 
                ease: "easeOut",
                type: "tween"
              }}
            />
          </motion.svg>
        )}
        {/* Map on the LEFT - Fixed width */}
        <div className="w-[60%] flex-shrink-0">
          <WorldMap onPortClick={handlePortClick} />
        </div>

        {/* Port Information at Right End */}
        {selectedPort && (
          <div 
            className="absolute pointer-events-none"
            style={{
              right: '9.5%',
              top: '400px',
              width: '400px'
            }}
          >
            {/* Port Image and Name at line end */}
            <div className="bg-white">
              <img 
                src={selectedPort.image} 
                alt={selectedPort.name}
                className="w-full h-full object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold text-black text-center">
                {selectedPort.name}
              </h2>
            </div>
          </div>
        )}
      </div>
      
      {/* Contact Section */}
      <div className="mt-80">
        
        <Contact />
      </div>
      
      <Footer/>
    </div>
  );
};

export default PortsWeServe;