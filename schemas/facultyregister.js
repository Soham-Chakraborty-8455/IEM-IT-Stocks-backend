const express = require('express')
const mongoose = require('mongoose')

const schema= mongoose.Schema

const facultyregisterschema = new schema({
    date: {
        type: String,
        require: true,
    },
    ItemIssued: {
        type: String,
        require: true,
    },
    ItemRecieved: {
        type: String,
        require: true,
    },
    Quantity: {
        type: String,
        require: true,
    },
    Lab: {
        type: String,
        require: true,
    },
    Remarks: {
        type: String,
        require: true,
    },
    Signature: {
        type: String,
        require: true,
    },
    bills:{
        type: String
    }
})

module.exports= mongoose.model('FacultyRegister', facultyregisterschema)