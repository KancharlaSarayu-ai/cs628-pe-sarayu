import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";
function EditRecipe () {

  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",

  });

useEffect(() => {
  const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://25j1mhfg-5050.usw2.devtunnels.ms/recipes/${id}`);
        const recipeData = await response.json();
        let ingredients;
      if (Array.isArray(recipeData.ingredients)) {                  //Checks the format of ingredients is an array or not 
        ingredients = recipeData.ingredients.join(", ");}           //if yes then the  data is seperated by comma and stored 
      else {ingredients = recipeData.ingredients;}                 // if it is an string no changes needed 

setRecipe({ ...recipeData, ingredients });                        //spread operator is used to copy the data to setRecipe
} 
catch (error) {console.error("Can't fetch recipe:", error);}

    };

    fetchRecipe();
  }, [id]);

  const Submit = async (o) => {
    o.preventDefault();
  
    const updatedRecipe = {
      name: recipe.name,
      ingredients: recipe.ingredients.split(",").map((ingredient) => ingredient.trim()),
      instructions: recipe.instructions,
    };
  

  
    try {
      const response = await fetch(`https://25j1mhfg-5050.usw2.devtunnels.ms/recipes/${id}`,
        {
          method: "PATCH",                                  //updates/edits the data
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedRecipe),              //here the javascript object updaterecipe is converted to JSON string
      });
  
const responseData = await response.json();
console.log("API Response:", responseData);

if (!response.ok) throw new Error(`Can't update the recipe: ${responseData.message || "Unknown error"}`);

navigate(`/recipes/${id}`);       //naviagtes to recipe name page
    } 
    catch (error)
    { console.error("Error updating recipe:", error); }
  };
  

  const Change = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,                //here the data is copied to the new object
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={Submit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={Change}
            required
          />
        </label>
        <br />
        <label>
          Ingredients:
          <input
            type="text"
            name="ingredients"
            value={recipe.ingredients}
            onChange={Change}
            required
          />
        </label>
        <br />
        <label>
          Instructions:
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={Change}
            required
          />
        </label>
        <br />
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipe;
