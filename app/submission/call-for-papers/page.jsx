import React from 'react'

export const metadata = {
  title: "Call for Papers",
  description: "ICISET 2026 call for papers — tracks, submission guidelines, and review process.",
  keywords: ["ICCISET", "call for papers", "CFP", "submission"],
};
import TextSection from '../../../components/text'
import Accordion from '../../../components/accordion'

const CallForPapers = () => {

  const tracks = [
    {
      question: "Track 1: Cyber Physical System Architecture",
      answer: (
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Integrated design methods for CPS</li> <li>HW/SW co-design for CPS Simulation and emulation of CPS</li> <li>Integrated tool chains for CPS </li><li>Scalable CPS Architectures Composability of software, hardware and physical components</li> <li>Analysis of cyber-physical systems with multiple temporal and spatial scales</li>
        </ul>
      ),
    },
    {
      question: "Track 2: Threats, Security and Privacy for Cyber Physical Systems",
      answer: (
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Integrated design methods for CPS</li> <li>HW/SW co-design for CPS Simulation and emulation of CPS</li> <li>Integrated tool chains for CPS </li><li>Scalable CPS Architectures Composability of software, hardware and physical components</li> <li>Analysis of cyber-physical systems with multiple temporal and spatial scales</li>
        </ul>
      ),
    },

    {
      question: "Track 3: Medical Cyber Physical Systems and Health",
      answer: (
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Ensures your website looks good on all devices</li>
          <li>Improves user experience</li>
          <li>Boosts SEO rankings</li>
        </ul>
      ),
    },
    {
      question: "Track 4: Network and communications CPS",
      answer: (
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Clarity</li>
          <li>Consistency</li>
          <li>Accessibility</li>
          <li>Visual hierarchy</li>
        </ul>
      ),
    },
  ]

  return (
    <div className='px-4 sm:px-6 lg:px-10 py-5'>
      <TextSection title="Call For Papers">
        <p> All papers must be original and not simultaneously submitted to another journal or conference. The submissions may be of any form from the following: The recent development in artificial intelligence and embedded systems has increased the potential of receiving and processing huge amounts of real-time data in Cyber-Physical Systems (CPS). CPS is the engineered physical system able to perceive and process the information and act accordingly. These physical systems are well inter-connected, coordinated and integrated by computing and communication. Computing and communication devices have become much faster, cheaper and consume less power. It has become significant to understand, analyse and apply the knowledge of artificial intelligence in CPS to provide more intelligent physical systems and involve more and more end users who are still isolated. Artificial intelligence (AI) can provide the capability of any physical system to apply human-like intelligence to the perceived information in order to achieve its goal. The growing area of CPS with AI can provide the smart machines and networked physical systems to perform tasks in remote and dangerous areas. Currently, the intelligent cyber-physical systems are gaining momentum at an unprecedented pace to combine AI and CPS for many real-time applications. Still, this domain is facing many challenges and gaps and lagging behind in implementation in the real world, which needs improvements and more attention. This conference aims to collect the latest developments and original contributions in all related technologies of AI and CPS and their applications. This conference is an effort to bring together the leading researchers, academicians and industry experts to share their ideas, recent developments, upcoming challenges and directions in the area of intelligent CPS. We encourage the experienced and young researchers worldwide to submit the papers with new ideas, theories, analytical studies, methods and applications of AI and CPS. This conference would be of immense benefit to academicians, young researchers, industry persons, students and others who are working in this area.</p>
        <br />
        <p>
          Authors are invited to submit original, previously unpublished research papers describing particular challenges or experiences or proposing novel solutions relevant to the scope of the conference. Papers must present original and unpublished work and should not be currently under review by any other conference or journal. Papers should be written in English and formatted according to the Springer Smart Innovation, Systems and Technologies one-column page format. Papers must have a length of 8-10 pages in Smart Innovation, Systems and Technologies format. For more detailed guidelines, please visit the official Springer Guidelines website.
        </p>

        <Accordion data={tracks} title='List of Tracks' />

        <h3 className='text-lg font-semibold mt-4 mb-1'>Review Process</h3>
        <ul className='list-disc list-inside space-y-2 pl-5'>
          <li>All submitted papers will be reviewed by at least 2 independent reviewers. Additional reviewers will be consulted if required.</li>
          <li>All papers will undergo a plagiarism check, and the similarity index must not exceed 10%.</li>
          <li>The AI detection report must show 0% AI-generated content, and all images must be original or editable (no AI-generated tools allowed).</li>
          <li>All papers must be formatted according to the given template (Springer SIST).</li>
          <li>Paper acceptance will be based on originality, significance, technical soundness, and clarity of presentation.</li>
          <li>Authors must make sure that they submit previously unpublished papers to this conference.</li>
        </ul>
        <h3 className='text-lg font-semibold mt-4 mb-1'>Awards & Participation</h3>
        <ul className='list-disc list-inside space-y-2 pl-5'>
          <li>All accepted papers that are presented will be awarded a presentation certificate.
          </li>
          <li>The Best Paper certificate will be awarded to the author(s) of the best paper. The selection will be based on reviewers' comments and recommendations of the session chair.</li>
        </ul>

      </TextSection>
    </div>
  )
}

export default CallForPapers