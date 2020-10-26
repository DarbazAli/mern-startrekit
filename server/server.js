'use strict'
console.clear() // clear console after each run

import express from 'express'
import { config } from 'dotenv'

// custom modules
import connectDB from './config/db.config'
import configApp from './config/app.config'

import template from './../template'
//comment out before building for production
import devBundle from './devBundle'

const app = express()
config() // dotenv
//comment out before building for production
devBundle.compile(app)

// ENV variables
const { PORT, MONGODB_URI } = process.env

// app configration
configApp(app)

app.get('/', (req, res) => {
  res.status(200).send(template())
})

app.listen(PORT || 3000, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info(`Server started on port ${PORT}`)
})

// Database Connection URL
const url = MONGODB_URI || 'mongodb://localhost:27017/test'
connectDB(url)
