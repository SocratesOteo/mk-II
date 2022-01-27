const Sequelize = require('sequelize')

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
    seed: (req,res)=>{
        sequelize.query(`
        drop table if exists users

        CREATE TABLE users(
            user_id SERIAL PRIMARY KEY,
            username VARCHAR,
            password TEXT
        )


        `).then(()=>{
            console.log('db seeded')
            res.sendStatus(200)
        }).catch(err => console.log('error sending database'))

    }
}
