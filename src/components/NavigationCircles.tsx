import React from "react";
import { Circle, Donut } from "react-awesome-shapes";
export const NavigationCircles = () => {
  return (
    <div className="d-flex flex-column ms-auto me-2 justify-content-center">
      <Circle
        color="#C4D7B2"
        size={["20px", "20px", "15px", "15px"]}
        zIndex={2}
        className="position-relative mb-1"
      />
      <Donut
        color="#EEC759"
        size={["20px", "20px", "15px", "15px"]}
        width={["4px", "4px", "6px", "6px"]}
        zIndex={2}
        className="position-relative mb-1"
      />
      <Circle
        color="#C4D7B2"
        size={["20px", "20px", "15px", "15px"]}
        zIndex={2}
        className="position-relative mb-1"
      />
      <Circle
        color="#C4D7B2"
        size={["20px", "20px", "15px", "15px"]}
        zIndex={2}
        className="position-relative"
      />
    </div>
  );
};
