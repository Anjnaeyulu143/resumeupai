import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TitleDescriptionCard } from "../TitleDescriptionCard";

import { RiTimerFlashLine } from "react-icons/ri";
import { FiTool } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineBulb } from "react-icons/ai";
import { FaClipboardCheck } from "react-icons/fa";
const data = [
  {
    id: uuidv4(),
    title: "Instant Resume Rewriting – Rewrite My Resume",
    icon: <RiTimerFlashLine size={40} className="text-indigo-700 mb-4" />,
    description:
      "Our AI resume rewriter quickly scans your resume and rewrites it to tailor it to your targeted job position. It takes less than a few seconds to do that.",
  },
  {
    id: uuidv4(),
    title: "AI Resume Fixer – Fix My Resume Quickly and Efficiently",
    icon: <FiTool size={40} className="text-indigo-700 mb-4 font" />,
    description:
      "Fixed your resume and still confused? No, you don’t have to be. Our AI resume rewriter fixes your resume with the utmost efficiency very quickly.",
  },
  {
    id: uuidv4(),
    title: "Free AI Resume Rewriting – Access the Power of AI for Free",
    icon: <MdOutlineAttachMoney size={40} className="text-indigo-700 mb-4" />,
    description:
      "And do you think all these benefits come at a cost? No, they’re absolutely free. Take advantage of our free AI resume rewriter and get ready to ace your dream job interview.",
  },
  {
    id: uuidv4(),
    title: "Intelligent Resume Enhancements – Make My Resume Better",
    icon: <AiOutlineBulb size={40} className="text-indigo-700 mb-4" />,
    description:
      "With just a click, our resume enhancer improves and fixes your resume. Your resume is updated and modified to attract recruiters and strengthen their opinion of you.",
  },
  {
    id: uuidv4(),
    title:
      "Job-Specific Optimization – Align Your Resume with Any Job Description",
    icon: <FaClipboardCheck size={40} className="text-indigo-700 mb-4" />,
    description:
      "The main feature of our AI resume rewriter is that it customizes your resume to the specific job that you’re applying for. In this way, your resume looks more qualified for that particular job role.",
  },
];

/**
 * KeyFeatures component
 * This component renders a section that highlights the key features of
 * ResumeUp's AI Resume Rewriter and Fixer.
 */
export const KeyFeatures = () => {
  return (
    <div>
      <section className="bg-[white] py-6">
        <div className="lg:max-w-3xl xl:max-w-4xl mx-auto">
          <div className="max-md:px-8 ">
            <h2 className="text-3xl font-bold text-gray-800 tracking-tight mb-4 ">
              Key Features of Our AI Resume Rewriter and Fixer
            </h2>

            <div className="w-full flex justify-center">
              <div className="flex lg:w-full 2xl:max-w-7xl flex-wrap gap text-center justify-center">
                {data.map((item) => (
                  <div className="flex flex-col items-center p-5 w-100 md:w[45%] lg:w-5/12">
                    {item.icon}
                    <TitleDescriptionCard
                      key={item.id}
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * The data array contains the information about the key features of
 * ResumeUp's AI Resume Rewriter and Fixer. Each item in the array is an
 * object with the following properties:
 *
 * - id: A unique identifier for the item.
 * - title: The title of the feature.
 * - icon: The icon to be displayed for the feature.
 * - description: A brief description of the feature.
 */
