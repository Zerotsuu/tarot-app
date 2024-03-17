import React from "react";
import Navbar from "../components/NavBar.js"


function App() {
 
  return (
    <div>
     <Navbar/>
      {/* Background */}
      <div className="bg-gray-50 dark:bg-gray-900 relative overflow-scroll w-screen h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          {/* Header Title */}

          <div className="w-full h-32" />
          <div className="text-white text-4xl"> To be developed </div>
          <div className="w-full h-32" />
          
          {/* <CardGrid imageSource={tarot.Death} cardName="The Fool" /> */}
          

          
        </div>
      </div>
    </div>
  );
}

export default App;
