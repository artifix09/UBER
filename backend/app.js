const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require('cors');



app.use(cors());

app.get('/',function(req,res ){
    res.send('Welcome to my API');
});


module.exports = app;