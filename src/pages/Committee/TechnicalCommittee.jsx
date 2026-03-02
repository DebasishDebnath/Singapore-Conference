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
        affiliation: "Director, IEM - UEM Group, India",
      },
    ],
  },
  {
    title: "Honorary Chair",
    data: [
      {
        name: "Prof. (Dr.) Rajkumar Buyya",
        affiliation:
          "FIEEE, Fellow, Academia Europaea, University of Melbourne, Australia",
      },
      {
        name: "Prof. (Dr.) Tingwen Huang",
        affiliation: "FIEEE, Texas A&M University, Qatar",
      },
      {
        name: "Prof. (Dr.) Panagiotis Stathopoulos",
        affiliation: "University of Western Macedonia, Kozani, Greece",
      },
    ],
  },
  {
    title: "General Chairs",
    data: [
      {
        name: "Prof. (Dr.) Siddhartha Bhattacharyya",
        affiliation:
          "VSB Technical University of Ostrava, Czech Republic and Algebra Bernays University College, Zagreb, Croatia",
      },
      {
        name: "Prof. (Dr.) Jyoti Sekhar Banerjee",
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
        affiliation: "IEM Kolkata, India",
      },
      {
        name: "Dr. Sandeep Singh Sengar",
        affiliation: "Cardiff Metropolitan University, UK",
      },
    ],
  },
  {
    title: "TPC Chair",
    data: [
      {
        name: "Prof. (Dr.) Siddhartha Bhattacharyya",
        affiliation:
          "VSB Technical University of Ostrava, Czech Republic and Algebra Bernays University, Zagreb, Croatia",
      },
    ],
  },
  {
    title: "Convener Chair",
    data: [
      {
        name: "Prof. (Dr.) Indrajit De",
        affiliation: "IEM Kolkata, India",
      },
    ],
  },
  {
    title: "Co-convener",
    data: [
      {
        name: "Mr. Subhadip Chandra",
        affiliation: "IEM Kolkata, India",
      },
    ],
  },
  {
    title: "Program Chairs",
    data: [
      {
        name: "Prof. (Dr.) Sheng-Lung Peng",
        affiliation: "National Taipei University of Business, Taiwan",
      },
      {
        name: "Prof. (Dr.) Mohamed Lahby",
        affiliation:
          "University Hassan II, Higher Normal School of Casablanca, Morocco",
      },
    ],
  },
  {
    title: "Industry Chairs",
    data: [
      {
        name: "Dr. Tanushyam Chattopadhyay",
        affiliation: "Practice Head, Sirius Digitech",
      },
      {
        name: "Mr. Snehasis Banerjee",
        affiliation: "TCS Research & Innovation, Kolkata, India",
      },
      {
        name: "Dr. Sanmitra Sarkar",
        affiliation:
          "Senior Director and Global Head of Generative and Agentic AI, Capgemini",
      },
    ],
  },
  {
    title: "Industry Academic Partnership Chair",
    data: [
      {
        name: "Mr. Souvik Das",
        affiliation:
          "Academic Alliance Head of India East, TCS, India",
      },
    ],
  },
  {
    title: "Organizing Committee",
    data: [
      { name: "Prof. (Dr.) Indrajit De", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Ayan Kr. Panja", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Amartya Mukherjee", affiliation: "IEM Kolkata, India" },
      { name: "Dr. DeepSubhra Guha Roy", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Piyali Dutta", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Mousumi Laha", affiliation: "IEM Kolkata, India" },
      { name: "Mr. Subhadip Chandra", affiliation: "IEM Kolkata, India" },
      { name: "Mr. Pabak Indu", affiliation: "IEM Kolkata, India" },
      { name: "Mrs. Bipasha Guha Roy", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Sreya Ghosh", affiliation: "IEM Kolkata, India" },
      { name: "Mrs. Ankita Ray Chowdhury", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Somenath Kuiry", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Sukanya Mitra", affiliation: "IEM Kolkata, India" },
      { name: "Prof. (Dr.) Goutam Saha", affiliation: "IEM Kolkata, India" },
      { name: "Mr. Heerok Banerjee", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Sudipta Bhattacharya", affiliation: "IEM Kolkata, India" },
      { name: "Mrs. Mamani Bandyopadhyay", affiliation: "IEM Kolkata, India" },
      { name: "Ms. Manjarini Mallik", affiliation: "IEM Kolkata, India" },
      { name: "Mrs. Debasree Sarkar", affiliation: "IEM Kolkata, India" },
      { name: "Mrs. Tumpa Nath", affiliation: "IEM Kolkata, India" },
    ],
  },
  {
    title: "Publication Chairs",
    data: [
      { name: "Dr. Amartya Mukherjee", affiliation: "IEM Kolkata, India" },
      { name: "Prof. (Dr.) Indrajit De", affiliation: "IEM Kolkata, India" },
      { name: "Prof. (Dr.) Goutam Saha", affiliation: "IEM Kolkata, India" },
    ],
  },
  {
    title: "Publicity Chairs",
    data: [
      { name: "Dr. Piyali Dutta", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Mousumi Laha", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Sreya Ghosh", affiliation: "IEM Kolkata, India" },
      { name: "Mrs. Debasree Sarkar", affiliation: "IEM Kolkata, India" },
    ],
  },
  {
    title: "Finance Chairs",
    data: [
      { name: "Dr. Ayan Kr. Panja", affiliation: "IEM Kolkata, India" },
      { name: "Dr. DeepSubhra Guha Roy", affiliation: "IEM Kolkata, India" },
      { name: "Mr. Pabak Indu", affiliation: "IEM Kolkata, India" },
    ],
  },
  {
    title: "Hospitality Chairs",
    data: [
      { name: "Dr. Sukanya Mitra", affiliation: "IEM Kolkata, India" },
      { name: "Mrs. Bipasha Guha Roy", affiliation: "IEM Kolkata, India" },
      { name: "Mrs. Ankita Ray Chowdhury", affiliation: "IEM Kolkata, India" },
      { name: "Mrs. Tumpa Nath", affiliation: "IEM Kolkata, India" },
    ],
  },
  {
    title: "Transport Chairs",
    data: [
      { name: "Mr. Heerok Banerjee", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Sudipta Bhattacharya", affiliation: "IEM Kolkata, India" },
      { name: "Mrs. Mamani Bandyopadhyay", affiliation: "IEM Kolkata, India" },
    ],
  },
  {
    title: "Web Chairs",
    data: [
      { name: "Mr. Heerok Banerjee", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Somenath Kuiry", affiliation: "IEM Kolkata, India" },
      { name: "Ms. Manjarini Mallik", affiliation: "IEM Kolkata, India" },
    ],
  },
];

function TechnicalCommittee() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 justify-start w-full">
      <Heading title1="Technical" title2="Committee" />
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

export default TechnicalCommittee;
