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
      group: "Chief Advisors",
      members: [
        {
          name: "Prof. S. L. Kothari",
          image: "/organizing-committee/sl-kothari.jpeg",
          affiliation: "Vice President - ASTIF"
        },
        // {
        //   name: "Prof. (Dr.) Kamal K Dwivedi",
        //   image: "/organizing-committee/kamal-dwivedi.png",
        //   affiliation: "Senior Vice-President, RBEF"
        // }
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
          affiliation: "Sr. Scientist, Department of Applied Data Science, Institute For Energy Technology, Halden, Norway"
        },
        {
          name: "Prof. (Dr.) P. K. Kapur",
          image: "/organizing-committee/pk-kanpur.jpeg",
          affiliation: "Director, ACIDR, Amity University Uttar Pradesh"
        },
        {
          name: "Dr. Sameer Rohadia",
          image: "/organizing-committee/sameer-rohadia.png",
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
      group: "Organizing Chair & Convener",
      members: [
        {
          name: "Prof. (Dr.) Manju Kaushik",
          image: "/organizing-committee/manju-kaushik.webp",
          affiliation: "Director, E-Cell & Centre of IoT, President – Institution’s Innovation Council, Amity University Rajasthan"
        }
      ]
    },
    {
      group: "Program Chairs",
      members: [
        {
          name: "Dr. Nikita Jain",
          image: "/organizing-committee/nikita-jain.png",
          affiliation: "Prof and HEAD, Dept of Computer Engineering, Poornima College of Engineering Jaipur"
        },
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
      group: "Sponsorship and Funding Committee (Academics & Government Sponsorship)",
      members: [
        {
          name: "Prof. (Dr.) Manju Kaushik",
          image: "/organizing-committee/manju-kaushik.webp",
          affiliation: "AIIT, Amity University Rajasthan"
        }
      ]
    },
    {
      group: "Publication Committee",
      members: [
        {
          name: "Prof. (Dr.) Manju Kaushik",
          image: "/organizing-committee/manju-kaushik.webp",
          affiliation: "AIIT, Amity University Rajasthan"
        },
        {
          name: "Dr. Nikita Jain",
          image: "/organizing-committee/nikita-jain.png",
          affiliation: "Prof and HEAD, Dept of Computer Engineering, Poornima College of Engineering Jaipur"
        },
      ]
    },
    {
      group: "Session Organising Committee",
      members: [
        { name: "Dr. Yudhveer Singh", image: "/organizing-committee/yudhveer-singh.png", affiliation: "AIIT, Amity University Rajasthan" },
        { name: "Dr. Chitresh Banerjee", image: "/organizing-committee/chitresh-banerjee.png", affiliation: "AIIT, Amity University Rajasthan" },
        { name: "Dr. Rakhi Mutha", image: "/organizing-committee/rakhi-mutha.jpg", affiliation: "AIIT, Amity University Rajasthan" }
      ]
    },
    {
      group: "Registration Committee",
      members: [
        { name: "Dr. Yudhveer Singh", image: "/organizing-committee/yudhveer-singh.png", affiliation: "AIIT, Amity University Rajasthan" },
        { name: "Dr. Abhineet Saxena", image: "/organizing-committee/abhineet-saxena.jpg", affiliation: "ABS, Amity University Rajasthan" }
      ]
    },
    {
      group: "Certificate Distribution Committee",
      members: [
        { name: "Prof. (Dr.) Manju Kaushik", image: "/organizing-committee/manju-kaushik.webp", affiliation: "AIIT, Amity University Rajasthan" },
        { name: "Dr. Yudhveer Singh", image: "/organizing-committee/yudhveer-singh.png", affiliation: "AIIT, Amity University Rajasthan" },
        { name: "Mr. Rohit Kushwah", image: "/organizing-committee/rohit-kushwaha.jpg", affiliation: "Office Assistant, AII, Amity University Rajasthan" }
      ]
    },
    {
      group: "Publicity & Promotion Committee",
      members: [
        { name: "Dr. Tanushree Mukherjee", image: "/organizing-committee/tanushri-mukherjee.jpg", affiliation: "ASCO, Amity University Rajasthan" },
        { name: "Ar. Kristi Verma", image: "/organizing-committee/kristi-verma.jpeg", affiliation: "ASAP, Amity University Rajasthan" },
        { name: "Mr. Niladri Ghosh", image: "/organizing-committee/nildari-gosh.jpeg", affiliation: "Social Media Officer, Amity University Rajasthan" }
      ]
    },
    {
      group: "Media Committee",
      members: [
        { name: "Dr. Pallavi Mishra", image: "/organizing-committee/pallavi-mishra.jpg", affiliation: "ASCO, Amity University Rajasthan" },
        { name: "Mr. Tarun Batra", image: "/organizing-committee/tarun-batra.jpg", affiliation: "Admission Counselor, Amity University Rajasthan" },
        { name: "Mr. Niladri Ghosh", image: "/organizing-committee/nildari-gosh.jpeg", affiliation: "Social Media Officer, Amity University Rajasthan" },
        { name: "ASCO Studio Team", image: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png", affiliation: "Amity University Rajasthan" }
      ]
    },
    {
      group: "Rapporteur Committee",
      members: [
        { name: "Dr. Yudhveer Singh", image: "/organizing-committee/yudhveer-singh.png", affiliation: "AIIT, Amity University Rajasthan" },
        { name: "Dr. Abhineet Saxena", image: "/organizing-committee/abhineet-saxena.jpg", affiliation: "ABS, Amity University Rajasthan" },
        { name: "Ar. Kristi Verma", image: "/organizing-committee/kristi-verma.jpeg", affiliation: "ASAP, Amity University Rajasthan" }
      ]
    },
    {
      group: "Delegates Committee",
      members: [
        { name: "Prof. (Dr.) Manju Kaushik", image: "/organizing-committee/manju-kaushik.webp", affiliation: "AIIT, Amity University Rajasthan" },
        { name: "Mr. Ram Pratap Singh", image: "/organizing-committee/ram-pratap-singh.jpg", affiliation: "Admin, Amity University Rajasthan" },
        { name: "Mr. Abhishek Pareek", image: null && "/organizing-committee/akash-das.jpeg", affiliation: "Admin, Amity University Rajasthan" }
      ]
    },
    {
      group: "Hospitality/Transport Committee",
      members: [
        { name: "Dr. Yudhveer Singh", image: "/organizing-committee/yudhveer-singh.png", affiliation: "AIIT, Amity University Rajasthan" },
        { name: "Ms. Adity", image: "/organizing-committee/adity.jpg", affiliation: "ASH, Amity University Rajasthan" },
        { name: "Mr. Ram Pratap Singh", image: "/organizing-committee/ram-pratap-singh.jpg", affiliation: "Admin, Amity University Rajasthan" },
        { name: "Mr. Abhishek Pareek", image: null && "/organizing-committee/akash-das.jpeg", affiliation: "Admin, Amity University Rajasthan" }
      ]
    },
    {
      group: "Stage Management, Decoration & Culture Committee",
      members: [
        { name: "Prof. Parul Mishra", image: "/organizing-committee/parul-mishra.jpeg", affiliation: "ASL, Amity University Rajasthan" },
        { name: "Dr. Sachin Bansal", image: "/organizing-committee/sachin-bansal.jpeg", affiliation: "ASET, Amity University Rajasthan" },
        { name: "Mr. Kapil Dangi", image: "/organizing-committee/kapil-dangi.jpeg", affiliation: "ASLA/ASFA, Amity University Rajasthan" },
        { name: "Mr. Ravi Verma", image: "/organizing-committee/ravi-verma.jpeg", affiliation: "ASCENT, Amity University Rajasthan" },
        { name: "Mr. Radhey Shyam", image: "/organizing-committee/radhey-shyam.jpeg", affiliation: "ASFA, Amity University Rajasthan" },
        { name: "Mr. R. K Pachauri", image: "/organizing-committee/rk-pachauri.jpeg", affiliation: "IT, Amity University Rajasthan" }
      ]
    },
    {
      group: "IT Support Committee",
      members: [
        { name: "Mr. R. K Pachauri", image: "/organizing-committee/rk-pachauri.jpeg", affiliation: "IT, Amity University Rajasthan" }
      ]
    },
    {
      group: "Finance Committee",
      members: [
        { name: "Prof. (Dr.) Manju Kaushik", image: "/organizing-committee/manju-kaushik.webp", affiliation: "AIIT, Amity University Rajasthan" },
        { name: "Mr. Manish Sharma", image: "/organizing-committee/manish-sharma.jpg", affiliation: "AGM, Accounts, Amity University Rajasthan" },
        { name: "Mr. Raj Kumar", image: "/organizing-committee/raj-kumar.jpeg", affiliation: "Assistant Manager, Accounts, Amity University Rajasthan" },
        { name: "Mr. Rohit Kushwah", image: "/organizing-committee/rohit-kushwaha.jpg", affiliation: "Office Assistant, AII, Amity University Rajasthan" }
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