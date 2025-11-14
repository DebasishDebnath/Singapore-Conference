import Heading from '../../components/Heading'
import React from 'react'
import ConferenceCard from "../../components/ConferenceCard.jsx";

const conferenceTracks = [
  {
    id: 1,
    imageSrc: "/chatgptBg.png",
    title: "Generative AI and Foundation Models",
    trackChair: ["Prof. Buddhadeb P", "Prof. Basudeb P"],
    researchTopic: [
      "Generative AI for smart edge systems",
      "Large Language Models (LLMs) for IoT and robotics",
      "AI-driven content generation for Web 6.0",
      "Federated learning and privacy-preserving generative models",
      "Ethical and explainable AI for autonomous systems",
    ],
  },
  {
    id: 2,
    imageSrc: "/chatgptBg.png",
    title: "Generative AI and Foundation Models",
    trackChair: ["Prof. Buddhadeb P", "Prof. Basudeb P"],
    researchTopic: [
      "Generative AI for smart edge systems",
      "Large Language Models (LLMs) for IoT and robotics",
      "AI-driven content generation for Web 6.0",
      "Federated learning and privacy-preserving generative models",
      "Ethical and explainable AI for autonomous systems",
    ],
  },
  {
    id: 3,
    imageSrc: "/chatgptBg.png",
    title: "Generative AI and Foundation Models",
    trackChair: ["Prof. Buddhadeb P", "Prof. Basudeb P"],
    researchTopic: [
      "Generative AI for smart edge systems",
      "Large Language Models (LLMs) for IoT and robotics",
      "AI-driven content generation for Web 6.0",
      "Federated learning and privacy-preserving generative models",
      "Ethical and explainable AI for autonomous systems",
    ],
  },
  {
    id: 4,
    imageSrc: "/chatgptBg.png",
    title: "Generative AI and Foundation Models",
    trackChair: ["Prof. Buddhadeb P", "Prof. Basudeb P"],
    researchTopic: [
      "Generative AI for smart edge systems",
      "Large Language Models (LLMs) for IoT and robotics",
      "AI-driven content generation for Web 6.0",
      "Federated learning and privacy-preserving generative models",
      "Ethical and explainable AI for autonomous systems",
    ],
  },
];

function CallForPapers() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-8 items-center">
      <Heading title1='Conference' title2='Tracks'/>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center'>
        {conferenceTracks.map((track) => (
          <ConferenceCard key={track.id} {...track} />
        ))}
      </div>
    </div>
  )
}

export default CallForPapers
