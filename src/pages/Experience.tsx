import React from "react";
import { WorkBlocks } from "../components/WorkBlocks.tsx";

export const Experience = () => {
  return (
    <div
      className="d-flex flex-column justify-content-around h-100 experience-main"
      id="experience"
    >
      <WorkBlocks
        company="Fyve By"
        position="Software Engineer Intern"
        description="An aviation startup working to combat ground-damages."
        projects="Skyview Manager Portal, Skyview Unity App, Internal CRM"
      />
      <WorkBlocks
        company="Epilepsy Foundation of Georgia"
        position="Software Engineer - Volunteer"
        description="Georgia's biggest resource for those suffering from epilepsy."
        projects="Foundation Website Overhaul"
      />

      <WorkBlocks
        company="GT AASA"
        position="Software Engineer"
        description="An ethnic club for AAPI students at Georgia Tech."
        projects="AASA Website"
      />
      <p className="p-5">
        Check out my full{" "}
        <a
          href="https://drive.google.com/file/d/1oh-SenQzfQggCx2H306BzVdGYuu7ZDfN/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          resume
        </a>
      </p>
    </div>
  );
};
