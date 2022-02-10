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
        drop table if exists puzzles;

        create table users(
            user_id SERIAL PRIMARY KEY,
            username VARCHAR,
            password VARCHAR,
            email VARCHAR
        );
        
        create table puzzles(
            puzzle_id SERIAL PRIMARY KEY,
            question VARCHAR,
            answer VARCHAR,
            six_hours_value INTEGER,
            twelve_hours_value INTEGER,
            twenty_four_hours_value INTEGER
        );
        
        `).then(()=>{
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
    },
    addPuzzle: (req,res)=>{
        const {questionBox,answerBox,sixHours,twelveHours,twentyFourHours} = req.body

        sequelize.query(`
        INSERT INTO puzzles(question,answer,six_hours_value,twelve_hours_value,twenty_four_hours_value)
        VALUES('${questionBox}','${answerBox}','${sixHours}','${twelveHours}','${twentyFourHours}');
        
        `).then((dbRes)=>{
            res.status(200).send(dbRes)
        })
    },
    getPuzzle: (req,res)=>{

        sequelize.query(`
        SELECT * FROM puzzles
        
        `).then((dbRes)=>{
            res.status(200).send(dbRes)
        })
    },
    clickPuzzle: (req,res)=>{
        sequelize.query(`
        SELECT * FROM puzzles
        `).then((dbRes)=>{
            res.status(200).send(dbRes)
        })

    },
    getLeaderBoard: (req,res)=>{
        sequelize.query(`
        SELECT * FROM users
        `).then((dbRes)=>{
            res.status(200).send(dbRes)

        })

    }
}

