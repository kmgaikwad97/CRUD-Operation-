const express = require('express')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true //will delete white space
    },
    age:{
        type:Number,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
        trim:true 
    },
    phone:{
        type:Number,
        required:true,
        trim:true
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'active'

    }
})


const userData = new mongoose.model("userData", userSchema)
module.exports = userData;