import React from "react";
import { SocialList } from "./SocialList.tsx";

import { NavigationCircles } from "./NavigationCircles.tsx";
export const Section: React.FC<{
  mainColor: string;
  secondaryColor: string;
}> = ({ mainColor, secondaryColor }) => {
  return (
    <section className="section">
      <Subsection color={mainColor} height="90" element={<div></div>} />
      <Subsection
        color={secondaryColor}
        height="10"
        element={<BottomSection />}
      />
    </section>
  );
};

const Subsection: React.FC<{
  color: string;
  height: string;
  element: React.ReactElement;
}> = ({ color, height, element }) => {
  const variableHeightAndColor = {
    height: height + "%",
    backgroundColor: color,
  };
  return (
    <section className="section sub d-flex" style={variableHeightAndColor}>
      {element}
    </section>
  );
};

const BottomSection: React.FC = () => {
  return (
    <>
      <SocialList />
      <NavigationCircles />
    </>
  );
};
