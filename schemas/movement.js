const express = require('express')
const mongoose = require('mongoose')

const schema= mongoose.Schema

const movementSchema = new schema({
    Particulars: {
        type: String,
        require: true,
    },
    To: {
        type: String,
        require: true,
    },
    From: {
        type: String,
        require: true,
    },
    Remarks: {
        type: String,
        require: true,
    },
})

module.exports= mongoose.model('Movements', movementSchema)