import React from "react";
import { About } from "./About.tsx";
import { Experience } from "./Experience.tsx";

export const AboutExperience = () => {
  return (
    <div className="container-fluid">
      <div className="row h-100">
        <div className="col-md-6 col-sm-12 pt-5">
          <Experience />
        </div>
        <div className="col-md-6 col-sm-12">
          <About />
        </div>
        <div className="col-12">
          <footer className="footer-main container-fluid d-flex justify-content-center align-items-end gap-5 p-4">
            <p className="m-0">&copy;Oscar Zhang 2023</p>
            <p className="m-0">
              <a href="https://www.vecteezy.com/free-vector/computer">
                Picture Copyright
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};
