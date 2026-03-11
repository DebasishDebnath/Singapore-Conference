import React from "react";
import Navbar from "./Navbar";
import { CalendarDays, MapPin } from "lucide-react";
import logo from "/logo.jpeg";
function Header() {
  return (
    <>
      {/* Marquee Banner */}

      <div className="w-full relative">
        {/* Background Image */}
        <div className="relative h-[400px] md:h-[440px]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(15,33,81,0.8), rgba(15,33,81,0)), url('/singapore.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-start px-6 md:px-16 py-10 z-20">
          {/* Logos Row */}
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex md:mb-8 items-center whitespace-nowrap">
              <img
                src="/iem.png"
                alt="IEM"
                className="h-14 md:h-18 object-contain"
              />
              <div>
                <p className="text-white text-xs gideon-roman-regular text-center">
                  Institute of Engineering & Management
                </p>
                <hr className="border-white my-1" />
                <p className="text-white text-xs gideon-roman-regular text-center">
                  University of Engineering and Management
                </p>
              </div>
              <img
                src="/uem.png"
                alt="UEM"
                className="h-14 md:h-18 object-contain"
              />
            </div>

            <div className="flex gap-6 justify-center m-2">
              <img
                src="/images.png"
                alt="IEEE"
                className="h-10 md:h-18 object-contain"
              />
              <img
                src="/wiley.svg"
                alt="Wiley"
                className="h-10 md:h-18 object-contain"
              />
            </div>
          </div>

          {/* SENSE-SG Logo + Title */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-2">
            <img
              src="/logo.jpeg"
              alt="SENSE-SG Logo"
              className="h-20 md:h-28 object-contain bg-white/10 rounded-xl p-1 backdrop-blur-sm"
            />
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-snug max-w-3xl poppins-bold">
              Smart Edge & Neuromorphic
              <br />
              Systems Conference
              <br />
              (SENSE-SG)
            </h1>
          </div>

          {/* Location + Date */}
          <p className="text-white text-base sm:text-lg md:text-xl flex md:flex-row flex-col flex-wrap md:items-center gap-2 sm:gap-3 mt-4 poppins-regular font-semibold">
            <span className="flex items-center gap-1">
              <MapPin className="w-5 h-5" />
              Singapore
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              <CalendarDays className="w-5 h-5" />
              <span className="font-semibold">9th - 11th June 2026</span>
            </span>
          </p>
        </div>
      </div>
      <div className="w-full bg-[#0f2151] text-white py-2 overflow-hidden border-b border-blue-400">
        <div className="flex items-center gap-6 animate-none">
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="6"
            className="text-sm sm:text-base font-medium tracking-wide"
          >
            <span className="flex items-center gap-3">
              {/* <img
                src={logo}
                alt="SENSE-SG Logo"
                className="h-8 object-contain inline-block align-middle mx-3"
              /> */}
              <span>
                CMT Acknowledgement: The Microsoft CMT service was used for
                managing the peer-reviewing process for this conference. This
                service was provided for free by Microsoft and they bore all
                expenses, including costs for Azure cloud services as well as
                for software development and support.
              </span>
              {/* <img
                src="/WhatsApp_Image_2026-03-11_at_3_35_24_PM.jpeg"
                alt="SENSE-SG Logo"
                className="h-8 object-contain inline-block align-middle mx-3"
              /> */}
              <span>
                CMT Acknowledgement: The Microsoft CMT service was used for
                managing the peer-reviewing process for this conference. This
                service was provided for free by Microsoft and they bore all
                expenses, including costs for Azure cloud services as well as
                for software development and support.
              </span>
            </span>
          </marquee>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Header;
