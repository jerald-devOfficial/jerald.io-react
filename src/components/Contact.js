import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactTemplate from "./ContactTemplate";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  useEffect(() => {
    document.title = "Jerald Dev - Contact";
  }, []);

  const [result, setResult] = useState(null);

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post("/api/send/", { ...state })
      .then((response) => {
        setResult(response.data);
        setState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Something went wrong. Try again later",
        });
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="flex-grow bg-gray-100 py-6 px-8 sm:py-12">
      <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-black-900 rounded-lg shadow-lg bg-white mt-16 sm:mt-13">
        <ContactTemplate />
        <div>
          {result && (
            <p className={`${result.success ? "success" : "error"}`}>
              {result.message}
            </p>
          )}
          <form onSubmit={sendEmail}>
            <div id="name">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name
              </span>
              <input
                className="w-full bg-blue-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                value={state.name}
                onChange={onInputChange}
              />
            </div>
            <div id="email" className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                className="w-full bg-blue-100  text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="email"
                value={state.email}
                onChange={onInputChange}
              />
            </div>
            <div id="subject" className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Subject
              </span>
              <input
                className="w-full bg-blue-100  text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="subject"
                value={state.subject}
                onChange={onInputChange}
              />
            </div>
            <div id="message" className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea
                className="w-full h-32 bg-blue-100  text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                name="message"
                value={state.message}
                onChange={onInputChange}
              ></textarea>
            </div>
            <div className="mt-8">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 hover:bg-indigo-700  text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
