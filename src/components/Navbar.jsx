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
  FaLinkedin,
} from "react-icons/fa"; // Import icons
import { CgMenuRight } from "react-icons/cg";
import { SlCallOut } from "react-icons/sl";
import { SiGmail } from "react-icons/si";
import { RxValue } from "react-icons/rx";
import { MdConnectWithoutContact } from "react-icons/md"
import logo from "../assets/TrivaraLogo.png";

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
            <a href="tel:+919938845742">
              <div className=" md:block lg:block border-2 rounded-full border-[#1A4797] p-1 sm:p-2 md:p-3">
                <SlCallOut className="text-[#1A4797] text-base sm:text-lg md:text-2xl lg:text-lg" />
              </div>
            </a>
            
            <a
              href="mailto:info@trivara.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-all duration-300"
            >
              <div className="hidden md:block lg:block border-2 rounded-full border-[#1A4797] p-1 sm:p-2 md:p-3">
                <SiGmail className="text-[#1A4797] text-base sm:text-lg md:text-2xl lg:text-lg" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/company/trivara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-all duration-300"
            >
              <div className="hidden md:block lg:block border-2 rounded-full border-[#1A4797] p-1 sm:p-2 md:p-3">
                <FaLinkedin className="text-[#1A4797] text-base sm:text-lg md:text-2xl lg:text-lg" />
              </div>
            </a>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center w-1/3">
            <img
              className="w-56 sm:w-56 md:w-56 lg:w-56 xl:w-64 h-auto object-contain" // Adjust width for different screen sizes
              src={logo}
              alt="Logo"
            />
          </div>

          {/* Menu Icon */}
          <div className="flex gap-3 items-center lg:justify-center md:justify-center justify-end w-1/3">
            <h2 className="text-2xl hidden md:block lg:block ">Menu</h2>
            <button onClick={handleShowMenuItem}>
              <CgMenuRight className="text-yellow-600 text-3xl md:text-3xl lg:text-4xl xl:text-5xl mr-5 lg:mr-0" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-auto font-glitten bg-[#2d4761] w-[70%] md:w-[25%] transition-transform duration-500 ease-in-out ${
          menuOpen
            ? "translate-x-0 translate-y-0"
            : "translate-x-full -translate-y-full rounded-l-2xl"
        } text-white z-50`}
      >
        <div className="lg:p-8 md:p-5 p-4 flex flex-col gap-6  md:gap-8 text-xl md:text-2xl">
          {[
            { 
              name: "Home", 
              icon: <FaHome />, 
              link: "#home" },
            { 
              name: "About Us", 
              icon: <FaInfoCircle />, 
              link: "#aboutUs" 
            },
            {
              name: "Amenities & Facilities",
              icon: <FaBuilding />,
              link: "#amenities",
            },
            { 
              name: "Gallery", 
              icon: <FaImages />, 
              link: "#gallery" 
            },
            { 
              name: "Luxury Lifestyle", 
              icon: <FaCrown />, 
              link: "#lifestyle" 
            },
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
            {
              name: "Our Values",
              icon : <RxValue/>,
              link: "#ourValues"
            },
            {
              name: "Contact Us",
              icon : <MdConnectWithoutContact/>,
              link: "#footer"
            },
            
          ].map((item, index) => (
            <a
              key={item.name}
              href={item.link}
              className={`lg:text-xl md:text-xl text-xl font-semibold font-serif tracking-[0px] text-[#f0c711c1] cursor-pointer hover:text-yellow-300 transform transition-all flex items-center gap-4 duration-500 ${
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
