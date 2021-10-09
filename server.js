const express = require('express')
var app = express()

const rateLimit = require("express-rate-limit")
const limiter = rateLimit({windowMs: 1000, max: 1})

app.use(limiter)
app.use(express.json({limit: '1mb'}))

require('./controllers')(app)

app.listen(3000)