import React from "react";
import { WorkBlocks } from "../components/WorkBlocks.tsx";

export const Experience = () => {
  return (
    <div
      className="d-flex flex-column justify-content-around h-100"
      id="experience"
    >
      <h1 className="text-center experience-heading-text">
        I've worked with/for
      </h1>
      <WorkBlocks
        company="Fyve By"
        description="An aviation startup working to combat ground-damages."
        projects="Skyview Manager Portal, Skyview Unity App, Internal CRM"
      />
      <WorkBlocks
        company="GT AASA"
        description="An ethnic club for AAPI students at Georgia Tech."
        projects="AASA Website"
      />
      <p className="text-center">
        Check out my full{" "}
        <a
          href="https://drive.google.com/file/d/1QOxLHyUkC7--ewj18zd7-1WAB24RgYRl/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          resume
        </a>
      </p>
    </div>
  );
};
