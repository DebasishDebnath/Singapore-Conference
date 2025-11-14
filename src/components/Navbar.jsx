import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

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
            <a href="/" className="font-bold">Home</a>

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
                  <a
                    href="/authors/call-for-papers"
                    className="block px-4 py-2 hover:bg-[#e6eaff]"
                  >
                    Call for Papers
                  </a>
                  <a
                    href="/authors/submission"
                    className="block px-4 py-2 hover:bg-[#e6eaff]"
                  >
                    Submission
                  </a>
                </div>
              )}
            </div>

            <a href="/technical-programs">Technical Programs</a>
            <a href="/keynote-speakers">Keynote Speakers</a>
            <a href="/gallery">Gallery</a>
            <a href="/video-links-for-sessions">Video links for session</a>
            <a href="/registration">Registration</a>

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
                  <a
                    href="/committee/organizing-committee"
                    className="block px-4 py-2 hover:bg-[#e6eaff]"
                  >
                    Organizing
                  </a>
                  <a
                    href="/committee/technical-committee"
                    className="block px-4 py-2 hover:bg-[#e6eaff]"
                  >
                    Technical
                  </a>
                </div>
              )}
            </div>

            <a href="/previous-conference">Previous Conference</a>
            <a href="/technical-sponsors">Technical Sponsors</a>
            <a href="/contact">Contact</a>
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
            <a href="/" className="font-bold">Home</a>

            <div className="flex flex-col items-center space-y-1">
              <span className="font-semibold">Authors</span>
              <a href="/authors/call-for-papers">Call for Papers</a>
              <a href="/authors/submission">Submission</a>
            </div>

            <a href="/technical-programs">Technical Programs</a>
            <a href="/keynote-speakers">Keynote Speakers</a>
            <a href="/gallery">Gallery</a>
            <a href="/video-links-for-sessions">Video links for session</a>
            <a href="/registration">Registration</a>

            <div className="flex flex-col items-center space-y-1">
              <span className="font-semibold">Committee</span>
              <a href="/committee/organizing-committee">Organizing</a>
              <a href="/committee/technical-committee">Technical</a>
            </div>

            <a href="/previous-conference">Previous Conference</a>
            <a href="/technical-sponsors">Technical Sponsors</a>
            <a href="/contact">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
