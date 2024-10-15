import React, { useState, useRef } from 'react';
import properties from './PropertiesData'; // Import your properties data

const PropertyCard = ({ property }) => {
  return (
    <div
      className="property-card bg-white rounded-lg shadow-lg lg:p-4 md:p-2 p-1 lg:m-4 md:m-2 m-0 min-w-[200px] min-h-[200px] flex flex-col items-center justify-between"
    >
      <img
        src={property.image}
        alt="Property"
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="property-details p-4 flex flex-col items-start">
        <h3 className="text-lg font-semibold text-gray-700">Price: {property.price}</h3>
        <p className="text-gray-500">Location: {property.location}</p>
      </div>
    </div>
  );
};

const PropertyListing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const visibleCards = Math.min(3, properties.length); // Ensure visible cards don't exceed total properties

  // Move to the next set of cards
  const handleNext = () => {
    if (currentIndex < properties.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
      sliderRef.current.scrollTo({
        left: (currentIndex + 1) * sliderRef.current.offsetWidth / visibleCards,
        behavior: 'smooth',
      });
    }
  };

  // Move to the previous set of cards
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      sliderRef.current.scrollTo({
        left: currentIndex * sliderRef.current.offsetWidth / visibleCards,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="buyhome" className="property-listing-container lg:p-8 md:p-6 p-2 bg-gray-100 ">
      <h2 className="lg:text-7xl md:text-5xl text-5xl font-bold font-serif  text-[#BC9170] mb-8">
        Property Listings
      </h2>

      {/* Slider Container */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left Navigation Button */}
        <button
          className={`absolute left-0 px-4 py-2 bg-gray-300 rounded-full ${
            currentIndex === 0 && 'opacity-50'
          }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Prev
        </button>

        {/* Cards Container (Sliding) */}
        <div
          className="overflow-x-scroll w-[65%] lg:w-full md:w-full flex justify-start items-center"
          ref={sliderRef}
        >
          <div className="flex justify-center gap-4">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} className="" />
            ))}
          </div>
        </div>

        {/* Right Navigation Button */}
        <button
          className={`absolute right-0 px-4 py-2 bg-gray-300 rounded-full ${
            currentIndex >= properties.length - visibleCards && 'opacity-50'
          }`}
          onClick={handleNext}
          disabled={currentIndex >= properties.length - visibleCards}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PropertyListing;