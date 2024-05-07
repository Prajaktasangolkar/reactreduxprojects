require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose =require('mongoose')
const User =require('./Model/userModel')
const cors=require("cors")
const bcrypt=require('bcrypt')
const connectDB=require("./Db/dbConfig")

const app=express()
const PORT=5000

app.use(express.json())
app.use(cors())

connectDB();

app.post('/signup',async(req,res)=>{
    try {
        const {username,password}=req.body;
        console.log(req.body);
        const isUserExists=await User.findOne({username:username})

        if (isUserExists){
           return res.status(400).json({error:"user alraedy exists"}) 
        }
        else{
            const hashedPassword=await bcrypt.hash(password,10)

            const newUser=new User({
                username,
                password:hashedPassword,
            });
            const savedUser=await newUser.save();
            console.log("User created successfully",savedUser.username);
            res.status(201).json(savedUser)
        }
    } catch (error) {
        res.status(500).json(error)
    }
})
app.post("/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log(req.body);
      const user = await User.findOne({ username: username });
      console.log(user.username, user.password);
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (passwordMatch) {
          res.status(200).json({ message: "User verified" });
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
  









