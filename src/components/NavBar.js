import React from "react";


const Navbar = () => {
  return (
    <nav className="sticky flex justify-between flex-wrap bg-teal-700 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-3xl tracking-tight">Card Reading Website</span>
      </div>

      <div className="lg:flex lg:items-center lg:w-auto">
        <div className="text-2xl font-semibold lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Home
          </a>

          <a
            href="#responsive-header"
            className="blockmt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Gallery
          </a>

          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white"
          >
            Account
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
