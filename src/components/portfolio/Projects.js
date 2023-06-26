import React from "react";
import content from "../../content";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-cyan-500">
      <h1 className="text-4xl sm:text-5xl font-bold font-dosis text-white mt-20 sm:mt-16 mb-20 md:mt-12">
        {content.projects.title}
      </h1>

      {/* 1st */}

      <div class="grid gap-x-8 gap-y-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-4">
        {content.projects.list.map((list, index) => (
          <div
            key={index}
            class="max-w-xs mx-4 rounded overflow-hidden shadow-lg  mb-10 bg-primay hover:bg-light-blue-400"
          >
            <div className="transform transition duration-500 hover:scale-110">
              <a href={list.url} rel="noopener noreferrer" target="_blank">
                <LazyLoadImage
                  class="w-full"
                  src={list.img.img}
                  alt={list.img.alt}
                />
              </a>
            </div>

            <div class="px-4 py-2">
              <div class="font-bold text-l mb-0 md:mb-2 sm:text-xl font-dosis text-white hover:text-gray-700">
                <a href={list.url} rel="noopener noreferrer" target="_blank">
                  {list.projectName}
                </a>
              </div>
              <p class="sm:text-gray-darker  hidden md:inline md:text-justify md:text-base hover:text-gray-200">
                {list.desc}
              </p>
            </div>
            <div class="py-1 grid grid-cols-2 px-2">
              {list.technologies.map((technologies, index) => (
                <span class="hover:bg-gray-50 inline w-11/12 md:w-3/4 rounded-full py-0 text-xs md:text-sm font-semibold text-gray-darker">
                  {technologies}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div class="max-w-xs mx-4 rounded overflow-hidden shadow-lg  mb-10 bg-orange-500 hover:bg-light-blue-400">
          <div className="transform transition duration-500 hover:scale-110">
            <a
              href={content.projects.windows.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <LazyLoadImage
                class="w-full"
                src={content.projects.windows.img.img}
                alt={content.projects.windows.img.alt}
              />
            </a>
          </div>

          <div class="px-4 py-2">
            <div class="font-bold text-l mb-0 md:mb-2 sm:text-xl font-dosis text-white hover:text-gray-700">
              <a
                href={content.projects.windows.url}
                rel="noopener noreferrer"
                target="_blank"
                download
              >
                {content.projects.windows.projectName}
              </a>
            </div>
            <p class="sm:text-gray-darker  hidden md:inline md:text-justify md:text-base hover:text-gray-200">
              {content.projects.windows.desc}
            </p>
          </div>
          <div class="py-1 grid grid-cols-2 px-2">
            {content.projects.windows.technologies.map(
              (technologies, index) => (
                <span class="hover:bg-gray-50 inline w-11/12 md:w-3/4 rounded-full py-0 text-xs md:text-sm font-semibold text-gray-darker">
                  {technologies}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* end of 1st */}
    </div>
  );
}

export default Projects;
