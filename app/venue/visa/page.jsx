import React from "react"
import TextSection from "../../../components/text"

const VisaInformation = () => {
  return (
    <div>
      <TextSection title="Visa Information">
        <div className="px-4 py-6 flex flex-col gap-6 text-gray-700">
          <p>
            For the visa information, please visit{" "}
            <a
              href="https://www.mha.gov.in/MHA1/TourVisa.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visitor Supporting Documents, Ministry of Home Affairs, Government of India
            </a>
            . Please email{" "}
            <a
              href="mailto:icscps.ncr@christuniversity.in"
              className="text-blue-600 hover:underline"
            >
              iciset@amity.edu
            </a>{" "}
            to request a visa invitation letter so that you can print and use it
            in obtaining a visa.
          </p>

          <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-sm">
            ⚠️ Obtaining a Visa Support Letter from ICISET-2026 Conference will{" "}
            <span className="font-semibold">not guarantee</span> that your India
            visa application will be approved. The letter is supplementary
            information that explains a visa applicant's intended purpose of
            travel to India.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-[#005B96]">
            Conference Visa Support Policy
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Visa Support Letters will be issued{" "}
              <span className="font-medium">only after successful registration</span>{" "}
              and payment for the conference.
            </li>
            <li>
              Visa Support Letters can only be issued for the{" "}
              <span className="font-medium">registered person</span> attending
              the conference in the role of participant, author, chair, or
              speaker.
            </li>
            <li>
              Unfortunately, Visa Support Letters{" "}
              <span className="font-medium">cannot be issued</span> for guests
              or accompanying persons of participants.
            </li>
          </ul>
        </div>
      </TextSection>
    </div>
  )
}

export default VisaInformation
