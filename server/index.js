const express = require('express')
require('dotenv').config()
const path = require('path')
const port = process.env.PORT || process.env.SERVER_PORT

const app = express()
app.use(express.json())

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../login.html'));
});
app.get('/styles',(req, res) => {
    res.sendFile(path.join(__dirname,'../login.css'))
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})