import Heading from "../../components/Heading";
import React from "react";
import ConferenceCard from "../../components/ConferenceCard.jsx";

const conferenceTracks = [
  {
    id: 1,
    imageSrc: "/gen ai.png",
    title: "Generative AI, Foundation Models & Intelligent Edge Systems",
    focus: "Advanced AI models optimized for edge, IIoT, neuromorphic, and autonomous environments.",
    trackChair: ["Prof. Buddhadeb P", "Prof. Basudeb P"],
    researchTopic: [
      "Generative AI for smart edge systems",
      "Large Language Models (LLMs) for IoT, robotics, and cyber-physical systems",
      "AI-driven content generation for Web 6.0",
      "Federated learning and privacy-preserving AI",
      "Explainable and ethical AI for autonomous systems",
      "Secure federated learning for edge AI",
      "AI-enhanced predictive analytics in digital twins",
      "AI-based optimized routing management for ultra-low latency systems",
    ],
  },
  {
    id: 2,
    imageSrc: "/web 6.0.png",
    title: "Web 6.0, Decentralized Intelligence & Future Internet",
    focus: "Architecture, intelligence, and decentralization for next-generation internet ecosystems.",
    trackChair: ["Prof. Buddhadeb P", "Prof. Basudeb P"],
    researchTopic: [
      "Web 6.0 architecture and emerging standards",
      "Semantic Web and large-scale Knowledge Graphs",
      "Intelligent agents for immersive web experience management",
      "Web-based AI integration and tactile internet",
      "Blockchain and decentralized systems for IIoT and IoET",
      "AR/VR and immersive Web 6.0 applications",
      "Governance, regulatory frameworks, and trust models",
    ],
  },
  {
    id: 3,
    imageSrc: "/digital twin.png",
    title: "Digital Twin, Cyber-Physical Systems & Industrial Intelligence",
    focus: "Integration of physical systems with intelligent digital counterparts for smart industries and cities.",
    trackChair: ["Prof. Buddhadeb P", "Prof. Basudeb P"],
    researchTopic: [
      "Digital twin platforms for smart cities and industries",
      "Digital twin in healthcare and personalized medicine",
      "Industrial digital twin interoperability and data exchange",
      "Integration of digital twin with IIoT/IoET",
      "AI-driven industrial automation and predictive maintenance",
      "Smart energy systems and sustainability management",
      "Industry 4.0 / Industry 5.0 deployment case studies",
      "Digital twins in energy and infrastructure management",
    ],
  },
  {
    id: 4,
    imageSrc: "/tactile internet.png",
    title: "Tactile Internet, 6G & Ultra-Low Latency Edge Networks",
    focus: "Real-time communication systems enabling tactile, immersive, and mission-critical applications.",
    trackChair: ["Prof. Buddhadeb P", "Prof. Basudeb P"],
    researchTopic: [
      "6G for tactile internet and ultra-reliable communications",
      "Latency reduction and management techniques in distributed systems",
      "Haptic feedback and teleoperation",
      "Remote surgery, autonomous vehicles, industrial robotics",
      "Edge computing architectures for IIoT",
      "Integration of IoET with smart home and healthcare systems",
      "Network-level security management for ultra-low latency applications",
    ],
  },
  {
    id: 5,
    imageSrc: "/neuromorphic.png",
    title: "Neuromorphic, In-Memory & Secure Intelligent Computing",
    focus: "Brain-inspired, energy-efficient computing paradigms and trusted architectures.",
    trackChair: ["Prof. Buddhadeb P", "Prof. Basudeb P"],
    researchTopic: [
      "Neuromorphic architectures and hardware design",
      "In-memory computing for AI workload management",
      "Spiking Neural Networks (SNNs) for real-time processing",
      "Hybrid neuromorphic-edge computing frameworks",
      "Applications of neuromorphic systems in robotics and IoT",
      "Cyber-security for IIoT and Web 6.0",
      "Data privacy in digital twins and tactile internet",
      "Quantum-safe cryptographic solutions",
      "Standardization and interoperability challenges",
    ],
  },
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
