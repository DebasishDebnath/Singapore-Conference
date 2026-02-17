import React from "react";
import SpeakerCard from "../components/SpeakerCard";
import Heading from "../components/Heading";

function KeynoteSpeakers() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 items-center">
      <div className="flex flex-col gap-5 w-full items-center">
        <Heading title1="Keynote" title2="Speakers" />
        <p className="poppins-italic text-lg font-medium text-gray-800">
          <span className="text-blue-theme font-bold">To be announced</span>
        </p>
        <img src="/comming_soon.png" alt="comming soon" className="mx-auto" />
        {/* <SpeakerCard
        imageSrc="./SiddharthaBhattacharyya.png"
        name="Prof. (Dr.) Siddhartha Bhattacharyya"
        description="Prof. (Dr.) Siddhartha Bhattacharyya did his Bachelors in Physics, Bachelors in Optics and Optoelectronics and Masters in Optics and Optoelectronics from University of Calcutta, India in 1995, 1998 and 2000 respectively. He completed PhD in Computer Science and Engineering from Jadavpur University, India in 2008. He is the recipient of the University Gold Medal from the University of Calcutta for his Masters."
      /> */}
      </div>
    </div>
  );
}

export default KeynoteSpeakers;
