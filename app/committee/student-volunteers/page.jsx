import React from "react";

export const metadata = {
  title: "Student Volunteers",
  description: "Student Volunteers for ISET 2026.",
  keywords: ["ICCISET", "student volunteers", "conference volunteers"],
};

const Committee = () => {
  const members = [
    {
      name: "Mohd Shahid Husain",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "University of Technology and Applied Sciences, Ibri, Sultanate of Oman",
    },
    {
      name: "Chirag Patel",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Charotar University of Science and Technology (CHARUSAT) University, Gujarat, India",
    },
    {
      name: "Y. Justin Dhas",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "SRM Easwari Engineering College, India",
    },
    {
      name: "Arun Solanki",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Gautam Buddha University, Greater Noida, India",
    },
    {
      name: "Deepak Sinwar",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Manipal University Jaipur, India",
    },
    {
      name: "Vinod Gill",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Govt. College Nalwa (Hisar), Haryana, India",
    },
    {
      name: "Gaurav Purohit",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "CSIR-Central Electronics Engineering Research Institute (CSIR-CEERI), Pilani, India",
    },
    {
      name: "Ekata Gupta",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Guru Nanak Institute of Management, Delhi NCR, India",
    },
    {
      name: "Deepa Kharb",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Indian Law Institute, New Delhi, India",
    },
    {
      name: "Ekbal Rashid",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "RTC Institute of Technology, India",
    },
    {
      name: "Ravi M Yadahalli",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Methodist College of Engineering and Technology, Hyderabad, India",
    },
    {
      name: "Nahid Fatima",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Prince Sultan University, KSA",
    },
    {
      name: "Leo John Baptist",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Botho University, Gaborone, Botswana",
    },
    {
      name: "Ashraful Islam",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
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
          Student Volunteers
        </div>
    
        <ul>
          {members.map((m, idx) => (
            <li
              key={idx}
              className={`flex hover:bg-gray-200 duration-200 ease-in-out items-center px-4 py-2 border-b border-neutral-400 last:border-b-0 ${
                idx % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <img
                src={m.image}
                alt={m.name}
                className="w-14 h-14 md:w-20 md:h-20 rounded-full mr-4 object-cover"
              />
              <div>
                <div className="font-semibold">{m.name}</div>
                <div>{m.affiliation}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Committee;
