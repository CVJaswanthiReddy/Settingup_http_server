const express = require('express');

//create an express app object by calling the express function

const app= express();
const PORT=3000;

app.get('/',function(req,res){
    res.send("hello world");
});

app.post('/',function(req,res){
    res.send("welcome to home");
});

app.patch('/',function(req,res){
    res.json({
        message:"this is a patch request";
        success:true;
    });
});


app.listen(PORT,function process()
{
    console.log("server started");
})

