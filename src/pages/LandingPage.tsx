import React from "react";
import { useRef, useEffect } from "react";

import { Section } from "../components/Section.tsx";
import { Hero } from "./Hero.tsx";
export const LandingPage = () => {
  // const refArr = [
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  // ];
  // const currentPage = useRef(0);
  // useEffect(() => {
  //   const scrollEffect = (event) => {
  //     event.preventDefault();
  //     event.stopPropagation();

  //     if (Math.sign(event.deltaY) === -1) {
  //       currentPage.current -= 1;
  //       if (currentPage.current < 0) {
  //         currentPage.current = 0;
  //       }
  //     } else {
  //       currentPage.current += 1;
  //       if (currentPage.current > refArr.length - 1) {
  //         currentPage.current = refArr.length - 1;
  //       }
  //     }

  //     refArr[currentPage.current].current!.scrollIntoView({
  //       behavior: "smooth",
  //     });

  //     setTimeout(() => {
  //       document.addEventListener("wheel", scrollEffect, {
  //         once: true,
  //         passive: false,
  //       });
  //     }, 200);
  //   };

  //   document.addEventListener("wheel", scrollEffect, {
  //     once: true,
  //     passive: false,
  //   });
  // }, []);
  return (
    <>
      <div ref={refArr[0]} id="hero">
        <Section
          mainColor="#9BB8CD"
          secondaryColor="white"
          mainElement={<Hero />}
        />
      </div>

      <div ref={refArr[1]} id="about">
        <Section
          mainColor="white"
          secondaryColor="black"
          mainElement={<div></div>}
        />
      </div>
      <div ref={refArr[2]} id="t">
        <Section
          mainColor="white"
          secondaryColor="black"
          mainElement={<div></div>}
        />
      </div>
    </>
  );
};
