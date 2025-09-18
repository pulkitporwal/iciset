import Footer from "../components/footer";
import Hero from "../components/hero";
import ImportantDates from "../components/important-dates";
import InfiniteMarquee from "../components/marquee";
import Navbar from "../components/navbar";
import NewsSection from "../components/news";
import TextSection from "../components/text";
import Image from "next/image";

export const metadata = {
  title: "ICISET 2026 - International Conference on Intelligent Systems and Emerging Technologies",
  description:
    "ICISET 2026 — official conference website. Explore about the conference, university, and department details.",
  keywords: ["ICISET", "conference", "intelligent systems", "emerging technologies", "Amity Jaipur"],
};

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden flex flex-col ">
      <div className="bg-pattern">
        <div className="px-4 sm:px-6 lg:px-10 xl:mx-24 pt-4 pb-8">
          <div className="flex flex-col md:flex-row items-start lg:items-center justify-center gap-6 lg:gap-x-10">
            <NewsSection />
            <ImportantDates /></div>
        </div>
        <TextSection title={"About the Conference"}>
          <p>
            The International Conference on Intelligent Systems and Emerging Technologies (ISET 2026) is a premier global forum that brings together researchers, academicians, industry professionals, and practitioners to explore the latest advancements in intelligent systems and cutting-edge technologies. Scheduled to be held in 2026, this conference aims to foster collaboration, innovation, and knowledge sharing across multiple domains, driving the development of sustainable and smart solutions for real-world challenges.
          </p>
          <p>
            ISET 2026 will provide a dynamic platform for presenting high-quality research in areas such as Artificial Intelligence (AI), Machine Learning (ML), Deep Learning, Internet of Things (IoT), Cyber-Physical Systems, Robotics, Big Data Analytics, Cloud and Edge Computing, Smart Cities, and Emerging Technologies in healthcare, education, and industry 4.0. The event will feature keynote addresses from renowned experts, panel discussions on future trends, and technical sessions showcasing original research contributions from around the world.
          </p>
          <p>
            The conference proceedings will be published by a reputed publisher and indexed in major scientific databases, ensuring wide visibility and recognition of the presented work. Participants will have the opportunity to network with peers, explore collaborative research possibilities, and gain insights into state-of-the-art technological innovations. By uniting diverse perspectives and expertise, ISET 2026 seeks to advance scientific knowledge, encourage interdisciplinary research, and promote the adoption of intelligent systems and emerging technologies for a sustainable future. This conference will serve as a catalyst for innovation, equipping researchers and professionals to address global challenges through transformative technological solutions.
          </p>
        </TextSection>
        <TextSection title={"About University"}>
          <p>
            CHRIST (Deemed to be University) was born out of the educational vision of St Kuriakose Elias Chavara, an educationalist and social reformer of the nineteenth century in South India. He founded the first Catholic indigenous congregation, Carmelites of Mary Immaculate (CMI), in 1831, which administers CHRIST (Deemed to be University). CHRIST was established on 15 July 1969 as an affiliated college, with the Vision of &apos;Excellence and Service&apos;. It became a preferred educational institution in Bangalore, Delhi-NCR and Lavasa within the short period of inception. One of the first institutions in India to be accredited in 1998 by the NAAC, and subsequently in 2004 and 2016, CHRIST (Deemed to be University) has the top grade ‘A’ in the 4-point scale.
          </p>
          <p>
            Today, the University offers many Undergraduate, Postgraduate and PhD Programmes in Humanities, Social Sciences, Science, Commerce, Management, Engineering, Education, Law, and Architecture to over 24000 students from all the states of India and about 60 different countries. In 2019, CHRIST (Deemed to be University) completed 50 glorious years of its existence and sterling contribution to the cause of higher education in India.
          </p>
        </TextSection>
        <TextSection title={"About Department of Computer Science"}>
          <p>
            Department of Computer Science at CHRIST (Deemed to be University) Delhi- NCR has created a niche in the realm of higher education in India through its programmes. Currently, the department of computational sciences offers a wide array of undergraduate courses with multiple specializations. It offers undergraduate and doctoral programmes. A dedicated research block with all the latest research facilities boosts the morale of the faculty and research scholars alike. This is an ideal place for students with a research bent of mind to explore his/her passion. Apart from academics, students are moulded holistically through various co-curricular and extracurricular activities.
          </p>
        </TextSection>
      </div>
    </div>
  );
}
