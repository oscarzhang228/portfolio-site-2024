import React from "react";

export const About = () => {
  return (
    <div
      className="d-flex flex-column justify-content-around p-5 h-100 w-100"
      id="about"
    >
      <div className="">
        <h1 className="about-heading-text">Full-Stack</h1>
        <p className="about-body-text">
          Adaptable Full-Stack Developer proficient in TypeScript and
          experienced with the MERN stack. Quick to learn new technologies to
          meet evolving project requirements.
        </p>
      </div>
      <div className="text-end">
        <h1 className="about-heading-text">Cloud</h1>
        <p className="about-body-text">
          Passionate learner of cloud technologies with practical expertise in
          Amazon Web Services. Proficient in creating RESTful APIs using AWS
          Lambda, API Gateway, Kinesis, and DynamoDB.
        </p>
      </div>
    </div>
  );
};
