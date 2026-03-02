import React from "react";
import CommitteeCard from "../../components/CommitteeCard";
import Heading from "../../components/Heading";

const committeeData = [
  {
    title: "International",
    data: [
      {
        name: "Madhurima Ray",
        affiliation: "Pennsylvania State University, USA",
      },
      {
        name: "Somenath Chakraborty",
        affiliation: "West Virginia University Institute of Technology, USA",
      },
      {
        name: "Phillip Bradford",
        affiliation: "The University of Connecticut, USA",
      },
      {
        name: "Chua Chin Heng Matthew",
        affiliation: "Yong Loo Lin School of Medicine, NUS, Singapore",
      },
      {
        name: "Esteban Alfaro Cortés",
        affiliation: "Facultad de Ciencias Económicas y Empresariales (UCLM), Spain",
      },
      {
        name: "Gabor Benedek",
        affiliation: "Lynx Analytics Pte Ltd, Singapore",
      },
      {
        name: "Panagiotis Sarigiannidis",
        affiliation: "University of Western Macedonia, Greece",
      },
      {
        name: "Dimitris Pliatsios",
        affiliation: "University of Western Macedonia, Greece",
      },
      {
        name: "Ilias Cherkaoui",
        affiliation: "Walton Institute for Information and Communication Systems Science, Ireland",
      },
      {
        name: "Rahul Umesh Mhapsekar",
        affiliation: "Walton Institute for Information and Communication Systems Science, Ireland",
      },
      {
        name: "Sandeep Singh Sengar",
        affiliation: "Cardiff Metropolitan University, United Kingdom",
      },
      {
        name: "Peter Leong",
        affiliation: "NUS, Singapore",
      },
      {
        name: "Maxim Bobyr",
        affiliation: "South-West State University, Russia",
      },
      {
        name: "Sheng Lung Peng",
        affiliation: "National Taipei University of Business, Taiwan",
      },
      {
        name: "Swarnendu Ghosh",
        affiliation: "University of Ljubljana, Slovenia, Slovenia",
      },
      {
        name: "Avirup Das",
        affiliation: "Singapore University of Technology and Design, Singapore",
      },
      {
        name: "Soumya Das",
        affiliation: "Eindhoven University of Technology, Netherlands",
      },
      {
        name: "Branko Šter",
        affiliation: "University of Ljubljana, Slovenia, Slovenia",
      },
      {
        name: "Ratco Pilipovic",
        affiliation: "University of Ljubljana, Slovenia, Slovenia",
      },
      {
        name: "Nandita Sengupta",
        affiliation: "University College Bahrain, Kingdom of Bahrain",
      },
      {
        name: "Blerta Prevalla Etemi",
        affiliation: "Rochester Institute of Technology, Kosovo",
      },
      {
        name: "Robert Muharremi",
        affiliation: "Rochester Institute of Technology, Kosovo",
      },
      {
        name: "Debabrata Samanta",
        affiliation: "Rochester Institute of Technology, Tirana",
      },
      {
        name: "Wai-keung FUNG",
        affiliation: "Cardiff Metropolitan University, United Kingdom",
      },
      {
        name: "Priyesh Dhole",
        affiliation: "Cardiff Metropolitan University, United Kingdom",
      },
      {
        name: "Amrita Prasad",
        affiliation: "Cardiff Metropolitan University, United Kingdom",
      },
      {
        name: "Priyatharshini Rajaram",
        affiliation: "Cardiff Metropolitan University, United Kingdom",
      },
      {
        name: "Pavel Basti",
        affiliation: "Czech Technical University, Czech Republic",
      },
      {
        name: "Baidya Saha",
        affiliation: "Concordia University of Edmonton, Canada",
      },
    ],
  },
  {
  title: "National",
  data: [
    { name: "Arup Kumar Pal", affiliation: "IITISM, Dhanbad, India" },
    { name: "Rajat Kumar Pal", affiliation: "University of Calcutta, Kolkata, India" },
    { name: "Anwesha Mukherjee", affiliation: "Mahishadal Raj college, West Bengal, India" },
    { name: "Sahadev Roy", affiliation: "NIT, Arunachal, India" },
    { name: "Ramesh Dharavath H. N.", affiliation: "IIT Dhanbad, India" },
    { name: "Anindita Kundu", affiliation: "VIT Vellore, India" },
    { name: "Nabajyoti Mazumdar", affiliation: "IIIT, Allahabad, India" },
    { name: "Abhishek Basu", affiliation: "RCCIIT, Kolkata, India" },
    { name: "Sabyasachi Chatterjee", affiliation: "Heritage Institute of Technology, India" },
    { name: "Arpan Deyasi", affiliation: "RCCIIT, India" },
    { name: "Anup Kumar Halder", affiliation: "IIIT Raichur, India" },
    { name: "Mehbub Alam", affiliation: "IIIT Raichur, India" },
    { name: "Debanjali Sadhu", affiliation: "Heritage Institute of Technology, India" },
    { name: "Tumpa nath", affiliation: "IEM Kolkata, India" },
    { name: "Debashree Sarkar", affiliation: "IEM Kolkata, India" },
    { name: "Sudipto Bhattacharyya", affiliation: "IEM Kolkata, India" },
    { name: "Somnath Kuiry", affiliation: "IEM Kolkata, India" },
    { name: "Heerok Banerjee", affiliation: "IEM Kolkata, India" },
    { name: "Arpita Sarkar", affiliation: "Jadavpur University, India" },
    { name: "Arnab Kumar Maji", affiliation: "NEHU, Shillong, India" },
    { name: "Amitava Nag", affiliation: "CIT Kokrajhar, India" },
    { name: "Kuntal Dey", affiliation: "Accenture Labs, India" },
    { name: "Lidia Ghosh", affiliation: "RCC IIT, India" },
    { name: "Nilotpal Chakraborty", affiliation: "RCC IIT, India" },
    { name: "Nandadulal Jana", affiliation: "NIT Durgapur, India" },
    { name: "Manab Das", affiliation: "IEM Kolkata, India" },
    { name: "Nilanjana Basu", affiliation: "Heritage Institute of Technology, India" },
    { name: "Reshma Roychowdhury", affiliation: "Heritage institute of Technology, India" },
    { name: "Smritikona Barai", affiliation: "Heritage institute of Technology, India" },
    { name: "Pradip Kumar K", affiliation: "Dayanand Sagar University, India" },
    { name: "Atrayee Chatterjee", affiliation: "Heritage Academy, India" },
    { name: "Ajoy Kumar Khan", affiliation: "Mizoram University, India" },
    { name: "Lincoln Renee", affiliation: "NEHU Shillong, India" },
    { name: "Soumya Sen", affiliation: "University Of Calcutta, India" },
    { name: "Prodipto Das", affiliation: "Assam University, India" },
    { name: "Ashim Datta", affiliation: "Tezpur University, India" },
    { name: "Mamani Bandyopadhyay", affiliation: "IEM Kolkata, India" },
    { name: "Anindita Raychaudhuri", affiliation: "Sarojini Naidu College for Women, West Bengal, India" },
    { name: "Bharat Soni", affiliation: "IIIT Raichur, India" },
  
  ],
}
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
