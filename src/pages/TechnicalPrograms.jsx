import React from "react";
import Heading from "../components/Heading.jsx";
import Sidebar from "../components/Sidebar.jsx";

function TechnicalPrograms() {
    return (
    <div className="max-w-7xl mx-auto flex md:flex-row flex-col lg:gap-30 gap-20 lg:py-20 py-14 px-6"> 
      <div className="md:w-2/3 w-full flex flex-col lg:gap-20 gap-14">
        <div className="flex flex-col gap-5 w-full">
          <Heading title1="Technical" title2="Programs" />
          <p className="poppins-italic text-lg font-medium text-gray-800">
            <span className="text-blue-theme font-bold">To be announced</span>
          </p>
          <img src="/comming_soon.png" alt="comming soon" className="mx-auto"/>
        </div>
      </div>
      <div className="md:w-1/3 w-full flex">
        <Sidebar />
      </div>
    </div>
  );
}

export default TechnicalPrograms
