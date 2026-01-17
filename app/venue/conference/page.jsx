import React from 'react'
import TextSection from "../../../components/text"

const HighlightCard = ({ title, description, image, link }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 border rounded-lg shadow-sm p-4 bg-white">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-[1300px] md:w-[200px] h-48 object-cover rounded"
        />
      )}
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-[#005B96] mb-2">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-2 text-sm"
          >
            Official Website
          </a>
        )}
      </div>
    </div>
  )
}

const ConferenceVenue = () => {
    const highlights = [
    {
      title: "City Palace",
      description:
        "The City Palace in Jaipur is a grand complex blending Mughal and Rajput architecture. Built by Maharaja Sawai Jai Singh II, it features museums, courtyards, and the royal residence. Visitors can explore Mubarak Mahal, Chandra Mahal, and Diwan-i-Khas showcasing royal artifacts and history.",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/city-palace-jaipur-rajasthan-1?qlt=82&ts=1742164664970",
      link: "https://www.citypalacejaipur.org",
    },
    {
      title: "Hawa Mahal (Palace of Winds)",
      description:
        "Constructed in 1799, Hawa Mahal is one of Jaipur’s iconic landmarks. With 953 intricately carved windows, it allowed royal women to view city life unseen. Its pink sandstone honeycomb façade glows beautifully in sunlight.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1200px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
      link: "https://www.hawamahaljaipur.in",
    },
    {
      title: "Amber Fort",
      description:
        "Amber Fort is a UNESCO World Heritage Site located 11 km from Jaipur. Built in the 16th century, it features stunning ramparts, courtyards, and mirror palaces. Elephant rides, jeep rides, and evening light shows make it a must-visit.",
      image: "https://www.swantour.com/blogs/wp-content/uploads/2018/09/Amer-Fort.jpg",
      link: "https://www.amberfort.org",
    },
    {
      title: "Jantar Mantar",
      description:
        "Constructed in 1734, Jantar Mantar is an astronomical observatory housing 19 instruments. The Samrat Yantra, the world’s largest sundial, still tells accurate time. It is a UNESCO World Heritage Site reflecting India’s scientific heritage.",
      image: "https://www.andbeyond.com/wp-content/uploads/sites/5/jamtar-mantar-jaipur.jpg",
      link: "https://www.jantarmantar.org",
    },
    {
      title: "Bhamashah Techno Hub",
      description:
        "Bhamashah Techno Hub is India’s largest startup incubation center, fostering innovation and entrepreneurship. Spread across 100,000 sq. ft., it provides co-working spaces, mentorship, funding access, and cutting-edge facilities for startups in technology and allied sectors.",
      image: "https://nayarajasthan.wordpress.com/wp-content/uploads/2018/09/bth_1.png?w=640",
      link: "https://startup.rajasthan.gov.in/content/raj/startup/en/bhamashah-techno-hub.html",
    },
    {
      title: "Rajasthan International Centre (RIC)",
      description:
        "RIC focuses on skill development and international, preparing students for the future of technology and industry. It offers hands-on learning in mechanical, electrical, and digital domains, playing a crucial role in Rajasthan’s technical workforce development.",
      image: "https://arpramodjain.com/wp-content/uploads/2019/12/DJI_0088-3-scaled.jpg",
      link: "https://ricjaipur.org",
    },
    {
      title: "Nahargarh Fort",
      description:
        "Built in 1734 on the Aravalli hills, Nahargarh Fort offers panoramic sunset views of Jaipur. Its Indo-European architecture and Madhavendra Bhawan palace make it a popular destination.",
      image: "https://www.remotelands.com/travelogues/app/uploads/2019/01/Amber-fort-header-1280x640.jpg",
    },
    {
      title: "Jal Mahal (Water Palace)",
      description:
        "Located in the middle of Man Sagar Lake, Jal Mahal is a five-story palace with four levels submerged in water. It glows at sunrise and sunset with the Nahargarh hills backdrop.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/c4/72/f6/jal-mahal-jaipur-tour.jpg?w=900&h=500&s=1",
    },
    {
      title: "Galtaji Temple (Monkey Temple)",
      description:
        "A Hindu pilgrimage site set in the Aravalli hills, Galtaji Temple features several temples and sacred water tanks. It is home to many monkeys, earning it the name Monkey Temple.",
      image: "https://jaipurtourism.co.in/images/places-to-visit/header/galtaji-temple-jaipur-entry-fee-timings-holidays-reviews-header.jpg",
    },
    {
      title: "Birla Mandir",
      description:
        "Built in white marble, Birla Mandir is dedicated to Lord Vishnu and Goddess Lakshmi. Its carvings, serene ambiance, and nighttime illumination attract thousands of visitors.",
      image: "https://www.trawell.in/admin/images/upload/151648860Jaipur_Birla_Temple_Main.jpg",
    },
    {
      title: "Albert Hall Museum",
      description:
        "The oldest museum in Rajasthan, Albert Hall houses a vast collection of artifacts including paintings, ivory, carpets, and an Egyptian mummy. Its Indo-Saracenic design is stunning when illuminated at night.",
      image: "https://content-tourist.rajasthan.gov.in/uploads/albert_hall_museum_jaipur_entry_fee_timings_holidays_reviews_header_219f4b832f.jpg",
    },
  ]


  return (
    <div>
      <TextSection title="Conference Venue: Amity University Rajasthan">
        <div className="px-4 py-2 flex flex-col items-center justify-center gap-3">
          <img
            src="/amity-campus.webp"
            alt="Amity University Rajasthan Campus"
            className="rounded shadow-md"
          />
          <p>
            Amity University Rajasthan, Jaipur, is a part of the Amity Education
            Group which has been at the forefront of higher education in India.
            Known for its modern infrastructure, strong research culture, and
            global collaborations, the university offers a vibrant academic
            environment.
          </p>
          <p>
            The lush green campus is well-connected to Jaipur city and the
            surrounding points of interest. It combines peaceful academic
            ambience with access to urban amenities, making it an attractive
            destination for conferences, workshops, and scholarly events.
          </p>
        </div>

        <div className="px-4 py-6">
          <h2 className="text-lg md:text-xl font-bold bg-[#005B96] text-white w-full text-center py-2 rounded">
            Highlights of Jaipur & Nearby Attractions
          </h2>

          <div className="mt-6 flex flex-col gap-6">
            {highlights.map((place, index) => (
              <HighlightCard key={index} {...place} />
            ))}
          </div>
        </div>
      </TextSection>
    </div>
  )
}

export default ConferenceVenue
