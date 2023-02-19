const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const FacultyRegister= require('../schemas/facultyregister')
const FacultyRouter = express.Router()
FacultyRouter.use(bodyParser.json())
FacultyRouter.use(cors())

FacultyRouter.post("/facultyregisterinput", (req, res)=>{
    const date= req.body.date 
    const ItemIssued= req.body.ItemIssued 
    const ItemRecieved= req.body.ItemRecieved 
    const Quantity= req.body.Quantity 
    const Lab= req.body.Lab 
    const Remarks= req.body.Remarks 
    const Signature= req.body.Signature 
    const entry= new FacultyRegister({date:date, ItemIssued:ItemIssued, ItemRecieved:ItemRecieved, Quantity:Quantity,Lab:Lab,Remarks:Remarks, Signature:Signature})
    entry.save().then(request=>{
        res.json({'Status':'Uploaded'})
    }).catch(err=>{
        console.log(err)
        res.json({'Status':'Failed Uploading'})
    })
})

FacultyRouter.get('/facultyregister', (req, res)=>{
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

