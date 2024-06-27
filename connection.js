 //1.import mongoose


const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://rosemaryantony285:rose@cluster0.l9mjson.mongodb.net/Openbatchdb1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((error)=>{
    console.log(error)
})