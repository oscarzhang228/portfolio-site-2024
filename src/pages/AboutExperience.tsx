import React from "react";
import { About } from "./About.tsx";
import { Experience } from "./Experience.tsx";

export const AboutExperience = () => {
  return (
    <div className="container-fluid">
      <div className="row h-100">
        <div className="col-md-6 col-sm-12 border-end border-bottom">
          <About />
        </div>
        <div className="col-md-6 col-sm-12">
          <Experience />
        </div>
      </div>
    </div>
  );
};
