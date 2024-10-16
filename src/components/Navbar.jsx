import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneVolume,
  FaHome,
  FaBuilding,
  FaImages,
  FaCrown,
  FaClipboardList,
  FaShoppingCart,
  FaPhoneSquareAlt,
  FaInfoCircle,
} from "react-icons/fa"; // Import icons
import { IoListOutline } from "react-icons/io5";
import logo from "../assets/Clogo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [navbarBg, setNavbarBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos < scrollPos) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }

    if (currentScrollPos > 50) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  const handleShowMenuItem = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar with motion effects */}
      <motion.nav
        className={`fixed z-50 top-0 left-0 w-full overflow-x-hidden transition-all duration-1000 ease-in-out ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } ${navbarBg ? "bg-gray-300 shadow-lg" : "bg-transparent"}`}
        initial={{ scale: 1 }}
        animate={{ scale: navbarBg ? 1 : 1.1 }}
        exit={{ scale: 0 }}
      >
        <div
          className={`container mx-auto lg:px-8 md:px-8 px-10 lg:py-4 md:py-4 py-2 md:pb-6 flex justify-between md:justify-around items-center text-sm md:text-lg transition-colors duration-700 ${
            navbarBg ? "text-black" : "text-white"
          }`}
        >
          {/* Contact Section */}
          <div className="flex gap-2 lg:justify-center md:justify-center justify-start items-center w-1/3">
            {/* Phone Icon */}
            <div className="hidden md:block lg:block border-2 rounded-full border-yellow-600 p-1 sm:p-2 md:p-3">
              <FaPhoneVolume className="text-yellow-600 text-base sm:text-lg md:text-2xl lg:text-lg" />
            </div>

            {/* Phone Number */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight sm:tracking-normal md:tracking-wide lg:tracking-wider">
              +91 1234567890
            </p>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center w-1/3">
            <img
              className="w-32 sm:w-36 md:w-40 lg:w-56 xl:w-64 h-auto object-contain" // Adjust width for different screen sizes
              src={logo}
              alt="Logo"
            />
          </div>

          {/* Menu Icon */}
          <div className="flex gap-3 items-center lg:justify-center md:justify-center justify-end w-1/3">
            <h2 className="text-2xl hidden md:block lg:block ">Menu</h2>
            <button onClick={handleShowMenuItem}>
              <IoListOutline className="text-yellow-600 text-3xl md:text-3xl lg:text-4xl xl:text-5xl" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 lg:h-full md:h-full h-[70%] pt-4 font-glitten bg-gray-800 w-[70%] md:w-[40%] transition-transform duration-500 ease-in-out ${
          menuOpen
            ? "translate-x-0 translate-y-0"
            : "translate-x-full -translate-y-full rounded-l-2xl"
        } text-white z-50`}
      >
        <div className="lg:p-8 md:p-5 p-4 flex flex-col gap-6  md:gap-8 text-xl md:text-2xl">
          {[
            { name: "Home", icon: <FaHome />, link: "#home" },
            {
              name: "Amenities & Facilities",
              icon: <FaBuilding />,
              link: "#amenities",
            },
            { name: "Gallery", icon: <FaImages />, link: "#gallery" },
            { name: "Luxury Lifestyle", icon: <FaCrown />, link: "#lifestyle" },
            {
              name: "Floor Plan",
              icon: <FaClipboardList />,
              link: "#floorplan",
            },
            { name: "Buy Home", icon: <FaShoppingCart />, link: "#buyhome" },
            {
              name: "Request a Callback",
              icon: <FaPhoneSquareAlt />,
              link: "#callback",
            },
            { name: "About Us", icon: <FaInfoCircle />, link: "#Footer" },
          ].map((item, index) => (
            <a
              key={item.name}
              href={item.link}
              className={`lg:text-3xl md:text-2xl text-xl font-semibold font-glitten tracking-[-2px] text-[#f0c71177] cursor-pointer hover:text-yellow-500 transform transition-all flex items-center gap-4 duration-500 ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              onClick={handleCloseMenu}
              style={{
                transitionDelay: `${300 + index * 100}ms`, // Apply dynamic delay
              }}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleCloseMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
