const express= require('express')
const mongoose = require('mongoose');

const database= express()

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://IEM:IT@examinationportal.7tsx0kt.mongodb.net/departmentstocks');
}



