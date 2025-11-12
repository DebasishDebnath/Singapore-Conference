import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#e6eaff] w-full shadow-sm">
  <div className=" mx-auto px-4 sm:px-6 lg:px-8">
    {/* Flex Container */}
    <div className="flex items-center justify-center py-3 relative">
      {/* Logo / Title (optional placeholder) */}
      {/* <div className="absolute left-4 md:left-8">
        <h1 className="text-[#122456] font-bold text-lg">Conference</h1>
      </div> */}

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-wrap items-center space-x-6 text-[#122456] font-semibold text-sm lg:text-base">
        <a href="#" className="hover:underline font-bold">
          Home
        </a>

        {/* Authors Dropdown */}
        <div className="relative group">
          <button className="hover:underline">
            Authors <span className="ml-1">&#9662;</span>
          </button>
          <div className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded z-10">
            <a href="#" className="block px-4 py-2 hover:bg-[#e6eaff]">
              Call for Papers
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-[#e6eaff]">
              Submission
            </a>
          </div>
        </div>

        <a href="#" className="hover:underline">
          Technical Programs
        </a>
        <a href="#" className="hover:underline">
          Keynote Speakers
        </a>
        <a href="#" className="hover:underline">
          Gallery
        </a>
        <a href="#" className="hover:underline">
          Video links for session
        </a>
        <a href="#" className="hover:underline">
          Registration
        </a>

        {/* Committee Dropdown */}
        <div className="relative group">
          <button className="hover:underline">
            Committee <span className="ml-1">&#9662;</span>
          </button>
          <div className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded z-10 min-w-[160px]">
            <a href="#" className="block px-4 py-2 hover:bg-[#e6eaff]">
              Organizing
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-[#e6eaff]">
              Technical
            </a>
          </div>
        </div>

        <a href="#" className="hover:underline">
          Previous Conference
        </a>
        <a href="#" className="hover:underline">
          Technical Sponsors
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-[#122456] focus:outline-none absolute right-4"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </div>

    {/* Mobile Menu */}
    {menuOpen && (
      <div className="flex flex-col items-center space-y-2 py-4 text-[#122456] font-semibold text-sm sm:text-base md:hidden">
        <a href="#" className="hover:underline font-bold">
          Home
        </a>

        {/* Authors Dropdown (always visible for mobile) */}
        <div className="flex flex-col items-center space-y-1">
          <span className="font-semibold">Authors</span>
          <a href="#" className="hover:underline">
            Call for Papers
          </a>
          <a href="#" className="hover:underline">
            Submission
          </a>
        </div>

        <a href="#" className="hover:underline">
          Technical Programs
        </a>
        <a href="#" className="hover:underline">
          Keynote Speakers
        </a>
        <a href="#" className="hover:underline">
          Gallery
        </a>
        <a href="#" className="hover:underline">
          Video links for session
        </a>
        <a href="#" className="hover:underline">
          Registration
        </a>

        <div className="flex flex-col items-center space-y-1">
          <span className="font-semibold">Committee</span>
          <a href="#" className="hover:underline">
            Organizing
          </a>
          <a href="#" className="hover:underline">
            Technical
          </a>
        </div>

        <a href="#" className="hover:underline">
          Previous Conference
        </a>
        <a href="#" className="hover:underline">
          Technical Sponsors
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </div>
    )}
  </div>
</nav>

  );
}

export default Navbar;
