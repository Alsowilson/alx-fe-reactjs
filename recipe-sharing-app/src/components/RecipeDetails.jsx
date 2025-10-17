import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => String(r.id) === String(id))
  );

  if (!recipe) return <div>Recipe not found.</div>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <h4>Edit Recipe</h4>
      <EditRecipeForm recipe={recipe} />

      <DeleteRecipeButton id={recipe.id} afterDelete={() => navigate('/')} />
    </div>
  );
};

export default RecipeDetails;
