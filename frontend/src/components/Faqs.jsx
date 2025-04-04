

import React, { useState } from "react";

const faqs = [
  { question: "What is EveMan?", answer: "EveMan is an event management platform where you can plan and manage your events." },
  { question: "How can I create an event?", answer: "Just click on the 'Create Event' button, fill in the details, and publish your event!" },
  { question: "Is EveMan free?", answer: "Yes! You can use basic features for free, but premium plans are available for advanced features." },
  { question: "How can I contact the support team?", answer: "You can reach us via email or call." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgb(22,16,16)] p-6">
      <div className="bg-black border border-gray-800 p-8 rounded-3xl shadow-2xl shadow-green-500/10 w-full max-w-3xl transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-800 pb-4 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg md:text-xl font-semibold text-white flex justify-between items-center focus:outline-none hover:text-green-400 transition-colors duration-200"
              >
                {faq.question}
                <span className="text-gray-400">
                  {openIndex === index ? "🔼" : "🔽"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-400 text-base md:text-lg font-light leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;