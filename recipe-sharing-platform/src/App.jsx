import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipe from "./components/AddRecipe";
import data from "./data.json";

function App() {
  const [recipes, setRecipes] = useState(data);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route path="/add" element={<AddRecipe addRecipe={addRecipe} />} />
      </Routes>
    </Router>
  );
}

export default App;
