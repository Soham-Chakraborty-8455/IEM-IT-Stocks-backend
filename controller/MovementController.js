const express= require('express')
const cors= require('cors')
const Movements= require('../schemas/movement')
const bodyParser= require('body-parser')
const { request } = require('express')
const MovementsRoute= express.Router()
MovementsRoute.use(bodyParser.json())
MovementsRoute.use(cors())

MovementsRoute.post('/materialsinput', (req, res)=>{
    const Particulars= req.body.Particulars
    const To= req.body.To
    const From= req.body.From
    const Remarks= req.body.Remarks
    const entry= Movements({Particulars:Particulars, To:To, From:From, Remarks:Remarks})
    entry.save().then(request=>{
        res.json({"Status": "Uploaded"})
    }).catch(err=>{
        console.log(err)
        res.json({"Status": "Failed"})
    })
})

MovementsRoute.get('/movements', (req, res)=>{
    Movements.find({}, (err, docs)=>{
        if(err){
            console.log(err)
            res.json({"Status":"Backend Error"})
        }
        else{
            res.json({"Result": docs})
        }
    })
})

module.exports= MovementsRoute