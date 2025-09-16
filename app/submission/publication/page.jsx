import React from 'react'
import TextSection from '../../../components/text'

const Publication = () => {
    return (
        <div>
            <TextSection title={"Publication & Indexing 2026"}>
                <h3 className='text-lg font-semibold mt-4 mb-1'>PUBLICATION - PROCEEDINGS</h3>
                <div className='flex items-center justify-center'>
                    <p>All ICSCPS-2026 presented papers will be published in conference proceedings by Springer "Smart Innovation,Systems and Technologies" ISSN: 2190-3018, Book Series. ISSN: 2190-3018</p>
                    <img src="https://icscps.christuniversity.in/assets/images/springer.png" className='w-[400px]' alt="" />
                </div>
                <h3 className='text-lg font-semibold mt-4 mb-1'>INDEXING</h3>
                <p>Indexed by SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago. All books published in the series are submitted for consideration in the Web of Science.</p>
            </TextSection>
        </div>
    )
}

export default Publication