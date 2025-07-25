const mongoose = require("mongoose")

const fruitSchema = new mongoose.Schema({
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

const Fruit = mongoose.model("Fruit",fruitSchema)

module.exports = Fruit