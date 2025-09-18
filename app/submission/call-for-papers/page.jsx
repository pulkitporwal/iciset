import React from 'react'

export const metadata = {
  title: "Call for Papers",
  description: "ISET 2026 call for papers — tracks, submission guidelines, and review process.",
  keywords: ["ICCISET", "call for papers", "CFP", "submission"],
};
import TextSection from '../../../components/text'
import Accordion from '../../../components/accordion'

const CallForPapers = () => {

  const tracks = [
    {
      question: "Track 1: Artificial Intelligence and Machine Learning",
      answer:""
    },
    {
      question: "Track 2: Cyber-Physical Systems, IoT, and Smart Infrastructure",
      answer: ""
    },
    {
      question: "Track 3: Emerging Technologies in Industry 4.0",
      answer: ""
    },
    {
      question: "Track 4: Data Science, Big Data, and Cloud Computing",
      answer:""
    },
    {
      question: "Track 5: Intelligent Healthcare and Sustainable Technologies",
      answer: ""
    },
  ];

  return (
    <div className='px-4 sm:px-6 lg:px-10 py-5'>
      <TextSection title="Call For Papers">

        <p>
          The International Conference on Intelligent Systems and Emerging Technologies (ISET 2026) invites researchers, academicians, and industry professionals to submit original, high-quality research papers. The conference aims to foster innovation and collaboration in cutting-edge areas such as Artificial Intelligence, Machine Learning, Cyber-Physical Systems, IoT, Big Data, Industry 4.0, and Sustainable Technologies.
        </p>
        <Accordion data={tracks} title='List of Tracks' />


      </TextSection>
    </div>
  )
}

export default CallForPapers