import { React, useEffect } from "react";
import content from "../../content";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Editor from "./Editor";

function TailwindAndReactSetup() {
  useEffect(() => {
    document.title = content.blog.tailwindcssandreact.head;
  }, []);
  return (
    <div className="max-w-screen-lg mx-auto mt-20 flex-grow">
      <div className="mt-12">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {content.blog.tailwindcssandreact.title}
            </h2>
            <a
              href="#"
              className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
            >
              {content.blog.tailwindcssandreact.category}
            </a>
          </div>
          <LazyLoadImage
            className="w-full object-cover lg:rounded px-4 lg:px-0"
            src={content.blog.tailwindcssandreact.img.img}
            alt={content.blog.tailwindcssandreact.img.alt}
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-12 mb-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[0]}
            </p>
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[1]}
            </p>
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[2]}
            </p>
            <p className="pb-2">
              {content.blog.tailwindcssandreact.content[3]}
            </p>
            <LazyLoadImage
              className="w-full object-cover lg:rounded pb-6"
              src={content.blog.tailwindcssandreact.blogImages[0].img}
              alt={content.blog.tailwindcssandreact.blogImages[0].alt}
            />
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[4]}
            </p>
            <hr className="pb-3" />
            <h3 className="pb-2 text-2xl font-bold">
              {content.blog.tailwindcssandreact.content[5]}
            </h3>
            <h3 className="pb-6 text-1xl font-bold">
              {content.blog.tailwindcssandreact.content[6]}
            </h3>
            <LazyLoadImage
              className="w-full object-cover lg:rounded pb-6"
              src={content.blog.tailwindcssandreact.blogImages[1].img}
              alt={content.blog.tailwindcssandreact.blogImages[1].alt}
            />
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[7]}
            </p>
            <div class="mb-4 rounded-xl overflow-hidden bg-gray-800 pl-2 py-2 text-green-700">
              <pre class="language-shell">
                <code class="language-shell">
                  npx create-react-app my-app
                  <br />
                  cd my-app
                </code>
              </pre>
            </div>
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[8]}
            </p>
            <hr className="pb-3" />
            <h3 className="pb-6 text-1xl font-bold">
              {content.blog.tailwindcssandreact.content[9]}
            </h3>
            <div class="mb-4 rounded-xl overflow-x-auto bg-gray-800 px-2 py-2 text-green-700">
              <pre class="language-shell">
                <code class="language-shell">
                  <span>
                    npm install tailwindcss@npm:@tailwindcss/postcss7-compat
                    @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
                  </span>
                </code>
              </pre>
            </div>
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[10]}
            </p>
            <LazyLoadImage
              className="w-full object-cover lg:rounded pb-6"
              src={content.blog.tailwindcssandreact.blogImages[2].img}
              alt={content.blog.tailwindcssandreact.blogImages[2].alt}
            />
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[11]}
            </p>
            <div class="mb-4 rounded-xl overflow-x-auto bg-gray-800 px-2 py-2 text-green-700">
              <pre class="language-shell">
                <code class="language-shell">
                  npm install tailwindcss@latest postcss@latest
                  autoprefixer@latest
                </code>
              </pre>
            </div>
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[13]}
            </p>
            <hr className="pb-3" />
            <h3 className="pb-6 text-1xl font-bold">
              {content.blog.tailwindcssandreact.content[12]}
            </h3>
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[14]}
            </p>
            <div class="mb-4 rounded-xl overflow-hidden bg-gray-800 px-2 py-2 text-green-700">
              <pre class="language-shell">
                <code class="language-shell">npm install @craco/craco</code>
              </pre>
            </div>
            <p className="pb-2">
              {content.blog.tailwindcssandreact.content[15]}
            </p>
            <div class="my-4 rounded-xl overflow-x-auto bg-gray-800  text-green-700 py-2">
              <pre class="language-diff-json">
                <code class="language-diff-json">
                  <div>
                    <span class="token unchanged language-json">
                      <span class="token prefix unchanged"> </span>{" "}
                      <span class="token punctuation">{"{"}</span>
                      <br />
                      <span class="token prefix unchanged"> </span>{" "}
                      <span class="token comment pl-6 text-gray-500">
                        // ...
                      </span>
                      <br />
                      <span class="token prefix unchanged"> </span>{" "}
                      <span class="token property pl-6">"scripts"</span>
                      <span class="token operator">:</span>{" "}
                      <span class="token punctuation">{"{"}</span>
                      <br />
                    </span>
                  </div>
                  <div className="bg-red-300 w-full pl-2">
                    <span class="token deleted-sign deleted language-json">
                      <span class="token prefix deleted select-none">-</span>{" "}
                      <span class="token property pl-12">"start"</span>
                      <span class="token operator">:</span>{" "}
                      <span class="token string">"react-scripts start"</span>
                      <span class="token punctuation">,</span>
                      <br />
                      <span class="token prefix deleted select-none">
                        -
                      </span>{" "}
                      <span class="token property pl-12">"build"</span>
                      <span class="token operator">:</span>{" "}
                      <span class="token string">"react-scripts build"</span>
                      <span class="token punctuation">,</span>
                      <br />
                      <span class="token prefix deleted select-none">
                        -
                      </span>{" "}
                      <span class="token property pl-12">"test"</span>
                      <span class="token operator">:</span>{" "}
                      <span class="token string">"react-scripts test"</span>
                      <span class="token punctuation">,</span>
                      <br />
                    </span>
                  </div>
                  <div className="bg-green-400 w-full pl-2">
                    <span class="token inserted-sign inserted language-json">
                      <span class="token prefix inserted select-none">+</span>{" "}
                      <span class="token property pl-12">"start"</span>
                      <span class="token operator">:</span>{" "}
                      <span class="token string">"craco start"</span>
                      <span class="token punctuation">,</span>
                      <br />
                      <span class="token prefix inserted select-none">
                        +
                      </span>{" "}
                      <span class="token property pl-12">"build"</span>
                      <span class="token operator">:</span>{" "}
                      <span class="token string">"craco build"</span>
                      <span class="token punctuation">,</span>
                      <br />
                      <span class="token prefix inserted select-none">
                        +
                      </span>{" "}
                      <span class="token property pl-12">"test"</span>
                      <span class="token operator">:</span>{" "}
                      <span class="token string">"craco test"</span>
                      <span class="token punctuation">,</span>
                      <br />
                    </span>
                  </div>
                  <span class="token unchanged language-json">
                    <span class="token prefix unchanged"> </span>{" "}
                    <span class="token property pl-12">"eject"</span>
                    <span class="token operator">:</span>{" "}
                    <span class="token string">"react-scripts eject"</span>
                    <br />
                    <span class="token prefix unchanged"> </span>{" "}
                    <span class="token punctuation pl-12">{"}"}</span>
                    <span class="token punctuation">,</span>
                    <br />
                    <span class="token prefix unchanged"> </span>{" "}
                    <span class="token punctuation">{"}"}</span>
                  </span>
                </code>
              </pre>
            </div>
            <p className="pb-2">
              {content.blog.tailwindcssandreact.content[16]}
            </p>
            <div class="mt-4 mb-10 rounded-xl overflow-x-auto bg-gray-800  text-green-700 py-2 pl-6">
              <pre class="language-js ">
                <code class="language-js">
                  <span class="token comment text-gray-500">
                    // craco.config.js
                  </span>
                  <br />
                  module<span class="token punctuation">.</span>
                  <span class="token property-access">exports</span>{" "}
                  <span class="token operator">=</span>{" "}
                  <span class="token punctuation">{"{"}</span>
                  <br />
                  {"  "}style<span class="token operator">:</span>{" "}
                  <span class="token punctuation">{"{"}</span>
                  <br />
                  {"    "}postcss<span class="token operator">:</span>{" "}
                  <span class="token punctuation">{"{"}</span>
                  <br />
                  {"      "}plugins<span class="token operator">:</span>{" "}
                  <span class="token punctuation">[</span>
                  <br />
                  <span class="token function pl-16">{"  "}require</span>
                  <span class="token punctuation">(</span>
                  <span class="token string">'tailwindcss'</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">,</span>
                  <br />
                  <span class="token function pl-16">{"  "}require</span>
                  <span class="token punctuation">(</span>
                  <span class="token string">'autoprefixer'</span>
                  <span class="token punctuation">)</span>
                  <span class="token punctuation">,</span>
                  <br />
                  <span class="token punctuation pl-16">]</span>
                  <span class="token punctuation">,</span>
                  <br />
                  <span class="token punctuation pl-10">{"}"}</span>
                  <span class="token punctuation">,</span>
                  <br />
                  <span class="token punctuation pl-5">{"}"}</span>
                  <span class="token punctuation">,</span>
                  <br />
                  <span class="token punctuation">{"}"}</span>
                  <br />
                </code>
              </pre>
            </div>
            <hr className="pb-3" />
            <h3 className="pb-6 text-1xl font-bold">
              {content.blog.tailwindcssandreact.content[17]}
            </h3>
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[18]}
            </p>
            <div class="mb-4 rounded-xl overflow-x-auto bg-gray-800 pl-2 py-2 text-green-700">
              <pre class="language-shell">
                <code class="language-shell">
                  npx tailwindcss init --full -p
                </code>
              </pre>
            </div>
            <p className="pb-6">
              I know that{" "}
              <code className="text-green-700 bg-gray-800 rounded px-2 language-shell">
                npx tailwindcss init
              </code>
              will work but 'Adam Wathan', the creator of Tailwind CSS
              recommended using the full init of tailwindcss. The full
              tailwindcss config will compile all the classes from tailwindcss
              itself. But it's really up to you this time. Now, this will create
              both 'tailwind.config.js' full setup and 'postcss.config.js'.
              Otherwise, it will only create a minimal 'tailwind.config.js'.
            </p>
            <hr className="pb-3" />
            <h3 className="pb-6 text-1xl font-bold">
              {content.blog.tailwindcssandreact.content[19]}
            </h3>
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[20]}
            </p>
            <div class="mt-4 mb-10 rounded-xl overflow-x-auto bg-gray-800  text-green-700 py-2">
              <pre class="language-js ">
                <code class="language-diff-js">
                  <span class="token unchanged language-json">
                    <span class="token comment text-gray-500 pl-6">
                      // package.json
                    </span>
                    <br />
                    <span class="token punctuation pl-6">{"{"}</span>
                    <br />
                    {"   "}
                    {"  "}"name": "my-app",
                    <br />
                    {"   "}
                    {"  "}"version": "0.1.0",
                    <br />
                    {"   "}
                    {"  "}"private": true,
                    <br />
                    {"   "}
                    {"  "}"dependencies":{" "}
                    <span class="token punctuation">{"{"}</span>
                    <br />
                    <div className="bg-red-300 w-full pl-6">
                      <span class="token deleted-sign deleted language-js ">
                        <span class="token prefix deleted select-none">-</span>
                        {"  "}
                        "autoprefixer": "^10.2.4",
                        <br />
                        <span class="token prefix deleted select-none">-</span>
                        {"  "}
                        "postcss": "^8.2.4",
                        <br />
                        <span class="token prefix deleted select-none">-</span>
                        {"  "}
                        "tailwindcss": "^2.0.2",
                      </span>
                    </div>
                    <div className="bg-green-400 w-full pl-6">
                      <span class="token inserted-sign inserted language-js">
                        <span class="token prefix inserted select-none">+</span>
                        {"  "}"autoprefixer": "^9.8.6",
                        <br />
                        <span class="token prefix inserted select-none">+</span>
                        {"  "}"postcss": "^7.0.35",
                        <br />
                        <span class="token prefix inserted select-none">+</span>
                        {"  "}"tailwindcss":
                        "npm:@tailwindcss/postcss7-compat@^2.0.2",
                        <br />
                      </span>
                    </div>
                    <span class="token punctuation pl-6">
                      {"   "}
                      {"}"}
                    </span>
                    <br />
                    <span class="token punctuation pl-6">{"}"}</span>
                  </span>
                </code>
              </pre>
            </div>
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[21]}
            </p>
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[22]}
            </p>
            <LazyLoadImage
              className="w-full object-cover lg:rounded pb-6"
              src={content.blog.tailwindcssandreact.blogImages[3].img}
              alt={content.blog.tailwindcssandreact.blogImages[3].alt}
            />
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[23]}
            </p>
            <div class="mb-4 rounded-xl overflow-x-auto bg-gray-800 pl-2 py-2 text-green-700">
              <pre class="language-shell">
                <code class="language-shell">npm i</code>
              </pre>
            </div>
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[24]}
            </p>
            <div class="mb-4 rounded-xl overflow-x-auto bg-gray-800 pl-2 py-2 text-green-700">
              <pre class="language-shell">
                <code class="language-shell">npm run start</code>
              </pre>
            </div>
            <hr className="pb-3" />
            <h3 className="pb-6 text-1xl font-bold">
              {content.blog.tailwindcssandreact.content[25]}
            </h3>
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[26]}{" "}
              <code className="text-green-700 bg-gray-800 rounded px-2 language-shell">
                purge: ["./src/**/*.{"{(js, jsx, ts, tsx)}"}",
                "./public/index.html"],
              </code>{" "}
              and it will look like this:
            </p>
            <div class="mt-4 mb-10 rounded-xl overflow-x-auto bg-gray-800  text-green-700 py-2">
              <pre class="language-js ">
                <code class="language-diff-js">
                  <span class="token unchanged language-js pl-6">
                    <span class="token prefix unchanged"> </span>{" "}
                    <span class="token comment text-gray-500">
                      // tailwind.config.js
                    </span>
                    <br />
                    <span class="token prefix unchanged pl-6"> </span> module
                    <span class="token punctuation">.</span>
                    <span class="token property-access">exports</span>{" "}
                    <span class="token operator">=</span>{" "}
                    <span class="token punctuation">{"{"}</span>
                    <br />
                  </span>
                  <div className="bg-red-300 w-full pl-6">
                    <span class="token deleted-sign deleted language-js ">
                      <span class="token prefix deleted select-none">-</span>{" "}
                      {"  "}purge
                      <span class="token operator">:</span>{" "}
                      <span class="token punctuation">[</span>
                      <span class="token punctuation">]</span>
                      <span class="token punctuation">,</span>
                      <br />
                    </span>
                  </div>
                  <div className="bg-green-400 w-full pl-6">
                    <span class="token inserted-sign inserted language-js">
                      <span class="token prefix inserted select-none">+</span>{" "}
                      {"  "}purge
                      <span class="token operator">:</span>{" "}
                      <span class="token punctuation">[</span>
                      <span class="token string">
                        './src/**/*.{"{js,jsx,ts,tsx}"}'
                      </span>
                      <span class="token punctuation">,</span>{" "}
                      <span class="token string">'./public/index.html'</span>
                      <span class="token punctuation">]</span>
                      <span class="token punctuation">,</span>
                      <br />
                    </span>
                  </div>
                  <span class="token unchanged language-js">
                    <span class="token prefix unchanged   pl-6"> </span> {"  "}
                    darkMode
                    <span class="token operator">:</span>{" "}
                    <span class="token boolean">false</span>
                    <span class="token punctuation">,</span>{" "}
                    <span class="token comment text-gray-500">
                      // or 'media' or 'class'
                    </span>
                    <br />
                    <span class="token prefix unchanged  pl-6"> </span> {"  "}
                    theme
                    <span class="token operator">:</span>{" "}
                    <span class="token punctuation">{"{"}</span>
                    <br />
                    <span class="token prefix unchanged  pl-6"> </span> {"    "}
                    extend
                    <span class="token operator">:</span>{" "}
                    <span class="token punctuation">{"{"}</span>
                    <span class="token punctuation">{"}"}</span>
                    <span class="token punctuation">,</span>
                    <br />
                    <span class="token prefix unchanged  pl-6"> </span>{" "}
                    <span class="token punctuation">
                      {"  "}
                      {"}"}
                    </span>
                    <span class="token punctuation">,</span>
                    <br />
                    <span class="token prefix unchanged  pl-6"> </span> {"  "}
                    variants
                    <span class="token operator">:</span>{" "}
                    <span class="token punctuation">{"{"}</span>
                    <br />
                    <span class="token prefix unchanged  pl-6"> </span> {"    "}
                    extend
                    <span class="token operator">:</span>{" "}
                    <span class="token punctuation">{"{"}</span>
                    <span class="token punctuation">{"}"}</span>
                    <span class="token punctuation">,</span>
                    <br />
                    <span class="token prefix unchanged  pl-6"> </span>{" "}
                    <span class="token punctuation">
                      {"  "}
                      {"}"}
                    </span>
                    <span class="token punctuation">,</span>
                    <br />
                    <span class="token prefix unchanged  pl-6"> </span> {"  "}
                    plugins
                    <span class="token operator">:</span>{" "}
                    <span class="token punctuation">[</span>
                    <span class="token punctuation">]</span>
                    <span class="token punctuation">,</span>
                    <br />
                    <span class="token prefix unchanged  pl-6"> </span>{" "}
                    <span class="token punctuation">{"}"}</span>
                  </span>
                </code>
              </pre>
            </div>
            <hr className="pb-3" />
            <h3 className="pb-6 text-1xl font-bold">
              {content.blog.tailwindcssandreact.content[27]}
            </h3>
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[28]}
            </p>
            <div class="mt-4 mb-10 rounded-xl overflow-x-auto bg-gray-800  text-green-700 py-2 pl-6">
              <pre class="language-css">
                <code class="language-css">
                  <span class="token comment text-gray-500">
                    /* ./src/index.css */
                  </span>
                  <br />
                  <span class="token atrule">
                    <span class="token rule">@tailwind</span> base
                    <span class="token punctuation">;</span>
                  </span>
                  <br />
                  <span class="token atrule">
                    <span class="token rule">@tailwind</span> components
                    <span class="token punctuation">;</span>
                  </span>
                  <br />
                  <span class="token atrule">
                    <span class="token rule">@tailwind</span> utilities
                    <span class="token punctuation">;</span>
                  </span>
                </code>
              </pre>
            </div>
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[29]}
            </p>
            <p className="pb-6">
              {content.blog.tailwindcssandreact.content[30]}
            </p>
          </div>
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default TailwindAndReactSetup;
