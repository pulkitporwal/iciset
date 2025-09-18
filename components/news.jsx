import React from "react";

const NewsSection = () => {
  const news = [
    {
      title: "All accepted and presented papers will be published in the conference proceedings by Springer in the Algorithms for Intelligent Systems series (Proposal submitted for approval).",
      content: ``,
      highlight: true,
    },
    // {
    //   title: "Indexing",
    //   content:
    //     "Indexed by SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago. All books published in the series are submitted for consideration in the Web of Science.",
    //   highlight: false,
    // },
    // {
    //   title: "Special Issue of Journals",
    //   content: "Keep checking for more updates...",
    //   highlight: false,
    // },
  ];

  return (
    <div className="max-w-sm h-[350px] border rounded-xl shadow-md bg-white p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <h2 className="text-2xl font-bold text-[#005B96]">NEWS</h2>
      </div>

      <hr className="mb-4" />

      {/* Scrollable news list */}
      <div className="news-section flex-1 overflow-y-auto pr-2 space-y-6">
        {news.map((item, idx) => (
          <div key={idx} className="text-gray-700">
            <div className="flex items-center gap-2">
              <p className="font-semibold">{item.title}</p>
              {item.highlight && (
                <span className="bg-[#005B96] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                  LATEST
                </span>
              )}
            </div>
            <p className="text-sm leading-relaxed mt-1">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
