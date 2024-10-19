
import React, { useState } from "react";
import { IoArrowBackCircleSharp, IoArrowForwardCircle } from "react-icons/io5";

export default function Amenities() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "https://assotechpride.com/img/amenities-1.jpg", text: "Spacious Balcony with a view", number: 1 },
    { src: "https://assotechpride.com/img/amenities-2.jpg", text: "Luxurious Swimming Pool for relaxation", number: 2 },
    { src: "https://assotechpride.com/img/amenities-3.jpg", text: "Modern Gym with state-of-the-art equipment", number: 3 },
    { src: "https://assotechpride.com/img/amenities-4.jpg", text: "High-Speed Elevators for your convenience", number: 4 },
    { src: "https://assotechpride.com/img/amenities-5.jpg", text: "Designer Wardrobes with ample storage space", number: 5 },
    { src: "https://assotechpride.com/img/amenities-6.jpg", text: "Centralized AC for a comfortable living environment", number: 6 },
    { src: "https://assotechpride.com/img/amenities-7.jpg", text: "Fully equipped Modular Kitchen for your culinary needs", number: 7 },
    { src: "https://assotechpride.com/img/amenities-8.jpg", text: "Smart Home technology with automation features", number: 8 },
  ];

  const goToNext = () => {
    if (currentIndex < images.length - 2) setCurrentIndex(currentIndex + 1);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div id="amenities" className="bg-red-50 min-h-screen flex flex-col md:flex-row justify-start items-start py-8 px-4 md:px-8 relative ">
      {/* Heading with Icons */}
      <div className="w-1/3 flex flex-col items-center mb-8">
        
        <h1 className="text-sky-950 text-4xl md:text-7xl font-serif font-semibold text-center  mb-0 z-10">
          Amenities <br /> & <br /> Facilities
        </h1>
        <div className="absolute flex justify-center items-center mt-0 bottom-40 left-72 gap-7">
          <IoArrowBackCircleSharp
            onClick={goToPrevious}
            className={`text-4xl md:text-6xl cursor-pointer ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={currentIndex === 0}
          />
          <IoArrowForwardCircle
            onClick={goToNext}
            className={`text-4xl md:text-6xl cursor-pointer ${currentIndex === images.length - 2 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={currentIndex === images.length - 2}
          />
        </div>
        {/* Circular Patches */}
        <div className="absolute  transform z-0 flex flex-col gap-14 rotate-45">
          <div className="w-40 h-40 bg-blue-100 rounded-full"></div>
          <div className="w-36 h-36 bg-blue-100 rounded-full"></div>
          <div className="w-32 h-32 bg-blue-100 rounded-full"></div>
        </div>
      </div>

      {/* Image Slider Section */}
       <div className="relative w-full md:w-2/3 flex overflow-hidden mb-11">
         <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 50}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-full md:w-1/2 flex-shrink-0 p-2 md:p-4">
              {/* Image */}
              <img
                src={image.src}
                alt={image.text}
                className="w-full h-100 md:h-1200 object-cover rounded-lg transition-transform duration-500 hover:scale-110 shadow-inner hover:shadow-[inset_0_0_40px_10px_rgba(3,37,76,0.7)]"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-1000">
                <div className="text-white text-lg md:text-3xl font-serif p-4 text-center">
                  0{image.number} <br /> {image.text} <br />
                  <span className="text-sm font-light mt-2">Discover more about this feature.</span>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
    </div>
  );
}
