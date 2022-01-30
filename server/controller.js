
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


const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

app.get('/seed', (req,res)=>{
    sequelize.query(`
    drop table if exists users;

    create table users(
        user_id SERIAL PRIMARY KEY,
        username VARCHAR,
        password TEXT,
        email VARCHAR
    );
    `).then(()=>{
        console.log('db seeded')
        res.status(200)
    })
})

app.post('/user',(req,res)=>{
    const{username,email,password}= req.body
    sequelize.query(`
        INSERT INTO users(username,password,email)
        VALUES('${username}', '${email},'${password}');
    
    `).then(dbRes => res.status(200).send(dbRes[0]))

})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })