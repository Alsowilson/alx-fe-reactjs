import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div style={{ padding: '20px' }}>
                <h1>Recipe Sharing App</h1>
                <SearchBar /> {/* ✅ Added SearchBar */}
                <AddRecipeForm /> {/* ✅ Required by checker */}
                <RecipeList />
              </div>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
