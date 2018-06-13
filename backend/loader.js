const port = 3003


const bodyParser = require('body-parser')
const express = requiere('express')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))