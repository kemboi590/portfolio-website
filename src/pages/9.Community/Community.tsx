import { useState, useEffect, useRef } from 'react';
import { communityPhotosData } from './../../components/CommunityData';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Timeout = NodeJS.Timeout;

const Community = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<Timeout | null>(null);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % communityPhotosData.length);
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? communityPhotosData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % communityPhotosData.length);
  };

  return (
    <div id='community' className="w-full">
      <h1 className='text-xl md:text-4xl font-bold text-[#00df9a] text-center pt-12'>✨ Community Photos ✨</h1>
      <div className="flex items-center justify-center space-x-4 py-8">
        <button
          onClick={handlePrev}
          className="p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <FaArrowLeft />
        </button>

        <div className="flex overflow-hidden w-full max-w-screen-lg justify-center">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
          >
            {communityPhotosData.map((photo, index) => (
              <div key={index} className="flex-none w-full">
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-[250px] object-scale-down md:h-[400px] lg:h-[500px]"
                />
                <p className=" hidden md:block text-center text-white mt-2 max-w-[90%] mx-auto">{photo.caption}</p> {/* to hide in small screen, add hidden class ie hidden text-center text-white mt-2 max-w-[90%] mx-auto
                 */}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Community;
