require('dotenv').config()
const CONNECTION_STRING =process.env.DATABASE_URL || process.env.CONNECTION_STRING

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
    /*
    
    */
   
   register: (req,res) => {
       const{username,email,password}= req.body
       console.log(req.body)
       sequelize.query(`
       SELECT username,email
       FROM users
       WHERE username = '${username}'
       AND email = '${email}'
       
       ;
       `).then((dbRes) => {
           console.log(dbRes)
           console.log(dbRes[0])
           console.log(dbRes.length)
           //console.log(dbRes[0])
           //console.log(username)

            if( dbRes[0].length <= 0) {
                sequelize.query(`
                INSERT INTO users (username, password, email)
                       VALUES('${username}','${password}','${email}');
                `).then((dbRes)=>{
                    res.status(200).send(dbRes[0])
                })
            } else if(dbRes[0].username == username.value || dbRes[0].email == email.value){
                console.log(dbRes)
                res.status(200).send(dbRes[0])
            }
            
            //res.status(200).send(dbRes[0])
        })
    },
    login: (req,res)=>{
        const {username,password} = req.body

        sequelize.query(`
        SELECT username,password
        FROM users
        WHERE username ='${username}'
        AND password ='${password}'
       
        ;`).then((dbRes)=>{
            console.log(dbRes[0])
            res.status(200).send(dbRes[0])
            
        }
        )
    }
}

