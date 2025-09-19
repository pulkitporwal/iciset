import React from 'react'

export const metadata = {
  title: "Keynote/Guest Speakers",
  description: "Keynote and guest speakers for ISET 2026.",
  keywords: ["ICCISET", "speakers", "keynote", "guest speakers"],
};

const Speakers = () => {
  const speakers = null;
  //   const speakers = [
  //   // {
  //   //   name: "Mohd Shahid Husain",
  //   //   image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
  //   //   affiliation: "University of Technology and Applied Sciences, Ibri, Sultanate of Oman",
  //   //   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  //   // },
  // ];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
      <h2 className="text-3xl font-bold text-center text-[#005B96] mb-10">
        Keynote/Guest Speakers
      </h2>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {speakers && speakers.map((speaker, index) => (
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
      {!speakers && (
          <div className='flex items-center justify-center py-24 w-full text-center text-2xl text-[#005B96] font-bold'>
            <p className='text-center'>To Be Anounced Soon</p>
          </div>
        )}
    </div>
  );
};

export default Speakers;