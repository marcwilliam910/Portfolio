import React from "react";
import {FaQuoteLeft} from "react-icons/fa";

export default function () {
  return (
    <section id="About" className="relative space-y-4 sm:space-y-6 ">
      <h2 className="text-xl font-bold text-light-primaryText sm:text-2xl">
        About Me
      </h2>
      <p className="text-sm text-justify indent-6 sm:px-4 md:px-8 md:text-base">
        Fresh graduate with a degree in BSIT and a passion for full-stack
        development. Committed to continuous learning and skill enhancement.
        Eager to apply my evolving expertise to create impactful user
        experiences in the professional world.
      </p>
      <FaQuoteLeft className="absolute z-0 -left-1 top-5 size-5 text-light-primary/30 sm:size-7 md:left-3" />
    </section>
  );
}
