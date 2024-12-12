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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div
      id="gallery"
      className="relative min-h-screen  flex flex-col justify-center items-center lg:flex-row md:flex-row sm:flex-col sm:items-center bg-[#0A212C] py-[30vw] sm:py[30vw]  md:py-[10vw] lg:py-[10vw] font-glitten"
    >
      <h1 className="absolute top-[-5vw] font-glitten left-[14vw] text-stroke font-bold">
        Gallery
      </h1>
      <motion.div
        ref={ref}
        className="flex justify-start items-center w-[30%]"
        initial={{ x: -300, rotate: -180, opacity: 0 }}
        animate={isInView ? { x: 0, rotate: -90, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <h1 className="text-[#BC9170] hidden lg:block md:block text-[8vw] font-bold">
          Gallery
        </h1>
      </motion.div>

      <div className="flex flex-col justify-center gap-[2vw] items-center">
        {List1.map((item, index) => (
          <motion.div
            key={`list1-${index}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
                backgroundColor: "rgba(10, 60, 83, 0)",
              }}
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                y: hoveredIndex === index ? 0 : 100,
                backgroundColor:
                  hoveredIndex === index
                    ? "rgba(10, 60, 83, 0.8)"
                    : "rgba(10, 60, 83, 0)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
              className="absolute lg:px-14 md:px-8 sm:px-5 gap-[5vw] top-0 left-0 h-[100%] w-[100%] lg:w-[80%] md:w-[80%] sm:w-[100%] flex flex-col items-center justify-center p-4 font-sans"
            >
              <p className="text-white lg:text-xl sm:text-sm">{item.p}</p>
              <h1 className="text-white lg:text-2xl sm:text-lg">{item.h1}</h1>
            </motion.div>
            {hoveredIndex !== index && (
              <motion.button
                initial={{ backgroundColor: "#035b86" }}
                animate={{
                  backgroundColor:
                    hoveredIndex === index ? "#ffffff" : "#035b86",
                  color: hoveredIndex === index ? "#000000" : "#ffffff",
                }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                className="absolute text-3xl border-[.5vw] border-gray-400 p-2 rounded-full z-20 top-1/2 left-[50%] lg:left-[40%] md:left-[40%] sm:left-[50%] -translate-x-1/2 -translate-y-1/2"
              >
                <BiCross />
              </motion.button>
            )}
            <img
              className="w-[100%] lg:w-[80%] md:w-[80%] sm:w-[100%]  h-[100%] object-contain"
              src={img2}
              alt=""
            />
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col justify-center gap-[1vw] pt-10 items-center">
        {List2.map((item, index) => (
          <motion.div
            key={`list2-${index}`}
            onMouseEnter={() => handleMouseEnter(index + List1.length)}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
                backgroundColor: "rgba(10, 60, 83, 0)",
              }}
              animate={{
                opacity: hoveredIndex === index + List1.length ? 1 : 0,
                y: hoveredIndex === index + List1.length ? 0 : 100,
                backgroundColor:
                  hoveredIndex === index + List1.length
                    ? "rgba(10, 60, 83, 0.8)"
                    : "rgba(10, 60, 83, 0)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-0 left-0 h-[100%] w-[100%] lg:w-[80%] md:w-[80%] sm:w-[100%] flex flex-col lg:px-14 md:px-8 sm:px-5 font-sans gap-[5vw] items-center justify-center p-4"
            >
              <p className="text-white lg:text-xl sm:text-sm">{item.p}</p>
              <h1 className="text-white lg:text-2xl sm:text-lg">{item.h1}</h1>
            </motion.div>
            {hoveredIndex !== index + List1.length && (
              <motion.button
                initial={{ backgroundColor: "#035b86" }}
                animate={{
                  backgroundColor:
                    hoveredIndex === index ? "#ffffff" : "#035b86",
                  color: hoveredIndex === index ? "#000000" : "#ffffff",
                }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                className="absolute text-3xl border-[.5vw] border-gray-400 p-2 rounded-full z-20 top-1/2 left-[50%] lg:left-[40%] md:left-[40%] sm:left-[50%] -translate-x-1/2 -translate-y-1/2"
              >
                <BiCross />
              </motion.button>
            )}
            <img
              className="w-[100%] lg:w-[80%] md:w-[80%] sm:w-[100%]  h-[100%] object-contain"
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
