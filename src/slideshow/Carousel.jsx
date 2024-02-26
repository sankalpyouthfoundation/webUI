import React, { useState } from 'react';

const images = [
    'https://res.cloudinary.com/decjzcxb5/image/upload/v1708880445/IMG20230827110205_d5exm6.jpg',
    'https://res.cloudinary.com/decjzcxb5/image/upload/v1708880390/IMG_0599_ccgdxg.jpg',
    'https://res.cloudinary.com/decjzcxb5/image/upload/v1708880436/IMG_0613_vc56c4.jpg',
    'https://res.cloudinary.com/decjzcxb5/image/upload/v1708880416/IMG_20230924_122411_trcs2s.jpg',
    'https://res.cloudinary.com/decjzcxb5/image/upload/v1708880451/IMG20230827105753_zvkdh9.jpg',
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
