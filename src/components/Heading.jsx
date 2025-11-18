import React from "react";

function Heading({ title1 = "", title2 = "", size = "text-4xl" }) {
  return (
    <div className="flex">
      <h1 className={`xl:${size} text-3xl text-[#6E6E6E] font-bold poppins-italic`}>
        {title1} <span className="text-blue-theme">{title2}</span>
      </h1>
    </div>
  );
}

export default Heading;
