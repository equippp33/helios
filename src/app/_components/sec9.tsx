import Image from 'next/image';
import React from 'react'
import LogoLoop from './logoloop';


const Impa = () => (
  <Image
    src="/impa.svg"
    alt="impa"
    width={140}
    height={140}
    className="w-[100px] h-[100px]"
  />
);
const Iso = () => (
  <Image
    src="/iso.svg"
    alt="impa"
    width={140}
    height={140}
    className="w-[100px] h-[100px]"
  />
);
const Shipserve = () => (
  <Image
    src="/shipserve.svg"
    alt="impa"
    width={140}
    height={140}
    className="w-[100px] h-[100px]"
  />
);



const techLogos = [
  { node: <Impa />, title: "Ima"  },
  { node: <Iso />, title: "Iso"  },
  { node: <Shipserve />, title: "Shipserve"  },
  { node: <Iso />, title: "Iso" },]

const Companies = () => {
  return (
    <div className='flex w-[90%] px-2  h-fit md:h-[180px] justify-center items-center rounded-2xl bg-white m-4'><LogoLoop
           logos={techLogos}
           speed={120}
           direction="left"
           logoHeight={140}
           gap={40}
           pauseOnHover
           scaleOnHover
           fadeOut
           fadeOutColor="#ffffff"
           ariaLabel="Technology partners"
         /></div>
  )
}

export default Companies;
