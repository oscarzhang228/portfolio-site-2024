import React from "react";
import { Navigation } from "../components/Navigation.tsx";
export const Hero = () => {
  const profilePic = require("../images/profile-pic.png");
  const computerPic = require("../images/computer-icons.png");
  return (
    <div className="container-fluid">
      <div className="row h-10">
        <Navigation />
      </div>
      <div className="row h-33">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <img src={profilePic} className="hero-profile-img"></img>
        </div>
      </div>
      <div className="row h-md-10 h-25">
        <div className="col-12">
          <h1 className="hero-header-text hero-text m-0">Software Engineer</h1>
          <h3 className="hero-text hero-body-text mt-4">
            I love designing scalable and immersive user experiences
          </h3>
        </div>
      </div>
      <div className="row h-32">
        <div className="col-12 d-flex justify-content-center align-items-end mh-100">
          <img src={computerPic} className="hero-computer-icons"></img>
        </div>
      </div>
    </div>
  );
};
