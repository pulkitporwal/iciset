import TextSection from '../../../components/text'
import React from 'react'

const SubmissionForm = () => {
  return (
    <div>
        <TextSection className="flex gap-3 flex-col" title={"Paper Submission"}>
            <p>
                The authors are invited to submit the Full papers of the Research/Review Papers. The papers will be peer-reviewed and only the accepted and registered papers will be considered for presentation during the conference and publication in the proceedings.
            </p>

            <p className='text-lg font-bold'>NOTE:   Acceptance of a full-length submission is strictly based on the reviewers' comments.</p>

            <p>All submissions need to be submitted through the CMT using the link:</p>
            <a className='text-blue-500' href="https://cmt3.research.microsoft.com/ISET2026">https://cmt3.research.microsoft.com/ISET2026.</a>

            <p>At least one of the authors of an accepted paper needs to register for the conference and to present the paper(s) through an offline mode presentation.</p>
            <p>All manuscripts should be prepared in the following Springer's Book Chapter template.</p>
            <p>
                <span className='text-red-600'>Precaution:</span> The authors are advised to take care of the technical language used in the manuscript and refrain from using words that are prohibited at national and international levels.
            </p>
                <p className='text-red-600'>Templates:</p>
            <div className='flex items-center justify-center gap-3'>
                <button className='bg-[#002B5C] cursor-pointer text-lg rounded-lg text-white px-2 py-2'>Word Template</button>
                <button className='bg-[#002B5C] cursor-pointer text-lg rounded-lg text-white px-2 py-2'>Latex Template</button>
            </div>

            <p>Note: The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
        </TextSection>
    </div>
  )
}

export default SubmissionForm