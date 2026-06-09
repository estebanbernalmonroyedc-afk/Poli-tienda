const express = require('express')
const router = require('./routes/router')
const app = express()
const cors = require('cors')

app.use(cors())
app.use ('/api',router)

app.listen(4000, ()=>{
    console.log("levante el server"+ 4000)
})