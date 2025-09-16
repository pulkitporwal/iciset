import React from 'react'
import TextSection from '../../../components/text'

const Registration = () => {
  return (
    <div>
      <TextSection title="Registration">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Indian Delegates</th>
                <th className="px-4 py-2 border">Foreign Delegates</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border font-medium">Industry person</td>
                <td className="px-4 py-2 border">Rs. 8000/-</td>
                <td className="px-4 py-2 border">US$ 140/-</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border font-medium">Student (Full time)</td>
                <td className="px-4 py-2 border">Rs. 8000/-</td>
                <td className="px-4 py-2 border">US$ 140/-</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border font-medium">Attendees/Participating</td>
                <td className="px-4 py-2 border">Rs. 8000/-</td>
                <td className="px-4 py-2 border">US$ 140/-</td>
              </tr>
            </tbody>
            <caption className="caption-bottom text-gray-500 text-xs p-2">
              Note: Registration fee inclusive of 18% GST.
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
