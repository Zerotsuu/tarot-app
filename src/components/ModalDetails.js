import React from "react";
import PropTypes from "prop-types";
import data from "./tarot-images.json";

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  const getDescription = (img) => {
    const card = data.cards.find((card) => card.img === img);

    if (card) {
      return card.meanings.light[0]; // You can change this to return any description you want
    } else {
      return "Description not found";
    }
  };

  // Extract the original file name from the imageSrc prop

  const fileName = imageSrc.match(/\/static\/media\/(.+?)\./)[1];

  // Usage
  const img = fileName +".jpg";

  const description = getDescription(img);
  console.log(img)
console.log(description)
  return (
    <>
      <div
        className="z-10 w-screen fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity justify-center"
        aria-hidden="true"
      >
        <div className="flex mx-auto my-auto shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          {/* container padding*/}
          <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* Header Div */}
            <div className="w-auto text-center">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Your Cards
              </h1>
            </div>
            {/* Images */}
            <img src={imageSrc} alt="Selected Image" className="modal-image" />
            <p className="text-center mt-4 text-white">{description}</p>
            <div className="flex w-full justify-center">
              <button
                type="button"
                className="justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                Close{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageSrc: PropTypes.node.isRequired,
};

export default Modal;

// import React from 'react';
// import PropTypes from 'prop-types';

// const Modal = (props) => {
//   const { isOpen, closeModal, children } = props;

//   return (
//     <div>
//       {isOpen && (
//         <div className="z-10 fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true">
//           <div className="items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 bg-white overflow-hidden text-left align-middle transition-all transform shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                 {children}
//               </div>
//               <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                 <button
//                   type="button"
//                   className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
//                   onClick={closeModal}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// Modal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   closeModal: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
// };

// export default Modal;
