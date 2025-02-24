"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Bounded from "../Bounded";
import Shapes from "./Shapes";
import Shapes1 from "./Shapes1";

const name = "JBS INTERIOR";
const tagLine = "One Stop interior Solution";

const Hero = () => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          }
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          }
        );
    }, component);
    return () => ctx.revert();
  }, []);

  const renderLetters = (name, key) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0 ${
          letter === " " ? "whitespace-pre" : "tracking-wide"
        }`}
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  };

  return (
    <Bounded ref={component}>
      <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2 text-center md:text-left px-6 sm:px-12">
        <Shapes />
        {/* <Shapes1/> */}
        <div className="col-start-1 md:row-start-1" data-speed=".2">
          <h1
            className="mb-4 text-[clamp(2rem,8vw,8rem)] font-extrabold leading-tight tracking-wide"
            aria-label={`${name}`}
          >
            <span className="block text-gray-200">{renderLetters(name, "name")}</span>
          </h1>
          <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide text-transparent opacity-0">
            {tagLine}
          </span>
        </div>
      </div>
      </Bounded>
  );
};

export default Hero;
