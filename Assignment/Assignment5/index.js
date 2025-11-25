const express = require('express');
const app = express();
const mongoose=require('mongoose')

const userRouter=require('./Router/StudentRouter');
const port =8000;
mongoose
.connect("mongodb+srv://Mohankumar:9344963975@cluster0.nyzin1u.mongodb.net/")
.then(()=>{
    console.log("connected to DB 🍃");
})
.catch((err)=>{
    console.log(err);
});
app.use(express.json());

app.use(userRouter);
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);

});