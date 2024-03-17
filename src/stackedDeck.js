import React, { useState } from "react";
import "./output.css";
import "./App.css";
import cardBack from "./images/CardBack.jpeg";
// import shuffleCards from "../src/CardGrid"

export default function stackedDeck() {
  const [clickedImages, setClickedImages] = useState([]);
  const clickedCard = (index) => {

    if (!clickedImages.includes(index)) {
      setClickedImages((prevClickedImages) => [...prevClickedImages, index]);
    }
  
  };
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
          <div className="flex  justify-between ">
            {/* <img
              src={thefool}
              className="h-80 rounded-2xl inline-block"
              alt="TheFool"
            /> */}
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className={`filter h-80 rounded-2xl flex bg-black cursor-pointer hover:bg-opacity-90 hover:mt-10 ${i !== 0 ? "-ml-52 " : ""} ${clickedImages.includes(i)?"mt-10":""}`}
              >
                <img
                  src={cardBack}
                  className=" h-80 rounded-2xl hover:grayscale hover:opacity-200 position-relative"
                  alt={i}
                  onClick={() => clickedCard(i)}
                />
              </div>
            ))}
          </div>
          {/* end of Images */}
        </div>
        <div className="flex w-auto justify-center">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>

        {/* end of Container Padding */}
      </div>
      {/* end of Container */}
    </>
  );
}
