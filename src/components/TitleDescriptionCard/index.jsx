import React from "react";

export const TitleDescriptionCard = ({ title, description }) => {
  console.log("Title,", title);
  console.log("Description,", description);

  return (
    <div className="mb-4">
      <p className="text-[#1F2937] text-xl font-medium mb-2">{title}</p>
      <p className="text-base text-[#4C545F]">{description}</p>
    </div>
  );
};
