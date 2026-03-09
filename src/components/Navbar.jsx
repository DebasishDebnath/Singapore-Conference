import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router";

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
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Home
            </NavLink>

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
                  <NavLink
                    to="/authors/call-for-papers"
                    className={({ isActive }) =>
                      `block px-4 py-2 hover:bg-[#e6eaff]${isActive ? " font-bold" : ""}`
                    }
                  >
                    Call for Papers
                  </NavLink>
                  <NavLink
                    to="/authors/submission-n-publication"
                    className={({ isActive }) =>
                      `block px-4 py-2 hover:bg-[#e6eaff]${isActive ? " font-bold" : ""}`
                    }
                  >
                    Submission & Publication
                  </NavLink>
                </div>
              )}
            </div>

            {/* <NavLink to="/technical-programs">Technical Programs</NavLink> */}
            <NavLink
              to="/keynote-speakers"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Keynote Speakers
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Gallery
            </NavLink>
            {/* <NavLink to="/video-links-for-sessions">Video links for session</NavLink> */}
            <NavLink
              to="/registration"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Registration
            </NavLink>

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
                  <NavLink
                    to="/committee/organizing-committee"
                    className={({ isActive }) =>
                      `block px-4 py-2 hover:bg-[#e6eaff]${isActive ? " font-bold" : ""}`
                    }
                  >
                    Organizing
                  </NavLink>
                  <NavLink
                    to="/committee/technical-committee"
                    className={({ isActive }) =>
                      `block px-4 py-2 hover:bg-[#e6eaff] justify-center text-[14px] ${isActive ? " font-bold" : ""}`
                    }
                  >
                    Technical Program Committee
                  </NavLink>
                </div>
              )}
            </div>

            {/* <NavLink to="/previous-conference">Previous Conference</NavLink> */}
            <NavLink
              to="/technical-sponsors"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Technical Sponsors
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#122456] absolute right-4 text-xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="flex flex-col items-center space-y-2 py-4 text-[#122456] font-semibold text-sm sm:text-base md:hidden">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <div className="flex flex-col items-center space-y-1">
              <span className="font-semibold">Authors</span>
              <NavLink
                to="/authors/call-for-papers"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Call for Papers
              </NavLink>
              <NavLink
                to="/authors/submission-n-publication"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Submission & Publication
              </NavLink>
            </div>

            {/* <NavLink to="/technical-programs">Technical Programs</NavLink> */}
            <NavLink
              to="/keynote-speakers"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Keynote Speakers
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </NavLink>
            {/* <NavLink to="/video-links-for-sessions">Video links for session</NavLink> */}
            <NavLink
              to="/registration"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Registration
            </NavLink>

            <div className="flex flex-col items-center space-y-1">
              <span className="font-semibold">Committee</span>
              <NavLink
                to="/committee/organizing-committee"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Organizing
              </NavLink>
              <NavLink
                to="/committee/technical-committee"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Technical Program Committee
              </NavLink>
            </div>

            {/* <NavLink to="/previous-conference">Previous Conference</NavLink> */}
            <NavLink
              to="/technical-sponsors"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Technical Sponsors
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
