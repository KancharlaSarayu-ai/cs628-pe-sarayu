import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

function RecipeDetails ()
{
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://25j1mhfg-5050.usw2.devtunnels.ms/recipes/${id}`);
        const recipeData = await response.json();
        setRecipe(recipeData);
      } 
      catch (error) 
      {console.error("Error fetching recipe:", error);}
    };

    fetchRecipe();
  }, [id]);               //recipe is fetched based on the id from the URL 

  const Delete = async () => {
    try {
      const response = await fetch(`https://25j1mhfg-5050.usw2.devtunnels.ms/recipes/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete recipe");

      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  if (!recipe) return <p>Loading...</p>;        //looks for the recipe data 

  return (
    <div>
      <h2>{recipe.name}</h2>
         {/* Check if ingredients is in array to call .join  */}
      <p><strong>Ingredients:</strong> 
      {Array.isArray(recipe.ingredients) ? recipe.ingredients.join(", ") : recipe.ingredients}</p>     {/*checkss for an array and joins to a string by comma else nothing will be modified */}
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <button onClick={() => navigate(`/edit/${id}`)}>Edit Recipe</button>
      <button onClick={Delete}>Delete Recipe</button>
    </div>
  );
};

export default RecipeDetails;
