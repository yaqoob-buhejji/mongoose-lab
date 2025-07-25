const mongoose = require("mongoose")
const Food = require("./models/recipe")
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

async function deleteFood(id) {
    const deletedFood = await Food.findByIdAndDelete(id)
    console.log(deletedFood)
}

async function getallFood() {
    const allFoods = await Food.find()
    console.log(allFoods)
}
async function getFood(id) {
    const deletedFood = await Food.findById(id)
    console.log(deletedFood)
}

app.listen(3000, () => {
  console.log(" Server running at http://localhost:3000");
});

connecttoDB()
