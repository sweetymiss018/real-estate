import React from 'react';
import { Facebook, Instagram, Linkedin } from 'react-feather';
import logo from '../assets/Clogo.png'; // Make sure the logo path is correct

export default function Footer() {
  return (
    <div id='Footer' className="bg-[#16263b] text-white py-12 px-6 z-0">
      {/* Container for footer content */}
      <div className="container mx-auto flex flex-col items-center">
        {/* Company Logo */}
        <img src={logo} alt="Trivara Pioneering Spaces" className="h-[30%] w-[30%] mb-2 " />
        
        {/* Contact Information */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className='mb-4'>
            <a href="tel:+1234567890" className="text-orange-200 text-4xl font-serif font-bold scale-[2] hover:text-orange-300 transition-all duration-300 ">
              +91 234 567 890
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
            href="https://www.facebook.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            <Facebook size={32} />
          </a>
          <a
            href="https://www.instagram.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/miss-sweety-7425b01a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300"
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
