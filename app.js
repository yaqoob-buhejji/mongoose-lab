const mongoose = require("mongoose")
const Recipe = require("./models/recipe")
const express = require("express");
const app = express();
app.use(express.json());
async function connecttoDB(){
    try{ await mongoose.connect("mongodb+srv://yaqoob:yaqoob632005@cluster0.ap1ebg5.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0")
console.log("Connected")}catch(error){console.log("connection failed",error)}

}
app.get("/", (req, res) => {
  res.send("Hello World!");
});


const newRecipe = {
 name: "Um Ali",
 ingredients: ["Puff Pastry","Milk"],
 instructions: "bake at 180C",
 prepTime: 120,
 difficulty: "Medium"
}

async function createRecipe(recipeData) {
  try {
    const recipe = await Recipe.create(recipeData);
    console.log(recipe);
  } catch (error) {
    console.log("Failed to create recipe.");
  }
}


async function getAllRecipes() {
  try {
    const recipes = await Recipe.find();
    recipes.forEach((r) => {
      console.log(
        `${r.name} is an ${r.difficulty} recipe and takes ${r.prepTime} minutes to prepare`
      );
    });
  } catch (error) {
    console.log("Failed to retrieve recipes.");
  }
}


async function updateRecipe(recipeId, newRecipeData) {
  try {
    const updated = await Recipe.findByIdAndUpdate(recipeId, newRecipeData, {
      new: true,
    });
    console.log(updated);
  } catch (error) {
    console.log("Failed to update recipe.");
  }
}


async function deleteRecipe(recipeId) {
  try {
    await Recipe.findByIdAndDelete(recipeId);
    console.log("Recipe successfully deleted.");
  } catch (error) {
    console.log("Failed to delete recipe.");
  }
}


async function getRecipeById(id) {
  try {
    const recipe = await Recipe.findById(id);
    if (recipe) {
      console.log(recipe);
    } else {
      console.log("No recipe with this ID exists.");
    }
  } catch (error) {
    console.log("No recipe with this ID exists.");
  }
}
app.listen(3000, () => {
  console.log(" Server running at http://localhost:3000");
});

connecttoDB()
