import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
    
    <header className="relative w-full min-h-[400px] bg-[#122456] text-white flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-6 sm:px-10 md:px-16 py-10 overflow-hidden poppins-regular">
      {/* Background Image (Right Side / Overlay for small screens) */}
      <div className="absolute inset-0 md:inset-y-0 md:right-0 md:left-auto w-full md:w-1/2 opacity-30 md:opacity-100">
        <img
          src="./singapore.png"
          alt="Singapore Skyline"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl space-y-6">
        <img
          src="./iem_logo.png"
          alt="IEM Logo"
          className="h-20 sm:h-24 mb-2 sm:mb-4"
        />

        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-tight">
          <span className="block">Smart Edge & Neuromorphic</span>
          <span className="block">Systems Conference</span>
          <span className="block">(SENSE-SG)</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-medium mt-2 sm:mt-4">
          Singapore &nbsp;|&nbsp; 14 Aug 2026
        </p>
      </div>
    </header>
    <Navbar />
    </>
  );
}

export default Header;
