import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TitleDescriptionCard } from "../TitleDescriptionCard";

import { FiLayout } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { BiCheckShield } from "react-icons/bi";
import { MdOutlineHighlight } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";

const data = [
  {
    id: uuidv4(),
    title: "Fix Resume Formatting – Clean, Professional Layout",
    icon: <FiLayout size={40} className="text-red-500 mb-4" />,
    description:
      "Fix the poor format, and unprofessional style of your resume into a clean, organized, and professional format with our tool.",
  },
  {
    id: uuidv4(),
    title: "Improve Resume Content – Enhance Impact with Stronger Verbs",
    icon: <AiOutlineEdit size={40} className="text-red-500 mb-4 font" />,
    description:
      "Our AI resume rewriter replaces the weak verbs that seem to have no big impact with strong verbs that strengthen the impact made on the employer.",
  },
  {
    id: uuidv4(),
    title: "Resume Grammar and Spelling Fixer – Eliminate Errors",
    icon: <BiCheckShield size={40} className="text-red-500 mb-4" />,
    description:
      "Eliminate spelling and grammatical errors that bring down the value of your resume and highlight the negative aspects, through our AI resume rewriter.",
  },
  {
    id: uuidv4(),
    title: "Buzzwords & Cliché Fixer – Make Your Resume Stand Out",
    icon: <MdOutlineHighlight size={40} className="text-red-500 mb-4" />,
    description:
      "Our AI resume fixer ensures your resume seems unique and makes it stand out by incorporating high relevancy into it and eliminating the buzzwords and cliches.",
  },
  {
    id: uuidv4(),
    title: "Metrics and Accomplishments – Quantify Your Achievements",
    icon: <FaChartBar size={40} className="text-red-500 mb-4" />,
    description:
      "TOur AI resume improver quantifies your achievements through metrics, if you did not, in the most effective and impactful way so that they highlight the impact you made through your skills.",
  },
];

/**
 * CommonMistakes component
 * This component renders a section that showcases common resume mistakes
 * and how the AI Resume Rewriter and Fixer can address them.
 *
 * @returns {JSX.Element} The section with common resume mistakes addressed by the AI tool.
 */
export const CommonMistakes = () => {
  return (
    <div>
      {/* Main section container with padding and background color */}
      <section className="bg-[whitesmoke] py-6">
        <div className="lg:max-w-3xl xl:max-w-4xl mx-auto">
          <div className="max-md:px-8 ">
            {/* Section title */}
            <h2 className="text-3xl font-bold text-gray-800 tracking-tight mb-8 ">
              Key Features of Our AI Resume Rewriter and Fixer
            </h2>

            {/* Container for feature cards */}
            <div className="w-full flex justify-center mt-6 md:mt-10 lg:mt-2">
              <div className="lg:w-full 2xl:max-w7xl">
                <div className="flex w-full flex-wrap text-center justify-center gap-5 md:gap-5 lg:gap-5">
                  {data.map((item) => (
                    // Individual feature card
                    <div className="flex flex-col items-center py-4 md:py-6 lg:py-8 px-4 sm:px-5 md:px-7 w-100 md:w-[45%] lg:w-2/5 rounded-lg bg-[#ffffff] shadow-custom w-100 mb-5">
                      {/* Icon representing the feature */}
                      {item.icon}
                      {/* TitleDescriptionCard component to display title and description */}
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
        </div>
      </section>
    </div>
  );
};
