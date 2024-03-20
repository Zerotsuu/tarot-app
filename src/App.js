import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./output.css";
import "./App.css";
// import StackedDeck from "./stackedDeck.js"
// import Navbar from "./components/NavBar.js"
import Gallery from "./pages/Gallery";
import HomePage from "./pages/Homepage.js";
import Account from "./pages/Account.js";
import LoginForm from "./pages/Login.js";
import { Link } from "react-router-dom";

function App() {
  // console.log(tarotJson.cards)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("login", setIsLoggedIn);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("logout", setIsLoggedIn);
  };
  console.log(handleLogout);
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route index element={<LoginForm handleLogin={handleLogin} />} />
          {/* 👈 Renders at /app/ */}
          <Route path="/homepage" element={<HomePage />} />
          {/* 👈 Renders at /app/ */}
          <Route path="/gallery" element={<Gallery />} />
          {/* Protected route: only renders if the user is logged in */}
          <Route
            path="/account"
            element={
              isLoggedIn ? (
                <Account />
              ) : (
                <>
                  <div>Please log in to access this page</div>
                  <Link to="/" className="font-bold text-3xl tracking-tight">
                    Login
                  </Link>
                </>
              )
            }
          />
          {/* Login route: renders the login form */}
          <Route
            path="/"
            index
            element={<LoginForm handleLogin={handleLogin} />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
