// Using MongoDB ATLAS
const mongoose = require('mongoose');
const DB = `mongodb+srv://kshitij123:kshitij123@cluster0.kwwil.mongodb.net/kshitij1234?retryWrites=true&w=majority`

mongoose.connect(DB).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log("Connection Failed");
})

// Using MongoDB Compass
// const mongoose = require('mongoose');
// const DB = `mongodb://localhost:27017/olympics`

// mongoose.connect(DB).then(()=>{
//     console.log("Connection Successful");
// }).catch((err)=>{
//     console.log("Connection Failed");
// })