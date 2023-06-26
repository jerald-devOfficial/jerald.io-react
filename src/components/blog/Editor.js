import React from "react";
import content from "../../content";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Editor() {
  return (
    <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
      <div className="p-4 border-t border-b md:border md:rounded">
        <div className="flex py-2">
          <LazyLoadImage
            src={content.blog.editor}
            className="h-10 w-10 rounded-full mr-2 object-cover"
          />
          <div>
            <p className="font-semibold text-gray-700 text-sm">
              {" "}
              Jerald Baroro{" "}
            </p>
            <p className="font-semibold text-gray-600 text-xs"> Editor </p>
          </div>
        </div>
        <p className="text-gray-700 py-3">
          Jerald writes about technology, science, games, and web development
          itself. Subscribe to see more of his updates.
        </p>
        <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
          Follow
          <i className="bx bx-user-plus ml-2"></i>
        </button>
      </div>
    </div>
  );
}

export default Editor;
