import React from "react";

export const metadata = {
  title: "Organizing Committee",
  description: "Organizing Committee for ISET 2026 at Amity University Jaipur.",
  keywords: ["ICCISET", "organizing committee", "conference committee"],
};

const Committee = () => {
    const groups = [
  {
    group: "Chief Patrons",
    members: [
      {
        name: "Dr. Ashok Chauhan",
        image: "/organizing-committee/ashok-chauhan.jpg",
        affiliation: "Founder President, Amity Group"
      },
      {
        name: "Dr. Aseem Chauhan",
        image: "/organizing-committee/aseem-chauhan.webp",
        affiliation: "Chancellor, Amity University Rajasthan"
      }
    ]
  },
  {
    group: "Patrons",
    members: [
      {
        name: "Prof (Dr.) Amit Jain",
        image: "/organizing-committee/amit-jain.jpg",
        affiliation: "President/Vice Chancellor, Amity University Rajasthan"
      },
      {
        name: "Prof (Dr.) G K Aseri",
        image: "/organizing-committee/gk-aseri.jpeg",
        affiliation: "Pro President/Pro Vice Chancellor, Amity University Rajasthan"
      }
    ]
  },
  {
    group: "General Chairs",
    members: [
      {
        name: "Prof. Emilia Balas Valentina",
        image: "/organizing-committee/emilia-balas.jpg",
        affiliation: "Professor, Academy of Romanian Scientists, Romania"
      },
      {
        name: "Prof. Sanjay Misra",
        image: "/organizing-committee/sanjay-misra.jpeg",
        affiliation: "Department of Applied Data Science, Institute For Energy Technology, Halden, Norway"
      },
      {
        name: "Prof. (Dr.) P. K. Kapur",
        image: "/organizing-committee/pk-kanpur.jpeg",
        affiliation: "Director, ACIDR, Amity University Uttar Pradesh"
      },
      {
        name: "Dr. Sameer Rohadia",
        image: "/organizing-committee/sameer-rohadia.jpeg",
        affiliation: "Specialist Business Intelligence & Data Warehouse, Hannover, Germany"
      }
    ]
  },
  {
    group: "Conference Chairs",
    members: [
      {
        name: "Prof. Bhupesh Kumar Singh",
        image: "/organizing-committee/bupesh-singh.jpeg",
        affiliation: "Dy. Director, Amity School of Engineering and Technology, Amity University Rajasthan"
      },
      {
        name: "Prof. Ramesh Chandra Poonia",
        image: "/organizing-committee/ramesh-chandra-poonia.jpeg",
        affiliation: "CHRIST (Deemed to be University), Delhi-NCR, Ghaziabad, Uttar Pradesh"
      }
    ]
  },
  {
    group: "Program Chairs",
    members: [
      {
        name: "Dr. Chitresh Banerjee",
        image: "/organizing-committee/chitresh-banerjee.png",
        affiliation: "Associate Professor, AIIT, Amity University Rajasthan"
      },
      {
        name: "Dr. Yudhveer Singh",
        image: "/organizing-committee/yudhveer-singh.png",
        affiliation: "Associate Professor, AIIT, Amity University Rajasthan"
      }
    ]
  },
  {
    group: "Publication Committee",
    members: [
      {
        name: "Prof. Ramesh Chandra Poonia",
        image: "/organizing-committee/ramesh-chandra-poonia.jpeg",
        affiliation: "CHRIST (Deemed to be University), Delhi-NCR, Ghaziabad, Uttar Pradesh"
      },
      {
        name: "Prof. (Dr.) Manju Kaushik",
        image: "/organizing-committee/manju-kaushik.webp",
        affiliation: "AIIT, Amity University Rajasthan"
      }
    ]
  },
  {
    group: "Finance Committee",
    members: [
      {
        name: "Prof. (Dr.) Manju Kaushik",
        image: "/organizing-committee/manju-kaushik.webp",
        affiliation: "AIIT, Amity University Rajasthan"
      },
      {
        name: "Mr. Manish Sharma",
        image: `/organizing-committee/manish-sharma.png`,
        affiliation: "AGM, Accounts, Amity University Rajasthan"
      },
      {
        name: "Mr. Raj Kumar",
        image: `/organizing-committee/raj-kumar.jpeg`,
        affiliation: "Assistant Manager, Accounts, Amity University Rajasthan"
      },
      {
        name: "Mr. Rohit Kushwah",
        image: `/organizing-committee/rohit-kushwaha.jpeg`,
        affiliation: "Office Assistant, AII, Amity University Rajasthan"
      }
    ]
  },
  {
    group: "Collaboration Committee",
    members: [
      {
        name: "Prof. (Dr.) Manju Kaushik",
        image: "/organizing-committee/manju-kaushik.webp",
        affiliation: "AIIT, Amity University Rajasthan"
      }
    ]
  },
  {
    group: "Conference Proceedings",
    members: [
      {
        name: "Prof. Ramesh Chandra Poonia",
        image: "/organizing-committee/ramesh-chandra-poonia.jpeg",
        affiliation: "CHRIST (Deemed to be University), Delhi-NCR, Ghaziabad, Uttar Pradesh"
      }
    ]
  },
  {
    group: "Publicity Committee",
    members: [
      {
        name: "Dr. Tanushree Mukherjee",
        image: `/organizing-committee/tanushri-mukherjee.jpg`,
        affiliation: "ASCO, Amity University Rajasthan"
      }
    ]
  },
  {
    group: "Hospitality Committee",
    members: [
      {
        name: "Dr. Yudhveer Singh",
        image: "/organizing-committee/yudhveer-singh.png",
        affiliation: "AIIT, Amity University Rajasthan"
      }
    ]
  },
  {
    group: "IT Support Committee",
    members: [
      {
        name: "Mr. R. K Pachauri",
        image: `/organizing-committee/rk-pachauri.jpeg`,
        affiliation: "IT, Amity University Rajasthan"
      }
    ]
  },
  {
    group: "Registration and Attendee Committee",
    members: [
      {
        name: "Dr. Yudhveer Singh",
        image: "/organizing-committee/yudhveer-singh.png",
        affiliation: "AIIT, Amity University Rajasthan"
      },
      {
        name: "Dr. Abhineet Saxena",
        image: `/organizing-committee/abhineet-saxena.jpg`,
        affiliation: "ABS, Amity University Rajasthan"
      }
    ]
  },
  {
    group: "Website Committee",
    members: [
      {
        name: "Dr. Chitresh Banerjee",
        image: "/organizing-committee/chitresh-banerjee.png",
        affiliation: "AIIT, Amity University Rajasthan"
      }
    ]
  },
  {
    group: "Sponsors Committee",
    members: [
      {
        name: "Prof. (Dr.) Manju Kaushik",
        image: "/organizing-committee/manju-kaushik.webp",
        affiliation: "AIIT, Amity University Rajasthan"
      }
    ]
  },
  {
    group: "Stage Management and Student Discipline Committee",
    members: [
      {
        name: "Prof. Parul Mishra",
        image: `/organizing-committee/parul-mishra.jpeg`,
        affiliation: "ASL, Amity University Rajasthan"
      },
      {
        name: "Dr. Sachin Bansal",
        image: `/organizing-committee/sachin-bansal.jpeg`,
        affiliation: "ASET, Amity University Rajasthan"
      }
    ]
  }
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