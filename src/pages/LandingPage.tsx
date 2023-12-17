import React from "react";
import { Section } from "../components/Section.tsx";
import { Hero } from "./Hero.tsx";

export const LandingPage = () => {
  return (
    <>
      <div id="hero">
        <Section
          mainColor="#9BB8CD"
          secondaryColor="white"
          mainElement={<Hero />}
        />
      </div>
    </>
  );
};
