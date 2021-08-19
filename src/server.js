'use strict'
const express = require('express')
const cors = require('cors')
const registerRoutes = require('./routes')
const app = express()

// Access control allow origin set to *(all), also the methods is set to *(all)
app.use(cors())

// server config
const port = process.env.PORT || 3000

//S
app.use(express.static('public'))

// register routes
registerRoutes(app)

// create server start method
const start = () => {
  return new Promise((resolve, reject) => {
    // start the server
    app.listen(port, () => {
      console.log(`Connected to Port ${port}`)
      resolve()
    })
  }).catch(error => {
    console.log(`failed to start server => ${error.message}`)
  })
}

module.exports = start
