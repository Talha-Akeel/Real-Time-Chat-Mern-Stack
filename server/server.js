const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors());

app.get('/',(req, res)=>{
    res.send(`This is a real time chat application`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server has started at PORT:${PORT}`);
});