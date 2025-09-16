import React from "react"
import TextSection from "../../../components/text"

const HowToReach = () => {
  const routes = [
    {
      mode: "By Air",
      description:
        "Amity University Rajasthan can be easily reached by air. The nearest airport is Jaipur International Airport (JAI), located at around 27 kilometers from the university campus. The airport has excellent connectivity with major cities in India such as Delhi, Mumbai, Bangalore, and Kolkata, as well as select international destinations.",
      icon: "✈️",
    },
    {
      mode: "By Rail",
      description:
        "Jaipur is served by its main railway station, Jaipur Junction, located at a distance of approximately 42 kilometers from the Amity University Rajasthan campus. Another nearby station is Gandhinagar Jaipur Railway Station at a distance of around 40 kilometers. Jaipur Junction is well-connected to major cities across the country through a robust rail network.",
      icon: "🚆",
    },
    {
      mode: "By Bus",
      description:
        "Jaipur has excellent bus connectivity and is served by the Sindhi Camp Bus Stand, which is the main inter-state bus terminal, located around 40 kilometers from the Amity University Rajasthan campus. Both state-run and private buses operate from here, connecting Jaipur to Delhi, Agra, Udaipur, Jodhpur, and other key destinations in Rajasthan and neighboring states.",
      icon: "🚌",
    },
    {
      mode: "By Road",
      description:
        "Amity University Rajasthan is easily accessible via road as it is located on NH-11C (Jaipur-Delhi Highway). Jaipur has efficient road connectivity with major cities such as Delhi (approximately 270 km), Ajmer (135 km), Agra (240 km), and Udaipur (395 km). Visitors can conveniently book buses, hire cabs, or use private vehicles to reach the campus.",
      icon: "🚗",
    },
    {
      mode: "By Metro (Within Jaipur City)",
      description:
        "While Jaipur Metro currently does not extend directly to the Amity University Rajasthan campus, it serves the main parts of Jaipur city. The nearest metro station is Mansarovar Metro Station, located around 35 kilometers from the campus. From there, taxis and buses are available to reach the university.",
      icon: "🚇",
    },
  ]

  return (
    <div>
      <TextSection title="How to Reach Amity University Rajasthan, Jaipur">
        <div className="px-4 py-6 flex flex-col gap-6">
          {routes.map((route, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm p-5 bg-white hover:shadow-md transition"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#005B96] mb-2 flex items-center gap-2">
                <span className="text-2xl">{route.icon}</span> {route.mode}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {route.description}
              </p>
            </div>
          ))}
        </div>
      </TextSection>
    </div>
  )
}

export default HowToReach
