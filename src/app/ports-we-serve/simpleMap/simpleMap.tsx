'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';

// Define types for our markers
interface MarkerType {
  name: string;
  coordinates: [number, number];
}

// Define type for geography object from react-simple-maps
interface GeographyType {
  rsmKey: string;
  properties?: {
    NAME_1?: string;
  };
}

// India GeoJSON data URL
const geoUrl = 'https://raw.githubusercontent.com/geohacker/india/master/state/india_telengana.geojson';

const markers: MarkerType[] = [
  // West Coast Ports
  { name: 'Okha', coordinates: [69.0833, 22.4667] } as const,
  { name: 'Kandla', coordinates: [70.2167, 23.0333] } as const,
  { name: 'Gandhidham', coordinates: [70.1333, 23.0833] } as const,
  { name: 'Jamnagar', coordinates: [70.0667, 22.4667] } as const,
  { name: 'Pipavav', coordinates: [71.5167, 20.9167] } as const,
  { name: 'Sikka', coordinates: [69.8333, 22.4333] } as const,
  { name: 'Mundra', coordinates: [69.7167, 22.8333] } as const,
  { name: 'Mumbai', coordinates: [72.8777, 19.0760] } as const,
  { name: 'Mumbai / Jnpt', coordinates: [72.9500, 18.9667] } as const,
  { name: 'Nhava Sheva', coordinates: [72.9500, 18.9667] } as const,
  { name: 'Mormugao (Goa)', coordinates: [73.8063, 15.4167] } as const,
  { name: 'Mangalore', coordinates: [74.8560, 12.9141] } as const,
  { name: 'Cochin', coordinates: [76.2673, 9.9312] } as const,
  
  // East Coast Ports
  { name: 'Kolkata', coordinates: [88.3639, 22.5726] } as const,
  { name: 'Haldia', coordinates: [88.0602, 22.0540] } as const,
  { name: 'Dhamra', coordinates: [86.8833, 20.9167] } as const,
  { name: 'Paradip', coordinates: [86.6100, 20.2649] } as const,
  { name: 'Visakhapatnam', coordinates: [83.2185, 17.6868] } as const,
  { name: 'Kakinada', coordinates: [82.2333, 16.9333] } as const,
  { name: 'Karaikal', coordinates: [79.8380, 10.9254] } as const,
  { name: 'Krishnapatnam', coordinates: [80.1167, 14.2333] } as const,
  { name: 'Chennai', coordinates: [80.2707, 13.0827] } as const,
  { name: 'Ennore', coordinates: [80.3318, 13.2333] } as const,
  
  // Maritime Lawyers (South)
  { name: 'Maritime Lawyers', coordinates: [78.0000, 8.5000] } as const
];

interface SimpleIndiaMapProps {
  onPortClick?: (portName: string, position?: { x: number; y: number }) => void;
}

// Color scheme based on project theme (blues and yellow #FFFF00)
const getStateColor = (stateName: string | undefined): string => {
  const colors = [
    '#3B82F6', // Primary blue
    '#1E40AF', // Dark blue
    '#60A5FA', // Light blue
    '#0EA5E9', // Sky blue
    '#1D4ED8', // Blue-700
    '#2563EB', // Blue-600
    '#3B82F6', // Blue-500
    '#60A5FA', // Blue-400
    '#93C5FD', // Blue-300
    '#79A6E1', // Blue-100
    '#1E3A8A', // Blue-900
    '#1E40AF', // Blue-800
    '#FFFF00', // Bright yellow
    '#FEF08A', // Yellow-200
    '#FDE047', // Yellow-300
    '#FACC15', // Yellow-400
    '#EAB308', // Yellow-500
    '#CA8A04'  // Yellow-600
  ];
  
  // Create a simple hash from state name to get consistent colors
  // Handle undefined stateName by using a default value
  const name = stateName ?? 'default';
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length] ?? '#3B82F6';
};
export const SimpleIndiaMap = ({ onPortClick }: SimpleIndiaMapProps) => {
  const [selectedPort, setSelectedPort] = useState<string | null>(null);
  const [, setMarkerPosition] = useState<{ x: number; y: number } | null>(null);
  const markerRefs = useRef<Record<string, SVGImageElement | null>>({});

  const handlePortClick = (portName: string) => {
    console.log('Port clicked:', portName);
    setSelectedPort(portName);
    
    // Get the actual position of the marker element
    const markerElement = markerRefs.current[portName];
    if (markerElement) {
      // Use a more reliable container selector
      const mapContainer = document.querySelector('.w-\\[60\\%\\]') ?? document.querySelector('[class*="w-[60%]"]');
      
      if (mapContainer) {
        const rect = markerElement.getBoundingClientRect();
        const containerRect = mapContainer.getBoundingClientRect();
        
        // Calculate position relative to the map container
        const position = {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top
        };
        console.log('Calculated position:', position);
        setMarkerPosition(position);
        
        // Trigger animation and show port info with the calculated position
        setTimeout(() => {
          onPortClick?.(portName.toLowerCase(), position);
        }, 50);
      } else {
        // Fallback with estimated positions
        const fallbackPositions: Record<string, { x: number; y: number }> = {
          'Chennai': { x: 400, y: 350 },
          'Mumbai': { x: 200, y: 280 },
          'Kolkata': { x: 450, y: 250 }
        };
        
        const position = fallbackPositions[portName] ?? { x: 300, y: 300 };
        console.log('Using fallback position:', position);
        setMarkerPosition(position);
        onPortClick?.(portName.toLowerCase(), position);
      }
    } else {
      console.log('Marker element not found for:', portName);
      // Still trigger the port click with fallback position
      const fallbackPositions: Record<string, { x: number; y: number }> = {
        'Chennai': { x: 400, y: 350 },
        'Mumbai': { x: 200, y: 280 },
        'Kolkata': { x: 450, y: 250 }
      };
      
      const position = fallbackPositions[portName] ?? { x: 300, y: 300 };
      setMarkerPosition(position);
      onPortClick?.(portName.toLowerCase(), position);
    }
  };

  return (
    <div className="w-full h-fit bg-transparent rounded-lg overflow-visible relative">
      <style jsx global>{`
        @keyframes drawLine {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .animate-draw-line {
          stroke-dashoffset: 1000;
          animation: drawLine 0.8s ease-out forwards;
        }
        
        /* Ensure markers are clickable */
        .rsm-marker {
          pointer-events: auto !important;
          cursor: pointer !important;
        }
        
        .rsm-marker image {
          pointer-events: auto !important;
          cursor: pointer !important;
        }
      `}</style>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1080
        }}
        width={1200}
        height={1500}
      >
        <ZoomableGroup 
          center={[78, 22]} 
          zoom={1.7}
          minZoom={1.7}
          maxZoom={1.7}
          translateExtent={[[0, 0], [0, 0]]}
          style={{ pointerEvents: 'auto' }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo: GeographyType) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getStateColor(geo.properties?.NAME_1 ?? 'default')}
                  stroke="#FFFFFF"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none', cursor: 'default', pointerEvents: 'none' },
                    hover: { cursor: 'default', pointerEvents: 'none' },
                    pressed: { outline: 'none', pointerEvents: 'none' }
                  }}
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                />
              ))
            }
          </Geographies>
          
          {/* Port Markers */}
          {markers.map(({ name, coordinates }) => (
            <Marker 
              key={name} 
              coordinates={coordinates}
            >
              <image
                ref={(el) => { markerRefs.current[name] = el; }}
                href={selectedPort === name ? "/images/shiptrans.png" : "/images/ship.png"}
                x={selectedPort === name ? -21 : -12}
                y={selectedPort === name ? -21 : -12}
                width={selectedPort === name ? 42 : 24}
                height={selectedPort === name ? 42 : 24}
                style={{ cursor: 'pointer' }}
                className="hover:opacity-80 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('🔴 PORT CLICKED:', name);
                  handlePortClick(name);
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                }}
              />
            </Marker>
          ))}
          
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default SimpleIndiaMap;