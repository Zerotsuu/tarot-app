import React from "react";
import "./output.css";
import "./App.css";

import thefool from "./images/MajorArcana/0_The_Fool.jpg";

export default function CardGrid() {
    return (
        <>
            {/* container  start */}
            <div className="w-auto bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 p-10 mb-10">
                {/* container padding*/}
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    {/* Header Div */}
                    <div className="w-auto justify-center text-center">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Reading Your Cards
                        </h1>
                    </div>

                    {/* Grid */}
                    <div className="flex justify-center w-auto">
                        <div className="grid grid-cols-3 grid-rows-2 gap-10 rounded-2xl w-auto ">
                            <div>
                                <img
                                    src={thefool}
                                    className="w-80 rounded-2xl "
                                    alt="TheFool"
                                />
                            </div>
                            <div>
                                <img
                                    src={thefool}
                                    className="w-80 rounded-2xl "
                                    alt="TheFool"
                                />
                            </div>
                            <div>
                                <img
                                    src={thefool}
                                    className="w-80 rounded-2xl "
                                    alt="TheFool"
                                />
                            </div>
                            <div>
                                <img
                                    src={thefool}
                                    className="w-80 rounded-2xl "
                                    alt="TheFool"
                                />
                            </div>
                            <div>
                                <img
                                    src={thefool}
                                    className="w-80 rounded-2xl "
                                    alt="TheFool"
                                />
                            </div>
                            <div>
                                <img
                                    src={thefool}
                                    className="w-80 rounded-2xl "
                                    alt="TheFool"
                                />
                            </div>
                        </div>
                    </div>
                    {/* end of Grid */}
                </div>
                {/* end of Container Padding */}
            </div>
            {/* end of Container */}
        </>
    );
}
