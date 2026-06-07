import React from "react";
import Heading from "../components/Heading";
import { useNavigate } from "react-router";

function Schedule() {
  const navigate = useNavigate();
  return (
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 items-start">
      <div className="flex flex-col gap-8 w-full text-sm poppins">
        <Heading title1="Program" title2="Schedule" />
        <div className="w-full">
          <iframe
            src="\SENSE-SG 2026.pdf"
            title="Program Schedule PDF"
            className="w-full h-300 border rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Schedule;
