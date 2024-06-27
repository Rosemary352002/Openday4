//1. import express
var express=require('express');
require('./connection');
const user=require('./model/user');


//2. Initialization
var app=express();

//middleware
app.use(express.json()); //enabling json format by express
// to add data to db

app.post('/login',async(req,res)=>{
    try{
         console.log(req.body);
         await user(req.body).save();
         res.send({message:"data added sucessfully"})
    }catch(error){
        console.log(error)
    }
})
//to get the data from db
app.get('/view',async(req,res)=>{
    try {
        const data=await user.find();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})
//to delete data fromm db
app.delete('/remove/:id',async(req,res)=>{
    try {
        console.log(req.params.id);
        await user.findByIdAndDelete(req.params.id);
        res.send({message:"deleted"})
    } catch (error) {
        console.log(error);
    }
})
//Tto update data in db
app.put('/edit/:id',async(req,res)=>{
    try{
    var data=await user.findByIdAndUpdate(req.params.id,req.body);
    res.send({message:"updated succesfully",data})
    }
    catch(error){
        console.log(error);
    }
})
//3. API
// variable.method("path,(req,res)=>
    app.get('/',(req,res)=>{
        res.send("Hello")
    })
    app.get('/login',(req,res)=>{
        res.send("you have loged in sucessfully")
    })





//4. Port allocation

app.listen(3005,()=>{
    console.log("port is up and running")
})
