const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;

const app = express();
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
// Enable body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/openai',require('./routes/openaiRoutes'));
//Set static folder
app.use(express.static(path.join(__dirname,'client')));

app.listen(port, () => console.log(`AI server started on http://localhost:${port}`));