import { React, useEffect } from "react";
import content from "../../content";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Editor from "./Editor";

function GettingStarted() {
  useEffect(() => {
    document.title = content.blog.main.head;
  }, []);
  return (
    <div className="max-w-screen-lg mx-auto mt-20 flex-grow">
      <div className="mt-12">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {content.blog.main.title}
            </h2>
            <a
              href="#"
              className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
            >
              {content.blog.main.category}
            </a>
          </div>
          <LazyLoadImage
            className="w-full object-cover lg:rounded px-4 lg:px-0"
            src={content.blog.main.img.img}
            alt={content.blog.main.img.alt}
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-12 mb-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <p className="pb-6">{content.blog.main.content[0]}</p>
            <p className="pb-6">{content.blog.main.content[1]}</p>
            <p className="pb-6">{content.blog.main.content[2]}</p>
            <p className="pb-6">
              {content.blog.main.content[3]}{" "}
              <a href="https://goalkicker.com/JavaScriptBook/">
                <b>Notes for Professional</b>
              </a>
            </p>

            <p className="pb-6">{content.blog.main.content[4]}</p>
            <p className="pb-6">{content.blog.main.content[5]}</p>
            <p className="pb-6">{content.blog.main.content[6]}</p>
            <p className="pb-6">{content.blog.main.content[7]}</p>
            <p className="pb-6">
              {content.blog.main.content[8]}{" "}
              <a href="/portfolio">
                <b>Portfolio.</b>
              </a>
            </p>
          </div>
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
