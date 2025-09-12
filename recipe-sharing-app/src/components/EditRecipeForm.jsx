import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [name, setName] = useState(recipe.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, { name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditRecipeForm;


