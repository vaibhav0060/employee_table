const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://chaudharivaibhav60:R8gnJkV0aWC0j4KY@newcluter.vc9cudf.mongodb.net/")

const user = require("./model/userModel")

// insert default user 
// async function insertfunction(){
//     await user.create({
//         name:"vaibhav",
//         email :"iamvaibhavchaudhari@gmail.com",
//         age : 23
//     })
// }
// insertfunction()
// get All users
app.get("/users" , (req,res)=>{
    user.find({})
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})

// get User 
app.get("/getUser/:id" , (req,res)=>{
    const id = req.params.id
    user.findById({_id : id})
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})

// create user 
app.post("/create" , (req , res)=>{
    user.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

// update user 
 app.put("/updateUser/:id" , (req,res)=>{
    const id = req.params.id ;
    user.findByIdAndUpdate({_id : id } , {name : req.body.name ,
         email : req.body.email ,
          age : req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
 })

 // delete user 
 app.delete("/deleteUser/:id" , (req,res)=>{
    const id = req.params.id
    user.findByIdAndDelete({_id : id})
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})


// app.get("/" , (req, res)=>{
//     res.send("hellow world ")
// })
const port = 5000 ; 
app.listen(port  , ()=>{console.log(`server is running on -  http://localhost:${port} `)})