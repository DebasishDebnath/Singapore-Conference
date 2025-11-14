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
        <a href="/" className=" font-bold">
          Home
        </a>

        {/* Authors Dropdown */}
        <div className="relative group">
          <button className="">
            Authors <span className="ml-1">&#9662;</span>
          </button>
          <div className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded z-10">
            <a href="/authors/call-for-papers" className="block px-4 py-2 hover:bg-[#e6eaff]">
              Call for Papers
            </a>
            <a href="/authors/submission" className="block px-4 py-2 hover:bg-[#e6eaff]">
              Submission
            </a>
          </div>
        </div>

        <a href="/technical-programs" className="">
          Technical Programs
        </a>
        <a href="/keynote-speakers" className="">
          Keynote Speakers
        </a>
        <a href="/gallery" className="">
          Gallery
        </a>
        <a href="/video-links-for-sessions" className="">
          Video links for session
        </a>
        <a href="/registration" className="">
          Registration
        </a>

        {/* Committee Dropdown */}
        <div className="relative group">
          <button className="">
            Committee <span className="ml-1">&#9662;</span>
          </button>
          <div className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded z-10 min-w-[160px]">
            <a href="/committee/organizing-committee" className="block px-4 py-2 hover:bg-[#e6eaff]">
              Organizing
            </a>
            <a href="/committee/technical-committee" className="block px-4 py-2 hover:bg-[#e6eaff]">
              Technical
            </a>
          </div>
        </div>

        <a href="/previous-conference" className="">
          Previous Conference
        </a>
        <a href="/technical-sponsors" className="">
          Technical Sponsors
        </a>
        <a href="/contact" className="">
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
        <a href="/" className=" font-bold">
          Home
        </a>

        {/* Authors Dropdown (always visible for mobile) */}
        <div className="flex flex-col items-center space-y-1">
          <span className="font-semibold">Authors</span>
          <a href="/authors/call-for-papers" className="">
            Call for Papers
          </a>
          <a href="/authors/submission" className="">
            Submission
          </a>
        </div>

        <a href="/technical-programs" className="">
          Technical Programs
        </a>
        <a href="/keynote-speakers" className="">
          Keynote Speakers
        </a>
        <a href="/gallery" className="">
          Gallery
        </a>
        <a href="/video-links-for-sessions" className="">
          Video links for session
        </a>
        <a href="/registration" className="">
          Registration
        </a>

        <div className="flex flex-col items-center space-y-1">
          <span className="font-semibold">Committee</span>
          <a href="/committee/organizing-committee" className="">
            Organizing
          </a>
          <a href="/committee/technical-committee" className="">
            Technical
          </a>
        </div>

        <a href="/previous-conference" className="">
          Previous Conference
        </a>
        <a href="/technical-sponsors" className="">
          Technical Sponsors
        </a>
        <a href="/contact" className="">
          Contact
        </a>
      </div>
    )}
  </div>
</nav>

  );
}

export default Navbar;
