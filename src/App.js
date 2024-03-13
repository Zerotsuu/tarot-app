import React from "react";
// import thefool from "./images/MajorArcana/0_The_Fool.jpg";
// import StackedDeck from "./stackedDeck.js";
// import CardGrid from "./CardGrid.js";
import CardGridTest from "./CardGridTest.js";
import * as tarot from "./images/index.js"
import "./output.css";
import "./App.css";


function App() {
  return (
    <div>
      {/* Background */}
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          {/* Header Title */}
          <p
            href="/"
            className="flex items-center mb-6 text-6xl font-semibold text-gray-900 dark:text-white mt-10"
          >
            Tarot Card Reading
          </p>

          {/* container */}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            {/* container padding*/}
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {/* Header Div */}
              <div className="w-auto justify-center text-center">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Your Cards
                </h1>
              </div>
              {/* Images */}
              <div className="h-auto justify-center bg-white rounded-2xl">
                <img src={tarot.The_Fool} className="rounded-2xl" alt="TheFool" />
              </div>

             
            </div>
          </div>
          {/* End of Container */}

          <div className="w-full h-32"/>
          {/* <StackedDeck/> */}
          <div className="w-full h-32"/>
          {/* <CardGrid /> */}
          <CardGridTest />
          
        </div>
      </div>
    </div>
  );
}

export default App;
