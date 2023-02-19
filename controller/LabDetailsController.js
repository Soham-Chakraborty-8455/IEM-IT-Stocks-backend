const express= require('express')
const cors= require('cors')
const bodyParser= require('body-parser')
const LabDetails= require('../schemas/labdetails')
const { request } = require('express')
const labRoutes= express.Router()
labRoutes.use(bodyParser.json())
labRoutes.use(cors())

labRoutes.post('/labdetailsinput', (req, res)=>{
    const SystemNumber= req.body.SystemNumber
    const datePurchased= req.body.datePurchased
    const Brand= req.body.Brand
    const suppliedby= req.body.suppliedby
    const specifications= req.body.specifications
    const IPaddress= req.body.IPaddress
    const Warrenty= req.body.Warrenty
    const os= req.body.os
    const IsLive= req.body.IsLive
    const entry= new LabDetails({SystemNumber:SystemNumber, datePurchased:datePurchased, Brand:Brand, suppliedby:suppliedby, specifications:specifications, IPaddress:IPaddress, Warrenty:Warrenty, os:os, IsLive:IsLive})
    LabDetails.find({SystemNumber: SystemNumber, IsLive: true}).update({$set:{IsLive: false}})
    entry.save().then(request=>{
        res.json({"Status": "Uploaded/Updated"})
    }).catch(err=>{
        console.log(err)
        res.json({"status":"failed"})
    })
})

module.exports= labRoutes