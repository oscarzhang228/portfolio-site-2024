import React from "react";
import { SocialList } from "./SocialList.tsx";
export const Section: React.FC<{
  mainColor: string;
  secondaryColor: string;
}> = ({ mainColor, secondaryColor }) => {
  return (
    <section className="section">
      <Subsection color={mainColor} height="90" />
      <Subsection color={secondaryColor} height="10" />
    </section>
  );
};

const Subsection: React.FC<{ color: string; height: string }> = ({
  color,
  height,
}) => {
  const variableHeightAndColor = {
    height: height + "%",
    backgroundColor: color,
  };
  return (
    <section className="section sub" style={variableHeightAndColor}>
      <SocialList />
    </section>
  );
};
