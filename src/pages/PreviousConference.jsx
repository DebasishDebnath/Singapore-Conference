import React from "react";
import ConferenceCard from "../components/ConferenceCard.jsx";

function PreviousConference() {
  return (
    <div>
      <ConferenceCard
        imageSrc=""
        title="Generative AI and Foundation Models"
        trackChair={["Prof. Buddhadeb P", "Prof. Basudeb P"]}
        researchTopic={[
          "Generative AI for smart edge systems",
          "Large Language Models (LLMs) for IoT and robotics",
          "AI-driven content generation for Web 6.0",
          "Federated learning and privacy-preserving generative models",
          "Ethical and explainable AI for autonomous systems",
        ]}
      />
    </div>
  );
}

export default PreviousConference;
