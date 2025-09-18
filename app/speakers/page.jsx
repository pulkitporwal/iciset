import React from 'react'

export const metadata = {
  title: "Keynote/Guest Speakers",
  description: "Keynote and guest speakers for ISET 2026.",
  keywords: ["ICCISET", "speakers", "keynote", "guest speakers"],
};

const Speakers = () => {
    const speakers = [
    {
      name: "Mohd Shahid Husain",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "University of Technology and Applied Sciences, Ibri, Sultanate of Oman",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Chirag Patel",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Charotar University of Science and Technology (CHARUSAT) University, Gujarat, India",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Y. Justin Dhas",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "SRM Easwari Engineering College, India",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Arun Solanki",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Gautam Buddha University, Greater Noida, India",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Deepak Sinwar",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Manipal University Jaipur, India",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Vinod Gill",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Govt. College Nalwa (Hisar), Haryana, India",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Gaurav Purohit",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "CSIR-Central Electronics Engineering Research Institute (CSIR-CEERI), Pilani, India",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Ekata Gupta",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Guru Nanak Institute of Management, Delhi NCR, India",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Deepa Kharb",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Indian Law Institute, New Delhi, India",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Ekbal Rashid",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "RTC Institute of Technology, India",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Ravi M Yadahalli",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Methodist College of Engineering and Technology, Hyderabad, India",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Nahid Fatima",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Prince Sultan University, KSA",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Leo John Baptist",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Botho University, Gaborone, Botswana",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Ashraful Islam",
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      affiliation: "Independent University Bangladesh, Dhaka, Bangladesh",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
      <h2 className="text-3xl font-bold text-center text-[#005B96] mb-10">
        Keynote/Guest Speakers
      </h2>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition rounded-xl p-5 flex flex-col items-center text-center"
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mb-4 border-2 border-blue-600"
            />
            <h3 className="text-lg font-semibold text-gray-800">{speaker.name}</h3>
            <p className="text-sm text-gray-600 mt-1 mb-4">{speaker.affiliation}</p>
            <p className="text-xs text-gray-500 line-clamp-5">
              {speaker.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;