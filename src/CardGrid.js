import React from "react";
import "./output.css";
import "./App.css";
import ImageTemplate from "./components/ImageTemplate.js";
import PropTypes from "prop-types";
import { useState } from "react";
// import Modal from "./components/ModalDetails.js";
import * as tarot from "./images/index.js";
// import ShuffleCards from "./components/ShuffleCards.js"

const CardGrid = () => {
  const [shuffledCards, setShuffledCards] = useState([]);

  const imageElements = Object.values(tarot).map((imagePath, index) => (
    <div key={index}>
      <ImageTemplate
        imageSource={imagePath}
        />
    </div>
  ));

  function shuffleCards() {
    // Shuffle the imageElements array using the Fisher-Yates shuffle algorithm
    for (let i = imageElements.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [imageElements[i], imageElements[j]] = [
        imageElements[j],
        imageElements[i],
      ];
    }
    // Select the first 6 tarot cards from the shuffled array
    // Create dynamic amount of cards to be sliced
    setShuffledCards(imageElements.slice(0, 6));
  }

  // Call the function with the images arra
  return (
    <>
      {/* container  start */}
      <div className="w-auto bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 p-10 mb-10">
        {/* container padding*/}
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          {/* Header Div */}
          <div className="w-auto justify-center text-center">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Reading Your Cards
            </h1>
          </div>
          {/* Grid */}
          <div className="flex justify-center w-auto">
            <div className="grid grid-cols-3 gap-10 rounded-2xl w-auto ">
              {shuffledCards}
            </div>
          </div>

        </div>

        {/* end of Grid */}
        {/* <CardGrid /> */}
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={shuffleCards}
        >
          Submit
        </button>
      </div>
      {/* end of Container Padding */}
    </>
  );
};
CardGrid.propTypes = {
  imageSource: PropTypes.string.isRequired
};

export default CardGrid;

