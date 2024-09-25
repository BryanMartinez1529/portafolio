import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para ir a la siguiente imagen automáticamente
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // useEffect para el desplazamiento automático
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(slideInterval);
  }, [currentIndex, interval]);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {/* Imagen actual */}
      <div
        className="w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
        onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
