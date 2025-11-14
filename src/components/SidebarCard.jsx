import React from "react";

function SidebarCard({ title = "", content = [] }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 w-fit">
      <div className="poppins font-semibold text-sm py-2.5 justify-center flex bg-[#0E2258] text-white rounded-t-2xl">
        {title}
      </div>
      <div className="p-6 poppins-italic text-xs flex flex-col gap-4">
        {content.map((item, index) => (
          <div key={index} className="">
            <div className="font-semibold">{item.Date}</div>
            <div>{item.Detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarCard;
