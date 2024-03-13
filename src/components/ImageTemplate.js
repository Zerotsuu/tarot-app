import React from 'react';
import PropTypes from 'prop-types';
import Modal from './ModalDetails';





const TarotCard = (props) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const { imageSource, cardName } = props;
    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
  return (
    <>
    <div className="w-80 justify-center bg-white rounded-2xl">
      <img src={imageSource} className="rounded-2xl" alt={cardName} onClick={openModal}/>
    </div>
    <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={imageSource}

      />
    </>
  )
}
TarotCard.propTypes = {
    imageSource: PropTypes.string.isRequired,
    cardName: PropTypes.string.isRequired,
  };

export default TarotCard