// import React from "react";
// import "../styles/Filters.css";
//
// export const Filters = ({ filters, setFilters }) => {
//   const updateFilter = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
//   };
//
//   return (
//     <div className="filters">
//       <select name="status" value={filters.status} onChange={updateFilter}>
//         <option value="">All Status</option>
//         <option value="alive">Alive</option>
//         <option value="dead">Dead</option>
//         <option value="unknown">Unknown</option>
//       </select>
//
//       <select name="gender" value={filters.gender} onChange={updateFilter}>
//         <option value="">All Genders</option>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//         <option value="genderless">Genderless</option>
//         <option value="unknown">Unknown</option>
//       </select>
//
//       <select name="species" value={filters.species} onChange={updateFilter}>
//         <option value="">All Species</option>
//         <option value="Human">Human</option>
//         <option value="Alien">Alien</option>
//         <option value="Humanoid">Humanoid</option>
//         <option value="Poopybutthole">Poopybutthole</option>
//         <option value="Mythological Creature">Mythological Creature</option>
//         <option value="Animal">Animal</option>
//         <option value="Robot">Robot</option>
//         <option value="Cronenberg">Cronenberg</option>
//         <option value="Disease">Disease</option>
//         <option value="unknown">Unknown</option>
//       </select>
//     </div>
//   );
// };


import React from "react";
import "../styles/Filters.css";

export const Filters = ({ filters, setFilters }) => {
  const updateFilter = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="filters">
      <input
        type="text"
        name="name"
        placeholder="Search by name"
        value={filters.name}
        onChange={updateFilter}
        className="filter-input"
      />
      <input
        type="text"
        name="status"
        placeholder="Search by status (e.g., Alive, Dead)"
        value={filters.status}
        onChange={updateFilter}
        className="filter-input"
      />
      <input
        type="text"
        name="gender"
        placeholder="Search by gender (e.g., Male, Female)"
        value={filters.gender}
        onChange={updateFilter}
        className="filter-input"
      />
      <input
        type="text"
        name="species"
        placeholder="Search by species (e.g., Human, Alien)"
        value={filters.species}
        onChange={updateFilter}
        className="filter-input"
      />
    </div>
  );
};
