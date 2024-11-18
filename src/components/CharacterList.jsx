import React from "react";
import CharacterCard from "./CharacterCard";

export const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.length > 0 ? (
        characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))
      ) : (
        <p>No characters found!</p>
      )}
    </div>
  );
};
