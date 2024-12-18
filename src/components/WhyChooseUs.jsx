import React from "react";

const WhyChooseUs = () => {
  return (
    <div id="ourValues" className=" bg-gray-200 py-12 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Why Choose Us?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 - Mission */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            <li>To build sustainable, high-quality spaces that inspire growth, foster communities, and enhance everyday life.</li>
            <li>To leverage innovative technologies and environmentally friendly practices in creating modern, efficient spaces.</li>
            <li>To deliver exceptional customer experiences by understanding and addressing the unique needs of every client.</li>
          </p>
        </div>

        {/* Card 2 - Vision */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            <li>To redefine infrastructure development by pioneering environmentally conscious, innovative designs that shape a better tomorrow.</li>
            <li>To become a global leader in sustainable construction, setting benchmarks for quality and innovation in the industry.</li>
            <li>To empower communities through infrastructure that promotes connectivity, inclusivity, and a higher standard of living.</li>
          </p>
        </div>

        {/* Card 3 - Core Values */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Core Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Sustainability: Commitment to eco-friendly practices for a better future.</li>
            <li>Innovation: Adopting cutting-edge designs and construction methods.</li>
            <li>Integrity: Ensuring transparency, trust, and excellence in every interaction.</li>
            <li>Community: Designing spaces that bring people together and improve lives.</li>
            <li>Excellence: Delivering unmatched quality from inception to completion.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
