import React from 'react'
import DomeGallery from './DomeGallery'

const ImageSection = () => {
  const galleryItems = [
    { src: '/images/g1.svg', alt: 'Gallery Image 1' },
    { src: '/images/g2.svg', alt: 'Gallery Image 2' },
    { src: '/images/g3.svg', alt: 'Gallery Image 3' },
    { src: '/images/g4.svg', alt: 'Gallery Image 4' },
    { src: '/images/g5.svg', alt: 'Gallery Image 5' },
    { src: '/images/g6.svg', alt: 'Gallery Image 6' },
    { src: '/images/g7.svg', alt: 'Gallery Image 7' },
    { src: '/images/g8.svg', alt: 'Gallery Image 8' },
    { src: '/images/g9.svg', alt: 'Gallery Image 9' },
    { src: '/images/g10.svg', alt: 'Gallery Image 10' },
    { src: '/images/g11.svg', alt: 'Gallery Image 11' },
    { src: '/images/g12.jpg', alt: 'Gallery Image 12' },
    { src: '/images/g13.jpg', alt: 'Gallery Image 13' },
    { src: '/images/g14.jpg', alt: 'Gallery Image 14' },
    { src: '/images/g15.jpg', alt: 'Gallery Image 15' },
    { src: '/images/g16.jpg', alt: 'Gallery Image 16' },
    { src: '/images/g17.jpg', alt: 'Gallery Image 17' },
    { src: '/images/g18.jpg', alt: 'Gallery Image 18' },
  ];

  return (
    <div className='w-full h-[88vh] '>
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