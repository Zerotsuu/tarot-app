import React from 'react';
import PropTypes from 'prop-types';
import Modal from './ModalDetails';
import ImageModalContent from './ImageTemplate';

const TarotCard = (props) => {
  const { imageSource, cardName } = props;
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-auto justify-center bg-white rounded-2xl">
      <img src={imageSource} className="rounded-2xl" alt={cardName} onClick={openModal} />
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <ImageModalContent imageSource={imageSource} />
      </Modal>
    </div>
  );
};

TarotCard.propTypes = {
  imageSource: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
};

export default TarotCard;