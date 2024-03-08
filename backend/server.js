const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');

const app = express();
dotenv.config();

app.get('/' , (req,res)=>{
    res.send("Api is running")
})

app.get('/api/data' ,(req,res)=>{
    res.send(chats);
})

app.get('/api/data/:id' , (req,res)=>{
    const singleChat = chats.find(c=>c._id === req.params.id);
    res.send(singleChat);
    console.log(req.params.id);
        // res.send(req.params.id);
})

const PORT = process.env.PORT
app.listen(PORT , console.log(`server started on port ${PORT}`));