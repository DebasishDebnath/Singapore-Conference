import React from "react";
import MainLayout from "./layouts/MainLayout";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import "./index.css";
import Home from "./pages/Home";
import CallForPapers from "./pages/Authors/CallForPapers";
import OrganizingCommittee from "./pages/Committee/OrganizingCommittee";
import Submission from "./pages/Authors/Submission";
// import PaperSubmission from "./pages/Authors/PaperSubmission";
// import TechnicalPrograms from "./pages/TechnicalPrograms";
import KeynoteSpeakers from "./pages/KeynoteSpeakers";
import Gallery from "./pages/Gallery";
// import VideoLinksForSessions from "./pages/VideoLinksForSessions";
import Registration from "./pages/Registration";
import TechnicalCommittee from "./pages/Committee/TechnicalCommittee";
import PreviousConference from "./pages/PreviousConference";
import TechnicalSponsors from "./pages/TechnicalSponsors";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/authors/call-for-papers" element={<CallForPapers />} />
      <Route path="/authors/submission-n-publication" element={<Submission />} />
      {/* <Route path="/authors/submit-your-manuscript" element={<PaperSubmission />} /> */}
      {/* <Route path="/technical-programs" element={<TechnicalPrograms />} /> */}
      <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
      <Route path="/gallery" element={<Gallery />} />
      {/* <Route
        path="/video-links-for-sessions"
        element={<VideoLinksForSessions />}
      /> */}
      <Route path="/registration" element={<Registration />} />
      <Route
        path="/committee/organizing-committee"
        element={<OrganizingCommittee />}
      />
      <Route
        path="/committee/technical-committee"
        element={<TechnicalCommittee />}
      />
      {/* <Route path="/previous-conference" element={<PreviousConference />} /> */}
      <Route path="/technical-sponsors" element={<TechnicalSponsors />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";

// function UnderMaintenance() {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
//         fontFamily: "sans-serif",
//         textAlign: "center",
//         padding: "20px",
//       }}
//     >
//       <div style={{ fontSize: "64px", marginBottom: "16px" }}>🔧</div>
//       <h1 style={{ color: "#ffffff", fontSize: "2.5rem", margin: "0 0 12px" }}>
//         Under Maintenance
//       </h1>
//       <p
//         style={{
//           color: "#94a3b8",
//           fontSize: "1.1rem",
//           maxWidth: "480px",
//           lineHeight: "1.6",
//         }}
//       >
//         We're currently working on improving our website. We'll be back online
//         shortly. Thank you for your patience!
//       </p>
//       <div
//         style={{
//           marginTop: "32px",
//           padding: "12px 24px",
//           background: "#1e40af",
//           borderRadius: "8px",
//           color: "#fff",
//           fontSize: "0.95rem",
//         }}
//       >
//         Singapore Conference 2025
//       </div>
//     </div>
//   );
// }

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <UnderMaintenance />
//   </StrictMode>,
// );
