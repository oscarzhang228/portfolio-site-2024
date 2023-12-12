import React from "react";
import { SocialList } from "./SocialList.tsx";
import { NavigationCircles } from "./NavigationCircles.tsx";

export const Section: React.FC<{
  mainColor: string;
  secondaryColor: string;
  mainElement: React.ReactElement;
}> = ({ mainColor, secondaryColor, mainElement }) => {
  return (
    <section className="section">
      <Subsection
        color={mainColor}
        height="90"
        element={mainElement}
        border={true}
      />
      <Subsection
        color={secondaryColor}
        height="10"
        element={<BottomSection />}
        border={false}
      />
    </section>
  );
};

const Subsection: React.FC<{
  color: string;
  height: string;
  element: React.ReactElement;
  border: boolean;
}> = ({ color, height, element, border }) => {
  const variableHeightAndColor = {
    height: height + "%",
    backgroundColor: color,
    borderBottom: border ? "1px solid black" : "none",
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
      {/* <NavigationCircles /> */}
    </>
  );
};
