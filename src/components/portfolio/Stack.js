import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../../content";

function Stack() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl sm:text-5xl font-bold font-dosis mt-20 sm:mt-16">
        {content.stack.title}
      </h1>
      <div className="flex flex-wrap justify-center mt-10">
        {content.stack.tech.map((tech, index) => (
          <span
            key={index}
            className={` h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-3 ${
              index % 2 !== 0 ? "animate-bounceSecond" : "animate-bounceFirst"
            }`}
          >
            <LazyLoadImage effect="blur" src={tech.img} alt={tech.alt} />
          </span>
        ))}
      </div>
      <p className="font-dosis font-bold w-11/12 md:max-w-xl text-3xl text-center mt-6">
        {content.stack.desc}
      </p>
      <caption className="font-textMeOne w-11/12 md:max-w-xl text-xl text-justify p-5 font-bold">
        {content.stack.sub}
      </caption>
    </div>
  );
}

export default Stack;
