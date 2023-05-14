const express= require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const database= express()

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGOOSE_CONNECT);
}



