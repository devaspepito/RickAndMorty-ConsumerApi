import React from "react";

const Filters = ({ filters, setFilters }) => {
  const updateFilter = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="filters">
      <select name="status" value={filters.status} onChange={updateFilter}>
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select name="gender" value={filters.gender} onChange={updateFilter}>
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      <select name="species" value={filters.species} onChange={updateFilter}>
        <option value="">All Species</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
        {/* Add more species if needed */}
      </select>
    </div>
  );
};

export default Filters;
