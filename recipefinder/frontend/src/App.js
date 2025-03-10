import React from "react";
import { Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipe from "./components/AddRecipe";  
import EditRecipe from "./components/EditRecipe";
import Navbar from "./components/Navbar";
import './App.css';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
         {/* Nested route  */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/create" element={<AddRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
      </Routes>
    </>
  );
}

export default App;
