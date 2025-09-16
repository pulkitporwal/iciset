import React from 'react'

export const metadata = {
  title: "Publication & Indexing",
  description: "Publication details and indexing information for ICISET 2026 proceedings.",
  keywords: ["ICCISET", "publication", "indexing", "Springer", "SIST"],
};
import TextSection from '../../../components/text'

const Publication = () => {
    return (
        <div>
            <TextSection title={"Publication & Indexing 2026"}>
                <h3 className='text-lg font-semibold mt-4 mb-1'>PUBLICATION - PROCEEDINGS</h3>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                    <p>All ICSCPS-2026 presented papers will be published in conference proceedings by Springer "Smart Innovation,Systems and Technologies" ISSN: 2190-3018, Book Series. ISSN: 2190-3018</p>
                    <img src="https://icscps.christuniversity.in/assets/images/springer.png" className='w-full max-w-xs md:max-w-sm' alt="Springer" />
                </div>
                <h3 className='text-lg font-semibold mt-4 mb-1'>INDEXING</h3>
                <p>Indexed by SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago. All books published in the series are submitted for consideration in the Web of Science.</p>
            </TextSection>
        </div>
    )
}

export default Publication