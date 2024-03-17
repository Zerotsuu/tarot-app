import React, { useState } from "react";
import * as tarot from "../images/index.js";
import ImageTemplate from "./ImageTemplate.js";
// import ShuffleCards from "./components/ShuffleCards.js"

const CardGrid = () => {
  const [setShuffledCards] = useState([]);

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
  return(
    <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={shuffleCards}
        >
          Submit
        </button>
  )
} 

export default CardGrid()