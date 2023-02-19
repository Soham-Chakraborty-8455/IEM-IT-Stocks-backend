const express = require('express')
const mongoose = require('mongoose')

const schema = mongoose.Schema

const materialSchema= new schema({
    Material : {
        type: String,
        require: true
    },
    Brand : {
        type: String,
        require: true
    },
    Quantity : {
        type: Number,
        require: true
    },
})

module.exports= mongoose.model('Materials', materialSchema)