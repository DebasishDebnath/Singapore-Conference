import React from "react";
import Heading from "../components/Heading.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const tracks = [
  {
    name: "Track 1 : Generative AI, Foundation Models & Intelligent Edge Systems",
    videoLink: "To Be Published Soon",
  },
  {
    name: "Track 2 : Web 6.0, Decentralized Intelligence & Future Internet",
    videoLink: "To Be Published Soon",
  },
  {
    name: "Track 3 : Digital Twin, Cyber-Physical Systems & Industrial Intelligence",
    videoLink: "To Be Published Soon",
  },
  {
    name: "Track 4 : Tactile Internet, 6G & Ultra-Low Latency Edge Networks",
    videoLink: "To Be Published Soon",
  },
  {
    name: "Track 5 : Neuromorphic, In-Memory & Secure Intelligent Computing",
    videoLink: "To Be Published Soon",
  },
];

function VideoLinksForSessions() {
  const navigate = useNavigate();
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
            <div
              // onClick={() => navigate(track.videoLink)}
              key={index}
              className="shadow-md border border-gray-300 rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-2 bg-indigo-50 cursor-pointer transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-theme">{track.name}</h3>
              <p>{track.videoLink}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoLinksForSessions;
