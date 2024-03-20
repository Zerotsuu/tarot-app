import React from "react";
// import StackedDeck from "../stackedDeck.js";
import Navbar from "../components/NavBar.js";

const App = () => {
  // console.log(tarotJson.cards)
  return (
    <div>
      <Navbar />
      {/* Background */}
      <div className="bg-gray-50 dark:bg-gray-900 relative overflow-scroll w-screen h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          {/* Header Title */}

          <div className="w-full h-32" />
          <button
                type="button"
                className="justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                // onClick={<StackedDeck/>}
              >
                3 Card Readings{" "}
              </button>
          <div className="w-full h-32" />

          {/* <CardGrid imageSource={tarot.Death} cardName="The Fool" /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
