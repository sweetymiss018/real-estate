import React from 'react';
import { Facebook, Instagram, Linkedin } from 'react-feather';
import logo from '../assets/TrivaraLogo.png'; // Make sure the logo path is correct

export default function Footer() {
  return (
    <div id='Footer' className="bg-gray-200 h-auto lg:min-h-screen md:min-h-screen sm:h-auto text-black py-1 px-6 z-0">
      {/* Container for footer content */}
      <div className="container mx-auto gap-4 flex flex-col items-center">
        {/* Company Logo */}
        <img src={logo} alt="Trivara Pioneering Spaces" className="h-[30%] w-[50%] lg:w-[30%] mb-8" />
        
        {/* Contact Information */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-1">Contact Us</h2>
          <p className='mb-4'>
            <a href="tel:+916743127088" className="text-[#BC9170]] text-4xl font-serif font-bold hover:scale-[5px] transition-all duration-300 ">
              +91 674 312 7088
            </a>
          </p>
          <p>
            <strong>Trivara Infraventures private Limited <br/>FLAT NO-SR/201, PLOT NO-5 , SR RESIDENCY, SURYA NAGAR, DELTA, BHUBANESWAR-751003, KHORDHA, ODISHA.</strong>
          </p>
        </div>

        {/* Company Description */}
        <div className="text-center max-w-lg mb-8">
          <p className="text-lg">
            At Trivara, we pioneer spaces that redefine luxury living. With cutting-edge architecture and innovative
            designs, we create homes that stand the test of time, delivering comfort, elegance, and exclusivity.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-8">
          <a
            // href="https://www.facebook.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-all duration-300"
          >
            <Facebook size={32} />
          </a>
          <a
            // href="https://www.instagram.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-all duration-300"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://www.linkedin.com/company/trivara/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-all duration-300"
          >
            <Linkedin size={32} />
          </a>
        </div>

        {/* Footer Bottom Line */}
        <div className="border-t border-gray-700 w-full text-center pt-4 text-sm">
          &copy; 2024 Trivara Pioneering Spaces. All rights reserved.
        </div>
      </div>
    </div>
  );
}
