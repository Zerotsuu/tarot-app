import React from "react";
import "./output.css";
import "./App.css";
import ImageTemplate from "./components/ImageTemplate.js";
// import PropTypes from "prop-types";
// import { useState } from "react";
// import Modal from "./components/ModalDetails.js";
import * as tarot from "./images/index.js";
// import ShuffleCards from "./components/ShuffleCards.js"
import { ShuffleCardsUtil as ShuffleCardsUtil } from "./utils/shuffleCardsUtil.js"; // Import the shuffleCards function
import PropTypes from "prop-types";

const CardGrid = ({numCards}) => {
  // const [shuffledCards, setShuffledCards] = useState([]);

 
    // Shuffle the cards when the component mounts
    const imageElements = Object.values(tarot).map((imagePath, index) => (
      <div key={index}>
        <ImageTemplate imageSource={imagePath} />
      </div>
    ));
    const shuffledImageElements = ShuffleCardsUtil(imageElements);
    const renderShuffling= shuffledImageElements.slice(0,numCards)
    // setShuffledCards(shuffledImageElements.slice(0, numCards));
    console.log("clicked", numCards)
  
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
              {renderShuffling}
              {/* {shuffledCards} */}
            </div>
          </div>
        </div>
        {/* end of Grid */}

        {/* <ShuffleCards/> */}
        {/* <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={shuffleCards}
        >
          Submit
        </button> */}
      </div>
      {/* end of Container Padding */}
    </>
  );
};

CardGrid.propTypes = {
  numCards: PropTypes.number.isRequired,
  
};
export default CardGrid;

