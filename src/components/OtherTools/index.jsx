import React from "react";
import { FaFileAlt, FaClipboardList, FaLinkedin } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    icon: <FaFileAlt size={30} className="text-indigo-700" />,
    title: "AI Cover Letter Builder",
    description:
      "No more worrying about the right words for your cover letter. Generate a reliable cover letter in seconds with our AI Cover Letter Builder.",
  },
  {
    icon: <FaClipboardList size={30} className="text-indigo-700" />,
    title: "Job Application Tracker",
    description:
      "Stay ahead in your job searches. Organize and manage all job applications in one place using our Job Application Tracker.",
  },
  {
    icon: <FaLinkedin size={30} className="text-indigo-700" />,
    title: "Professional LinkedIn Profile Optimizer",
    description:
      "Optimize your LinkedIn profiles to attract and invite more recruiters to visit your profile on LinkedIn by using our Professional LinkedIn Profile Optimizer.",
  },
];

/**
 * OtherTools
 *
 * This component renders a section that displays other tools that ResumeUp offers.
 *
 * @return {JSX.Element} The rendered component
 */
const OtherTools = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Other Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Loop through the data array and render each item as a separate component */}
        {data.map((item) => (
          <div
            key={uuidv4()}
            className="flex flex-col items-center p-6 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Render the icon, title, and description for each item */}
            <div className="flex w-full justify-start gap-4 items-center mb-3">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {item.title}
              </h3>
            </div>

            <p className="text-gray-600 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherTools;
