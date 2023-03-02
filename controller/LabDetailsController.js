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
    LabDetails.updateMany({ SystemNumber: SystemNumber, _id: { $ne: entry._id } }, { $set: { IsLive: false } }).exec().then(() => {
            return entry.save()
        })
        .then(() => {
            res.json({ "Status": "Uploaded/Updated" })
        })
        .catch((err) => {
            console.log(err)
            res.json({ "status": "failed" })
        })
})

labRoutes.get('/labdetails', (req, res)=>{
    LabDetails.find({}, (err, docs)=>{
        if(err){
            console.log(err)
            res.json({"Status":"Backend Error"})
        }
        else{
            res.json({"Result": docs})
        }
    })
})

module.exports= labRoutes