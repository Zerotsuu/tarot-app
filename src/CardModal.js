import React, { useState } from "react";
// import TarotCard from "./TarotCard";
// import tarotData from "./components/tarot-images.json";

export default function CardModal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }
  return (
    <>
    {/* Button Onclick */}
      <button
        onClick={toggleModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click
      </button>
  {/* Modal Output */}
      {modal && (
        <div className="w-full h-full m-0 fixed bg-white">
          <div className="bg-white">
            <div className="modal-content">
              <h2>Hello There</h2>
              <button
                onClick={toggleModal}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
