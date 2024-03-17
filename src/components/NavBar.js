import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router


const Navbar = () => {
  return (
    <nav className="sticky flex justify-between flex-wrap bg-teal-700 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        
        <Link
            to="/" // Specify the route to the Gallery page
            className="font-bold text-3xl tracking-tight"
          >
            Tarot Card Reading Website
          </Link>
      </div>

      <div className="lg:flex lg:items-center lg:w-auto">
        <div className="text-2xl font-semibold lg:flex-grow">
        <Link
            to="/" // Specify the route to the Gallery page
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Home
          </Link>

          <Link
            to="/gallery" // Specify the route to the Gallery page
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Gallery
          </Link>

          <Link
            to="/account" // Specify the route to the Gallery page
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
