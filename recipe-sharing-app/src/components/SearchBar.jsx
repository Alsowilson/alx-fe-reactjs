import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterRecipes(); // update filteredRecipes dynamically
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearchChange}
      style={{
        padding: '8px',
        margin: '10px 0',
        width: '100%',
        borderRadius: '6px',
        border: '1px solid #ccc',
      }}
    />
  );
};

export default SearchBar;
