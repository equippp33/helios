import React from 'react'
import CircularGallery from './CircularGallery';

const ImageSection = () => {
  const galleryItems = [
 { image: '/images/g1.svg', text: 'Gallery Image 1' },
 { image: '/images/g2.svg', text: 'Gallery Image 2' },
 { image: '/images/g3.svg', text: 'Gallery Image 3' },
 { image: '/images/g4.svg', text: 'Gallery Image 4' },
 { image: '/images/g5.svg', text: 'Gallery Image 5' },
 { image: '/images/g6.svg', text: 'Gallery Image 6' },
 { image: '/images/g7.svg', text: 'Gallery Image 7' },
 { image: '/images/g8.svg', text: 'Gallery Image 8' },
 { image: '/images/g9.svg', text: 'Gallery Image 9' },
 { image: '/images/g10.svg', text: 'Gallery Image 10' },
 { image: '/images/g11.svg', text: 'Gallery Image 11' }
  ];

  return (
  <div className='w-full mx-auto px-2 py-2 my-6'>
 <div style={{ height: '600px', position: 'relative' }}>
 <CircularGallery
 items={galleryItems}
 bend={3}
 textColor="#ffffff"
 borderRadius={0.05}
 scrollEase={0.02}
 />
 </div>
 </div>
  )
}

export default ImageSection;