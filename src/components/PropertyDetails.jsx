// import React, { useState } from 'react';
// import properties from './PropertiesData'; // Import your properties data

// const PropertyCard = ({ property }) => {
//   return (
//     <div className="property-card bg-white rounded-lg shadow-lg p-4 m-4 min-w-[300px]">
//       <img
//         src={property.image}
//         alt="Property"
//         className="w-full h-40 object-cover rounded-t-lg"
//       />
//       <div className="property-details p-4">
//         <h3 className="text-lg font-semibold text-gray-700">Price: {property.price}</h3>
//         <p className="text-gray-500">Location: {property.location}</p>
//       </div>
//     </div>
//   );
// };

// const PropertyListing = () => {
//   const [currentIndex, setCurrentIndex] = useState(0); // Keep track of the current slide index
//   const visibleCards = 3; // Number of cards visible in the viewport

//   // Move to the next set of cards
//   const handleNext = () => {
//     if (currentIndex < properties.length - visibleCards) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   // Move to the previous set of cards
//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div id='buyhome' className="property-listing-container p-8 bg-gray-100 ">
//       <h2 className="text-6xl font-bold font-serif  text-center text-[#BC9170] mb-8">
//         Property Listings
//       </h2>

//       {/* Slider Container */}
//       <div className="relative w-full flex items-center justify-center">
//         {/* Left Navigation Button */}
//         <button
//           className={`absolute left-0 px-4 py-2 bg-gray-300 rounded-full ${currentIndex === 0 && 'opacity-50'}`}
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//         >
//           Prev
//         </button>

//         {/* Cards Container */}
//         <div className="overflow-hidden w-[80%]">
//           <div
//             className="flex transition-transform duration-500 ease-out"
//             style={{
//               transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
//             }}
//           >
//             {properties.map((property) => (
//               <PropertyCard key={property.id} property={property} />
//             ))}
//           </div>
//         </div>

//         {/* Right Navigation Button */}
//         <button
//           className={`absolute right-0 px-4 py-2 bg-gray-300 rounded-full ${currentIndex >= properties.length - visibleCards && 'opacity-50'}`}
//           onClick={handleNext}
//           disabled={currentIndex >= properties.length - visibleCards}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PropertyListing;

import React, { useState, useRef } from 'react';
import properties from './PropertiesData'; // Import your properties data

const PropertyCard = ({ property }) => {
  return (
    <div
      className="property-card bg-white rounded-lg shadow-lg p-4 m-4 min-w-[200px] min-h-[200px] flex flex-col items-center justify-between"
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
    <div id="buyhome" className="property-listing-container p-8 bg-gray-100 ">
      <h2 className="text-6xl font-bold font-serif text-center text-[#BC9170] mb-8">
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
          className="overflow-x-scroll w-full"
          ref={sliderRef}
        >
          <div className="flex gap-4">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} className="w-1/3" />
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