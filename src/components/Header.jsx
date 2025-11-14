import React from "react";
import Navbar from "./Navbar";
import { CalendarDays, MapPin } from "lucide-react";

function Header() {
  return (
    <>
     <div className="w-full relative">
  {/* Background Image */}
<div className="relative h-[420px] md:h-[440px] ">
  {/* Overlay fading from left with background image */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(15,33,81,0.8), rgba(15,33,81,0)),
        url('./singapore.png')
      `,
      backgroundSize: 'cover',       // ensures the image covers the container
      backgroundPosition: 'center',   // centers image on all screens
      backgroundRepeat: 'no-repeat',  // prevents tiling
    }}
  ></div>
</div>




  {/* Content */}
  <div className="absolute inset-0 flex flex-col justify-start px-6 md:px-16 py-10">

    {/* Logos Row */}
    <div className="flex items-center  mb-8">
      <img
        src="/iem.png"
        alt="IEM"
        className="h-14 md:h-18 object-contain"
      />
      <div>

      <p className="text-white text-xs gideon-roman-regular text-center">Institute of Engineering and Management</p>
      <hr className="border-white my-1" />
      <p className="text-white text-xs gideon-roman-regular text-center">University of Engineering and Management</p>
      </div>
      <img
        src="/uem.png"
        alt="UEM"
        className="h-14 md:h-18 object-contain"
      />
    </div>

    {/* Title */}
    <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-snug max-w-3xl poppins-bold ">
      Smart Edge & Neuromorphic<br />
      Systems Conference<br />
      (SENSE-SG)
    </h1>

    {/* Location + Date */}
    <p className="text-white text-lg md:text-xl flex items-center gap-2 mt-4 poppins-regular font-semibold">
      <MapPin className="w-5 h-5" />Singapore |<CalendarDays className="w-5 h-5" /> <span className="font-semibold">14 Aug 2026</span>
    </p>

  </div>
</div>

      <Navbar />
    </>
  );
}

export default Header;
