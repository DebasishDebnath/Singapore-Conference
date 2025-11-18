import React from "react";

function SponsorCard({ imgSrc = "", title = "" }) {
  return (
    <div className="border border-gray-300 p-4 flex flex-col gap-4 items-center rounded-3xl justify-between shadow-md">
      <div className="min-h-60 flex justify-center items-center"><img src={imgSrc} alt={title} /></div>
      <div className="px-10 py-2 justify-center flex bg-blue-theme rounded-2xl text-white text-md font-medium w-full">
        <h2 className="text-center poppins text-md">{title}</h2>
      </div>
    </div>
  );
}

export default SponsorCard;
