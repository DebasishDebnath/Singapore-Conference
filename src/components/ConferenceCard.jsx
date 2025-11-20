import React from "react";

function ConferenceCard({
  imageSrc = "",
  title = "",
  trackChair = [],
  researchTopic = [],
}) {
  return (
    <div className="flex flex-col rounded-3xl border border-gray-300 w-fit poppins-italic pb-2 shadow-md">
      <div className="rounded-t-3xl">
        <img src={imageSrc} alt="Conference Banner" />
      </div>
      <div className="p-6 text-xs flex flex-col gap-6">
        <div className="bg-blue-theme py-1.5 px-3 rounded-4xl mb-2">
          <h1 className="text-xl text-white text-center font-bold poppins-italic">
            {title}{" "}
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl text-blue-theme-light font-bold poppins-italic pb-2">
            Track Chair
          </h2>
          {trackChair.map((chair, index) => (
            <div key={index} className="text-sm text-blue-theme font-bold">
              {" "}
              {chair}
            </div>
          ))}
        </div>
        <div className="bg-gray-300 w-full h-px"></div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl text-blue-theme-light font-bold poppins-italic pb-2">
            Research Topic
          </h2>
          {researchTopic.map((chair, index) => (
            <div
              key={index}
              className="text-sm text-blue-theme font-medium ml-4"
            >
              <li> {chair}</li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ConferenceCard;
