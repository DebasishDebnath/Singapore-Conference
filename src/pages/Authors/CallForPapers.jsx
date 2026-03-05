import Heading from "../../components/Heading";
import React from "react";
import ConferenceCard from "../../components/ConferenceCard.jsx";

const conferenceTracks = [
  {
    id: 1,
    imageSrc: "/gen ai.png",
    title: "Artificial Intelligence, Agentic Systems, and Intelligent Decision Making",
    focus: "This track focuses on recent advances in artificial intelligence and intelligent decision-making systems, including the development of autonomous and agent-based AI models capable of real-time reasoning and adaptive learning. The track encourages research on generative AI, large language models, reinforcement learning, and multi-agent systems that support complex decision-making across diverse application domains. Contributions exploring AI-driven automation, intelligent control, and human-AI collaboration for smart systems and industrial applications are particularly welcome.",
    trackChair: [],
    researchTopic: [
    ],
  },
  {
    id: 2,
    imageSrc: "/web 6.0.png",
    title: "Edge Computing, IoT, and Distributed Intelligent Systems",
    focus: "This track addresses emerging research in edge computing, Internet of Things (IoT), and distributed intelligent systems that enable scalable, low-latency data processing and real-time analytics. The focus includes architectures and frameworks for edge–cloud collaboration, fog computing, large-scale IoT deployments, and intelligent sensor networks. Papers exploring edge-enabled AI, distributed data processing, and IoT-based smart environments across industrial, urban, and environmental applications are encouraged.",
    trackChair: [],
    researchTopic: [
    ],
  },
  {
    id: 3,
    imageSrc: "/digital twin.png",
    title: "Digital Twins, Cyber-Physical Systems, and Smart Infrastructure",
    focus: "This track explores the design and implementation of digital twins and cyber-physical systems for intelligent monitoring, simulation, and optimization of complex physical infrastructures. It invites research on AI-driven digital twin models, real-time system integration, predictive maintenance, and intelligent infrastructure management. Contributions focusing on smart manufacturing, Industry 4.0, sustainable infrastructure systems, and advanced simulation techniques are particularly relevant.",
    trackChair: [],
    researchTopic: [
    ],
  },
  {
    id: 4,
    imageSrc: "/tactile internet.png",
    title: "Cybersecurity, Privacy, and Trustworthy Intelligent Systems",
    focus: "This track focuses on ensuring security, privacy, and trust in modern intelligent systems and digital ecosystems. Topics of interest include secure IoT architectures, privacy-preserving machine learning, federated learning for secure data collaboration, and trustworthy AI systems. The track also welcomes research on human-centered cybersecurity, blockchain-based security frameworks, and resilience mechanisms for protecting cyber-physical and distributed systems.",
    trackChair: [],
    researchTopic: [
    ],
  },
  // {
  //   id: 5,
  //   imageSrc: "/neuromorphic.png",
  //   title: "Neuromorphic, In-Memory & Secure Intelligent Computing",
  //   focus: "Brain-inspired, energy-efficient computing paradigms and trusted architectures.",
  //   trackChair: ["Prof. Buddhadeb P", "Prof. Basudeb P"],
  //   researchTopic: [
  //   ],
  // },
];

function CallForPapers() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 items-center">
      <Heading title1="Conference" title2="Tracks" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
        {conferenceTracks.map((track) => (
          <ConferenceCard key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
}

export default CallForPapers;
