
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

// Array of property listings containing images and content
const propertyListings = [
  {
    image: "https://assotechpride.com/img/luxury-img1.jpg",
    title: "Own the view & the sky above!",
    description: [
      "A 57ft Huge Sky Deck with 4.5 BHK &",
      "42ft Sky Deck with 3.5 BHK Luxury Homes",
      "Expand into the horizon of mindful retreat! The wait for the grandeur is over!"
    ]
  },
  {
    image: "https://assotechpride.com/img/luxury-img2.jpg",
    title: "Luxury Awaits You!",
    description: [
      "Experience luxury like never before.",
      "Modern designs with stunning views.",
      "Join us in the sky and live the dream!"
    ]
  },
  {
    image: "https://assotechpride.com/img/luxury-img3.jpg",
    title: "A New Standard of Living!",
    description: [
      "Discover the elegance of our homes.",
      "Exceptional amenities at your doorstep.",
      "Your dream home is just a visit away!"
    ]
  },
  {
    image: "https://assotechpride.com/img/luxury-img4.jpg",
    // image: "https://media.istockphoto.com/id/1352177016/photo/modern-living-room-interior-with-air-conditioner-orange-sofa-and-green-armchair.jpg?s=612x612&w=0&k=20&c=qciIZYk5CecMq1zO0KKsJUosWr-CUX4IaoflnC49JNA=",
    title: "Elevate Your Lifestyle!",
    description: [
      "Luxury homes designed for comfort.",
      "Breathtaking views and top-notch facilities.",
      "Explore the possibilities of luxury living!"
    ]
  },
  
];

export default function Luxury() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  // Auto-slide effect (change image every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds interval
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIsSliding(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? propertyListings.length - 1 : prevIndex - 1));
      setIsSliding(false);
    }, 300); // Time for transition effect
  };

  const handleNext = () => {
    setIsSliding(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % propertyListings.length);
      setIsSliding(false);
    }, 300);
  };

  return (
    <div id='lifestyle' className="relative min-h-screen w-full overflow-hidden ">
      {/* Image Slides */}
      <div
        className={`absolute inset-0 flex transition-transform duration-500 ease-in-out`}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {propertyListings.map((property, index) => (
          <div
            key={index}
            className="min-h-screen w-full bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url(${property.image})` }}
          />
        ))}
      </div>

      {/* Chevron Left (Previous) */}
      <button onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10">
        <ChevronLeft size={48} />
      </button>

      {/* Heading */}
      <div className="absolute z-[100] text-6xl top-[-0.5vw] font-bold font-serif text-[#d5a886]">
        <h1 >Luxury</h1>
        <h1>LifeStyle</h1>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-white pointer-events-none">
        <div className="max-w-[55%] text-center">
          <div className="mb-1 font-glitten font-bold text-responsive text-3xl text-left">
            {propertyListings[activeIndex].title}
          </div>
          {propertyListings[activeIndex].description.map((text, idx) => (
            <p key={idx} className="mb-1 text-xl text-left text-[#ffffff]">
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Chevron Right (Next) */}
      <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10">
        <ChevronRight size={48} />
      </button>

      {/* Image Navigation Buttons */}
      <div className="absolute bottom-[2.8vw] left-1/2 gap-8 md:gap-32 transform -translate-x-1/2 flex items-center space-x-4 z-0">
      {/* Line connecting the navigation buttons */}
        <div className="absolute w-[80%] md:w-[95%] ml-[6.5vw] md:ml-[1.2vw]  h-1 bg-white top-1/2 -translate-y-1/2 z-100 "></div>
        {propertyListings.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsSliding(true);
              setTimeout(() => {
                setActiveIndex(index);
                setIsSliding(false);
              }, 300);
            }}
            className={`relative w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 border-white ${
              activeIndex === index ? 'ring-2 ring-white scale-[1.5] md:scale-[2]' : ''
            } z-10`}
          >
            <img
              src={propertyListings[index].image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Connecting Lines and Circles */}
      <svg
        className="absolute bottom-0 left-0 z-10 w-full h-full"
        width="100%"
        height="100%"
      >
        {/* Origin Point */}
        <circle cx="0" cy="100%" r="5" fill="rgba(255, 255, 255, 0.7)" />

        {/* Paths and Circles */}
        {propertyListings.map((_, index) => {
          const x = (index * 120) + 60; // Adjust the X position based on index
          const y = 40; // Adjust the Y position

          return (
            <g key={index}>
              {/* Connecting Line */}
              <line
                x1="0"
                y1="100%"
                x2={x}
                y2={y}
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Circle at each button connection */}
              <circle
                cx={x}
                cy={y}
                r={activeIndex === index ? 10 : 8}
                fill={activeIndex === index ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.3)"}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
