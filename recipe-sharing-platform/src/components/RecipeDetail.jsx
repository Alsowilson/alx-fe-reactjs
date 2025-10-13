import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Recipe not found 😢
        </h2>
        <Link
          to="/"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {recipe.title}
        </h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Ingredients
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          {recipe.ingredients && recipe.ingredients.length > 0 ? (
            recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          ) : (
            <>
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Instructions
        </h2>
        <p className="text-gray-600 mb-6">
          {recipe.instructions ||
            "Step-by-step cooking instructions go here."}
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          ← Back to Recipes
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;

