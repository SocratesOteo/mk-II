


const express = require('express')
require('dotenv').config()
const path = require('path')
const cors = require('cors')
const port = process.env.PORT || process.env.SERVER_PORT

const app = express()
app.use(express.json())
app.use(cors())

const {seed, login} = require("./controller.js");


app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../login.html'));
});

// app.use("/home", express.static(path.join(__dirname, "../home.html")));

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../home.html"));
});

app.get('/styles',(req, res) => {
    res.sendFile(path.join(__dirname,'../login.css'))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../login.js'))
})
// home page

app.get('/styles1',(req,res)=>{
    res.sendFile(path.join(__dirname,'../home.css'))
})

app.get('/homejs',(req,res)=>{
    res.sendFile(path.join(__dirname,'../home.js'))
})

app.get('/leaderboard',(req,res)=>{
    res.sendFile(path.join(__dirname,'../leaderboard.html'))
})

app.get('/seed', seed);
app.post('/user', login);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})