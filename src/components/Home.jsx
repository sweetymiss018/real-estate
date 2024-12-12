import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import image from "../assets/Clogo.jpg";
import HoverItem from "./HoverItem";

const Home = () => {
  return (
    <motion.div
    id="home"
    className="bg-cover bg-center min-h-screen w-full overflow-hidden"
    style={{ backgroundImage: `url( https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 )` }} // Correct image URL format
    initial={{ scale: 1.2 }} // Start zoomed in
    animate={{ scale: 1 }} // Zoom out to normal
    transition={{ duration: 1 }} // Duration of zoom-out animation
  >
     <motion.div 
      className="flex flex-col justify-center lg:justify-end md:justify-center items-start ml-[10vw] h-[100vh] text-white relative z-0">
      
      {/* Render HoverItem component with a higher z-index */}
      <HoverItem />

      {/* First Text */}
      <motion.h1
        className="text-[7.5vw] lg:text-[4.5vw] md:text-[4.8vw] font-glitten font-bold z-10"  // Keep z-10 for text to avoid interference
        initial={{ y: 100, opacity: 0 }} // Start from below and invisible
        animate={{ y: 0, opacity: 1 }} // Move up and become visible
        transition={{ duration: 1.2, ease: "easeOut" }} // Animation timing
      >
        The Landmark of
      </motion.h1>

      {/* Second Text */}
      <motion.h1
        className="text-[10vw]  lg:text-[8vw] md:text-[8.5vw] font-glitten tracking-tighter text-[#FDD09E] pb-[8vw] leading-[7vw] font-[900] z-10"  // Ensure text is behind HoverItem
        initial={{ y: 100, opacity: 0 }} // Start from below and invisible
        animate={{ y: 0, opacity: 1 }} // Move up and become visible
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }} // Delay and animation timing
      >
        Luxury & Exclusivity
      </motion.h1>

    </motion.div>
    </motion.div>
  );
};

export default Home;
