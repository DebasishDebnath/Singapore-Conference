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
        name: "Prof. (Dr.) Tingwen Huang",
        affiliation: "FIEEE, Texas A&M University, Qatar",
      },
    ],
  },
  {
    title: "General Chairs",
    data: [
      { name: "Dr. Amartya Mukherjee", affiliation: "IEM Kolkata, India" },
      // { name: "Dr. Ayan Kr. Panja", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Deepsubhra Guha Roy", affiliation: "IEM Kolkata, India" },
    ],
  },
  {
    title: "Organizing Chairs",
    data: [
      {
        name: "Dr. Arun Kumar Bar",
        affiliation: "IEM Kolkata, India",
      },
    ],
  },
  {
    title: "TPC Chair",
    data: [

      { name: "Dr. Amartya Mukherjee", affiliation: "IEM Kolkata, India" },
      // { name: "Dr. Ayan Kr. Panja", affiliation: "IEM Kolkata, India" },
    ],
  },
  {
    title: "Convener Chair",
    data: [
      { name: "Dr. Deepsubhra Guha Roy", affiliation: "IEM Kolkata, India" },
    ],
  },
  {
    title: "Co-convener",
    data: [
      { name: "Dr. Ayan Kr. Panja", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Sukanya Mitra", affiliation: "IEM Kolkata, India" },
    ],
  },
  {
    title: "Program Chairs",
    data: [
      {
        name: "Dr. Amartya Mukherjee",
        affiliation: "IEM Kolkata, India",
      },
      // {
      //   name: "Dr. Ayan Kr. Panja",
      //   affiliation: "IEM Kolkata, India",
      // },
    ],
  },
  // {
  //   title: "Industry Chairs",
  //   data: [
  //     {
  //       name: "Dr. Tanushyam Chattopadhyay",
  //       affiliation: "Practice Head, Sirius Digitech",
  //     },
  //     {
  //       name: "Mr. Snehasis Banerjee",
  //       affiliation: "TCS Research & Innovation, Kolkata, India",
  //     },
  //     {
  //       name: "Dr. Sanmitra Sarkar",
  //       affiliation:
  //         "Senior Director and Global Head of Generative and Agentic AI, Capgemini",
  //     },
  //   ],
  // },
  // {
  //   title: "Industry Academic Partnership Chair",
  //   data: [
  //     {
  //       name: "Mr. Souvik Das",
  //       affiliation:
  //         "Academic Alliance Head of India East, TCS, India",
  //     },
  //   ],
  // },
  {
    title: "Organizing Committee",
    data: [
      { name: "Dr. Ayan Kr. Panja", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Amartya Mukherjee", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Deepsubhra Guha Roy", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Sukanya Mitra", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Prabir Kumar Das", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Ranabir Banik", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Animesh Kundu", affiliation: "IEM Kolkata, India" },
      // { name: "Dr. Piyali Dutta", affiliation: "IEM Kolkata, India" },
      // { name: "Dr. Mousumi Laha", affiliation: "IEM Kolkata, India" },
      // { name: "Mr. Subhadip Chandra", affiliation: "IEM Kolkata, India" },
      { name: "Mr. Pabak Indu", affiliation: "IEM Kolkata, India" },
      { name: "Mrs. Bipasha Guha Roy", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Sreya Ghosh", affiliation: "IEM Kolkata, India" },
      // { name: "Mrs. Ankita Ray Chowdhury", affiliation: "IEM Kolkata, India" },
      // { name: "Dr. Somenath Kuiry", affiliation: "IEM Kolkata, India" },
      // { name: "Dr. Sukanya Mitra", affiliation: "IEM Kolkata, India" },
      // { name: "Prof. (Dr.) Goutam Saha", affiliation: "IEM Kolkata, India" },
      { name: "Mr. Heerok Banerjee", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Sudipta Bhattacharya", affiliation: "IEM Kolkata, India" },
      { name: "Mrs. Mamani Bandyopadhyay", affiliation: "IEM Kolkata, India" },
      // { name: "Ms. Manjarini Mallik", affiliation: "IEM Kolkata, India" },
      { name: "Mrs. Debasree Sarkar", affiliation: "IEM Kolkata, India" },
      { name: "Mrs. Tumpa Nath", affiliation: "IEM Kolkata, India" },
    ],
  },
  {
    title: "Publication Chairs",
    data: [
      { name: "Dr. Biswadip Basu Mallik", affiliation: "IEM Kolkata, India" },
      // { name: "Dr. Ayan Kr. Panja", affiliation: "IEM Kolkata, India" },
      { name: "Dr. Deepsubhra Guha Roy", affiliation: "IEM Kolkata, India" },
    ],
  },
  // {
  //   title: "Publicity Chairs",
  //   data: [
  //     { name: "Dr. Piyali Dutta", affiliation: "IEM Kolkata, India" },
  //     { name: "Dr. Mousumi Laha", affiliation: "IEM Kolkata, India" },
  //     { name: "Dr. Sreya Ghosh", affiliation: "IEM Kolkata, India" },
  //     { name: "Mrs. Debasree Sarkar", affiliation: "IEM Kolkata, India" },
  //   ],
  // },
  {
    title: "Finance Chairs",
    data: [
      { name: "Dr. Ayan Kr. Panja", affiliation: "IEM Kolkata, India" },
      // { name: "Dr. Deepsubhra Guha Roy", affiliation: "IEM Kolkata, India" },
      // { name: "Mr. Pabak Indu", affiliation: "IEM Kolkata, India" },
    ],
  },
  // {
  //   title: "Hospitality Chairs",
  //   data: [
  //     { name: "Dr. Sukanya Mitra", affiliation: "IEM Kolkata, India" },
  //     { name: "Mrs. Bipasha Guha Roy", affiliation: "IEM Kolkata, India" },
  //     { name: "Mrs. Ankita Ray Chowdhury", affiliation: "IEM Kolkata, India" },
  //     { name: "Mrs. Tumpa Nath", affiliation: "IEM Kolkata, India" },
  //   ],
  // },
  // {
  //   title: "Transport Chairs",
  //   data: [
  //     { name: "Mr. Heerok Banerjee", affiliation: "IEM Kolkata, India" },
  //     { name: "Dr. Sudipta Bhattacharya", affiliation: "IEM Kolkata, India" },
  //     { name: "Mrs. Mamani Bandyopadhyay", affiliation: "IEM Kolkata, India" },
  //   ],
  // },
  // {
  //   title: "Web Chairs",
  //   data: [
  //     { name: "Mr. Heerok Banerjee", affiliation: "IEM Kolkata, India" },
  //     { name: "Dr. Somenath Kuiry", affiliation: "IEM Kolkata, India" },
  //     { name: "Ms. Manjarini Mallik", affiliation: "IEM Kolkata, India" },
  //   ],
  // },
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
