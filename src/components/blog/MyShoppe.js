import { React, useEffect } from "react";
import content from "../../content";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Editor from "./Editor";

function MyShoppe() {
  useEffect(() => {
    document.title = content.blog.myshoppe.head;
  }, []);
  return (
    <div className="max-w-screen-lg mx-auto mt-20 flex-grow">
      <div className="mt-12">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {content.blog.myshoppe.title}
            </h2>
            <a
              href="#"
              className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
            >
              {content.blog.myshoppe.category}
            </a>
          </div>
          <LazyLoadImage
            className="w-full object-cover lg:rounded px-4 lg:px-0"
            src={content.blog.myshoppe.img.img}
            alt={content.blog.myshoppe.img.alt}
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-12 mb-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <p className="pb-6">{content.blog.myshoppe.content[0]}</p>
            <p className="pb-6">{content.blog.myshoppe.content[1]}</p>
            <p className="pb-6">{content.blog.myshoppe.content[2]}</p>
            <p className="pb-6">{content.blog.myshoppe.content[3]}</p>
            <div class="mb-4 rounded-xl overflow-hidden bg-gray-800 pl-2 py-2 text-green-700">
              <pre class="language-js">
                <code class="language-js">
                  <span class="token comment"> ADMINISTRATOR </span>
                  <br />
                  USERNAME
                  <span class="token operator">:</span> adJerald <br />
                  PASSWORD
                  <span class="token operator">:</span> admin
                </code>
              </pre>
            </div>
            <p className="pb-6">{content.blog.myshoppe.content[4]}</p>
            <div class="mb-4 rounded-xl overflow-hidden bg-gray-800 pl-2 py-2 text-green-700">
              <pre class="language-c">
                <code class="language-c">
                  <span class="token comment"> CASHIER </span>
                  <br />
                  USERNAME
                  <span class="token operator">:</span> cJerald <br />
                  PASSWORD
                  <span class="token operator">:</span> cpass
                </code>
              </pre>
            </div>
            <p className="pb-6">{content.blog.myshoppe.content[5]}</p>
            <p className="pb-6">{content.blog.myshoppe.content[6]}</p>
            <p className="pb-6">{content.blog.myshoppe.content[7]}</p>
          </div>
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default MyShoppe;
