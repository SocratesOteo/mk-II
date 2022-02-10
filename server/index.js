


const express = require('express')
require('dotenv').config()
const path = require('path')
const cors = require('cors')
const port = process.env.PORT || process.env.SERVER_PORT

const app = express()
app.use(express.json())
app.use(cors())

const {seed, register, login, addPuzzle, getPuzzle, clickPuzzle} = require("./controller.js");
const req = require('express/lib/request')


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

//leaderboard page

app.get('/leaderboard',(req,res)=>{
    res.sendFile(path.join(__dirname,'../leaderboard.html'))
})

app.get('/styles-leaderboard',(req,res)=>{
    res.sendFile(path.join(__dirname,'../leaderboard.css'))
})

app.get('/leaderboardjs',(req,res)=>{
    res.sendFile(path.join(__dirname,'../leaderboard.js'))
})

// puzzles page
app.get('/puzzles', (req,res)=> {
    res.sendFile(path.join(__dirname,'../puzzles.html'))
})
app.get('/styles-puzzles', (req,res)=>{
    res.sendFile(path.join(__dirname,'../puzzles.css'))
})

app.get('/puzzlesjs',(req,res)=>{
    res.sendFile(path.join(__dirname,'../puzzles.js'))
})

app.get('/masterjs',(req,res)=>{
    res.sendFile(path.join(__dirname,'../master.js'))
})

app.get('/styles-master',(req,res)=>{
    res.sendFile(path.join(__dirname,'../master.css'))
})

app.get('/master',(req,res)=>{
    res.sendFile(path.join(__dirname,'../master.html'))
})

app.get('/create-puzzle',(req,res)=>{
    res.sendFile(path.join(__dirname,'../make-puzzle.html'))
})
app.get('/styles-create-puzzle',(req,res)=>{
    res.sendFile(path.join(__dirname,'../make-puzzle.css'))
})

app.get('/create-puzzlejs',(req,res)=>{
    res.sendFile(path.join(__dirname,'../create-puzzle.js'))
})

app.get('/styles-puzzle-on',(req,res)=>{
    res.sendFile(path.join(__dirname,'../puzzle-on.css'))
})

app.get('/puzzle-onjs',(req,res)=>{
    res.sendFile(path.join(__dirname,'../puzzle-on.js'))
})

app.get('/puzzle-on',(req,res)=>{
    res.sendFile(path.join(__dirname,'../puzzle-on.html'))
})


app.get('/seed', seed);
app.post('/user',register);
app.post('/login',login)
app.post('/puzzle',addPuzzle)
app.get('/get-puzzles',getPuzzle)
//app.get('/puzzle-click',clickPuzzle)
app.get('/puzzle-on-req',clickPuzzle)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})