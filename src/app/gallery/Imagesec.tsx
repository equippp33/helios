import React from 'react'
import DomeGallery from './DomeGallery'

const ImageSection = () => {
  const galleryItems = [
    { src: '/g1.svg', alt: 'Gallery Image 1' },
    { src: '/g2.svg', alt: 'Gallery Image 2' },
    { src: '/g3.svg', alt: 'Gallery Image 3' },
    { src: '/g4.svg', alt: 'Gallery Image 4' },
    { src: '/g5.svg', alt: 'Gallery Image 5' },
    { src: '/g6.svg', alt: 'Gallery Image 6' },
    { src: '/g7.svg', alt: 'Gallery Image 7' },
    { src: '/g8.svg', alt: 'Gallery Image 8' },
    { src: '/g9.svg', alt: 'Gallery Image 9' },
    { src: '/g10.svg', alt: 'Gallery Image 10' },
    { src: '/g11.svg', alt: 'Gallery Image 11' }
  ];

  return (
    <div className='w-full h-screen'>
      <DomeGallery 
        images={galleryItems}
        fit={1.1}
        segments={35}
        grayscale={false}
        imageBorderRadius="30px"
        openedImageBorderRadius="30px"
      />
    </div>
  )
}

export default ImageSection;