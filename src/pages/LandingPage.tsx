import React from "react";
import { Section } from "../components/Section.tsx";
import { Hero } from "./Hero.tsx";
import { AboutExperience } from "./AboutExperience.tsx";

export const LandingPage = () => {
  return (
    <div className="d-flex flex-column">
      <Section
        mainColor="#9BB8CD"
        secondaryColor="#f9f9f9"
        mainElement={<Hero />}
      />

      <Section
        mainColor="#f9f9f9"
        secondaryColor="#f9f9f9"
        mainElement={<AboutExperience />}
      ></Section>

      <footer className="footer-main container-fluid d-flex justify-content-center align-items-center gap-5">
        <p>&copy;Oscar Zhang 2023</p>
        <p>
          <a href="https://www.vecteezy.com/free-vector/computer">
            Picture Copyright
          </a>
        </p>
      </footer>
    </div>
  );
};
