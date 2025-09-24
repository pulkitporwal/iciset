import Footer from "../components/footer";
import Hero from "../components/hero";
import ImportantDates from "../components/important-dates";
import InfiniteMarquee from "../components/marquee";
import Navbar from "../components/navbar";
import NewsSection from "../components/news";
import TextSection from "../components/text";
import Image from "next/image";

export const metadata = {
  title: "ISET 2026 - International Conference on Intelligent Systems and Emerging Technologies",
  description:
    "ISET 2026 — official conference website. Explore about the conference, university, and department details.",
  keywords: ["ISET", "conference", "intelligent systems", "emerging technologies", "Amity Jaipur"],
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
            Amity University Rajasthan Jaipur has been established by the Ritnand Balved Education Foundation (RBEF) New Delhi, which is a society registered under the Societies Registration Act, 1860 Government Recognised. It has been set up under the Amity University Rajasthan Act 2008, notified by Government Notification No F.2(10 ) vidhi/2.
          </p>
          <p>The University imparts modern, practical and research-based courses whose goal is to make the students industry-ready. Case studies, industry projects, presentations, research work and role-play form an integral part of a student&apos; s tenure at Amity.</p>
          <p>The University has a beautiful tree-lined campus spread over 152 acres of land on the Delhi-Jaipur Highway. The campus includes a rainwater harvesting lake with running fountains, a Neem forest, and an amphitheatre that can seat 1,500 spectators.</p>
          <p>The Amity University Jaipur is considered a pioneer in the field of higher learning for introducing the path-breaking Flexi-credit course. Under this course, the students choose the subjects they want to study, and at a time of their convenience.</p>
          <p>
            The University also has a unique mentor-mentee system, where every student is guided by a Faculty member. The Faculty member not only addresses the academic problems faced by students but also counsel &apos; s students on personal issues.
            Personality Enhancement is greatly stressed at Amity and all students undergo special classes and workshops for this, whilst innovative activities like military training camps ensure that Amitians become true leaders. The academic blocks have large and spacious air-conditioned classrooms, lecture theaters and state-of the-art labs. There are separate hostels for boys and girls, and a Student Resource Centre that has restaurants, gym, library, dance room, billiards and TT room. The University provides a range of outdoor activities that include horse riding, golfing and trekking.
          </p>
        </TextSection>
        <TextSection title={"About IoT Center of Excellence – Amity University Rajasthan"}>
          <p>
            The IoT Center of Excellence (CoE) at Amity University Rajasthan has been established with the vision of fostering innovation, research, and skill development in the rapidly growing field of the Internet of Things (IoT). The Centre provides a platform for students and researchers to explore cutting-edge technologies and translate their ideas into impactful solutions. The Centre has organized multiple IoT-related activities, workshops, and training programs, enabling students to gain hands-on knowledge and practical exposure. Students are actively engaged in developing prototype models, filing patents for innovative products, and working on real-world problem statements. In addition, the CoE collaborates with external experts and industry professionals through outsourced training sessions to ensure students remain updated with the latest industry practices and applications of IoT. Through these initiatives, the IoT Center of Excellence at Amity University Rajasthan is playing a pivotal role in nurturing future-ready innovators and entrepreneurs in the domain of IoT and emerging technologies.
          </p>
        </TextSection>
      </div>
    </div>
  );
}
