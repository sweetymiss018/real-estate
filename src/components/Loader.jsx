import React from 'react';
import '../App.css'; // Ensure Tailwind is imported in your CSS

const StylishLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r bg-blue-100">
      <div className="text-4xl font-bold font-sans overflow-hidden tect-center whitespace-nowrap border-r-4 border-white animate-typing text-white">
        <span className="animate-fade-in text-yellow-300">T</span>
        <span className="animate-fade-in delay-100 text-yellow-400">r</span>
        <span className="animate-fade-in delay-200 text-yellow-500">i</span>
        <span className="animate-fade-in delay-300 text-yellow-600">v</span>
        <span className="animate-fade-in delay-400 text-yellow-700">a</span>
        <span className="animate-fade-in delay-500 text-yellow-800">r</span>
        <span className="animate-fade-in delay-600 text-yellow-900">a</span>
        <span className="animate-fade-in delay-700 text-pink-300"> </span>
        <span className="animate-fade-in delay-800 text-pink-400">P</span>
        <span className="animate-fade-in delay-900 text-pink-500">i</span>
        <span className="animate-fade-in delay-1000 text-pink-600">o</span>
        <span className="animate-fade-in delay-1100 text-pink-700">n</span>
        <span className="animate-fade-in delay-1200 text-pink-800">e</span>
        <span className="animate-fade-in delay-1300 text-pink-900">e</span>
        <span className="animate-fade-in delay-1400 text-purple-300">r</span>
        <span className="animate-fade-in delay-1500 text-purple-400">i</span>
        <span className="animate-fade-in delay-1600 text-purple-500">n</span>
        <span className="animate-fade-in delay-1700 text-purple-600">g</span>
        <span className="animate-fade-in delay-1800 text-purple-700"> </span>
        <span className="animate-fade-in delay-1900 text-purple-800">S</span>
        <span className="animate-fade-in delay-2000 text-purple-900">p</span>
        <span className="animate-fade-in delay-2100 text-blue-300">a</span>
        <span className="animate-fade-in delay-2200 text-blue-400">c</span>
        <span className="animate-fade-in delay-2300 text-blue-500">e</span>
        <span className="animate-fade-in delay-2400 text-blue-600">s</span>
      </div>
    </div>
  );
};

export default StylishLoader;

