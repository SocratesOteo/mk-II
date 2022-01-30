//const {seed} = require('./seed.js')


const express = require('express')
require('dotenv').config()
const path = require('path')
const cors = require('cors')
const port = process.env.PORT || process.env.SERVER_PORT

const app = express()
app.use(express.json())
app.use(cors())

const {CONNECTION_STRING} = process.env
require('dotenv').config()

const Sequelize = require('sequelize')
const res = require('express/lib/response')
const { send } = require('process')


app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../login.html'));
});
app.get('/styles',(req, res) => {
    res.sendFile(path.join(__dirname,'../login.css'))
})

app.get('/js',(req,res)=>{
    res.sendFile(path.join(__dirname,'./seed.js'))
})
app.get('/js',(req,res)=>{
    res.sendFile(path.join(__dirname,'../login.js'))
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})