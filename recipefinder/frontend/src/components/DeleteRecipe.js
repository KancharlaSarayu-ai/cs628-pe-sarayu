import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

function RecipeDetails  () {                         //recipe details component is displayed
    
    const { id } = useParams();                     // a constant function id is initialized using useparams hook to extract the recipe id details
    const navigate = useNavigate();                 
    const [recipe, setRecipe] = useState(null);     

useEffect(() => {
    const fetchRecipe = async () => {               //asynchronous function is defined to get the recipe details
    try {
        const response = await fetch(`https://25j1mhfg-5050.usw2.devtunnels.ms/recipes/${id}`);
        const recipeDetails = await response.json();
        setRecipe(recipeDetails);
    } catch (error) {
        console.error("Can't fetch recipes :", error);
    }
    };

    fetchRecipe();
}, [id]);

const Delete = async () => {
    try {
        const response = await fetch(`https://25j1mhfg-5050.usw2.devtunnels.ms/recipes/${id}`, {
        method: "DELETE",
    });
    
    if (response.ok) {
        navigate("/");                    //navigates to the home page after recipe is deleted
        } 
        else {console.error("Failed to delete the recipe");}
    } 
    catch (error) {console.error("Error in deleting the recipe:", error);
    }
};
return (
<div>
    <h2>{recipe.name}</h2>
    <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
    <p><strong>Instructions:</strong> {recipe.instructions}</p>
    <button onClick={Delete}>Delete Recipe</button>
</div>
);
};

export default RecipeDetails;
