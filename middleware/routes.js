const express = require('express');
const router = new express.Router();
const userData = require("../models/user")




// Create = POST 
router.post("/user",async(req,res)=>{
    try{
        const addingUser = new userData(req.body)
        console.log("hello",req.body);
        const insertUser = await addingUser.save()
        res.status(201).send(insertUser);
    }catch(err){
        res.status(400).send(err)
    }
})



// READ = GET 
router.get("/user",async(req,res)=>{
    try{
        const getUser = await userData.find({});
        res.send(getUser);
    }catch(err){
        res.status(400).send(err)
    }
})




// want to read Particular READ = GET 
router.get("/user/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const getUserbyID = await userData.findById(_id);
        res.send(getUserbyID);
    }catch(err){
        res.status(400).send(err)
    }
})




// want to UPDATE = PATCH 
router.patch("/user/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const updateUser = await userData.findByIdAndUpdate(_id,req.body, {new:true});
        res.send(updateUser);
    }catch(err){
        res.status(500).send(err)
    }
})






// want to REMOVE = DELETE 
router.delete("/user/:id",async(req,res)=>{
    try{
        const deleteData = await userData.findByIdAndDelete(req.params.id);
        res.send(deleteData);
    }catch(err){
        res.status(500).send(err)
    }
})


 module.exports = router;