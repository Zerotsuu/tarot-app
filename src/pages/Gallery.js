import React from "react";
import Navbar from "../components/NavBar.js";
import * as allCards from "../images/index.js";
import TarotCard from "../components/ImageTemplate.js";

function Gallery() {
    const images = Object.values(allCards);
    return (
        <div>
            <Navbar />
            {/* Background */}
            <div className="bg-gray-50 dark:bg-gray-900 relative  w-auto h-auto">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">

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
                                <div className="grid grid-cols-5 gap-10 rounded-2xl w-auto ">
                                    {images.map((image, index) => (
                                        <TarotCard key={index} imageSource={image} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>



                   

                    {/* <CardGrid imageSource={tarot.Death} cardName="The Fool" /> */}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
