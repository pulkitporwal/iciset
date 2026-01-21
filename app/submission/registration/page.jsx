import React from 'react'
import TextSection from '../../../components/text'

export const metadata = {
  title: "Registration",
  description: "Registration categories and fee details for ISET 2026.",
  keywords: ["ICCISET", "registration", "fees", "delegates"],
};

const Registration = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-10">
      <TextSection title="Registration">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm text-left">
            <thead>
              <tr className="bg-gray-100">
                <th rowSpan={2} className="px-4 py-2 border text-center">
                  Category
                </th>
                <th colSpan={2} className="px-4 py-2 border text-center">
                  Early Bird Registration<br />(15th July, 2026 )
                </th>
                <th colSpan={2} className="px-4 py-2 border text-center">
                  Late Registration<br />(25th July 2026)
                </th>
              </tr>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 border text-center">National Authors (INR)</th>
                <th className="px-4 py-2 border text-center">International Authors ($)</th>
                <th className="px-4 py-2 border text-center">National Authors (INR)</th>
                <th className="px-4 py-2 border text-center">International Authors ($)</th>
              </tr>
            </thead>

            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border font-medium">
                  Regular author academician/industry person
                </td>
                <td className="px-4 py-2 border text-center">₹8100</td>
                <td className="px-4 py-2 border text-center">$220</td>
                <td className="px-4 py-2 border text-center">₹9100</td>
                <td className="px-4 py-2 border text-center">$330</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border font-medium">
                  Regular author academician/industry person (IEEE/ACM)
                </td>
                <td className="px-4 py-2 border text-center">₹7200</td>
                <td className="px-4 py-2 border text-center">$240</td>
                <td className="px-4 py-2 border text-center">₹8100</td>
                <td className="px-4 py-2 border text-center">$300</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border font-medium">
                  Regular author student (Ph.D./PG)
                </td>
                <td className="px-4 py-2 border text-center">₹6200</td>
                <td className="px-4 py-2 border text-center">$140</td>
                <td className="px-4 py-2 border text-center">₹7200</td>
                <td className="px-4 py-2 border text-center">$240</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border font-medium">
                  Regular author student (Ph.D./PG) IEEE/ACM
                </td>
                <td className="px-4 py-2 border text-center">₹5400</td>
                <td className="px-4 py-2 border text-center">$120</td>
                <td className="px-4 py-2 border text-center">₹6300</td>
                <td className="px-4 py-2 border text-center">$150</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border font-medium">
                  Attendee / Co-author
                </td>
                <td className="px-4 py-2 border text-center">60% of respective category</td>
                <td className="px-4 py-2 border text-center">60% of respective category</td>
                <td className="px-4 py-2 border text-center">60% of respective category</td>
                <td className="px-4 py-2 border text-center">60% of respective category</td>
              </tr>
            </tbody>

            <caption className="caption-bottom text-gray-500 text-xs p-2">
              Note: Registration fee of 18% GST applicable on Non-Amitian delegates.
            </caption>
          </table>

        </div>

        <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
          Payment Instructions:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <span className="font-medium">For Indian Delegates:</span> Payment can
            be made through NEFT/RTGS. Details will be provided soon. Please check
            back for updates.
          </li>
          <li>
            <span className="font-medium">For Foreign Delegates:</span> Payment can
            be made through SWIFT/Wire transfer. Details will be provided soon.
            Please check back for updates.
          </li>
        </ul>
      </TextSection>
    </div>
  )
}

export default Registration
