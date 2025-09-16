import React from "react";

const ImportantDates = () => {
  const dates = [
    { label: "Call for Papers", date: "5th July, 2025", highlight: true },
    { label: "Acceptance Notification", date: "1st December, 2025", highlight: false },
    { label: "Last Date for Camera Ready", date: "16th December, 2025", highlight: false },
    { label: "Last Date of Registration", date: "16th December, 2025", highlight: true },
    { label: "Conference Dates", date: "23rd - 24th December, 2025", highlight: false },
  ];

  return (
    <div className="px-3 py-5 min-h-[350px] max-w-4xl mx-auto border rounded-xl ">
      <h2 className="text-3xl font-bold text-center text-[#005B96] mb-6">
        Important Dates
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg shadow-md bg-white">
          <tbody>
            {dates.map((item, idx) => (
              <tr
                key={idx}
                className={`text-lg ${
                  idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="px-3 py-2 font-medium text-gray-700 border-b border-gray-200 flex items-center gap-2">
                  {item.label}
                  {item.highlight && (
                    <span className="bg-[#005B96] text-white text-xs font-semibold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </td>
                <td className="px-3 py-2     text-gray-600 border-b border-gray-200">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportantDates;
