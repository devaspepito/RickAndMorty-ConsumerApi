import React from "react";

const CharacterCard = ({ character }) => {
  const { name, image, species, status } = character;

  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Species: {species}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default CharacterCard;
