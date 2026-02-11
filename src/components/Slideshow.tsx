import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideshowProps {
  pictures: string[];
}

function Slideshow({ pictures }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  if (pictures.length === 1) {
    return (
      <div className="relative w-[90vw] h-103.75 rounded-[25px] overflow-hidden mx-auto my-6">
        <img src={pictures[0]} alt="Logement" className="w-full h-full object-cover"/>
      </div>
    );
  }

  return (
    <div className="relative w-[90vw] h-103.75 rounded-[25px] overflow-hidden mx-auto my-6">
      <img src={pictures[currentIndex]} alt={`Logement ${currentIndex + 1}`}className="w-full h-full object-cover"/>
      <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-transform">
        <ChevronLeft size={48} strokeWidth={3} />
      </button>

      <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-transform">
        <ChevronRight size={48} strokeWidth={3} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg font-medium">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  );
}

export default Slideshow;
