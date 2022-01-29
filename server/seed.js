
const {CONNECTION_STRING} = process.env
require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req,res) =>{
        sequelize.query(`
        drop table if exists users;

        create table users (
            user_id SERIAL PRIMARY KEY
            username VARCHAR
            user_pass TEXT
        );
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },
    createUser: (req,res)=>{

    }
}

