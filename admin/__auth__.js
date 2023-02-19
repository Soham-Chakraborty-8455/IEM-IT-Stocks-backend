const express= require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const AuthTable= require('./AuthTable')
const auth = express.Router()
auth.use(bodyParser.json())
auth.use(cors())

auth.post('/login', (req, res)=>{
    const email = req.body.email
    const password = req.body.password
    AuthTable.findOne({email:email}, function(err, docs){
        if(err){
            res.send(err)
        }
        else{
            const pass= docs.password
            if(pass==password){
                res.json({"Auth": true})
                console.log(true)
            }
            else{
                res.json({"Auth": false})
                console.log(false)
            }
        }
    })
})

module.exports= auth