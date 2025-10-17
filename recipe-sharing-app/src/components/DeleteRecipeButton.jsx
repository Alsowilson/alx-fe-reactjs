import React from 'react';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ id, afterDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
    if (afterDelete) afterDelete();
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
