const { default: mongoose } = require("mongoose")

const mongoose = require(mongoose)

const heroSchema = new mongoose.Schema({
    superHero:{
        type:String,
        required: [true, "Please name the hero"],
        unique: true,
        trim: true
    },
    realName:{
        type: String,
        required: true,
        maxlength: [200, 'Please keep real name short :)']
    }
})

module.exports = mongoose.model.Hero || mongoose.model('Hero', heroSchema)