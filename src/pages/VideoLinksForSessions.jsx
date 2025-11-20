import React from "react";
import Heading from "../components/Heading.jsx";
import { Link } from "react-router-dom";

const tracks = [
  {
    name: "Track 1 : AI for Smart Edge Systems",
    videoLink: "https://t.ly/DSO_-",
  },
  {
    name: "Track 2 : AI for Smart Edge Systems",
    videoLink: "https://t.ly/EvWme",
  },
  {
    name: "Track 3 : AI for Smart Edge Systems",
    videoLink: "https://t.ly/9fu33",
  },
];

function VideoLinksForSessions() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 items-center">
      <Heading title1="Video link for" title2="Session" />

      <div className="w-full rounded-3xl shadow-md border border-gray-300 lg:p-16 md:p-12 p-8 flex flex-col lg:gap-20 md:gap-14 gap-10 ">
        <p className="poppins-italic text-lg font-medium text-blue-theme">
          All members please note. The following links can be used to enter the
          online version of any of the three session tracks during the entire
          course of the conference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-6 poppins-italic">
          {tracks.map((track, index) => (
            <Link
              to={track.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="shadow-md border border-gray-300 rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-2 bg-indigo-50 cursor-pointer transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-theme">{track.name}</h3>
              <p>{track.videoLink}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoLinksForSessions;
