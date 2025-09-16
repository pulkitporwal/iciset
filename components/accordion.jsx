"use client"
import React, { useState } from "react";

const Accordion = ({ data, title = "Frequently Asked Questions" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto my-12 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      <div className="space-y-4">
        {data.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-3"
          >
            <button
              className="w-full flex justify-between items-center text-left font-medium text-lg py-2 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span
                className={`transform transition-transform duration-300 text-xl font-bold ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <div className="text-gray-600">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
