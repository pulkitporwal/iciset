import TextSection from '../../../components/text'
import React from 'react'

export const metadata = {
  title: "Instruction for Authors",
  description: "Author instructions for ICISET 2026 submissions — formatting and policies.",
  keywords: ["ICCISET", "instructions", "authors", "formatting", "policies"],
};

const SectionHeading = ({ children }) => (
  <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">{children}</h2>
)

const SubHeading = ({ children }) => (
  <h3 className="text-lg md:text-xl font-semibold mt-4 mb-1">{children}</h3>
)

const Paragraph = ({ children }) => (
  <p className="text-justify leading-relaxed mb-3">{children}</p>
)

const OrderedList = ({ items }) => (
  <ol className="list-decimal list-inside space-y-2 pl-5">
    {items.map((item, index) => (
      <li key={index} className="leading-relaxed">{item}</li>
    ))}
  </ol>
)

const Instruction = () => {
  return (
    <div className="px-4 py-6">
      <TextSection title="Instruction for Authors">
        <Paragraph>
          International Conference on Smart Cyber Physical Systems (ICSCPS-2026) invites
          original research contribution from different fields as mentioned in topics provided
          that the context of the work is clearly explained. Papers must be submitted on or before
          the last date of paper submission. After this deadline, you will not be able to register
          new papers, however you will be able to edit the information of existing submitted papers.
        </Paragraph>

        <SectionHeading>Submission Guidelines</SectionHeading>
        <Paragraph>
          All submissions will be handled electronically using Microsoft’s CMT platform. Authors
          are hereby instructed not to submit any paper via emails directly. By submitting a paper,
          the authors agree to the policies of ICSCPS-2026. It is the primary author’s responsibility
          to add the details of all authors (e.g., co-authors) of the paper to the CMT portal so that
          essential updates about your papers can be sent to all authors. While submitting the paper,
          the corresponding author must include at least one primary area to which your paper belongs.
          Once you submit your paper, you will be assigned a unique paper ID. Please remember this paper
          ID and quote that ID in all further communications.
        </Paragraph>

        <Paragraph>
          <b>Article Types:</b> Articles with novel research contribution on the theme of the conference should be
          submitted to ICSCPS-2026. We do not encourage authors to submit Review/ Survey articles.
        </Paragraph>

        <Paragraph>
          <b>Language Style:</b> The default language style at ICSCPS-2026 is standard English only.
          Authors should submit manuscripts in English language only.
        </Paragraph>

        <SubHeading>Manuscript Preparation Guidelines</SubHeading>
        <OrderedList
          items={[
            "Title: Capitalize the first letter of each word except helping verbs and connectors.",
            "Avoid first/second/third person (our, me, us, I, etc.). Proofread for English usage.",
            "Do not use abbreviations in the abstract.",
            "Include high-resolution figures (DPI > 500). Avoid blurred images.",
            "Ensure well-organized content (Title, Objective, Research Gap, Methodology, Results).",
            "Include motivation and paper organization at the end of the introduction.",
            "All figures/tables must be numbered with captions.",
            "Do not paste tables as images/snapshots.",
            "Number all equations sequentially and reference them in the text.",
            "Ensure all images, tables, equations, and references are cited in the text.",
            "Include 5–8 keywords in the manuscript.",
            "Expand abbreviations on first use only. Avoid non-standard abbreviations.",
            "Sections and subsections must be numbered (max 3 levels).",
            "Acknowledgements (if any) should follow the conclusion.",
            "Author names/order must match across manuscript, submission portal, and forms.",
            "Include name, affiliation, and e-mail of all authors in both manuscript and portal.",
            "Conclusions must be novel and statistically supported.",
            "References must be complete; avoid incomplete or uncited references.",
            "Download the Word/LaTeX template and submit within the 10-page limit."
          ]}
        />

        <SubHeading>Confidentiality</SubHeading>
        <Paragraph>
          The review process will be strictly confidential. Any misuse of confidential information is
          a severe professional failure, and appropriate measures will be taken when necessary.
          Conference organizers will not be responsible for breaches of confidentiality by reviewers.
        </Paragraph>

        <SubHeading>Review Process</SubHeading>
        <Paragraph>
          By submitting a paper, authors agree to our single-blind review process. Papers will be
          peer-reviewed after plagiarism check (preferably with “Turnitin”). Authors must revise
          their manuscript as per review comments in the acceptance email, and further revisions may
          be requested before final publication.
        </Paragraph>

        <SubHeading>Plagiarism</SubHeading>
        <Paragraph>
          ICSCPS-2026 respects Intellectual Property Rights. Plagiarism will not be tolerated. Papers
          with more than 18% similarity will be rejected. For any single source, similarity must not
          exceed 2%.
        </Paragraph>

        <SubHeading>Dual/Double Submissions</SubHeading>
        <Paragraph>
          Submissions must not be previously published, under review, or submitted elsewhere.
          Overlapping submissions will be rejected and reported. If citing concurrent submissions,
          explain differences clearly in the manuscript.
        </Paragraph>

        <SubHeading>Attendance Responsibilities</SubHeading>
        <Paragraph>
          At least one author must register and present the paper. Only presented papers will be
          forwarded for publication. Presenters will receive a presentation certificate.
        </Paragraph>

        <SubHeading>Publication</SubHeading>
        <Paragraph>
          All accepted and presented papers will be submitted to a SCOPUS-indexed publication
          partner. Proofs will be sent to the corresponding author, so ensure email addresses are
          correct. Keep checking the conference website for updates.
        </Paragraph>
      </TextSection>
    </div>
  )
}

export default Instruction
