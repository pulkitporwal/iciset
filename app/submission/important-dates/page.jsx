import ImportantDates from '../../../components/important-dates'
import React from 'react'

export const metadata = {
  title: "Important Dates",
  description: "Important dates and deadlines for ICISET 2026.",
  keywords: ["ICCISET", "important dates", "deadlines", "timeline"],
};

const ImportantDatesPage = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-10 py-10'>
        <ImportantDates />
    </div>
  )
}

export default ImportantDatesPage