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
    </div>
  );
};
