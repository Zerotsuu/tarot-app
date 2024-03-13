import React, { useState } from "react";
import TarotCard from "./TarotCard";
import tarotData from "./components/tarot-images.json";


const TarotCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const shuffledTarotCards = useShuffle(tarotData.cards);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-8">Tarot Cards</h1>
      <div className="grid grid-cols-3 gap-4">
        {shuffledTarotCards.map((card) => (
          <TarotCard
            key={card.name}
            card={card}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
      {selectedCard && (
        <Modal onClose={() => setSelectedCard(null)}>
          <TarotCard card={selectedCard} />
        </Modal>
      )}
    </div>
  );
};

const useShuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-4 rounded-lg shadow-md">
        {children}
        <button
          className="mt-4 py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TarotCards;