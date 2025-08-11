import React from "react";
import { words } from "../constants";
import LogoShowcase from "./LogoShowcase";

const Skills = () => {
  return (
    <section id="skills" className="relative bg-black w-full text-white pt-20 px-5 md:px-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full max-w-5xl">
          {/* Sliding Words Animation */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Skills</h2>
            <div className="slide overflow-hidden whitespace-nowrap">
              <div className="wrapper inline-flex animate-marquee">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className="flex items-center md:gap-3 gap-1 mr-8"
                  >
                    <img
                      src={word.imgPath}
                      alt={word.text}
                      className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                    />
                    <span>{word.text}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Additional Skills content can be added here */}
          <LogoShowcase />
        </div>
      </div>
    </section>
  );
};

export default Skills;
