const express = require('express')
const cors= require('cors')
const bodyparser= require('body-parser')
const AuthTable= require('./AuthTable')
const AuthRouter= express.Router()
AuthRouter.use(bodyparser.json())
AuthRouter.use(cors())

AuthRouter.post('/signup', (req, res)=>{
    const name= req.body.name
    const email= req.body.email
    const password= req.body.password
    const entry= AuthTable({name:name, email:email, password:password})
    entry.save().then(request=>{
        res.json({"Status":"Added user", "Auth": true})
    }).catch(err=>{
        console.log(err)
        res.json({"Status":"Failed"})
    })
})

module.exports= AuthRouter