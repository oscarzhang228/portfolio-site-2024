import React from "react";

export const WorkBlocks: React.FC<{
  company: string;
  description: string;
  projects: string;
  position: string;
}> = ({ company, description, projects, position }) => {
  return (
    <div className="text-center p-5">
      <h2 className="experience-heading-text">{company}</h2>
      <h4 className="experience-body-text">
        <strong>{position}</strong>
      </h4>
      <h4 className="experience-body-text">{description}</h4>
      <h4 className="experience-body-text">
        <strong>Major Project(s):</strong> {projects}
      </h4>
    </div>
  );
};
