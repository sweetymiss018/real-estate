import React, { useState } from "react";
import img2 from "../assets/img2.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BiCross } from "react-icons/bi";

const List1 = [
  {
    p: "Every inch Spectacular. The mighty Kronos & Atlas will definitely be an address that defines class and yet sets you apart.",
    h1: "Grand Entrance Gate",
  },
  {
    p: "Every inch Spectacular. The mighty Kronos & Atlas will definitely be an address that defines class and yet sets you apart.",
    h1: "Grand Entrance Gate",
  },
  {
    p: "Every inch Spectacular. The mighty Kronos & Atlas will definitely be an address that defines class and yet sets you apart.",
    h1: "Grand Entrance Gate",
  },
];

const List2 = [
  {
    p: "Every inch Spectacular. The mighty Kronos & Atlas will definitely be an address that defines class and yet sets you apart.",
    h1: "Grand Entrance Gate",
  },
  {
    p: "Every inch Spectacular. The mighty Kronos & Atlas will definitely be an address that defines class and yet sets you apart.",
    h1: "Grand Entrance Gate",
  },
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const ref = useRef(null); // Create a reference to the element
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when it comes into view

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div
      id="gallery"
      className="relative min-h-screen gap-4 flex bg-[#0A212C] py-[10vw] font-glitten px-2 "
    >
      <h1 className="absolute top-[-5vw] font-glitten left-[14vw] text-stroke font-bold">
        Gallery
      </h1>
      <motion.div
        ref={ref} // Attach the ref to the container
        className="lg:flex md:flex hidden  justify-start items-center w-[30%]"
        initial={{ x: -300, rotate: -180, opacity: 0 }} // Start off-screen to the left and rotated
        animate={isInView ? { x: 0, rotate: -90, opacity: 1 } : {}} // Animate when the element is in view
        transition={{ duration: 1.2, ease: "easeInOut" }} // Adjust duration and easing for smoothness
      >
        <h1 className="text-[#FDD09E] text-[8vw] font-bold">Gallery</h1>
      </motion.div>
      <div className="flex flex-col justify-center lg:gap-[1vw] md:gap-[1vw] gap-8">
        {List1.map((item, index) => (
          <motion.div
            key={`list1-${index}`} // Unique key for List1 items
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
                backgroundColor: "rgba(10, 60, 83, 0)",
              }} // Start with 0 opacity and slide up from bottom
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                y: hoveredIndex === index ? 0 : 100, // Moves content from bottom to top
                backgroundColor:
                  hoveredIndex === index
                    ? "rgba(10, 60, 83, 0.8)" // Background color with transparency
                    : "rgba(10, 60, 83, 0)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }} // Smooth transition
              className="absolute lg:px-14 md:px-10 px-1 gap-[5vw] top-0 left-0 lg:h-[100%] lg:w-[80%] md:h-[100%] md:w-[80%] h-[100%] w-[100%] flex flex-col items-center justify-center p-4 font-sans"
            >
              <p className="text-white lg:text-xl md:text-xl text-sm ">{item.p}</p>
              <h1 className="text-white lg:text-2xl md:text-2xl text-sm ">{item.h1}</h1>
            </motion.div>
            {/* Render the button only when the item is NOT hovered */}
            {hoveredIndex !== index && (
              <motion.button
                initial={{ backgroundColor: "#035b86" }}
                animate={{
                  backgroundColor:
                    hoveredIndex === index ? "#ffffff" : "#035b86",
                  color: hoveredIndex === index ? "#000000" : "#ffffff",
                }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }} // Duration for the color transition and delay
                className="absolute lg:text-3xl text-lg border-[.5vw] border-gray-400 p-2 rounded-full z-20
             transition-all ease-in-out transform
             top-1/2 lg:left-[40%] md:left-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2"
              >
                <BiCross />
              </motion.button>
            )}
            <img
              className="lg:w-[80%] lg:h-[100%] md:w-[80%] md:h-[100%] w-[100%] h-full object-contain"
              src={img2}
              alt=""
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col justify-center lg:gap-[1vw] md:gap-[1vw] gap-8 pt-10">
        {List2.map((item, index) => (
          <motion.div
            key={`list2-${index}`} // Unique key for List2 items
            onMouseEnter={() => handleMouseEnter(index + List1.length)} // Ensure unique index across both lists
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
                backgroundColor: "rgba(10, 60, 83, 0)",
              }} // Start with 0 opacity and slide up from bottom
              animate={{
                opacity: hoveredIndex === index + List1.length ? 1 : 0,
                y: hoveredIndex === index + List1.length ? 0 : 100, // Moves content from bottom to top
                backgroundColor:
                  hoveredIndex === index + List1.length
                    ? "rgba(10, 60, 83, 0.8)" // Background color with transparency
                    : "rgba(10, 60, 83, 0)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }} // Smooth transition
              className="absolute lg:px-14 md:px-10 px-1 gap-[5vw] top-0 left-0 lg:h-[100%] lg:w-[80%] md:h-[100%] md:w-[80%] h-[100%] w-[100%] flex flex-col items-center justify-center p-4 font-sans"
            >
              <p className="text-white lg:text-xl md:text-xl text-sm ">{item.p}</p>
              <h1 className="text-white lg:text-2xl md:text-2xl text-sm ">{item.h1}</h1>
            </motion.div>
            {/* Render the button only when the item is NOT hovered */}
            {hoveredIndex !== index + List1.length && (
              <motion.button
                initial={{ backgroundColor: "#035b86" }}
                animate={{
                  backgroundColor:
                    hoveredIndex === index ? "#ffffff" : "#035b86",
                  color: hoveredIndex === index ? "#000000" : "#ffffff",
                }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }} // Duration for the color transition and delay
                className="absolute text-3xl border-[.5vw] border-gray-400 p-2 rounded-full z-20
           transition-all ease-in-out transform
           top-1/2 lg:left-[40%] md:left-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2"
              >
                <BiCross />
              </motion.button>
            )}
            <img
              className="lg:w-[80%] lg:h-[100%] md:w-[80%] md:h-[100%] w-[100%] h-full object-contain"
              src={img2}
              alt=""
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
