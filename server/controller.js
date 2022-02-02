require('dotenv').config()
const {CONNECTION_STRING} =process.env

//const port  = process.env.SERVER_PORT
const Sequelize = require('sequelize')


const sequelize = new Sequelize(CONNECTION_STRING
, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req,res) => {
        sequelize.query(`
        drop table if exists users;
    
        create table users(
            user_id SERIAL PRIMARY KEY,
            username VARCHAR,
            password VARCHAR,
            email VARCHAR
        );`).then(()=>{
            console.log('db seeded')
            res.sendStatus(200)
        })
    },
    register: (req,res) => {
        const{username,email,password}= req.body
        sequelize.query(`
            INSERT INTO users (username, password, email)
            VALUES('${username}','${password}','${email}');
        `).then(dbRes => res.status(200).send(dbRes[0]))
    },
    login: (req,res)=>{
        const {username,password} = req.body

        sequelize.query(`
        SELECT username,password
        FROM users
        WHERE username = '${username}'
       
        ;`).then((dbRes)=>{
            console.log(dbRes[0])
            if (dbRes[0]){
             bodyTrue = true
            res.status(200).send(bodyTrue)
            }else {
                bodyTrue = false
                res.status(200).send(bodyTrue)
            }
        }
        )
    }
}

