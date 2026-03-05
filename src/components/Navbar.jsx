import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Desktop dropdowns
  const [authorsOpen, setAuthorsOpen] = useState(false);
  const [committeeOpen, setCommitteeOpen] = useState(false);

  let authorsTimeout;
  let committeeTimeout;

  function handleAuthorsEnter() {
    clearTimeout(authorsTimeout);
    setAuthorsOpen(true);
  }
  function handleAuthorsLeave() {
    authorsTimeout = setTimeout(() => setAuthorsOpen(false), 100);
  }

  function handleCommitteeEnter() {
    clearTimeout(committeeTimeout);
    setCommitteeOpen(true);
  }
  function handleCommitteeLeave() {
    committeeTimeout = setTimeout(() => setCommitteeOpen(false), 100);
  }

  return (
    <nav className="bg-[#e6eaff] w-full shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        {/* Flex Container */}
        <div className="flex items-center justify-center py-3 relative">

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-wrap items-center space-x-6 text-[#122456] font-semibold text-sm lg:text-base">
            <Link to="/" className="font-bold">Home</Link>

            {/* AUTHORS DROPDOWN */}
            <div
              className="relative inline-block cursor-pointer"
              onMouseEnter={handleAuthorsEnter}
              onMouseLeave={handleAuthorsLeave}
            >
              <button
                className="flex items-center gap-1 px-2 py-2 cursor-pointer"
                tabIndex={0}
              >
                Authors
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    authorsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {authorsOpen && (
                <div className="absolute left-0 mt-1 bg-white shadow-lg rounded z-10 w-48">
                  <Link
                    to="/authors/call-for-papers"
                    className="block px-4 py-2 hover:bg-[#e6eaff]"
                  >
                    Call for Papers
                  </Link>
                  <Link
                    to="/authors/submission"
                    className="block px-4 py-2 hover:bg-[#e6eaff]"
                  >
                    Submission
                  </Link>
                </div>
              )}
            </div>

            {/* <Link to="/technical-programs">Technical Programs</Link> */}
            <Link to="/keynote-speakers">Keynote Speakers</Link>
            <Link to="/gallery">Gallery</Link>
            {/* <Link to="/video-links-for-sessions">Video links for session</Link> */}
            <Link to="/registration">Registration</Link>

            {/* COMMITTEE DROPDOWN */}
            <div
              className="relative inline-block"
              onMouseEnter={handleCommitteeEnter}
              onMouseLeave={handleCommitteeLeave}
            >
              <button
                className="flex items-center gap-1 px-2 py-2 cursor-pointer"
                tabIndex={0}
              >
                Committee
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    committeeOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {committeeOpen && (
                <div className="absolute left-0 mt-1 bg-white shadow-lg rounded z-10 min-w-40">
                  <Link
                    to="/committee/organizing-committee"
                    className="block px-4 py-2 hover:bg-[#e6eaff]"
                  >
                    Organizing
                  </Link>
                  <Link
                    to="/committee/technical-committee"
                    className="block px-4 py-2 hover:bg-[#e6eaff]"
                  >
                    Technical
                  </Link>
                </div>
              )}
            </div>

            {/* <Link to="/previous-conference">Previous Conference</Link> */}
            <Link to="/technical-sponsors">Technical Sponsors</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#122456] absolute right-4"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="flex flex-col items-center space-y-2 py-4 text-[#122456] font-semibold text-sm sm:text-base md:hidden">
            <Link to="/" className="font-bold">Home</Link>

            <div className="flex flex-col items-center space-y-1">
              <span className="font-semibold">Authors</span>
              <Link to="/authors/call-for-papers">Call for Papers</Link>
              <Link to="/authors/submission">Submission</Link>
            </div>

            <Link to="/technical-programs">Technical Programs</Link>
            <Link to="/keynote-speakers">Keynote Speakers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/video-links-for-sessions">Video links for session</Link>
            <Link to="/registration">Registration</Link>

            <div className="flex flex-col items-center space-y-1">
              <span className="font-semibold">Committee</span>
              <Link to="/committee/organizing-committee">Organizing</Link>
              <Link to="/committee/technical-committee">Technical</Link>
            </div>

            {/* <Link to="/previous-conference">Previous Conference</Link> */}
            <Link to="/technical-sponsors">Technical Sponsors</Link>
            <Link to="/contact">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
