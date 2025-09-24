import React from "react";
import TextSection from "../../../components/text";

export const metadata = {
  title: "National Advisory Board",
  description: "National Advisory Board members for ISET 2026.",
  keywords: ["ICCISET", "national advisory", "conference board"],
};

const Committee = () => {
  const members = [
    {
      name: "Mohd Shahid Husain",
      affiliation: "University of Technology and Applied Sciences, Ibri, Sultanate of Oman",
    },
    {
      name: "Chirag Patel",
      affiliation: "Charotar University of Science and Technology (CHARUSAT) University, Gujarat, India",
    },
    {
      name: "Y. Justin Dhas",
      affiliation: "SRM Easwari Engineering College, India",
    },
    {
      name: "Arun Solanki",
      affiliation: "Gautam Buddha University, Greater Noida, India",
    },
    {
      name: "Deepak Sinwar",
      affiliation: "Manipal University Jaipur, India",
    },
    {
      name: "Vinod Gill",
      affiliation: "Govt. College Nalwa (Hisar), Haryana, India",
    },
    {
      name: "Gaurav Purohit",
      affiliation:
        "CSIR-Central Electronics Engineering Research Institute (CSIR-CEERI), Pilani, India",
    },
    {
      name: "Ekata Gupta",
      affiliation: "Guru Nanak Institute of Management, Delhi NCR, India",
    },
    {
      name: "Deepa Kharb",
      affiliation: "Indian Law Institute, New Delhi, India",
    },
    {
      name: "Ekbal Rashid",
      affiliation: "RTC Institute of Technology, India",
    },
    {
      name: "Ravi M Yadahalli",
      affiliation: "Methodist College of Engineering and Technology, Hyderabad, India",
    },
    {
      name: "Nahid Fatima",
      affiliation: "Prince Sultan University, KSA",
    },
    {
      name: "Leo John Baptist",
      affiliation: "Botho University, Gaborone, Botswana",
    },
    {
      name: "Ashraful Islam",
      affiliation: "Independent University Bangladesh, Dhaka, Bangladesh",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
      <h2 className="text-2xl font-bold text-[#005B96] mb-4">
        Committee Members
      </h2>
      <div className="border rounded-md overflow-hidden">
        <div className="bg-[#005B96] text-white font-semibold px-4 py-2">
          National Advisory Board
        </div>

          <div className='flex items-center justify-center py-24 w-full text-center text-2xl text-[#005B96] font-bold'>
            <p className='text-center'>To Be Anounced Soon</p>
          </div>
        {/* <ul>
          {members.map((m, idx) => (
            <li
              key={idx}
              className={`px-4 py-2 border-b border-neutral-400 last:border-b-0 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
            >
              <span className="font-semibold">{m.name}</span>, {m.affiliation}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Committee;
