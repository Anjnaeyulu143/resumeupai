import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TitleDescriptionCard } from "../TitleDescriptionCard";

const data = [
  {
    id: uuidv4(),
    title: "Step 1: Upload Your Existing Resume",
    description:
      "Upload your current resume using the resume upload input field.",
  },
  {
    id: uuidv4(),
    title: "Step 2: Attach a Job Description for Targeted Optimization",
    description:
      "Input the job description of the target job so the AI can tailor your resume as per the description demands",
  },
  {
    id: uuidv4(),
    title: "Step 3: AI Analyzes and Rewrites Your Resume",
    description:
      "From the description provided, our AI resume rewriter analyzes the gaps and rewrites the resume to enhance it.",
  },
  {
    id: uuidv4(),
    title: "Step 4: Review and Download the Optimized Resume",
    description:
      "After finishing, the resume fixer provides the result is provided and you can review the resume and later download it to use the optimized resume to apply for that particular role.",
  },
];

/**
 * The HowItWorks component displays the steps involved in the AI resume rewriting process
 * This component is called from the main App component
 * @returns {JSX.Element} The JSX element to be rendered
 */
export const HowItWorks = () => {
  return (
    <div>
      <section className="bg-[white] py-6">
        <div className="lg:max-w-3xl xl:max-w-4xl mx-auto">
          <div className="max-md:px-8 ">
            <h2 className="text-3xl font-bold text-gray-800 tracking-tight mb-8 ">
              How the AI Resume Rewriting & Fixing Work
            </h2>

            {/* Loop through the data array and render each item as a TitleDescriptionCard component */}
            {data.map((item) => (
              <TitleDescriptionCard
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
            <h2 className="font-bold text-2xl tracking-tight mb-4 ">
              Step 5: Optional Tweaks for Personalization
            </h2>
            <p className="text-base text-[#4C545F] mb-2">
              Though the AI generates the enhanced resume, our resume fixer
              provides you the facility of modifying it as per your needs even
              after generation. Personalize your resume, highlight achievements,
              and customize it to the specific role.
            </p>
            <TitleDescriptionCard
              title={"How It Works"}
              description={
                "and compares it with the job description for ATS keyword optimization and also corrects the errors that are present in your resume."
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};
