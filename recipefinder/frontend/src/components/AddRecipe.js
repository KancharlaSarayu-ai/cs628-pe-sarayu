import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AddRecipe () {                        //adding new recipes for the component addrecipe 
  const navigate = useNavigate();                //initializing navigation function//
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const Submit = async (o) => {           // asynchronous event object 'o' is defined for the submit function 
    o.preventDefault();                         // prevents from reloading the page when submitted 

    const newRecipe = {
      name,
      ingredients: ingredients.split(",").map(ingredient => ingredient.trim()),           //here seperating each  item and going through each item by removing the extras forms the ingrediants
      instructions,
      
    };

    try {
      const response = await fetch("https://25j1mhfg-5050.usw2.devtunnels.ms/recipes", {     //sending an post  request to server side for adding an recipe
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });

      if (response.ok) {
        navigate("/");                    //navigates to the home page after recipe is added
      } 
      else {console.error("Failed to add the recipe");}
    } 
    catch (error) {console.error("Error in adding the recipe:", error);
    }
  };

  return (
  <div className="add-recipe-container">
    <h2>Add Recipe</h2>
    <br/>
      <form onSubmit={Submit}>
        <label> Recipe Name :  <input type="text" value={name} onChange={(o) => setName(o.target.value)} required /> </label>
        <br/><br/>
        <label> Ingredients : <input type="text" value={ingredients} onChange={(o) => setIngredients(o.target.value)} required /> </label>
        <br/><br/>
        <label> Instructions :  <textarea value={instructions} onChange={(o) => setInstructions(o.target.value)} required /> </label> 
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
