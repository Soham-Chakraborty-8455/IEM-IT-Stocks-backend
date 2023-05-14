const express= require('express')
const cors= require('cors')
const env= reuire('dotenv')
const Materials= require('../schemas/material')
const bodyParser= require('body-parser')
const { request } = require('express')
const MaterialsRoute= express.Router()
MaterialsRoute.use(bodyParser.json())
MaterialsRoute.use(cors())

MaterialsRoute.post(process.env.MATERIALS_INPUT, (req, res)=>{
    const Material= req.body.Material
    const Brand= req.body.Brand
    const Quantity= req.body.Quantity
    const bills= req.body.bills
    const entry= Materials({Material:Material, Brand:Brand, Quantity:Quantity, bills:bills})
    entry.save().then(request=>{
        res.json({"Status": "Uploaded"})
    }).catch(err=>{
        console.log(err)
        res.json({"Status": "Failed"})
    })
})

MaterialsRoute.get(process.env.MATERIALS, (req, res)=>{
    Materials.find({}, (err, docs)=>{
        if(err){
            console.log(err)
            res.json({"Status":"Backend Error"})
        }
        else{
            res.json({"Result": docs})
        }
    })
})

module.exports= MaterialsRoute
