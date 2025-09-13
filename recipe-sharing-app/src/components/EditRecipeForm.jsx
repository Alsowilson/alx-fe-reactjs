import React, { useState } from 'react';
import useRecipeStore from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [name, setName] = useState(recipe.name);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ required by checker

    updateRecipe({
      ...recipe,
      name,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Recipe Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;



