const express= require('express')
const mongoose = require('mongoose')

const Authentication= mongoose.Schema

const auth= new Authentication({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
})

module.exports= mongoose.model("Authentication", auth)
