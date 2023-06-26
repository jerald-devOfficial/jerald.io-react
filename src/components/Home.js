import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import content from "../content";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Blog() {
  useEffect(() => {
    document.title = "Jerald Dev - Blog Posts";
  }, []);
  return (
    <div className="max-w-screen-lg mx-auto mt-20 flex-grow">
      <div className="mt-12">
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:col-span-2 lg:col-span-3 relative rounded ">
            <LazyLoadImage
              className="rounded-md object-cover w-full h-64"
              src={content.blog.main.img.img}
              alt={content.blog.main.img.alt}
            />
            <span className="text-green-700 text-sm hidden md:block mt-4">
              {" "}
              {content.blog.main.category}{" "}
            </span>
            <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
              {content.blog.main.title}
            </h1>
            <p className="text-gray-600 mb-4">{content.blog.main.content[0]}</p>
            <Link
              to="/insights/Getting-Started"
              className="inline-block px-3 py-2 mt-2 rounded-md bg-green-700 text-gray-100"
            >
              Read more
            </Link>
          </div>
          <div className="w-full md:col-span-1 lg:col-span-2">
            <div className="rounded w-full flex flex-col md:flex-row mb-10 md:mt-4 lg:mt-0">
              <LazyLoadImage
                src={content.blog.myshoppe.img.img}
                alt={content.blog.myshoppe.img.alt}
                className="block md:hidden  lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
              />

              <div className="bg-white rounded px-4">
                <span className="text-green-700 text-sm hidden md:block">
                  {" "}
                  {content.blog.myshoppe.category}{" "}
                </span>
                <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                  <Link to="/programming/How-to-Fully-Access-MyShoppe-POS-in-C">
                    {content.blog.myshoppe.title}
                  </Link>
                </div>
                <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                  {content.blog.myshoppe.content[0].substring(0, 200) + " ..."}
                  <a
                    href="/programming/How-to-Fully-Access-MyShoppe-POS-in-C"
                    className="text-green-600"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>
            <div className="rounded w-full flex flex-col md:flex-row mb-10">
              <LazyLoadImage
                src={content.blog.tailwindcssandreact.img.img}
                alt={content.blog.tailwindcssandreact.img.alt}
                className="block md:hidden  lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
              />
              <div className="bg-white rounded px-4">
                <span className="text-green-700 text-sm hidden md:block">
                  {" "}
                  {content.blog.tailwindcssandreact.category}{" "}
                </span>
                <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                  <Link to="/programming/Guide-to-Complete-TailwindCSS-and-React-Setup">
                    {content.blog.tailwindcssandreact.title}
                  </Link>
                </div>
                <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                  {content.blog.tailwindcssandreact.content[0].substring(
                    0,
                    200
                  ) + " ..."}
                  <a
                    href="/programming/Guide-to-Complete-TailwindCSS-and-React-Setup"
                    className="text-green-600"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
