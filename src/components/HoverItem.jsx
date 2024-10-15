import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiCross } from "react-icons/bi";

const items = [
  {
    id: 1,
    buttonPosition: { top: "-4vw", left: "12vw" },
    cardPosition: { top: "-4vw", left: "16vw" },
    title: "First Card Title",
    content: "This is the content for the first black card.",
    list: [
      "Let us add",
      "Let us add",
      "Let us add",
      "Let us add",
      "Let us add",
    ],
  },
  {
    id: 2,
    buttonPosition: { top: "-10vw", right: "-38vw" },
    cardPosition: { top: "-10vw", right: "-57vw" },
    title: "Second Card Title",
    content: "This is the content for the second black card.",
    list: [
      "Let us add",
      "Let us add",
      "Let us add",
      "Let us add",
      "Let us add",
    ],
  },
  {
    id: 3,
    buttonPosition: { top: "-4vw", left: "58vw" },
    cardPosition: { top: "-4vw", left: "62vw" },
    title: "Third Card Title",
    content: "This is the content for the third black card.",
    list: [
      "Let us add",
      "Let us add",
      "Let us add",
      "Let us add",
      "Let us add",
    ],
  },
];

const HoverItem = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [cardPosition, setCardPosition] = useState({});

  // Adjust card position for responsiveness
  useEffect(() => {
    const updateCardPosition = () => {
      if (window.innerWidth < 768) {
        // Mobile screen adjustments
        setCardPosition({
          top: "20vw",
          left: "10vw",
        });
      } else {
        setCardPosition(null); // Default to the given positions for larger screens
      }
    };

    window.addEventListener("resize", updateCardPosition);
    updateCardPosition(); // Call it once on mount

    return () => window.removeEventListener("resize", updateCardPosition);
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
    setIsCardVisible(true);
  };

  const handleMouseLeave = () => {
    setIsCardVisible(false);
  };

  const handleClick = (id) => {
    if (hoveredItem === id && isCardVisible) {
      setIsCardVisible(false); // Close if clicked again
    } else {
      setHoveredItem(id); // Show card if it's not already visible
      setIsCardVisible(true);
    }
  };

  return (
    <div className="relative z-20 lg:block md:hidden hidden"> {/* Higher z-index here */}
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="group relative z-20"
          initial={{ y: 100, opacity: 0 }} // Start from below and invisible
          animate={{ y: 0, opacity: 1 }} // Move up and become visible
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }} // Delay and animation timing
        >
          {/* Button */}
          <button
            className="absolute bg-[#035b86] text-3xl border-[.5vw] border-gray-400 p-2 rounded-full z-20
            transition-all ease-in-out duration-1000 hover:bg-white hover:text-black"
            style={item.buttonPosition}
            onClick={() => handleClick(item.id)} // Toggle visibility on click
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <BiCross />
          </button>

          {/* Card (Visible on hover or click) */}
          <AnimatePresence>
            {hoveredItem === item.id && isCardVisible && (
              <motion.div
                className="absolute z-30 bg-[#0A212C] text-white shadow-lg rounded-lg p-4 w-[300px]" // z-30 to ensure it's always on top
                style={cardPosition || item.cardPosition} // Responsive card position
                initial={{ x: 30, opacity: 0 }} // Initial position and opacity
                animate={{ x: 0, opacity: 1 }} // Final position and opacity
                exit={{ x: 30, opacity: 0 }} // Exit animation on hover out
                transition={{ duration: 0.8, delay: 0.1 }} // Animation duration and delay
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-glitten">{item.title}</h2>
                </div>
                <p className="mt-2 text-lg text-gray-400">{item.content}</p>
                <ul className="list-disc pl-5 space-y-2 font-glitten text-lg">
                  {item.list.map((listItem, index) => (
                    <li key={index} className="list-item font-glitten relative">
                      {listItem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default HoverItem;