import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Importing icons

const faqData = [
  {
    question: "Is the AI Resume Rewriter Free?",
    answer:
      "Yes, ResumeUp.AI’s resume rewriter tool is free to use and also user-friendly. However, with a premium account, you are given more benefits and features.",
  },
  {
    question: "How Do I Use the AI Resume Fixer?",
    answer: (
      <ol className="list-decimal pl-5 text-gray-600">
        <li>Upload your resume file in PDF or Docs format.</li>
        <li>Input the job description.</li>
        <li>Click on the ‘Rewrite Resume’ button.</li>
        <li>
          AI will scan your resume, optimize it, and give you an updated resume.
        </li>
        <li>
          Cross-check the resume and use the download button to download your
          resume.
        </li>
      </ol>
    ),
  },
  {
    question: "How Does the AI Determine My Resume’s Weaknesses?",
    answer:
      "AI uses advanced algorithms to compare your resume to the industry standards and identifies the absence of keywords, relevancy to the job, gaps in formatting, and determines your resume’s weaknesses.",
  },
  {
    question: "Can I Trust AI to Improve My Resume?",
    answer:
      "Yes, absolutely. You can trust our AI Resume Enhancer tool to improve and enhance your resume effectively. Our AI resume improver uses best practices and proven frameworks. We have helped thousands of users get their dream job interviews.",
  },
  {
    question: "Can I Rewrite My Resume Multiple Times?",
    answer:
      "Yes, you can rewrite your resume multiple times if you are not satisfied. You can customize the resume to make it more personalized even after generation. You can click on the rewrite button to rewrite again.",
  },
  {
    question: "How Long Does It Take to Rewrite or Fix a Resume?",
    answer:
      "It takes less than a few seconds to rewrite your resume using our AI resume rewriter.",
  },
  {
    question: "Does the AI Understand My Industry and Job Role?",
    answer:
      "Yes, our AI resume rewriter is designed to use sophisticated algorithms and is highly effective in tailoring your resume to the job role and the job industry. It works with any kind of industry.",
  },
  {
    question: "What Makes Your AI Resume Tools Different?",
    answer:
      "Our ResumeUp.AI focuses on precision and efficiency. We are proven to be one of the most powerful AI tools for resume building and have benefited millions of users through our website. Our AI resume rewriter gives you quick and efficient results, while also allowing you to customize your resume.",
  },
  {
    question: "Can I Edit My Resume After Using the AI Rewriter?",
    answer:
      "Yes, you can still edit your resume after using our AI resume rewriter to give extra personal add-ons.",
  },
  {
    question: "Is It Safe to Share My Resume with AI Tools?",
    answer:
      "Your resume is protected through encryption and secure storage. So it is definitely safe to share your resume with us since we prioritize data security.",
  },
  {
    question: "How Accurate is AI in Resume Rewriting?",
    answer:
      "Our AI is highly accurate in resume rewriting since it is trained with various large datasets and advanced algorithms. However, reviewing it once and adding a personal touch will bring the best results.",
  },
];

/**
 * The FAQ component renders a section that displays the frequently asked
 * questions related to ResumeUp's AI resume rewriter and fixer.
 *
 * @returns {JSX.Element} The rendered component
 */
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  /**
   * Toggles the answer of the FAQ item with the given index
   *
   * @param {number} index The index of the FAQ item
   */
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex flex-col text-left basis-1/2 mb-4 ">
        <p className="inline-block font-semibold text-indigo-600 mb-4">FAQ</p>
        <p className="text-3xl font-bold text-gray-800 text-base-content">
          Frequently Asked Questions
        </p>
      </div>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer text-xl font-semibold text-gray-800"
              onClick={() => toggleAnswer(index)}
            >
              <span
                className={`${openIndex === index ? "text-indigo-600" : ""}`}
              >
                {faq.question}
              </span>
              <span
                className={`text-xl font-semibold transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                {openIndex === index ? (
                  <FaMinus className="text-indigo-600" />
                ) : (
                  <FaPlus />
                )}
              </span>
            </div>
            <div
              className={`transition-all duration-500 overflow-hidden ${
                openIndex === index ? "max-h-[1000px] py-2" : "max-h-0 py-0"
              }`}
            >
              {openIndex === index && (
                <div className="mt-2">
                  {typeof faq.answer === "string" ? (
                    <p className="text-gray-600">{faq.answer}</p>
                  ) : (
                    faq.answer // Render the ordered list for the "How Do I Use the AI Resume Fixer?" question
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
