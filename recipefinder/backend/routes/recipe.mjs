import express from "express";
import { ObjectId } from "mongodb";
import db from "../db/conn.mjs";  

const router = express.Router();


router.get("/", async (req, res) => {                   //GET request to fetch recipes
  try {
    const recipesCollection = db.collection("recipes");     //collect the recipes from database
    let results = await recipesCollection.find({}).toArray(); //recipes are collected and converted in to an array
    res.status(200).json(results);
  }
  catch (err) 
  {
    console.error("Error fetching recipes:", err);          //logs error if any
    res.status(500).send("Error fetching recipes");
  }
});


router.get("/:id", async (req, res) => {                 //GET request for fetching specific recipe by its id
  try {
    const recipesCollection = db.collection("recipes");
    let query = { _id: new ObjectId(req.params.id) };    //an new objectID is created to check for the requested id 
    let result = await recipesCollection.findOne(query); //if the requested ID is found then returns to recipe data

    if (!result) {
      return res.status(404).send("Recipe not found");
    }
    res.status(200).json(result);
  } 
  catch (err) 
  {
    console.error("Error fetching recipe by id:", err);
    res.status(500).send("Error fetching recipe");
  }
});


router.post("/", async (req, res) => {        //POST request is used for putting/posting new data
  try {
    const recipesCollection = db.collection("recipes");
    
    let newDocument = {                   //extracts the new request of recipe data
      name: req.body.name,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
    };
    let result = await recipesCollection.insertOne(newDocument);   //putting new recipe info in to the databasae
    console.log("Inserted Recipe:", result);
    res.status(201).json(result);
  } 
  catch (err) 
  {
    console.error("Error creating recipe:", err);
    res.status(500).send("Error creating recipe");
  }
});


router.patch("/:id", async (req, res) => {        //PATCH request is used for updating the requestedID
  try {
    const recipesCollection = db.collection("recipes");
    const query = { _id: new ObjectId(req.params.id) };    
    const updates = {                         
      $set: {
        name: req.body.name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,

      },
    };
    let result = await recipesCollection.updateOne(query, updates);    //updates the recipe for the requestedID in Database
    if (result.matchedCount === 0) {
      return res.status(404).send("Recipe not found");
    }
    res.status(200).json(result);
  } 
  catch (err) 
  {
    console.error("Error updating recipe:", err);
    res.status(500).send("Error updating recipe");
  }
});


router.delete("/:id", async (req, res) => {               //DELETE request is used to del reuquested ID
  try {
    const recipesCollection = db.collection("recipes");
    const query = { _id: new ObjectId(req.params.id) };
    let result = await recipesCollection.deleteOne(query);  //deletes the recipe for the requestedID in database
    if (result.deletedCount === 0) {
      return res.status(404).send("Recipe not found");
    }
    res.status(200).json(result);
  } 
  catch (err)
  {
    console.error("Error deleting recipe:", err);
    res.status(500).send("Error deleting recipe");
  }
});

export default router;
