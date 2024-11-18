const API_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = async (filters) => {
  const query = new URLSearchParams(filters).toString();
  const response = await fetch(`${API_URL}?${query}`);
  return response.json();
};
