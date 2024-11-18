import React from "react";
import "../styles/CharacterCard.css";

const CharacterCard = ({ character }) => {
  const { id, name, image, species, status, gender } = character;

  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Species: {species}</p>
      <p>Status: {status}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

export default CharacterCard;
