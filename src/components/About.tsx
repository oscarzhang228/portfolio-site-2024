import React from "react";
import { Navigation } from "../components/Navigation.tsx";
import { Card } from "antd";
export const About = () => {
  return (
    <div className="d-flex flex-column w-100">
      <div className="row h-10">
        <Navigation />
      </div>
      <div className="w-100 text-center p-4 pb-0 ">
        <h1 className="mt-2 about-heading-text">About Me</h1>
        <p className="p-lg-4 p-sm-2 mt-md-3 mt-lg-1 about-body-text">
          Hey there! 👋 <br></br>I'm an aspiring software engineer and student,
          currently immersed in the exciting world of aviation technology at
          Fyve By. The company focus revolves around minimizing plane damage on
          the ground. I specialize in processing point cloud data and
          transforming it into user-friendly visualizations for our clients.
          Beyond that, I contribute to our internal web applications, including
          a CRM system for managing plane and hangar information. Outside of my
          current internship endeavors, I also dedicate my skills to the
          Epilepsy Foundation of Georgia, where I'm actively involved in
          enhancing their website and online brand. My expertise lies in
          full-stack development and cloud/serverless technologies. I've honed
          my hands-on experience with the MERN stack and AWS, but what sets me
          apart is my adaptability and eagerness to learn new technologies.{" "}
          <br />
          Feel free to connect with me on LinkedIn or drop me an email below!
          I'm always up for a chat about technology, aviation, or anything in
          between. 😊✈️🚀
        </p>
      </div>
      <div className="container-fluid pt-3">
        <div className="row p-3 d-flex gap-5 justify-content-around justify-content-lg-center">
          <Card
            title="🖥️ Full-Stack"
            bordered={false}
            className="col-lg-2 col-md-4"
          >
            <p>• React</p>
            <p>• Express</p>
            <p>• Angular</p>
            <p>• Bootstrap</p>
            <p>• SASS / SCSS</p>
          </Card>

          <Card title="☁️ Cloud" bordered={false} className="col-lg-2 col-md-4">
            <p>• AWS API Gateway</p>
            <p>• AWS Kinesis</p>
            <p>• AWS Lambda</p>
            <p>• AWS S3</p>
            <p>• AWS EC2</p>
          </Card>

          <Card
            title="🛢️ Databases"
            bordered={false}
            className="col-lg-2 col-md-4"
          >
            <p>• MongoDB</p>
            <p>• AWS DynamoDB</p>
            <p>• PostgreSQL</p>
            <p>• MySQL</p>
            <p>• Azure Cosmos DB</p>
          </Card>
        </div>
      </div>
    </div>
  );
};
