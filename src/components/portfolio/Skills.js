import React from "react";
import content from "../../content";

function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-fuchsia-500 to-purple-600">
      <h1 className="text-3xl font-bold font-dosis mt-20 sm:mt-16">
        {content.skills.title}
      </h1>
      <ul className="p-5 w-11/12 md:max-w-xl">
        {content.skills.list.map((list, index) => (
          <li className="leading-normal py-2" key={index}>
            <h6 className="text-sm">{list.lang}</h6>
            <span className="bar">
              {/* <span className={`${"animate-" + list.barAnimation}`}></span> */}
              <span
                className={`
              ${index === 0 && "animate-html5"}
              ${index === 1 && "animate-css3"}
              ${index === 2 && "animate-javascript"}
              ${index === 3 && "animate-nodejs"}
              ${index === 4 && "animate-reactjs"}
              ${index === 5 && "animate-mongodb"}
              ${index === 6 && "animate-tailwindcss"}
              ${index === 7 && "animate-bootstrap"}
              ${index === 8 && "animate-materializecss"}
              ${index === 9 && "animate-sass"}
              ${index === 10 && "animate-expressjs"}
              ${index === 11 && "animate-sql"}
              ${index === 12 && "animate-materialui"}
              ${index === 13 && "animate-jquery"}
              `}
              ></span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
