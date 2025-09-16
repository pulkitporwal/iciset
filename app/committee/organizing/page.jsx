import React from "react";

export const metadata = {
  title: "Organizing Committee",
  description: "Organizing Committee for ICISET 2026 at Amity University Jaipur.",
  keywords: ["ICCISET", "organizing committee", "conference committee"],
};

const Committee = () => {
    const groups = [
        {
            group: "Chief Patreon",
            members: [
                {
                    name: "Mohd Shahid Husain",
                    image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
                    affiliation: "University of Technology and Applied Sciences, Ibri, Sultanate of Oman",
                },
            ]
        },
        {
            group: "Patrons",
            members: [
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
            ]
        },
        {
            group: "General Chairs",
            members: [
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
            ]
        },
        {
            group: "Conference Chairs",
            members: [
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
            ]
        },
        {
            group: "Program Chairs",
            members: [
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
            ]
        },
        {
            group: "Publication Committee",
            members: [
                {
                    name: "Nahid Fatima",
                    image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
                    affiliation: "Prince Sultan University, KSA",
                },
                {
                    name: "Ravi M Yadahalli",
                    image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
                    affiliation: "Methodist College of Engineering and Technology, Hyderabad, India",
                },
            ]
        },
        {
            group: "Finance Committee",
            members: [
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
            ]
        },
        {
            group: "Collaboration Committee",
            members: [
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
            ]
        },
        {
            group: "Conference Proceedings",
            members: [
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
            ]
        },
        {
            group: "Publicity Committee",
            members: [
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
            ]
        },
        {
            group: "Hospitality Committee",
            members: [
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
            ]
        },
        {
            group: "IT Support Committee",
            members: [
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
            ]
        },
        {
            group: "Registration and Attendee Committee",
            members: [
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
            ]
        },
        {
            group: "Website Committee",
            members: [
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
            ]
        },
        {
            group: "Sponsors Committee",
            members: [
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
            ]
        },
        {
            group: "Stage Management and Student Discipline Committee",
            members: [
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
            ]
        },





    ];

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
            <h2 className="text-2xl font-bold text-[#005B96] mb-6">
                Committee Members
            </h2>

            {groups.map((group, idx) => (
                <div key={idx} className="mb-6 border rounded-md overflow-hidden shadow-sm">

                    <div className="bg-[#005B96] text-white font-semibold px-4 py-2 text-lg">
                        {group.group}
                    </div>

                    <ul>
                        {group.members.map((member, mIdx) => (
                            <li
                                key={mIdx}
                                className={`flex hover:bg-gray-200 transition duration-200 ease-in-out items-center px-4 py-3 border-b last:border-b-0 ${mIdx % 2 === 0 ? "bg-gray-100" : "bg-white"
                                    }`}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <div className="font-semibold text-sm md:text-base">{member.name}</div>
                                    <div className="text-xs md:text-sm text-gray-600">{member.affiliation}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Committee;