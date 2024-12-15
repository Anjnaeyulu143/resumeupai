import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TitleDescriptionCard } from "../TitleDescriptionCard";

const data = [
  {
    id: uuidv4(),
    title: "Save Time and Effort: Instant AI Resume Rewriting",
    description:
      "Manual resume optimization consumes a lot of time, which can be avoided by using our free AI resume rewriter. It rewrites your resume into an optimized one within seconds.",
  },
  {
    id: uuidv4(),
    title: "Customization for Your Target Job: Tailored Resume Writing",
    description:
      "Sometimes, your resume might showcase your true talent but not in the way that the role is asking for. So our AI resume rewriter customizes your resume for your target job and tailors it to the job demands.",
  },
  {
    id: uuidv4(),
    title: "Error-Free Resumes: Grammar, Formatting, and Clarity Fixes",
    description:
      "Our AI resume improver ensures your resume is devoid of all kinds of grammatical and spelling errors, without you having to search and rectify each and every one of them.",
  },
  {
    id: uuidv4(),
    title:
      "Enhance Your Career Prospects with a Professionally Optimized Resume",
    description:
      "Using an AI resume rewriter is beneficial. From checking spelling errors to ensuring the overall resume looks relevant and qualified enough for the targetted job role, it ensures everything, thus bringing you more career opportunities.",
  },
];

/**
 * This component renders a section with the benefits of using an AI resume rewriter & fixer.
 *
 * @returns {JSX.Element} The section with the benefits of using an AI resume rewriter & fixer.
 */
export const AIResumeBenefits = () => {
  return (
    <div>
      <section className="bg-[white] py-6">
        <div className="lg:max-w-3xl xl:max-w-4xl mx-auto">
          <div className="max-md:px-8 ">
            <h2 className="text-3xl font-bold text-gray-800 tracking-tight mb-4 ">
              Why Use an AI Resume Rewriter & Fixer?
            </h2>

            {/* Render the list of benefits */}
            {data.map((item) => (
              <TitleDescriptionCard
                /* Use the item's id as the key for the component */
                key={item.id}
                /* Render the title of the benefit */
                title={item.title}
                /* Render the description of the benefit */
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
