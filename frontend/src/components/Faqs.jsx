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
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className=" p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-3">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-semibold flex justify-between items-center focus:outline-none"
              >
                {faq.question}
                <span>{openIndex === index ? "🔼" : "🔽"}</span>
              </button>
              {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
