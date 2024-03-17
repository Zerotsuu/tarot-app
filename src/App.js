import React from "react";
import CardGrid from "./CardGrid.js";
import * as tarot from "./images/index.js";
import "./output.css";
import "./App.css";
// import ImageTemplate from "./components/ImageTemplate.js";
import tarotJson from "./components/tarot-images.json"
import StackedDeck from "./stackedDeck.js"
import Navbar from "./components/NavBar.js"


function App() {
  console.log(tarotJson.cards)
  return (
    <div>
      <Navbar/>
      {/* Background */}
      <div className="bg-gray-50 dark:bg-gray-900 relative overflow-scroll w-screen h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          {/* Header Title */}
         

          

          <div className="w-full h-32" />
          <StackedDeck/>
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
