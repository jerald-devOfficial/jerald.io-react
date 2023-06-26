import React, { useState } from "react";
import content from "../content";

function Header() {
  const [isOpen, setOpen] = useState(false);

  function handleClick() {
    setOpen(!isOpen);
  }

  return (
    <header className="font-dosis fixed top-0 w-screen bg-white shadow-lg sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 z-40">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="text-3xl font-bold">
          <a href="/">
            <h1>
              {content.nav.logo[0]}
              <span className="h-2 w-2 bg-cyan-500 inline-block ml-0  rounded-full"></span>
              {content.nav.logo[1]}
            </h1>
          </a>
        </div>
        <div className="sm:hidden">
          <button
            onClick={handleClick}
            type="button"
            className="block text-gray-500 hover:text-black focus:text-black focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={
          isOpen ? "block px-2 pt-2 pb-4 sm:flex sm:p-0" : "hidden sm:flex"
        }
      >
        <a
          href="/"
          className="font-bold block px-2 py-1 text-gray-900 rounded hover:bg-gray-100"
        >
          Blog
        </a>
        <a
          href="/portfolio"
          className="font-bold mt-1 block px-2 py-1 text-gray-900 rounded hover:bg-gray-100 sm:mt-0 sm:ml-2"
        >
          Portfolio
        </a>
        <a
          href="/contact"
          className="font-bold mt-1 block px-2 py-1 text-gray-900 rounded hover:bg-gray-100 sm:mt-0 sm:ml-2"
        >
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header;
