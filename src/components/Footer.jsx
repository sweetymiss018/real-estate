import React from 'react';
import { Facebook, Instagram, Linkedin } from 'react-feather';
import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md"; // Import icons
import logo from '../assets/TrivaraLogo.png'; // Ensure the logo path is correct

export default function Footer() {
  return (
    <div id='footer' className="bg-gray-200 h-auto text-black py-8 px-6 ">
      <div className="container mx-auto text-center">
        {/* Company Logo */}
        <img src={logo} alt="Trivara Pioneering Spaces" className="mx-auto h-auto w-1/2 lg:w-1/4 mb-8" />

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <MdPhone className="text-2xl text-[#000]" />
            <a href="tel:+916743127088" className="text-2xl  font-bold hover:underline">
              +91 674 312 7088
            </a>
          </div>
          <div className="flex items-center justify-center gap-4">
            <MdLocationPin className="text-2xl text-[#000]" />
            <p className="text-sm  font-bold">
              Trivara Infraventures Private Limited<br />
              FLAT NO-SR/201, PLOT NO-5, SR RESIDENCY, SURYA NAGAR,<br />
              DELTA, BHUBANESWAR-751003, KHORDHA, ODISHA.
            </p>
          </div>
        </div>

        {/* Company Description */}
        <div className="mb-8">
          <p className="text-lg">
            At Trivara, we pioneer spaces that redefine luxury living. With cutting-edge architecture and innovative
            designs,<br/> we create homes that stand the test of time, delivering comfort, elegance, and exclusivity.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-all duration-300"
          >
            <Facebook size={32} />
          </a>
          <a
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
          <a
            href='mailto:info@trivara.co.in'
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-all duration-300"
          >
            <MdEmail size={32} />
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
