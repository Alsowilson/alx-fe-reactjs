import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addRecipe({ id: Date.now(), name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Recipe name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;

