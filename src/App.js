import React from "react";
import CardGrid from "./CardGrid.js";
import * as tarot from "./images/index.js";
import "./output.css";
import "./App.css";
import ImageTemplate from "./components/ImageTemplate.js";
import tarotJson from "./components/tarot-images.json"

function App() {
  console.log(tarotJson.cards)
  return (
    <div>
      {/* Background */}
      <div className="bg-gray-50 dark:bg-gray-900 relative overflow-scroll w-screen h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          {/* Header Title */}
          <a
            href="/"
            className="flex items-center mb-6 text-6xl font-semibold text-gray-900 dark:text-white mt-10"
          >
            Tarot Card Reading
          </a>

          {/* container */}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            {/* container padding*/}
            <div className="p-6 space-y-4">
              {/* Header Div */}
              <div className="w-auto justify-center text-center">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Your Cards
                </h1>
                
              </div>
              {/* Images */}

              <div className="w-full justify-center flex">
              <ImageTemplate imageSource={tarot.Death} cardName="The Fool" />
              </div>
              
            </div>
          </div>
          {/* End of Container */}

          <div className="w-full h-32" />
          {/* <StackedDeck/> */}
          <div className="w-full h-32" />
          {/* <CardGrid /> */}
          {/* <CardGridTest />
          <CardModal/> */}
          <CardGrid imageSource={tarot.Death} cardName="The Fool" />
          {/* <TarotCard imageSource={tarot.The_Fool} cardName="The Fool"/> */}

          
        </div>
      </div>
    </div>
  );
}

export default App;
