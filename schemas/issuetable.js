const express = require('express')
const mongoose= require('mongoose')

const schema= mongoose.Schema

const issuetableSchema= new schema({
    ConcernedPerson :{
        type: String,
        require: true,
    },
    Problem :{
        type: String,
        require: true,
    },                 
    Remarks :{
        type: String,
        require: true,
    },                                                         
    Signature :{
        type: String,
        require: true,
    },
})

module.exports= mongoose.model('IssueTable', issuetableSchema)