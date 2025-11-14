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
import CallForPapers from "./pages/Authors//CallForPapers";
import Submission from "./pages/Authors/Submission";
import TechnicalPrograms from "./pages/TechnicalPrograms";
import KeynoteSpeakers from "./pages/KeynoteSpeakers";
import Gallery from "./pages/Gallery";
import VideoLinksForSessions from "./pages/VideoLinksForSessions";
import Registration from "./pages/Registration";
import OrganizingCommittee from "./pages/Committee/OrganizingCommittee";
import TechnicalCommittee from "./pages/Committee/TechnicalCommittee";
import PreviousConference from "./pages/PreviousConference";
import TechnicalSponsors from "./pages/TechnicalSponsors";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/authors/call-for-papers" element={<CallForPapers />} />
      <Route path="/authors/submission" element={<Submission />} />
      <Route path="/technical-programs" element={<TechnicalPrograms />} />
      <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route
        path="/video-links-for-sessions"
        element={<VideoLinksForSessions />}
      />
      <Route path="/registration" element={<Registration />} />
      <Route
        path="/committee/organizing-committee"
        element={<OrganizingCommittee />}
      />
      <Route
        path="/committee/technical-committee"
        element={<TechnicalCommittee />}
      />
      <Route path="/previous-conference" element={<PreviousConference />} />
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
