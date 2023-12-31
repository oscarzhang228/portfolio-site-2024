import React from "react";
import { Section } from "../components/Section.tsx";
import { Hero } from "./Hero.tsx";
import { SocialList } from "../components/SocialList.tsx";

export const LandingPage = () => {
  return (
    <div className="d-flex flex-column">
      <Section
        mainColor="#9BB8CD"
        secondaryColor="#f9f9f9"
        mainElement={<Hero />}
        secondaryElement={
          <div className="section-bottom d-flex">
            <SocialList />
          </div>
        }
      />
    </div>
  );
};
