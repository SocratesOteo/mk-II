
//const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')


const sequelize = new Sequelize("postgres://qmuhgjkfssojcp:18b84c1a99db5defcf8d2c97dfaa7fb7a02c68146f12cfbc9150e5145e9da983@ec2-44-199-49-128.compute-1.amazonaws.com:5432/d6r5vfsds99bf1", {
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
            VALUES('${username}',' ${password}','${email}');
        `).then(dbRes => res.status(200).send(dbRes[0]))
    },
    login: (req,res)=>{
        const {username,password} = req.body

        sequelize.query(`
        SELECT username, password
        FROM users
        WHERE username = ${username}
        AND password = ${password}
        ;`).then(()=>{
            let body = {
            usernameTrue = true,
            passwordTrue = true
            }
            res.status(200).send(body)
        }
        ).catch(()=>{
            let body = false
            res.status(200).send(body)

        })
    }
}