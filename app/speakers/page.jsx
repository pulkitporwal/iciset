"use client";
import React, { useState } from "react";

// export const metadata = {
//   title: "Keynote/Guest Speakers",
//   description: "Keynote and guest speakers for ISET 2026.",
//   keywords: ["ICCISET", "speakers", "keynote", "guest speakers"],
// };

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const speakers = [
    {
      name: "Prof. Mike Hinchey",
      image: `/speakers/michael-hinchey.png`,
      affiliation: "Chair, UK, Ireland Section IEEE, UP",
      description:
        "Mike Hinchey is Professor of Software Engineering at University of Limerick, Ireland. Prior to joining Lero, Professor Hinchey was Director of the NASA Software Engineering Laboratory; he continues to serve as a NASA Expert. In 2009 he was awarded NASA's Kerley Award as Innovator of the Year. Hinchey holds a B.Sc. in Computer Systems from University of Limerick, an M.Sc. in Computation from University of Oxford and a PhD in Computer Science from University of Cambridge. The author/editor of more than 15 books and over 200 articles on various aspects of Software Engineering, at various times Hinchey previously hel​​d positions as Full Professor in Australia, UK, Sweden and USA. He is a Chartered Engineer, Chartered Engineering Professional, Chartered Mathematician and Charted Information Technology Professional, as well as a Fellow of the IET, British Computer Society and Irish Computer Society.  He is President of IFIP (International Federation for Information Processing) and Vice-Chair (and Chair-Elect) of IEEE​ UK & Ireland section. He is also Editor-in-Chief of Innovations in Systems and Software Engineering: a NASA Journal and Journal of the Brazilian Computer Society.",
    },
    {
      name: "Dr. Sonal Amit Jain",
      image: `/speakers/sonal-amit-jain.jpeg`,
      affiliation: "Professor, PG Dept. of Computer Science & Information Technology, Sardar Patel University,Vidhyanagar, Anand-Gujarat",
      description:
        "Dr. Sonal Jain is Professor with over 22 years of academic experience. Before joining PG Department of Computer Science and Information Technology, Sardar Patel University, Vallabh Vidhyanagar, she was associated with GLS Institute of Computer Technology, Ahmedabad for 12 years and then served as Head, Department of Computer Science and Engineering, JK Lakshmipat University, Jaipur for 10 years. She has been trained for PBL Pedagogy at JK Lakshmipat University, for Project Based Learning Pedagogy by Master Class conducted by Prof. Siddharthan, Professor,- Olin College of Engineering, USA. She has co-developed Courses like Computational Data Analysis, Intelligent Automation and Business and Intelligent Machines. Dr. Jain has co-authored books including Personal Computer Software (Wiley India), Simplifying C (Dreamtech Publications) and six text books for Gujarat State Education Board. Dr. Jain has several publications to her credit and she has presented research papers at National and International conferences",
    },
    {
      name: "Dr. S. Neduncheliyan Subbu",
      image: `/speakers/s-neduncheliyan.png`,
      affiliation: "Dean - Computing, Rajalakshmi Institute of Technology, Chennai, India",
      description:
        "Dr. S. Neduncheliyan Subbu is a Dean, currently serving as Dean of the School of Computing at the Bharath Institute of Higher Education and Research in Chennai, India. He holds a B.E. in Computer Science and has published his work in journals such as the National Institutes of Health (NIH). He is also recognized on the ORCID platform.  ",
    },
    {
      name: "Prof. Vassilis C. Gerogiannis",
      image: `/speakers/vassilis.jpg`,
      affiliation: "Professor & Head, Dept. of Digital System, University of Thessaly, Greece",
      description:
        "Vassilis C. Gerogiannis, Professor and Head in the Department of Digital Systems, University of Thessaly (academic subject: Analysis & Design of Systems & Projects with Emphasis on Decision Making). Adjunct Professor, Hellenic Open University. Visiting Professor, IPAG Business School (France) and Siauliai State University of Applied Sciences (Lithuania). He holds a Diploma in Computer Engineering and a PhD in Software Engineering (University of Patras, Greece). From 1992 until the present, he participates in several R&D projects. Author/co-author of more than 130 papers published in international journals/conference proceedings and cited in a plethora of citations. Co-author/editor of three scientific books. Member of the editorial board, guest editor, and reviewer in international journals. Conference chair/program chair and invited speaker in international conferences. He has received the “best paper award” at three international conferences. Member of the Management Board of the Hellenic National Academic Recognition Information Centre (NARIC), Member of the Council for Research & Innovation in Thessaly, Member of the Management Committee of the Entrepreneurship & Innovation Research Institute of the Research Center IASON at the University of Thessaly, Member of the Management Committee of the Technical Chamber Central and Western Greece, Member of the Central Assembly of the Technical Chamber of Greece, Member of the Scientific Committee of Electronics Engineers in the Technical Chamber of Greece.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
      <h2 className="text-3xl font-bold text-center text-[#005B96] mb-10">
        Keynote/Guest Speakers
      </h2>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {speakers &&
          speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition rounded-xl p-5 flex flex-col items-center text-center"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mb-4 border-2 border-blue-600"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {speaker.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 mb-4">
                {speaker.affiliation}
              </p>
              <p className="text-xs text-gray-500 line-clamp-5">
                {speaker.description}
              </p>
              <button
                className="mt-3 text-blue-600 hover:underline text-sm font-semibold"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                Read More
              </button>
            </div>
          ))}
      </div>

      {!speakers && (
        <div className="flex items-center justify-center py-24 w-full text-center text-2xl text-[#005B96] font-bold">
          <p className="text-center">To Be Announced Soon</p>
        </div>
      )}

      {/* Modal */}
      {selectedSpeaker && (
        <div className="fixed max-w-7xl inset-0 backdrop-blur-3xl bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-blue-50 w-full rounded-lg shadow-lg p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
              onClick={() => setSelectedSpeaker(null)}
            >
              ✕
            </button>
            <div className="flex flex-col items-center text-center">
              <img
                src={selectedSpeaker.image}
                alt={selectedSpeaker.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-blue-600"
              />
              <h3 className="text-xl font-bold text-gray-800">
                {selectedSpeaker.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 mb-3">
                {selectedSpeaker.affiliation}
              </p>
              <p className="text-sm text-gray-700 text-justify whitespace-pre-line">
                {selectedSpeaker.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Speakers;
