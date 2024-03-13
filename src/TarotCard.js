import React from "react";

const TarotCard = ({ card }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">{card.name}</h2>
      <img src={card.img} alt={card.name} className="w-80 mb-4 rounded-2xl" />
      <p><strong>Number:</strong> {card.number}</p>
      <p><strong>Arcana:</strong> {card.arcana}</p>
      <p><strong>Suit:</strong> {card.suit}</p>
      <h3 className="text-xl font-bold mt-4">Fortune Telling</h3>
      <ul className="list-disc list-inside">
        {card.fortune_telling.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <h3 className="text-xl font-bold mt-4">Keywords</h3>
      <ul className="list-disc list-inside">
        {card.keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
      <h3 className="text-xl font-bold mt-4">Meanings</h3>
      <h4 className="text-lg font-bold mb-2">Light</h4>
      <ul className="list-disc list-inside">
        {card.meanings.light.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <h4 className="text-lg font-bold mb-2">Shadow</h4>
      <ul className="list-disc list-inside">
        {card.meanings.shadow.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <h3 className="text-xl font-bold mt-4">Archetype</h3>
      <p>{card.Archetype}</p>
      <h3 className="text-xl font-bold mt-4">Hebrew Alphabet</h3>
      <p>{card["Hebrew Alphabet"]}</p>
      <h3 className="text-xl font-bold mt-4">Numerology</h3>
      <p>{card.Numerology}</p>
      <h3 className="text-xl font-bold mt-4">Elemental</h3>
      <p>{card.Elemental}</p>
      <h3 className="text-xl font-bold mt-4">Mythical/Spiritual</h3>
      <p>{card["Mythical/Spiritual"]}</p>
      <h3 className="text-xl font-bold mt-4">Questions to Ask</h3>
      <ul className="list-disc list-inside">
        {card["Questions to Ask"].map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
};

export default TarotCard;