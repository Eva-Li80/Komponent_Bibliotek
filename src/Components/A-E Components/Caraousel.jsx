import React, { useState } from 'react';
import "../K-O Components/styles/movies.css"

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <button onClick={prevSlide}>Previous</button>
      <img className='bild' src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
