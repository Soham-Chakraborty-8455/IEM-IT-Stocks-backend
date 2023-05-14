const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors')
const bodyParser = require('body-parser')
const FacultyRegister= require('../schemas/facultyregister')
const FacultyRouter = express.Router()
FacultyRouter.use(bodyParser.json())
FacultyRouter.use(cors())

FacultyRouter.post(process.env.API_FACULTY, (req, res)=>{
    const date= req.body.date 
    const ItemIssued= req.body.ItemIssued 
    const ItemRecieved= req.body.ItemRecieved 
    const Quantity= req.body.Quantity 
    const Lab= req.body.Lab 
    const Remarks= req.body.Remarks 
    const Signature= req.body.Signature 
    const bills= req.body.bills
    const entry= new FacultyRegister({date:date, ItemIssued:ItemIssued, ItemRecieved:ItemRecieved, Quantity:Quantity,Lab:Lab,Remarks:Remarks, Signature:Signature, bills:bills})
    entry.save().then(request=>{
        res.json({'Status':'Uploaded'})
    }).catch(err=>{
        console.log(err)
        res.json({'Status':'Failed Uploading'})
    })
})

FacultyRouter.get(process.env.FACULTY_UPDATE, (req, res)=>{
    FacultyRegister.find({}, (err, docs)=>{
        if(err){
            console.log(err)
            res.json({"Status":"Backend Error"})
        }
        else{
            res.json({"Result": docs})
        }
    })
})

module.exports= FacultyRouter

