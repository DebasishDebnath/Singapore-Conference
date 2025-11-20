import React from "react";
import Heading from "../components/Heading.jsx";
import Sidebar from "../components/Sidebar.jsx";

function Home() {
  return (
    <div className="max-w-7xl mx-auto flex md:flex-row flex-col lg:gap-30 gap-20 lg:py-20 py-14 px-6"> 
      <div className="md:w-2/3 w-full flex flex-col lg:gap-20 gap-14">
        <div className="flex flex-col gap-5">
          <Heading title1="Welcome to" title2="SENSE-SG" />
          <p className="poppins-italic text-lg font-medium text-gray-800">
            <span className="text-blue-theme font-bold">SENSE-SG</span> is a
            premier international forum dedicated to      
            . This conference brings together leading{" "}
            <span className="text-gray-700 font-bold">
              researchers, engineers, industry professionals, and innovators
            </span>{" "}
            to share cutting-edge advancements and discuss the future of
            brain-inspired computation at the network edge.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <Heading title1="About IEM" title2="" />
          <div className="relative w-full">
            <div className="gap-1 flex w-full">
              <div className="w-3/5 relative">
                <img
                  src='./iem1.jpg'
                  alt="IEM Picture"
                  className="rounded-l-3xl w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-l-3xl"></div>
              </div>
              <div className="gap-1 flex flex-col w-2/5">
                <div className="h-1/2 relative">
                  <img
                    src='./iem3.jpg'
                    alt="IEM Picture"
                    className="rounded-tr-3xl w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-tr-3xl"></div>
                </div>
                <div className="h-1/2 relative">
                  <img
                    src='./iem2.jpg'
                    alt="IEM Picture"
                    className="rounded-br-3xl w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-br-3xl"></div>
                </div>
              </div>
            </div>
          </div>
          <p className="poppins-italic text-lg font-medium text-gray-800">
            The <span className="text-gray-700 font-bold">IEM group</span> is an
            acclaimed educational group amongst the{" "}
            <span className="text-gray-700 font-bold">
              industry-centred academic training
            </span>{" "}
            organisations of today. IEM has set sublime standards in addressing
            the technical and managerial resource shortage in the new era of
            dynamic globalisation. The IEM group has risen to fame for its
            strong foundation in teaching and R&D in multifaceted areas.
          </p>
        </div>
      </div>
      <div className="md:w-1/3 w-full">
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
