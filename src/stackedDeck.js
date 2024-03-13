import React from "react";
import "./output.css";
import "./App.css";

import thefool from "./images/MajorArcana/0_The_Fool.jpg";

export default function Stackeddeck() {
  return (
    <>
      {/* container  start */}
      <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 p-10 mb-10">
        {/* container padding*/}
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          {/* Header Div */}
          <div className="w-auto justify-center text-center">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Pick Your Cards
            </h1>
          </div>

          {/* Images */}
          <div className="flex flex-row justify-between bg-white rounded-2xl">
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
            <img
              src={thefool}
              className="h-80 rounded-2xl inline-block -ml-52"
              alt="TheFool"
            />
          </div>
          {/* end of Images */}
        </div>
        {/* end of Container Padding */}
      </div>
      {/* end of Container */}
    </>
  );
}
