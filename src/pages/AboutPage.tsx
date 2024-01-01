import React from "react";
import { Section } from "../components/Section.tsx";
import { SocialList } from "../components/SocialList.tsx";
import { About } from "../components/About.tsx";
export const AboutPage = () => {
  return (
    <Section
      mainColor="#9BB8CD"
      secondaryColor="#f9f9f9"
      mainElement={<About />}
      secondaryElement={
        <div className="section-bottom d-flex">
          <SocialList />
        </div>
      }
    />
  );
};
