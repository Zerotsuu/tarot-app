import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import "./output.css";
import "./App.css";
// import StackedDeck from "./stackedDeck.js"
// import Navbar from "./components/NavBar.js"
import Gallery from "./pages/Gallery"
import HomePage from "./pages/Homepage.js"
import Account from "./pages/Account.js"

function App() {
  // console.log(tarotJson.cards)
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/> {/* 👈 Renders at /app/ */}
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
