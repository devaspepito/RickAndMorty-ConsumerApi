import React, { useState, useEffect } from "react";
import { CharacterList } from "./components/CharacterList";
import { Filters } from "./components/Filters";
import "./styles/App.css";

export const App = () => {
  const [characters, setCharacters] = useState([]);
  // const [filters, setFilters] = useState({ status: "", gender: "", species: "" });
  const [filters, setFilters] = useState({ status: "", gender: "", species: "", name: "" });

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        // const response = await fetch(
        //   `https://rickandmortyapi.com/api/character?status=${filters.status}&gender=${filters.gender}&species=${filters.species}`
        // );
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?name=${filters.name}&status=${filters.status}&gender=${filters.gender}&species=${filters.species}`
        );
        const data = await response.json();
        setCharacters(data.results || []);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [filters]);

  return (
    <div className="App">
      <h1>Rick and Morty Consumer API</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <CharacterList characters={characters} />
    </div>
  );
};
