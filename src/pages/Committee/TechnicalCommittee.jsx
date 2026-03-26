import React, { useState } from "react";
import CommitteeCard from "../../components/CommitteeCard";
import Heading from "../../components/Heading";

const ITEMS_PER_PAGE = 12;

// const committeeData = [
//   {
//     title: "International",
//     data: [
//       { name: "Prof. (Dr.) Sheng-Lung Peng", affiliation: "National Taipei University of Business, Taiwan" },
//       { name: "Prof. (Dr.) Mohamed Lahby", affiliation: "University Hassan II, Higher Normal School of Casablanca, Casablanca, Morocco" },
//       { name: "Prof. (Dr.) Mufti Mahmud", affiliation: "Nottingham Trent University Nottingham, UK" },
//       { name: "Prof. (Dr.) Panagiotis Sarigiannidis", affiliation: "University of Western Macedonia, Kozani, Greece" },
//       { name: "Dr. Andrew Park", affiliation: "Thompson River University, Canada" },
//       { name: "Dr. Philip Bradford", affiliation: "University of Connecticut, USA" },
//       { name: "Dr. Samarjit Roy", affiliation: "Eastern International University (EIU), Vietnam" },
//       { name: "Prof. (Dr.) Ahmed J. Obaid", affiliation: "University of Kufa, Iraq" },
//       { name: "Prof. (Dr.) Sandeep Singh Sengar", affiliation: "Cardiff Metropolitan University, United Kingdom" },
//       { name: "Prof. Dr. Mohd Helmy Abd Wahab", affiliation: "Universiti Tun Hussein Onn Malaysia, Malaysia" },
//       { name: "Prof. Dr. Albert Nasibulin", affiliation: "Skolkovo Institute of Science and Technology, Russia" },
//       { name: "Dr. Vasileios Paliktzoglou", affiliation: "Bahrain Polytechnic, Bahrain" },
//       { name: "Dr. Arul Kumar Natarajan", affiliation: "Samarkand International University of Technology, Uzbekistan" },
//       { name: "Dr. Souvik Kundu", affiliation: "Intel Corporation, USA" },
//       { name: "Dr. Mete Yaganoglu", affiliation: "Ataturk University, Turkey" },
//       { name: "Prof. (Dr.) Tien Anh Tran", affiliation: "Vietnam Maritime University, Vietnam" },
//       { name: "Dr. Somenath Chakraborty", affiliation: "West Virginia University Institute of Technology, USA" },
//       { name: "Prof. Vaithiyalingam Subramanian Manjula", affiliation: "Kampala International University, Uganda, East Africa" },
//       { name: "Prof. Bobyr Maxim", affiliation: "Southwest State University, Russia" },
//       { name: "Dr Shyamala Doraiswamy", affiliation: "Professor, University Putra Malaysia" },
//       { name: "Dr Esteban Alfaro Cortes", affiliation: "Professor, UCLM" },
//       { name: "Dr Noelia García-Rubio", affiliation: "Professor, UCLM, Spain" },
//       { name: "Ms. Susmita Banik", affiliation: "Scrum Master, Quandoo, Germany" },
//       { name: "Dr. Gabor Benedek", affiliation: "Lynx Analytics, Singapore" },
//       { name: "Dr. Tan Kian Hua", affiliation: "LiGGS University, Singapore" },
//       { name: "Dr. Marton Szel", affiliation: "Lynx Analytics, Singapore" },
//       { name: "Dr. Peter Leong", affiliation: "Singapore Polytechnic, Singapore" },
//       { name: "Dr. Kian Hui Lim", affiliation: "Singapore University of Technology and Design, Singapore" },
//       { name: "Dr. Yilliang Zhao", affiliation: "Open Space Ventures, Singapore" },
//       { name: "Dr. Chua Mathew", affiliation: "National University of Singapore, Singapore" },
//       { name: "Dr Miguel López-Benítez", affiliation: "University of Liverpool, UK" },
//       { name: "Dr Indrakshi Dey", affiliation: "South East Technological University, USA" },
//       { name: "Dr. Madhurima Ray", affiliation: "Professor, Pennsylvania State University, USA" },
//       { name: "Anbarasu Aladiyan", affiliation: "Compunnel Inc, USA" },
//       { name: "Nuzhat Prova", affiliation: "Pace University, USA" },
//       { name: "Dr. Sanjay Chakraborty", affiliation: "Lincoping University, Sweden" },
//       { name: "DR. DIBYENDU SEAL", affiliation: "DKFZ, GERMANY" },
//       { name: "Dr. Alfonso Fernández-Peña", affiliation: "Universidad de Oviedo, Spain" },
//       { name: "Dr. Fatima Zahra Fagroud", affiliation: "Hassan II University of Casablanca, Morocco" },
//       { name: "Dr. Ibrahim Thorig", affiliation: "Maldives National University, Maldives" },
//       { name: "Dr. Matthew Chua", affiliation: "National University of Singapore, Singapore" },
//       { name: "Dr. Nirmal Das", affiliation: "University of Otago, New Zealand" },
//       { name: "Dr. Tatjana Portonova", affiliation: "University of Granada, Spain" },
//       { name: "Wenjuan Li", affiliation: "Hong Kong Polytechnic University, Hong Kong" },
//       { name: "Erik Cambria", affiliation: "Nanyang Technological University, Singapore" },
//       { name: "Andrew J. Park", affiliation: "Thompson Rivers University, Canada" },
//       { name: "Dibyendu Seal", affiliation: "DKFZ, Germany" },
//       { name: "Indrakshi Dey", affiliation: "Walton Institute, South East Technological University, Ireland" },
//       { name: "Madhurima Ray", affiliation: "Pennsylvania State University, USA" },
//       { name: "Mohamed LAHBY", affiliation: "University Hassan 2, Casablanca, Morocco" },
//       { name: "Mohd Helmy Abd Wahab", affiliation: "University Tun Hussein Onn Malaysia, Malaysia" },
//       { name: "Nirmal Das", affiliation: "University of Otago, New Zealand" },
//       { name: "Nuzhat Prova", affiliation: "Pace University, USA" },
//       { name: "Panagiotis Sarigiannidis", affiliation: "University of Western Macedonia, Department of Informatics and Telecommunications Engineering, Greece" },
//       { name: "Phillip Bradford", affiliation: "The University of Connecticut, USA" },
//       { name: "Sanjay Chakraborty", affiliation: "Linköping University, Sweden" },
//       { name: "Wenjuan Li", affiliation: "Hong Kong Polytechnic University, Hong Kong" },
//     ],
//   },
//   {
//     title: "National",
//     data: [
//       { name: "Dr. Mauparna Nandan", affiliation: "Techno Main Saltlake" },
//       { name: "Dr. Debarati Dey Roy", affiliation: "B. P. Poddar Institute of Management and Technology" },
//       { name: "Dr. Souvik Sengupta", affiliation: "Aliah University" },
//       { name: "Dr. Ankan Bhattacharya", affiliation: "Hooghly Engineering & Technology College" },
//       { name: "Mr. Snehasis Banerjee", affiliation: "Scientist, TCS Research" },
//       { name: "Dr. Mahua Nandy Pal", affiliation: "MCKV Institute of Engineering" },
//       { name: "Dr. Tanushyam Chattopadhyay", affiliation: "Associate General Manager, Department of Artificial Intelligence, Adani Enterprise Limited" },
//       { name: "Dr. Indrajit Pan", affiliation: "RCCIIT, Kolkata" },
//       { name: "Dr. Netai Paitya", affiliation: "SMIT, Sikkim" },
//       { name: "Dr. Anwesha Mukherjee", affiliation: "Mahishadal Raj college, West Bengal" },
//       { name: "Dr. Abhishek Basu", affiliation: "RCCIIT, Kolkata" },
//       { name: "Dr. Sahadev Roy", affiliation: "NIT, Arunachal" },
//       { name: "Dr. Joydeep Sengupta", affiliation: "VNIT, Nagpur" },
//       { name: "Dr. Soumya Das", affiliation: "Eindhoven University of Technology, Netherlands" },
//       { name: "Prof. Arup Kumar Pal", affiliation: "IITISM, Dhanbad" },
//       { name: "Dr. Dharavath Ramesh", affiliation: "IITISM, Dhanbad" },
//       { name: "Prof. Sachin Tripathi", affiliation: "IITISM, Dhanbad" },
//       { name: "Dr. Rajat Kumar Pal", affiliation: "Department of Computer Science and Engineering University of Calcutta" },
//       { name: "Dr. Nabajyoti Mazumdar", affiliation: "IIIT, Allahabad" },
//       { name: "Dr. Sarthak Sengupta", affiliation: "School of Digital Health, IIHMR University" },
//       { name: "Dr Goutam Kumar Pal", affiliation: "Indian Statistical Institute, Kolkata" },
//       { name: "Dr Arnab Kumar Maji", affiliation: "NEHU, Shillong" },
//       { name: "Dr Amitava Nag", affiliation: "Central Institute of Technology, Kokrajhar" },
//       { name: "Dr Kuntal Dey", affiliation: "Accenture Labs" },
//       { name: "Dr Debanjan Bhoumik", affiliation: "IIT Mumbai" },
//       { name: "Dr Debanjan Konar", affiliation: "Samsung Electronics R&D" },
//       { name: "Dr. Chitradeep Majumdar", affiliation: "Senior Research Specialist ,Nokia Bell Labs,Bengaluru, Karnataka" },
//       { name: "Dr. Saurabh Srivastava", affiliation: "IITISM, Dhanbad" },
//       { name: "Dr. Sunirmal Khatua", affiliation: "University of Calcutta" },
//       { name: "Prof. (Dr.) Swalpa Kumar Roy", affiliation: "Alipurduar Government Engineering and Management College" },
//       { name: "Dr Indranil Ghosh", affiliation: "IMT, Hyderabad" },
//       { name: "Dr. Biswajit Debnath", affiliation: "Green Waves Environmental Solutions" },
//       { name: "Dr. Anindita Kundu", affiliation: "VIT Vellore" },
//       { name: "Dr. Utpal Sikdar", affiliation: "IBS" },
//       { name: "Dr. Arpan Deyasi", affiliation: "RCCIT" },
//       { name: "Dr. Debanjali Sadhu", affiliation: "Heritage Institute of Technology" },
//       { name: "Dr. Goutam Saha", affiliation: "IBS IndiaNorth-Eastern Hill University" },
//       { name: "Dr. Madhumita Pal", affiliation: "Institute of Engineering & Management" },
//       { name: "Dr. Manjarini Malik", affiliation: "Jadavpur University" },
//       { name: "Dr. Rajendrani Mukherjee", affiliation: "University of Engineering & Management" },
//       { name: "Dr. Ratna Chakraborty", affiliation: "Institute of Engineering & Management" },
//       { name: "Dr. Sabyasachi Chatterjee", affiliation: "Heritage Institute of Technology" },
//       { name: "Dr. Sayantani Ghosh", affiliation: "Jadavpur University" },
//       { name: "Dr. Soumyajyoti Dey", affiliation: "Jadavpur University" },
//       { name: "Amitava Nag", affiliation: "CIT Kokrajhar" },
//       { name: "Ankita Ray Chowdhury", affiliation: "Institute of Engineering and Manageent, Kolkata" },
//       { name: "Arijeet Ghosh", affiliation: "University of Engineering and Management, Kolkata" },
//       { name: "Arnab Maji", affiliation: "NEHU" },
//       { name: "Arpita Talukdar", affiliation: "HERITAGE INSTITUTE OF TECHNOLOGY" },
//       { name: "Bipasha Mahato", affiliation: "IEM" },
//       { name: "Bitan Misra", affiliation: "Techno International New Town" },
//       { name: "Debanjan Bhowmik", affiliation: "Indian Institute of Technology Bombay" },
//       { name: "Debarati Dey", affiliation: "BPPIMT" },
//       { name: "Deepsubhra Guha Roy", affiliation: "Institute of Engineering and Management, Kolkata" },
//       { name: "Dibyasree Guha", affiliation: "Jadavpur University" },
//       { name: "Dr. Kalpita Dutta", affiliation: "RCC Institute of Information Technology" },
//       { name: "Goutam Paul", affiliation: "Indian Statistical Institute" },
//       { name: "Kuntal Dey", affiliation: "Accenture Labs" },
//       { name: "Lincolin Ranee", affiliation: "North Eastern Hill University" },
//       { name: "Manjarini Mallik", affiliation: "Jadavpur University" },
//       { name: "Maumita Chakraborty", affiliation: "University of Engineering and Management Kolkata" },
//       { name: "Mili Sarkar", affiliation: "Institute of Engineering and Management" },
//       { name: "Mousumi Laha", affiliation: "Institute of Engineering and Management (IEM) KOLKATA" },
//       { name: "Nahali Sen", affiliation: "JADAVPUR UNIVERSITY" },
//       { name: "Neelotpal Chakraborty", affiliation: "RCC Institute of Information Technology" },
//       { name: "Nilanjana G. Basu", affiliation: "Heritage Institute of Technology" },
//       { name: "Pabak Indu", affiliation: "Institute of Engineering and Management" },
//       { name: "Palash Dutta", affiliation: "Heritage Institute of Technology" },
//       { name: "Piyali Datta", affiliation: "Institute of Engineering & Management" },
//       { name: "Pradipta Sarkar", affiliation: "University of Engineering and Management, Kolkata" },
//       { name: "Prithwijit Mukherjee", affiliation: "Institute of Radio Physics and Electronics" },
//       { name: "Priyanka Saha", affiliation: "Brainware University" },
//       { name: "R Mukherjee", affiliation: "UEMK" },
//       { name: "Rajat Pal", affiliation: "University of Calcutta" },
//       { name: "Ramesh Dharavath", affiliation: "IIT Dhanbad" },
//       { name: "Ranjita Chowdhury", affiliation: "IEM" },
//       { name: "Ratna Chakrabarty", affiliation: "Institute of Engineering & Management" },
//       { name: "Reshma Roychoudhuri", affiliation: "Heritage Institute of Technology" },
//       { name: "Sagarika Chowdhury", affiliation: "NARULA INSTITUTE OF TECHNOLOGY" },
//       { name: "Smritikona Barai", affiliation: "HITK" },
//       { name: "Soma Das", affiliation: "IEM" },
//       { name: "Somenath Kuiry", affiliation: "IEM" },
//       { name: "SOUMYAJYOTI DEY", affiliation: "JADAVPUR UNIVERSITY" },
//       { name: "Sourav Das", affiliation: "Institute of Engineering & Management" },
//       { name: "Souvik Sengupta", affiliation: "Aliah University" },
//       { name: "Sreya Ghosh", affiliation: "Institute of Engineering and Management" },
//       { name: "SUKANYA MITRA", affiliation: "NATIONAL INSTITUTE OF TECHNOLOGY, DURGAPUR" },
//       { name: "Swarnendu Ghosh", affiliation: "IEM" },
//       { name: "UTPAL KUMAR SIKDAR", affiliation: "IBS Software" },
//     ],
//   },
// ];

const committeeData = [
  {
    title: "Technical Program Committee",
    data: [
      { name: "Arpan Adhikary", affiliation: "Haldia Institute of Technology" },
      { name: "Deeksha Dwivedi", affiliation: "Leslie's USA" },
      { name: "Dr. Anand Motwani", affiliation: "VIT BHOPAL UNIVERSITY" },
      {
        name: "Mainak Adhikari",
        affiliation:
          "School of Data Science, Indian Institute of Science Education and Research Thiruvananthapuram",
      },
      {
        name: "Sampath Kumar HK",
        affiliation: "Bodyclone Innovations Pvt Ltd.   NMIT.",
      },
      {
        name: "SUBHAJIT ADHIKARI",
        affiliation:
          "Department of Computer Application, Techno India University, WB",
      },
      { name: "Dr. Gabor Benedek", affiliation: "Lynx Analytics, Singapore" },
      { name: "Siparna Rabi Das", affiliation: "BPPIMT kolkata" },
      { name: "Sunirmal Khatua", affiliation: "University of Calcutta" },
      { name: "Kaushiki Roy", affiliation: "IIIT Raichur" },
      {
        name: "Dr.Archana J N",
        affiliation: "Vimal Jyothi Engineering College (Autonomous)",
      },
      { name: "Dr. Tan Kian Hua", affiliation: "LiGGS University, Singapore" },
      {
        name: "Patrali Pradhan",
        affiliation: "Haldia Institute of Technology",
      },
      {
        name: "Khaja Mannanuddin",
        affiliation: "School of CS &AI, SR University",
      },
      { name: "Dr. Anuradha Bhardwaj", affiliation: "Amity University" },
      { name: "Dr. Marton Szel", affiliation: "Lynx Analytics, Singapore" },
      { name: "Arnab Das", affiliation: "Swami vivekananda university" },
      { name: "Dr Pabitra Pal", affiliation: "MAKAUT" },
      {
        name: "Anandaraj M",
        affiliation: "PSNA COLLEGE OF ENGINEERING AND TECHNOLOGY",
      },
      {
        name: "Dr. Peter Leong",
        affiliation: "Singapore Polytechnic, Singapore",
      },
      {
        name: "Dr Soamdeep Singha Singha",
        affiliation: "Vidyasagar University",
      },
      {
        name: "Ayanabha Ghosh",
        affiliation: "Indian Institute of Technology Jodhpur",
      },
      {
        name: "Mr. Ranjit Subba",
        affiliation:
          "Dept. Of Computer Science, Hijli College, Kharagpur, Paschim Medinipur, West Bengal",
      },
      {
        name: "Bhagyashree Hambarde",
        affiliation:
          "St. Vincent Pallotti College of Engineering and Technology Nagpur",
      },
      {
        name: "Dr. Kian Hui Lim",
        affiliation: "Singapore University of Technology and Design, Singapore",
      },
      {
        name: "Dr. Debarati Dey Roy",
        affiliation:
          "B. P. Poddar Institute of Management and Technology, Applied Artificial Intelligence Research Centre UNEC,Baku, Azerbaijan",
      },
      { name: "Anindita Kundu", affiliation: "VIT Vellore" },
      {
        name: "Priyajit Sen",
        affiliation: "Indian Statistical Institute, Kolkata",
      },
      {
        name: "Dr. KYAMELIA ROY",
        affiliation: "Siliguri Government Polytechnic",
      },
      {
        name: "Nitu Saha",
        affiliation: "University of Engineering and Management, Kolkata",
      },
      {
        name: "Dr. Ramesh Saha",
        affiliation:
          "Indian Institute of Information Technology (IIIT) Sonepat",
      },
      { name: "Anwesha Mukherjee", affiliation: "Mahishadal Raj College" },
      {
        name: "Dr. Yilliang Zhao",
        affiliation: "Open Space Ventures, Singapore",
      },
      { name: "Pritusna Banik", affiliation: "Narula Institute of Technology" },
      {
        name: "Debasish Swapnesh Kumar Nayak",
        affiliation: "Centurion University of Technology and Management",
      },
      {
        name: "Dr.I.Karthiga Kathiravan",
        affiliation:
          "Bs Abdur Rahman crescent institute of science and technology",
      },
      {
        name: "Proshanta Sarkar",
        affiliation: "B. P. Poddar Institute of Management & Technology",
      },
      {
        name: "Dr. Moumita Das",
        affiliation: "Haldia Institute of Technology",
      },
      {
        name: "Dr. Sandeep Dwarkanath Pande",
        affiliation: "MIT Academy of Engineering Alandi",
      },
      {
        name: "Soham Goswami",
        affiliation: "MCKV Institute of Engineering, Howrah",
      },
      {
        name: "Dr. Sudakshina Mandal",
        affiliation: "Narula Institute of technology",
      },
      {
        name: "Dr. Sivaprakash S",
        affiliation: "Vellore Institute of Technology, Vellore",
      },
      {
        name: "Dr. Chua Mathew",
        affiliation: "National University of Singapore, Singapore",
      },
      {
        name: "Anjul Bhardwaj",
        affiliation: "Divine Institute of Management & Studies, Ziradei, Bihar",
      },
      { name: "Sahana Das", affiliation: "Adamas University" },
      { name: "Dr. Rahul Soni", affiliation: "Navrachana University" },
      { name: "Shailja Gupta", affiliation: "ADP" },
      {
        name: "Nirmal Das",
        affiliation: "Czech Technical University in Prague",
      },
      {
        name: "Moumita Chatterjee",
        affiliation:
          "Department of Computer Science and Engineering, Aliah University",
      },
      {
        name: "Surojit Bhattacharyya",
        affiliation: "MCKV Institute of Engineering",
      },
      { name: "Tanmoy Kundu", affiliation: "AIT" },
    ],
  },
];

function PaginationControls({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1.5 rounded-md border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        ← Prev
      </button>

      {pages.map((page, i) =>
        page === "..." ? (
          <span key={i} className="px-2 text-gray-400 text-sm select-none">
            …
          </span>
        ) : (
          <button
            key={i}
            onClick={() => onPageChange(page)}
            className={`w-9 h-9 rounded-md text-sm font-medium transition-colors border ${
              page === currentPage
                ? "bg-[#102768] text-white border-[#102768]"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        ),
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1.5 rounded-md border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Next →
      </button>
    </div>
  );
}

function PaginatedCommitteeCard({ title, data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(start, start + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <CommitteeCard title={title} data={paginatedData} />
      {totalPages > 1 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

function TechnicalCommittee() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 justify-start w-full">
      <Heading title1="Technical" title2="Committee" />
      <div className="flex flex-col gap-8">
        {committeeData.map((committee, index) => (
          <PaginatedCommitteeCard
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
