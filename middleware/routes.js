const express = require('express');
const router = new express.Router();
const userData = require("../models/user")
const transaction = require("../models/transaction")




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
        const getUser = await userData.find({
            status:{$nin:'inactive'}
        });
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
        const deleteData = await userData.findByIdAndUpdate({_id:req.params.id},{
            status:"inactive"
        });
        res.send(deleteData);
    }catch(err){
        res.status(500).send(err)
    }
})



// ********** Transaction ************

// Post Transcation Data

router.post("/postTransactionData",async(req,res)=>{
    try{
        const addTransaction = new transaction(req.body) 
        console.log("bye",req.body);
        const inserTransaction = await addTransaction.save()
        res.status(201).send(inserTransaction);
    }catch(err){
        res.status(400).send(err)
    }
})

// Get Transcation Data

router.get("/getTranscationData",async(req,res)=>{
    try{
        const getTranscation = await transaction.find({});
        res.send(getTranscation);
    }catch(err){
        res.status(400).send(err)
    }
})



// READ = GET 
// router.get("/user",async(req,res)=>{
//     try{
//         const getUser = await userData.find({
//             status:{$nin:'inactive'}
//         });
//         res.send(getUser);
//     }catch(err){
//         res.status(400).send(err)
//     }
// })




 module.exports = router;