import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TitleDescriptionCard } from "../TitleDescriptionCard";

const data = [
  {
    id: uuidv4(),
    title: "Introduction to AI-Powered Resume Optimization",
    description:
      "Though you build your resume in the most effective way possible, there will still be minor gaps and inconsistencies such as the absence of ‘keyword optimization’ that might become the reason for missed opportunities or rejections during the hiring process. An easy and highly recommended solution to fix is AI-powered resume optimization, which is possible through our AI resume enhancer.",
  },
  {
    id: uuidv4(),
    title: "How AI Transforms Your Resume into a Job-Ready Document",
    description:
      "AI automates and simplifies the optimization process using progressive algorithms and advanced technologies. It also ensures that your resume resonates with the specific job demands by doing keyword optimization, including important skills, using strong action verbs, and that it looks relevant and qualified for the job role, which will bring you bright opportunities.",
  },
];

/**
 * ResumeRewriterSection component
 * This component renders a section that explains the features and
 * benefits of ResumeUp's AI Resume Rewriter & Fixer.
 */
export const ResumeRewriterSection = () => {
  return (
    <div>
      {/* Main section container with padding and background color */}
      <section className="bg-[white] py-6">
        <div className="lg:max-w-3xl xl:max-w-4xl mx-auto">
          <div className="max-md:px-8">
            {/* Section title */}
            <h2 className="text-3xl font-bold text-gray-800 tracking-tight mb-4 ">
              What is ResumeUp’s AI Resume Rewriter & Fixer?
            </h2>
            {/* Section description */}
            <div className="text-base-content/80 leading-relaxed mb-4 lg:text-base">
              Are you constantly wondering, “How to fix my resume?”? Now, you
              don’t have to. We’re here with our ResumeUp.AI’s free AI resume
              rewriter to enhance and improve your resume, ensuring you stand
              out in every application process.
            </div>

            {/* Map through data to render TitleDescriptionCard components */}
            {data.map((item) => (
              <TitleDescriptionCard
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
