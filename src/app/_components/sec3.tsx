import Image from 'next/image';
import React from 'react';

const Sec3 = (): React.JSX.Element => {
  const features = [
    {
      icon: "/package.svg",
      title: "5,450+ products, always in stock",
      alt: "package"
    },
    {
      icon: "/circle-half.svg",
      title: "Nationwide coverage – major & minor ports",
      alt: "coverage"
    },
    {
      icon: "/ship-fill.svg",
      title: "Round-the-clock emergency support",
      alt: "support"
    },
    {
      icon: "/space-ship.svg",
      title: "Certified expertise in marine safety & inspections",
      alt: "expertise"
    }
  ];

  return (
    <div className='w-full flex flex-col justify-center h-fit items-center bg-[#e9f4fe]'>
      <div className='bg-gray-400 h-[1px] w-full'></div>
      
      {/* World Map Section */}
      <div
        className='flex relative h-fit md:h-screen md:px-4 bg-no-repeat bg-[length:90%_auto] bg-[position:center_top] w-[90%] '
        style={{ backgroundImage: "url('/worldmap.svg')", backgroundSize: 'contain' }}
      >
        <div className="relative w-full h-[200px] md:h-fit">
          <div className="absolute top-0 w-auto flex items-start max-w-[500px] left-0 animate-slideXToFro">
            <Image
              src="/container.svg"
              alt="container"
              width={700}
              height={550}
              priority
              unoptimized
              className="lg:w-[700px] sm:w-[200px] w-[100px] lg:h-[525px] sm:h-[200px] h-fit"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-[1400px] mx-auto mb-10 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-4 px-2 bg-white">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative md:border-r-2 md:border-b-0 border-b-2 border-black p-8 min-h-[220px] flex flex-col justify-between"
              
            >
              {/* Icon in top-right */}
              <div className="absolute top-4 right-4">
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              
              {/* Text in bottom-left */}
              <div className="mt-auto max-w-[55%]">
                <h3 className="font-bold text-xl leading-tight text-left">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sec3;