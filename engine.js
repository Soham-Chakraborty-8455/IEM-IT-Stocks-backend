const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const app = express()
const port = 3001
app.use(cors())

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://IEM:IT@examinationportal.7tsx0kt.mongodb.net/departmentstocks').then(
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