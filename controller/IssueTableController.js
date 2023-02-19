const express = require('express')
const bodyParser= require('body-parser')
const cors= require('cors')
const IssueTable= require('../schemas/issuetable')
const { request } = require('express')
const IssueRouter= express.Router()
IssueRouter.use(bodyParser.json())
IssueRouter.use(cors())

IssueRouter.post('/issuetableinput', (req, res)=>{
    const ConcernedPerson= req.body.ConcernedPerson
    const Problem= req.body.Problem
    const Remarks= req.body.Remarks
    const Signature= req.body.Signature
    const entry= new IssueTable({ConcernedPerson:ConcernedPerson, Problem:Problem, Remarks:Remarks, Signature:Signature})
    entry.save().then(request=>{
        res.json({"Status":"Uploaded"})
    }).catch(err=>{
        console.log(err)
        res.json({"Status": "Failed"})
    })
})

IssueRouter.get('/issuetable', (req, res)=>{
    IssueTable.find({}, (err, docs)=>{
        if(err){
            console.log(err)
            res.json({"Status":"Backend Error"})
        }
        else{
            res.json({"Result": docs})
        }
    })
})

module.exports= IssueRouter