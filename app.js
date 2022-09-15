const express = require('express');
const app = express();
const port = 3000

require('./db/connect')

const userData = require('./models/user')
const router = require('./middleware/routes')

// app.get('/',(req,res)=>{
//     res.send('Home Page')
// });

app.use(express.json());
//  It parses incoming JSON requests and puts the parsed data in req.body.

// router
app.use(router);


app.listen(port,()=>{
    console.log(`Connection is live at port number ${port}`);
})