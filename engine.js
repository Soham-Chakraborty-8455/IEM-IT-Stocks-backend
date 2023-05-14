const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const app = express()
require('dotenv').config({path: './.env'});
const port = process.env.PORT
app.use(cors())

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URL).then(
  result => {
    app.listen(3005);
    console.log("Connected")
  }
).catch(err => {
  console.log(err)
})

const signup= require('./admin/register')
app.use(signup)

const login= require('./admin/__auth__')
app.use(login)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const labdetails = require('./controller/LabDetailsController')
app.use(labdetails)

const facultyregister = require('./controller/FacultyregisterController')
app.use(facultyregister)

const issuetable = require('./controller/IssueTableController')
app.use(issuetable)

const materials = require('./controller/MaterialsController')
app.use(materials)

const movements = require('./controller/MovementController')
app.use(movements)


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
