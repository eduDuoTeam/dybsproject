import express from 'express'
import mysql from "mysql2"
import cors from "cors"
import hash from "bcryptjs"

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'rapidodb',
    password:'SUPER5tramp'
})

app.use(express.json())// to allow client to send any json file
app.use(cors())

app.post('/start', async (req, res) => {
    const checkUserQuery = "SELECT * FROM usertable WHERE phone = ? OR email = ?";
    const checkUserValues = [req.body.phoneNumber, req.body.email];
    const insertUserQuery = "INSERT INTO usertable(`name`, `phone`, `email`, `password`) VALUES (?, ?, ?, ?)";
    const insertUserValues = [req.body.name, req.body.phoneNumber, req.body.email, req.body.pwd];

    try {
      const existingUser =  db.query(checkUserQuery, checkUserValues);
  
      if (existingUser.length > 0) {
        return res.status(409).json("User with the same phoneNumber or email already exists");
      }else{
        db.query(insertUserQuery, insertUserValues, (err, data) => {
            if (err) return res.json(err);
            return res.json("User has been added");
          });
      }
    } catch (error) {
      console.error('Error:', error);
      return res.json("An error occurred");
    }
  });
  
  


app.listen(5051, ()=>{
    console.log("Connected to backend!!!")
})