import React from "react";
import CommitteeCard from "../../components/CommitteeCard";
import Heading from "../../components/Heading";

const committeeData = [
  {
    title: "Chief Patron",
    data: [
      {
        name: "Prof. Banani Chakrabarti",
        affiliation: "President of IEM - UEM Group, India",
      },
    ],
  },
  {
    title: "Patron",
    data: [
      {
        name: "Prof. (Dr.) Satyajit Chakrabarti",
        affiliation: "Director, IEM-UEM Group",
      },
    ],
  },
  {
    title: "Honorary Chair",
    data: [
      {
        name: "Prof. (Dr.) Rajkumar Buyya",
        affiliation: "FIEEE, Fellow, Academia Europaea, University of Melbourne, Australia",
      },
      {
        name: "Prof. (Dr.) Tingwen Huang",
        affiliation: "FIEEE, Texas A&M University, Qatar",
      },
      {
        name: "Prof. (Dr.) Rajkumar Buyya",
        affiliation: "University of Western Macedonia, Kozani, Greece",
      },
    ],
  },
  {
    title: "General Chairs",
    data: [
      {
        name: "Prof. Dr. Siddhartha Bhattacharyya",
        affiliation: "VSB Technical University, Ostrava, Czech Republic and Algebra Bernays University College, Zagreb, Croatia",
      },
      {
        name: "Prof. Dr. Jyoti Sekhar Banerjee",
        affiliation: "Bengal Institute of Technology, Kolkata, India",
      },
      {
        name: "Dr. Leo Mrsic",
        affiliation: "Algebra Bernays University, Zagreb, Croatia",
      },
    ],
  },
  {
    title: "Organizing Chairs",
    data: [
      {
        name: "Dr. Amartya Mukherjee",
        affiliation: "IEM Kolkata",
      },
    ],
  },
];

function OrganizingCommittee() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 justify-start w-full">
      <Heading title1="Organizing" title2="Committee" />
      <div className="flex flex-col gap-8">
        {committeeData.map((committee, index) => (
          <CommitteeCard
            key={index}
            title={committee.title}
            data={committee.data}
          />
        ))}
      </div>
    </div>
  );
}

export default OrganizingCommittee;
