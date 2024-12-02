import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

export function Carrossel() {
  const images = [
    "/image/quadra_voleidepraia.png",
    "/image/quadra_futebol.png",
    "/image/quadra_tenis.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mt-4 flex justify-center items-center space-x-8">
      {/* Carrossel maior */}
      <div className="relative w-3/4 max-w-2xl">
        <div className="overflow-hidden rounded-3xl w-full h-80">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="h-full w-full object-cover" />
        </div>

        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 p-1.5 bg-opacity-50 bg-gray-700 hover:bg-gray-900 hover:bg-opacity-70 ease-in-out duration-150 rounded-full" onClick={prevSlide}>
          <CaretLeft size={20} className="text-gray-300 hover:text-orange-400 ease-in-out duration-100" />
        </button>

        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 p-1.5 bg-opacity-50 bg-gray-700 hover:bg-gray-900 hover:bg-opacity-70 ease-in-out duration-150 rounded-full" onClick={nextSlide}>
          <CaretRight size={20} className="text-gray-300 hover:text-orange-400 ease-in-out duration-100" />
        </button>

        <div className="flex justify-center mt-3 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                index === currentIndex
                  ? "bg-orange-400 ease-in duration-150"
                  : "bg-gray-300 ease-in duration-150"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="w-1/4 max-w-md bg-white p-6 rounded-3xl dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-orange-100 mb-3">Praticidade, segurança e estrutura para praticar seus esportes? <span className="text-teal-500">Você encontra tudo isso na <span className="font-extrabold">TocLoc</span>.</span> ;)</h2>
        <p className="text-gray-600 text-sm leading-relaxed dark:text-orange-100"><Link to={"/cadastro"} className="text-orange-700 hover:text-orange-600 ease-in-out duration-150">Cadastre-se</Link> e conheça uma nova experiência na locação de quadras.</p>
      </div>
    </div>
  );
}
