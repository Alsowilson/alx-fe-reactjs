import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  const displayRecipes =
    filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      {displayRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
