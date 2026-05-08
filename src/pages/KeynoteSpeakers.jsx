import React from "react";
import SpeakerCard from "../components/SpeakerCard";
import Heading from "../components/Heading";

function KeynoteSpeakers() {
  const speakers = [
    {
      name: "Dr. Gabor Benedek",
      image: "./Dr. Gabor Benedek.jpg",
      description: "Data Scientist Partner at Lynx Analytics and Thesys SEA",
    },
    {
      name: "Dr. Mathew Chua",
      image: "./Dr. Mathew Chua.jpg",
      description: "Associate Professor, National University of Singapore",
    },
    {
      name: "Dr. Peter Leong",
      image: "./Dr. Peter Leong.jpg",
      description: "Lead AI Specialist Singapore Polytechnik",
    },
    {
      name: "Xulang Zhang",
      image: "./Xulang Zhang.jpg",
      description: "Nanyang Technology University",
    },
    {
      name: "Dr. Tan Kian Hua",
      image: "./Dr. Tan Kian Hua.jpg",
      description: "Senior Cybersecurity Leader LPS Singapore",
    },
    {
      name: "Shilajit Das",
      image: "./Shilajit Das.jpeg",
      description: "Senior Security Engineer (India Lead), C2treds"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 items-center">
      <div className="flex flex-col gap-5 w-full items-center">
        <Heading title1="Keynote" title2="Speakers" />
        {/* <p className="poppins-italic text-lg font-medium text-gray-800">
          <span className="text-blue-theme font-bold">To be announced</span>
        </p>
        <img src="/comming_soon.png" alt="comming soon" className="mx-auto" /> */}
        {speakers.map((speaker) => (
          <SpeakerCard
            key={`${speaker.name}-${speaker.image}`}
            imageSrc={speaker.image}
            name={speaker.name}
            description={speaker.description}
          />
        ))}
      </div>
    </div>
  );
}

export default KeynoteSpeakers;
