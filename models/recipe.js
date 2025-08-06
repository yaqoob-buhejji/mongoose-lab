const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    ingredients:{
        type:[String],
        default:[]
    },
    instructions:{
        type:String
    },
    prepTime:{
        type:Number
    },
    difficulty:{
        type:String,
        enum:["Easy","Medium","Hard"],
        default:"Medium"
    }

},{timestamps:true})

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;