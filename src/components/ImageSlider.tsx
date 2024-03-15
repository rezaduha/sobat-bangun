"use client"

import { useState } from 'react';

import Image from 'next/image';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface ImageSliderProps {
  images: string[];
}


const ImageSlider = ({ images } : ImageSliderProps)  => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative h-[552px]">
      {images.map((image, index) => (
        <Image fill sizes="100vw"
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      <button className="absolute top-1/2 left-11 -translate-y-1/2 w-12 h-12 bg-white border border-[#F5333F]" onClick={prevImage}>
        <KeyboardArrowLeftIcon />
      </button>
      <button className="absolute top-1/2 right-11 -translate-y-1/2 w-12 h-12 bg-white border border-[#F5333F]" onClick={nextImage}>
        <KeyboardArrowRightIcon />
      </button>
    </section>
  );
};

export default ImageSlider;
