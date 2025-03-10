import React, { useState, useEffect } from "react";
import{Link, Outlet}  from 'react-router-dom';
import "../App.css";

function RecipeList ()
{
  const [recipes, setRecipes] = useState([]);

useEffect(() => {
  const fetchRecipes = async () => {
      try {
        const response = await fetch("https://25j1mhfg-5050.usw2.devtunnels.ms/recipes"); 
        
        if (!response.ok) {throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const recipesData = await response.json();
        console.log("Fetched recipes:", recipesData);  //it logs the data to the browser
        setRecipes(recipesData);
      } 
      catch (error) {console.error("Error fetching recipes:", error);}
    };
  
    fetchRecipes();
  }, []);
  
return (
  <div>
      <h1>Recipes</h1>
      {recipes.length === 0 ? (           //ternary/conditional operator used to check the recipes 
        <p>No recipes found</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (     //for each input passes the properties to its respective list
            <li key={recipe._id}>
              <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link> 
            </li>
          ))}
        </ul>
      )}
      <Outlet /> {/* Nested */}
    </div>
  );};
export default RecipeList;
