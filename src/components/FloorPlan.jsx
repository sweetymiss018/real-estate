import React from 'react';

function FloorPlan() {
  return (
    <div id='floorplan' className="min-h-screen bg-red-50 lg:px-8 md:px-8 px-2 py-12 relative">
      {/* Title */}
      <h1 className="lg:text-7xl md:text-5xl text-5xl text-[#BC9170] font-serif font-semibold lg:mb-20 md:mb-10 mb-10">Floor Plan</h1>

      {/* Semi-circles using Tailwind CSS
      // <div className="absolute top-0 right-0 w-24 h-12 bg-[#BC9170] bg-opacity-20 rounded-tl-full rounded-br-full border-t-2 border-r-2 border-[#BC9170]"></div>
      // <div className="absolute bottom-0 left-0 w-24 h-12 bg-[#BC9170] bg-opacity-20 rounded-tr-full rounded-bl-full border-b-2 border-l-2 border-[#BC9170]"></div> */}

      {/* Floor Plan Images */}
      <div className="flex justify-center lg:flex-row md:flex-row flex-col  items-center gap-12 lg:gap-44 md:gap-24">
        {/* Floor Plan 1 */}
        <div className="relative group">
          <img
            src="https://assotechpride.com/img/floor1.png"
            alt="Floor Plan 1"
            className="w-[450px] h-[300px] object-cover transition-transform duration-500 group-hover:-rotate-[25deg] group-hover:scale-110"
          />
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold">4.5 BHK</h2>
            <p>Carpet Area: 2000 sq. ft.</p>
            <p>Built-up Area: 2500 sq. ft.</p>
            <a
              href="#get-quote"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 mt-2 block"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Floor Plan 2 */}
        <div className="relative group">
          <img
            src="https://assotechpride.com/img/floor2.png"
            alt="Floor Plan 2"
            className="w-[450px] h-[300px] object-cover transition-transform duration-500 group-hover:-rotate-[30deg] group-hover:scale-110"
          />
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold">3.5 BHK</h2>
            <p>Carpet Area: 1600 sq. ft.</p>
            <p>Built-up Area: 2000 sq. ft.</p>
            <a
              href="#get-quote"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 mt-2 block"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloorPlan;