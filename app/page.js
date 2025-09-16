import Footer from "../components/footer";
import Hero from "../components/hero";
import ImportantDates from "../components/important-dates";
import InfiniteMarquee from "../components/marquee";
import Navbar from "../components/navbar";
import NewsSection from "../components/news";
import TextSection from "../components/text";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden flex flex-col ">
      <div className="bg-pattern">        
        <div className="mx-24 pt-4 pb-8">
          <div className="flex items-center justify-center px-5 gap-x-10">
            <NewsSection />
            <ImportantDates /></div>
        </div>
        <TextSection title={"About Conference"}>
          <p>
            The aim of the International Conference on Smart Cyber Physical Systems (ICSCPS-2026) is to bring together the academicians, researchers, and industrial professionals to discuss and exchange their knowledge, innovative ideas, latest issues, advanced technologies, and advancements in the area of Sustainable Development Goals, Cyber physical systems, and related applications that will be presented in the conference. Cyber-physical systems (CPS) are societal-scale engineered systems that are built from and depend upon the seamless, correct and safe integration of physical processes, computation components, and, in most cases the human supervisors. As a multi-disciplinary discipline, CPS engineering requires theoretical analysis, advanced heuristics, artificial intelligence, security methodologies and big data to work seamlessly together. The deployment of CPS is profoundly transforming how we interact with the physical world, just as the world wide web transformed how we interact with one another. The impact of CPS science is visible across a number of challenging domains, including autonomous systems, agriculture, aeronautics, building design, civil infrastructure, energy, environmental quality, healthcare and personalized medicine, manufacturing, and transportation. Further integration and innovations in CPS will continue to have an enormous societal and economic impact.
          </p>
          <p>

            The International Conference on Smart Cyber Physical Systems (ICSCPS-2026) will act as an International platform to share and demonstrate novel approaches, development, technology improvement and research among interested researchers, students, developers, and practitioners. The conference invites and encourages the submissions in terms of concepts, surveys, state-of-art original and unpublished research, running implementation, applications, industrial case studies and in-progress research that can be categorized among regular and poster papers. The conference will be having many plenary and invited keynote talks by the international reputed speakers covering the latest topic of a wide range of interested researchers.
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
