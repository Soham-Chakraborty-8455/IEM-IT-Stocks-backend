const express= require('express')
const mongoose = require('mongoose')

const schema= mongoose.Schema

const labdetailsSchema= new schema({
    SystemNumber:{
        type: Number,
        require: true,
    },
    datePurchased:{
        type: String,
        require: true,
    },
    Brand:{
        type: String,
        require: true,
    },
    suppliedby:{
        type: String,
        require: true,
    },
    specifications:{
        type: String,
        require: true,
    },
    IPaddress:{
        type: String,
        require: true,
    },
    Warrenty:{
        type: String,
        require: true,
    },
    os:{
        type: String,
        require: true,
    },
    IsLive:{
        type: Boolean,
        require: true,
        default: true
    },
})

module.exports = mongoose.model('LabDetails', labdetailsSchema)