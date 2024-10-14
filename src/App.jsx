import React, { useEffect, useRef, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion"; // Import framer-motion for animations
import Gallery from "./components/Gallery";
import Amenities from './components/Amenities'
import './App.css'
import Footer from "./components/Footer";
import Logo from './assets/Clogo.png'
import Luxury from "./components/Luxury";
import FloorPlan from "./components/FloorPlan";
import PropertyDetails from "./components/PropertyDetails";
import CallbackForm from "./components/CallbackForm";
import Loader from "./components/Loader";
import CallRequestPopup from "./components/CallRequestPopup";

// const Loader = ({ setLoadingComplete }) => {
//   // Adjusted animation for smooth scaling
//   const loaderVariants = {
//     hidden: { scale: 1, opacity: 1 },
//     visible: { 
//       scale: [0.8, 1, 0.95, 1.05, 1], // Smaller scale changes for smoothness
//       opacity: 1, 
//       transition: { duration: 3, ease: "anticipate", repeat: Infinity } // Smoother transition
//     },
//     exit: { scale: 0, opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } },
//   };

//   useEffect(() => {
//     // Loader stays visible for 5 seconds
//     const timer = setTimeout(() => {
//       setLoadingComplete(true); // Signals when the loading is complete
//     }, 5000); // Keeps the loader for 5 seconds

//     return () => clearTimeout(timer); // Cleanup when component unmounts
//   }, [setLoadingComplete]);

//   return (
//     <motion.div
//       className="fixed inset-0 min-h-screen flex justify-center items-center bg-black z-50"
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//       variants={loaderVariants}
//     >
//       <motion.div
//         className="text-white flex justify-center items-center gap-4 font-glitten font-bold"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//       >
//         {/* Logo Image */}
//         <motion.img
//           src={Logo}
//           alt="Trivara Logo"
//           className="h-[20%] w-[20%] object-contain mix-blend-multiply bg-transparent"
//           animate={loaderVariants}
//         />

//         {/* Text */}
//         <div className="text-center">
//           {/* h1 with neon light effect */}
//           <motion.h1
//             className="text-9xl mt-4 text-center leading-none drop-shadow-lg text-[#2348ac] neon-effect"
//           >
//             Trivara
//           </motion.h1>

//           {/* h2 with neon light effect */}
//           <motion.h2
//             className="text-6xl mt-2 tracking-wide leading-tight drop-shadow-md neon-effect"
//           >
//             Pioneering Spaces
//           </motion.h2>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };


const App = () => {
  const containerRef = useRef(null);
  // const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-x-hidden bg-black ">
      {/* {!loadingComplete && <Loader setLoadingComplete={setLoadingComplete} />} */}
      {/* {loadingComplete && ( */}
        <motion.div
          className="min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CallRequestPopup />
          <Navbar />
          <Home />
          <Amenities/>
          <Gallery/>
          <Luxury/>
          <FloorPlan/>
          <PropertyDetails/>
          <CallbackForm/>
          <Footer/>
        </motion.div>
      {/* )} */}
    </div>
  );
};

export default App;