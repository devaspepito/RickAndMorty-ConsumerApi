import React, { useState, useEffect } from "react";
import CharacterList from "./components/CharacterList";
import Filters from "./components/Filters";
import "./styles/App.css";

export const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({ status: "", gender: "", species: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      setError(null);
      
      let allCharacters = [];
      let page = 1;
      let totalPages;

      do {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}&status=${filters.status}&gender=${filters.gender}&species=${filters.species}`
        );
        const data = await response.json();

        allCharacters = [...allCharacters, ...data.results];
        totalPages = data.info.pages;
        page++;
      } while (page <= totalPages);

      setCharacters(allCharacters);
    } catch (error) {
      setError("Error fetching characters.");
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [filters]);

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <Filters filters={filters} setFilters={setFilters} />
      {loading ? (
        <p>Loading characters...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <CharacterList characters={characters} />
      )}
    </div>
  );
};
