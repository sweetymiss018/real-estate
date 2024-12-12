// import React, { useState, useEffect } from "react";
// import { IoArrowBackCircleSharp, IoArrowForwardCircle } from "react-icons/io5";
// import { useSwipeable } from "react-swipeable";

// export default function Amenities() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//     { src: "https://assotechpride.com/img/amenities-1.jpg", text: "Spacious Balcony with a view", number: 1 },
//     { src: "https://assotechpride.com/img/amenities-2.jpg", text: "Luxurious Swimming Pool for relaxation", number: 2 },
//     { src: "https://assotechpride.com/img/amenities-3.jpg", text: "Modern Gym with state-of-the-art equipment", number: 3 },
//     { src: "https://assotechpride.com/img/amenities-4.jpg", text: "High-Speed Elevators for your convenience", number: 4 },
//     { src: "https://assotechpride.com/img/amenities-5.jpg", text: "Designer Wardrobes with ample storage space", number: 5 },
//     { src: "https://assotechpride.com/img/amenities-6.jpg", text: "Centralized AC for a comfortable living environment", number: 6 },
//     { src: "https://assotechpride.com/img/amenities-7.jpg", text: "Fully equipped Modular Kitchen for your culinary needs", number: 7 },
//     { src: "https://assotechpride.com/img/amenities-8.jpg", text: "Smart Home technology with automation features", number: 8 },
//   ];

//   const goToNext = () => {
//     if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
//   };

//   const goToPrevious = () => {
//     if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
//   };

//   const handlers = useSwipeable({
//     onSwipedLeft: goToNext,
//     onSwipedRight: goToPrevious,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext(); // Correct function name
//     }, 5000); // 3 seconds interval
//     return () => clearInterval(interval);
//   }, [currentIndex]); // Adding currentIndex to dependencies to ensure it updates after each change

//   return (
//     <div
//       id="amenities"
//       className="bg-gray-100 min-h-screen flex flex-col md:flex-row justify-start items-start py-8 px-7 md:px-8 relative"
//     >
//       <div className="w-full sm:w-2/3 md:w-1/3 flex flex-col items-center mb-8 lg:ml-0 md:ml-0 ml-0">
//         <h1 className="text-[#1A4797] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-center mb-4 z-10">
//           Amenities <br /> & <br /> Facilities
//         </h1>
//       </div>

//       <div className="relative w-full sm:w-3/4 md:w-2/3 flex flex-col items-center overflow-hidden mb-11">
//         <div
//           className="flex transition-transform duration-500"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//             width: `${images.length * 100}%`,
//           }}
//         >
//           {images.map((image, index) => (
//             <div key={index} className="relative sm:w-full md:w-1/2 lg:w-full flex-shrink-0 p-2 sm:p-4 md:p-7 lg:p-10">
//               <img
//                 src={image.src}
//                 alt={image.text}
//                 className="w-fit h-[80vh] sm:h-[80vh] lg:h-[80vh] md:h-[100vh] object-contain rounded-lg transition-transform duration-500 hover:scale-110 shadow-inner hover:shadow-[inset_0_0_40px_10px_rgba(3,37,76,0.7)]"
//               />
              
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-1000">
//                 <div className="text-white text-lg sm:text-xl md:text-2xl text-center p-4">
//                   0{image.number} <br /> {image.text} <br />
//                   <span className="text-sm font-light mt-2">
//                     Discover more about this feature.
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="absolute top-1/2 w-full flex justify-between px-4 transform -translate-y-1/2">
//           <button
//             onClick={goToPrevious}
//             className={`bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
//             disabled={currentIndex === 0}
//           >
//             &#9664;
//           </button>
//           <button
//             onClick={goToNext}
//             className={`bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none ${currentIndex === images.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
//             disabled={currentIndex === images.length - 1}
//           >
//             &#9654;
//           </button>
//         </div>

//         <div className="flex justify-center mt-4 space-x-2">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"}`}
//               onClick={() => setCurrentIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { IoArrowBackCircleSharp, IoArrowForwardCircle } from "react-icons/io5";
import { useSwipeable } from "react-swipeable";

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
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
  });

  return (
    <div
      id="amenities"
      className="bg-gray-100 min-h-screen flex flex-col md:flex-row justify-start items-start py-8 px-7 md:px-8 relative"
    >
      <div className="w-full sm:w-2/3 md:w-1/3 flex flex-col items-center mb- lg:ml-0 md:ml-0 ml-0">
        <h1 className="text-[#1A4797] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-center mb-4 z-10">
          Amenities <br /> & <br /> Facilities
        </h1>
      </div>

      {/* Circular Patches */}
      <div className="absolute transform z-0 flex flex-col gap-12 rotate-45 lg:top-10 lg:left-44 md:top-10 left-44 top-[0rem]">
          <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-blue-100 rounded-full"></div>
          <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-blue-100 rounded-full"></div>
          <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-blue-100 rounded-full"></div>
      </div>


      <div
        className="relative w-full sm:w-3/4 md:w-2/3 flex flex-col items-center mb-11"
        {...handlers}
      >
        {/* Slider */}
        <div className="relative w-[80vw] lg:w-[50vw] h-[60vh] sm:h-[80vh] lg:h-[90vh] md:h-[100vh] overflow-hidden hover:scale-105 transition-transform duration-700 ease-in-out">
          <div className="w-full h-full relative">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].text}
              className="w-full h-full object-cover rounded-lg shadow-inner hover:shadow-[inset_0_0_40px_10px_rgba(3,37,76,0.7)]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-60 flex items-center justify-center opacity-100 hover:opacity-100 transition-opacity duration-1000">
              <div className="text-white text-lg sm:text-xl md:text-2xl text-center p-4">
                0{images[currentIndex].number} <br /> {images[currentIndex].text} <br />
                <span className="text-sm font-light mt-2">
                  Discover more about this feature.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 w-full flex justify-between px-4 transform -translate-y-1/2">
          <button
            onClick={goToPrevious}
            className={`bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={currentIndex === 0}
          >
            <IoArrowBackCircleSharp size={30} />
          </button>
          <button
            onClick={goToNext}
            className={`bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none ${currentIndex === images.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={currentIndex === images.length - 1}
          >
            <IoArrowForwardCircle size={30} />
          </button>
        </div>

        {/* Image Indicator Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
