import React from 'react'
import CircularGallery from './CircularGallery';

const ImageSection = () => {
  const galleryItems = [
 { image: '/g1.svg', text: 'Gallery Image 1' },
 { image: '/g2.svg', text: 'Gallery Image 2' },
 { image: '/g3.svg', text: 'Gallery Image 3' },
 { image: '/g4.svg', text: 'Gallery Image 4' },
 { image: '/g5.svg', text: 'Gallery Image 5' },
 { image: '/g6.svg', text: 'Gallery Image 6' },
 { image: '/g7.svg', text: 'Gallery Image 7' },
 { image: '/g8.svg', text: 'Gallery Image 8' },
 { image: '/g9.svg', text: 'Gallery Image 9' },
 { image: '/g10.svg', text: 'Gallery Image 10' },
 { image: '/g11.svg', text: 'Gallery Image 11' }
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