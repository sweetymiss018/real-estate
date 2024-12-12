import React from "react";
import image from "../assets/b.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 h-full py-10 flex justify-center">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row md:items-start">
        {/* Left Side - 3D Company Photo */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <div className="transform hover:scale-105 transition-transform duration-500 shadow-2xl shadow-gray-500 rounded-lg">
            <img
              src={image} // Replace with your company image path
              alt="Company Building 3D View"
              className="w-full max-w-full rounded-lg h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] object-cover"
              style={{ transform: "rotateY(10deg) rotateX(5deg)" }} // 3D effect
            />
          </div>
        </div>

        {/* Right Side - Company's History */}
        <div className="w-full md:w-1/2 md:pl-8">
          <section className="text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1A4797] mb-6">
              Our History
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Trivara was established in 2005 with a vision to transform the
              real estate industry by delivering unmatched quality and service.
              Over the years, we have expanded our reach, embraced innovation,
              and solidified our place as a trusted leader in the field.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              In 2010, we achieved a significant milestone by opening our second
              office, and in 2015, we introduced our luxury properties division,
              which has since become a hallmark of excellence. With each passing
              year, our commitment to client satisfaction and sustainable growth
              has only grown stronger.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Today, Trivara stands as a beacon of trust, continually striving
              to set new standards in the real estate industry through
              integrity, innovation, and dedication. We look forward to many
              more years of serving our clients and making their property dreams
              a reality.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
