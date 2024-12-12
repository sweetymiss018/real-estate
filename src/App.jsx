import React, { useEffect, useRef, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion"; // Import framer-motion for animations
import Gallery from "./components/Gallery";
import Amenities from "./components/Amenities";
import "./App.css";
import Footer from "./components/Footer";
import Logo from "./assets/Clogo.png";
import Luxury from "./components/Luxury";
import FloorPlan from "./components/FloorPlan";
import PropertyDetails from "./components/PropertyDetails";
import CallbackForm from "./components/CallbackForm";
import Preloader from "./components/Preloader";
import CallRequestPopup from "./components/CallRequestPopup";
import AboutUs from "./components/AboutUs";
import { FiPhoneCall } from "react-icons/fi";

const App = () => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    setShowPopup(true); // Show the popup
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="min-h-screen relative overflow-x-hidden bg-black">
          <motion.div
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <Home />
            <AboutUs />
            <Amenities />
            <Gallery />
            <Luxury />
            <FloorPlan />
            <PropertyDetails />
            <CallbackForm />
            <Footer />
          </motion.div>

          {/* Sticky Button */}
          <button
            onClick={handleButtonClick}
            className="fixed items-center justify-center bottom-4 right-4 px-6 py-3 h-20 w-20 lg:h-20 lg:w-20 text-sm rounded-full bg-[#1A4797] text-white hover:bg-[#008FD5] transition animate-bounce"
          >
            {/* Fix Quick Call */}
            <FiPhoneCall className="text-white items-center justify-center w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10"/>
          </button>

          {/* Popup Form */}
          {showPopup && (
            <CallRequestPopup
              triggerPopup={showPopup}
              onClose={() => setShowPopup(false)}
            />
          )}
        </div>
      )}
    </>
  );
};

export default App;
