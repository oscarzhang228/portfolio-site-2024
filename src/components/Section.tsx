import React from "react";

export const Section: React.FC<{
  mainColor: string;
  secondaryColor: string;
  mainElement: React.ReactElement;
  secondaryElement: React.ReactElement;
}> = ({ mainColor, secondaryColor, mainElement, secondaryElement }) => {
  return (
    <section className="section">
      <Subsection
        color={mainColor}
        height="90"
        element={mainElement}
        border={true}
      />
      {secondaryElement}
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
    minHeight: height + "%",
    height: "auto",
    backgroundColor: color,
    borderBottom: border ? "1px solid black" : "none",
  };
  return (
    <section className="section sub d-flex" style={variableHeightAndColor}>
      {element}
    </section>
  );
};
