import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import image from "../assets/top-banner.jpg";
import HoverItem from "./HoverItem";

const Home = () => {
  return (
    <motion.div id="home"
      className="bg-cover bg-center min-h-screen w-full overflow-y-hidden"
      style={{ backgroundImage: `url(https://media.istockphoto.com/id/1159873271/photo/residential-area-in-the-city-modern-apartment-buildings.jpg?b=1&s=612x612&w=0&k=20&c=jAvFUVVp30nDNsNUeiUikC1dtW_gwqVclck9Ma2Y-SI=)` }}
      initial={{ scale: 1.2 }} // Initial scale (zoomed in)
      animate={{ scale: 1 }} // Final scale (normal)
      transition={{ duration: 1 }} // Duration of the zoom-out effect
    >
     <motion.div 
      className="flex flex-col justify-end items-start ml-[10vw] h-[100vh] text-white relative z-0">
      
      {/* Render HoverItem component with a higher z-index */}
      <HoverItem className="z-20" />

      {/* First Text */}
      <motion.h1
        className="text-[4.5vw] font-glitten font-bold z-10"  // Keep z-10 for text to avoid interference
        initial={{ y: 100, opacity: 0 }} // Start from below and invisible
        animate={{ y: 0, opacity: 1 }} // Move up and become visible
        transition={{ duration: 1.2, ease: "easeOut" }} // Animation timing
      >
        The Landmark of
      </motion.h1>

      {/* Second Text */}
      <motion.h1
        className="text-[8vw] font-glitten tracking-tighter text-[#FDD09E] pb-[8vw] leading-[7vw] font-[900] z-10"  // Ensure text is behind HoverItem
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
