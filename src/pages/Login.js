import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config.js";
import PropTypes from "prop-types";
import "../output.css";
// import { Link } from "react-router-dom";
// import Homepage from "../pages/Homepage.js";

// import thefool from "./images/MajorArcana/0_The_Fool.jpg"

function Login({ handleLogin }) {
  const [loginType, setLoginType] = useState("login");
  const [userCredential, setUserCredential] = useState({});
  const [error, setError] = useState();
  const useHistory = useNavigate();

  console.log("auth", auth);

  function handleCredentials(e) {
    setUserCredential({ ...userCredential, [e.target.name]: e.target.value });
    console.log(userCredential);
  }

  function handleSignup(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      userCredential.email,
      userCredential.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  function handleSubmit(e) {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      userCredential.email,
      userCredential.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        handleLogin();
        useHistory("/homepage");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Welcome to the Tarot Reading App</h1>
              <div className="text-md font-bold leading-tight tracking-tight text-gray-900 dark:text-white"> Login or create an account to continue</div>
              <div className="flex justify-between">
                <button
                  className={`w-full text-white bg-slate-400 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${loginType == "login" ? "selected" : ""}`}
                  onClick={() => setLoginType("login")}
                >
                  Login
                </button>
                <button
                  className={`w-full text-white bg-slate-400 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${loginType == "signup" ? "selected" : ""}`}
                  onClick={() => setLoginType("signup")}
                >
                  Signup
                </button>
              </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => handleCredentials(e)}
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => handleCredentials(e)}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                {loginType == "login" ? (
                  <button
                    type="submit"
                    className="w-full text-white bg-slate-400 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Sign in
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full text-white bg-slate-400 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={(e) => handleSignup(e)}
                  >
                    Sign Up
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="container login-page">
        <section>
          <h1>Welcome to the Book App</h1>
          <p>Login or create an account to continue</p>
          <div className="login-type">
            <button
              className={`btn ${loginType == "login" ? "selected" : ""}`}
              onClick={() => setLoginType("login")}
            >
              Login
            </button>
            <button
              className={`btn ${loginType == "signup" ? "selected" : ""}`}
              onClick={() => setLoginType("signup")}
            >
              Signup
            </button>
          </div>
          <form className="add-form login">
            <div className="form-control">
              <label>Email *</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  handleCredentials(e);
                }}
              />
            </div>
            <div className="form-control">
              <label>Password *</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={(e) => {
                  handleCredentials(e);
                }}
              />
            </div>
            {loginType == "login" ? (
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="active btn btn-block"
              >
                Login
              </button>
            ) : (
              <button
                onClick={(e) => {
                  handleSignup(e);
                }}
                className="active btn btn-block"
              >
                Sign Up
              </button>
            )}
            {error && <div className="text-xl">{error}</div>}
            <p className="forgot-password">Forgot Password?</p>
          </form>
        </section>
      </div>
    </>
    
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
