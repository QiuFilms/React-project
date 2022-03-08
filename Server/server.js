const express =  require("express");
const app = express()
const cors = require("cors")
const pool = require("./db")

app.use(cors());
app.use(express.json())

app.listen(5000, ()=>{
    console.log("server on 5000")
})

app.post("/task", async(req,res) =>{
    try {
        const {taskName, taskDate} = req.body;
        const newTask = await pool.query("INSERT INTO tasks (name,date) VALUES ($1,$2) RETURNING *",[taskName,taskDate])
        res.json(newTask)
    } catch (error) {  
        console.log(error.message)
    }
})

app.get("/name-check/:name", async(req,res) =>{
    try {
        const name = req.params.name;
        const getName = await pool.query("SELECT username FROM users WHERE username=$1",[name]);
        res.json(getName.rows)
    } catch (error) {  
        console.log(error.message)
    }

})

app.get("/email-check/:email", async(req,res) =>{
    try {
        const email = req.params.email;
        const getEmail = await pool.query("SELECT email FROM users WHERE email=$1",[email]);
        res.json(getEmail.rows)

    } catch (error) {  
        console.log(error.message)
    }

})

app.post("/register", async(req,res) =>{
    try {
        const {uname, email, pass} = req.body;
        const getTask = await pool.query("INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING *",[uname, email, pass]);
        res.json(getTask.rows[0])
    } catch (error) {  
        console.log(error.message)
    }
})


app.get("/login/:pass/:email", async(req,res) =>{
    try {
        const uname= req.params.pass;
        const email = req.params.email;
        const getTask = await pool.query("SELECT * FROM users WHERE password=$1 AND email=$2 ",[uname,email]);
        res.json(getTask.rows)
    } catch (error) {  
        console.log(error.message)
    }
})

app.post("/user-status", async(req,res) =>{
    try {
        const {email, ckey} = req.body;
        const getTask = await pool.query("UPDATE ckeys SET ckey=$2 WHERE email=$1",[email,ckey]);
        res.json(getTask.rows)
    } catch (error) {  
        console.log(error.message)
    }
})

app.get("/user-status/:email", async(req,res) =>{
    try {
        const email = req.params.email;
        const getTask = await pool.query("SELECT ckey FROM ckeys WHERE email=$1",[email]);
        res.json(getTask.rows)
    } catch (error) {  
        console.log(error.message)
    }
})


app.get("/posts", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM posts");
      res.json(allTodos.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

