import React, { useState } from "react";
import "./output.css";
import "./App.css";
// import CardGrid from "./CardGrid.js";
import * as tarot from "./images/index.js";
// import TarotCardDetails from "./components/ModalDetails.js"

export default function CardGridTest() {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath);

    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const imageElements = Object.values(tarot).map((imagePath, index) => (
    <div key={index}>
      <img
        src={imagePath}
        className="w-80 rounded-2xl"
        alt={`Tarot card ${index}`}
        onClick={() => handleImageClick(imagePath)}
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
    setShuffledCards(imageElements.slice(0, 6));
    // const randomTarotCards = imageElements.slice(0, 6);
  }

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
          {/* end of Grid */}
          {/* <CardGrid /> */}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={shuffleCards}
          >
            Shuffle Cards
          </button>
        </div>
        {/* end of Container Padding */}
      </div>
      {/* end of Container */}
      {/* Modal */}

      {showModal && ( 
      // <TarotCardDetails selectedCard = {selectedImage} onCloseModal = {handleModalClose}/>
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      {selectedImage && (
                        <img
                          src={selectedImage}
                          alt="Selected tarot card"
                          className="w-64 mx-auto"
                        />
                      )}
                    </h3>

                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {selectedImage && "You clicked on the following tarot card:"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {selectedImage && "selectedImage"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleModalClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
