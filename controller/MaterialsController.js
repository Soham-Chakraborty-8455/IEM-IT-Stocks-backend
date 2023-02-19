const express= require('express')
const cors= require('cors')
const Materials= require('../schemas/material')
const bodyParser= require('body-parser')
const { request } = require('express')
const MaterialsRoute= express.Router()
MaterialsRoute.use(bodyParser.json())
MaterialsRoute.use(cors())

MaterialsRoute.post('/materialsinput', (req, res)=>{
    const Material= req.body.Material
    const Brand= req.body.Brand
    const Quantity= req.body.Quantity
    const entry= Materials({Material:Material, Brand:Brand, Quantity:Quantity})
    entry.save().then(request=>{
        res.json({"Status": "Uploaded"})
    }).catch(err=>{
        console.log(err)
        res.json({"Status": "Failed"})
    })
})

module.exports= MaterialsRoute