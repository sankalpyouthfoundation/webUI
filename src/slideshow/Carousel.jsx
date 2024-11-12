import React, { useState } from 'react';

const images = [
    'https://res.cloudinary.com/dvfarxhig/image/upload/v1731383208/syf/12x10_Ghoda_laibrary_o6iz1c.jpg', //January Event
    'https://res.cloudinary.com/dvfarxhig/image/upload/v1709459511/syf/IMG20230827110205_hjm13y.jpg',
    'https://res.cloudinary.com/dvfarxhig/image/upload/v1709459470/syf/IMG_20230813_120132_eggb7a.jpg',
    'https://res.cloudinary.com/dvfarxhig/image/upload/v1709459469/syf/IMG_20230813_120331_clzktq.jpg',
    'https://res.cloudinary.com/dvfarxhig/image/upload/v1709459507/syf/IMG_20230924_122411_tsh9u5.jpg',
    'https://res.cloudinary.com/dvfarxhig/image/upload/v1709459469/syf/IMG_20230813_120248_xrwejl.jpg',
    'https://res.cloudinary.com/dvfarxhig/image/upload/v1709460464/syf/IMG_20231113_123215_yusuxy.jpg',
    'https://res.cloudinary.com/dvfarxhig/image/upload/v1709460463/syf/IMG_20231113_130156_1_vgjwjd.jpg',
    'https://res.cloudinary.com/dvfarxhig/image/upload/v1709461094/syf/IMG_20231222_115918_jb4pmd.jpg',
  ];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full md:h-[600px] h-[250px] overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
        onClick={goToPrevious}
      >
        <svg class="md:h-8 md:w-8 w-6 h-6 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="11 7 6 12 11 17" />  <polyline points="17 7 12 12 17 17" /></svg>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
        onClick={goToNext}
      >
        <svg class="md:h-8 md:w-8 w-6 h-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="13 17 18 12 13 7" />  <polyline points="6 17 11 12 6 7" /></svg>
      </button>
    </div>
  );
};

export default Carousel;
