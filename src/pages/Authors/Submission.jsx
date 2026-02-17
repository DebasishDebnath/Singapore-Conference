import React from "react";
import Heading from "../../components/Heading";

function Submission() {
  return (
    <div className="max-w-7xl w-7xl mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 items-left">
      <div className="flex flex-col gap-5 w-full">
      <Heading title1="Submission" title2="Guidelines" />
      <p className="poppins-italic text-lg font-medium text-gray-800">
        <span className="text-blue-theme font-bold">To be announced</span>
      </p>
        <img src="/comming_soon.png" alt="comming soon" className="mx-auto" />
      </div>
    </div>
  );
}

export default Submission;
