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
    {
      name: "Dr. Jagdish Chand Bansal",
      image: `/speakers/jagdish-chand.png`,
      affiliation: "Associate Professor ",
      description:
        `Department of Mathematics, South Asian University, New Delhi, India jcbansal@sau.ac.in Dr. Jagdish Chand Bansal is an Associate Professor at South Asian University, New Delhi, and Visiting Faculty at Maths and Computer Science, Liverpool Hope University, UK. Dr. Bansal has obtained his Ph.D. in Mathematics from IIT Roorkee. Before joining SAU New Delhi, he had worked as an Assistant Professor at ABV- Indian Institute of Information Technology and Management Gwalior and BITS Pilani, India. His Primary area of interest is Swarm Intelligence and Nature-Inspired Optimization Techniques. Recently, he proposed a fission-

fusion social structure-based optimization algorithm, Spider Monkey Optimization (SMO), which is being applied to various problems from the engineering domain. He has published more than 60 research papers in various international journals/conferences. He has also received a Gold Medal at the UG and PG levels. Apart from SADIC, he is also the series editor of the series Algorithms for Intelligent Systems (AIS) published by Springer. He is the editor in chief of International Journal of Swarm Intelligence (IJSI) published by Inderscience. He is also the Associate Editor of IEEE ACCESS (IEEE) and ARRAY (Elsevier). He is the steering committee member and the general chair of the annual conference series SocProS. He is the general secretary of Soft Computing Research Society (SCRS).`,
    },
    {
      name: "Prof. Sanjay Misra",
      image: `/speakers/sanjay-mishra.jpg`,
      affiliation: "Sr. Scientist, Department of Applied Data Science, Institute For Energy Technology, Halden, Norway",
      description:
        `Prof Sanjay Misra, Sr. Scientist, Department of Applied Data Science, Institute for Energy Technology, Halden, Norway. Prof Sanjay Misra, a Sr. member of IEEE and ACM Distinguished Lecturer, is presently a Senior Scientist at the Institute of Energy Technology (IFE), Halden, Norway. Before joining IFE, he was associated with the Computer Science and Communication department of Østfold University College, Halden, Norway, and was a Full Professor (since Jan 2010) of Computer (Software) Engineering at Covenant University (400-500 ranked by THE (2019)) since 2012.

He has been amongst the top 2% of scientists in the world (published by Stanford University) for the last three consecutive years and also got several awards for outstanding publications (Institute of Engineering and Technology, UK - 2014 IET Software Premium Award (UK)), TUBITAK-Turkish Higher Education, and Atilim University). As per SciVal (SCOPUS- Elsevier) analysis (on 01.12.2022)- He has been the most productive researcher (Number 1) in Nigeria since 2017 (in all disciplines), in computer science, no 1 in the country & no 2 in the whole of Africa. His expertise is in the area of Applied Informatics (Software Engineering and its Applications, Cyber Security, Health Informatics, and Intelligent systems) and has been published (- around 150 JCR/SCIE) in top journals like Computers and Security, Information Processing and Management, Engineering Applications of Artificial Intelligence, Expert Systems and Applications, etc. He has delivered more than 100 keynote/invited talks/public lectures at reputed conferences and institutes (traveled to more than 60 countries). He is Editor in Chief of Int J of Human Capital & Inf Technology Professionals(IGI), IT Personnel and Project Management(IGI), and editor in various SCIE journals(Nature: Scientific Report (Impact Factor: 4.996), Elsevier: Alexandria Engineering Journal (Impact Factor: 6.626, Q1 7/92)), edited several special issues and 80 books from Springer(65 LNCSs, 4 LNEEs, 3 LNNSs, 3 CCISs), 10 IEEE proceedings. He delivered more than 100 keynotes, invited talks, and public lectures at reputed conferences and institutes (he traveled to more than 60 countries).`,
    },
    {
      name: "Prof. Nilanjan Dey",
      image: `/speakers/nilanjan-dey.jpg`,
      affiliation: "Department of Computer Science and Engineering Techno International New Town, Kolkata, India",
      description:
        `Nilanjan Dey (Senior Member, IEEE) received the B.Tech., M.Tech. in information technology from West Bengal Board of Technical University and Ph.D. degrees in electronics and telecommunication engineering from Jadavpur University, Kolkata, India, in 2005, 2011, and 2015, respectively. Currently, he is Professor with the Techno International New Town, Kolkata and a visiting fellow of the University of Reading, UK. He has authored over 300 research articles in peer-reviewed journals and international conferences and 40 authored books.

His research interests include medical imaging and machine learning. Moreover, he actively participates in program and organizing committees for prestigious international conferences, including World Conference on Smart Trends in Systems Security and Sustainability (WorldS4), International Congress on Information and Communication Technology (ICICT), International Conference on Information and Communications Technology for Sustainable Development (ICT4SD) etc. He is also the Editor-in-Chief of International Journal of Ambient Computing and Intelligence, Associate Editor of IEEE Transactions on Technology and Society and series Co-Editor of Springer Tracts in Nature-Inspired Computing and Data-Intensive Research from Springer Nature and Advances in Ubiquitous Sensing Applications for Healthcare from Elsevier etc. Furthermore, he is an Editorial Board Member of IEEE Data Descriptions. He is a Fellow of IETE and member of IE, ISOC etc.`,
    },
    {
      name: "Prof. Shandar Ahmed",
      image: `/speakers/shandar-ahmed.png`,
      affiliation: "School of Computational and Integrative Sciences Jawaharlal Nehru University, New Delhi",
      description:
        `Shandar Ahmad is a Professor of Bioinformatics and former Dean at the School of Computational and Integrative Sciences, Jawaharlal Nehru University, since 2016. Earlier, he worked in the National Institute of Biomedical Innovation, Health and Nutrition, Japan (2007-2016), where he still holds a Visiting Scientist honorary position. He was also an adjunct Associate Professor at the Graduate School of Frontier Bioscience, Osaka University (2008-2016).

Shandar Ahmad is interested in developing data-driven algorithms and applications for biological data with an integrative perspective. His lab, called SciWhyLab, aims to leverage on his past and ongoing works in the field of sequence and structural analysis of protein-DNA and other biomolecular interactions, particularly their modeling through conventional and deep machine learning algorithms. He has experience in studying patterns of global and condition-specific gene expression, single-cell transcriptome analysis, miRNA and NGS data analysis for Intestinal Bowel Syndrome, Influenza vaccination response, Uniparental disomy and other critical problems in the field of Biomedical research. His group has also developed deep learning algorithms to interpret ECG, EEG and medical image data using deep learning models such as LSTM, CNN and deep neural networks. For more, visit his website www.sciwhylab.org Shandar Ahmad also has an interest in Poetry. He writes in English, Urdu and Hindi and his recent collection of English Ghazal was launched as part of the book “Dialogues with a caged parrot and Ghazal of an eavesdropper”, published by Studera Press (https://www.amazon.in/Dialogues-Caged-Parrot-Ghazals-Eavesdropper-Rabinarayan/dp/93858 83747). He blogs his thoughts and poetry on www.shandarthought.net`,
    },
    {
      name: "Prof. Rashid Mehmood",
      image: `/speakers/rahid-mehmood.png`,
      affiliation: "Professor of High-Performance Data Analytics",
      description:
        `Faculty of Computer and Information Systems, Islamic University of Madinah, Madinah 42351, Saudi Arabia Prof. Rashid Mehmood is a Professor of High-Performance Data Analytics at the Faculty of Computer and Information Systems,

Islamic University of Madinah, Saudi Arabia. He specializes in advanced data analytics techniques, contributing significantly to the field through research and academic leadership.`,
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
