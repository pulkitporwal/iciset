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
      question: "Track 1: Artificial Intelligence and Machine Learning",
      answer: (
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Deep Learning and Neural Networks</li>
          <li>Reinforcement Learning and Decision-Making Systems</li>
          <li>Natural Language Processing and Generative AI</li>
          <li>Transfer Learning and Meta-Learning</li>
          <li>Explainable and Trustworthy AI</li>
          <li>AI Ethics, Fairness, and Privacy</li>
        </ul>
      ),
    },
    {
      question: "Track 2: Cyber-Physical Systems, IoT, and Smart Infrastructure",
      answer: (
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Internet of Things (IoT) Architectures and Applications</li>
          <li>Edge and Fog Computing</li>
          <li>Smart Cities and Smart Grids</li>
          <li>Intelligent Transportation Systems</li>
          <li>Cybersecurity for IoT and CPS</li>
          <li>Digital Twin Technologies</li>
        </ul>
      ),
    },
    {
      question: "Track 3: Emerging Technologies in Industry 4.0",
      answer: (
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Industrial Robotics and Autonomous Systems</li>
          <li>Human-Machine Collaboration</li>
          <li>Predictive Maintenance and Smart Manufacturing</li>
          <li>Data Analytics for Industrial Applications</li>
          <li>Blockchain for Secure Industrial Systems</li>
          <li>Augmented and Virtual Reality for Industry</li>
        </ul>
      ),
    },
    {
      question: "Track 4: Data Science, Big Data, and Cloud Computing",
      answer: (
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Big Data Analytics and Processing</li>
          <li>Cloud-Native AI Applications</li>
          <li>Data Mining and Knowledge Discovery</li>
          <li>Privacy-Preserving Data Analytics</li>
          <li>Scalable Distributed Systems</li>
          <li>Real-Time Data Stream Processing</li>
        </ul>
      ),
    },
    {
      question: "Track 5: Intelligent Healthcare and Sustainable Technologies",
      answer: (
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>AI in Precision Medicine and Diagnostics</li>
          <li>Wearable and Assistive Healthcare Technologies</li>
          <li>Smart Environmental Monitoring Systems</li>
          <li>Energy-Efficient Computing and Green Technologies</li>
          <li>Sustainable Development through Intelligent Systems</li>
          <li>Pandemic Modelling and Predictive Health Analytics</li>
        </ul>
      ),
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