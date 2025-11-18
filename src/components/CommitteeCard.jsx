import React from "react";

function CommitteeCard({ title = "", data = [] }) {
  return (
    <div className=" flex flex-col gap-6">
      <div className="px-10 py-2 justify-center flex bg-blue-theme rounded-3xl text-white text-md font-medium w-fit">
        <h2 className="text-center poppins text-md">{title}</h2>
      </div>
      <div className="poppins-italic pl-2 flex flex-col gap-4">
        {data.map((member, index) => (
          <div key={index} className="">
            <p className="text-md font-bold">{member.name}</p>
            <p className="text-sm font-medium">{member.affiliation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommitteeCard;
