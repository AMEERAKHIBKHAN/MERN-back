const dotenv= require('dotenv').config()
const express= require('express');
const cors=require('cors')
// const connectDB = require('./config/connectDB')
const mongoose = require('mongoose');

const app = express();
const PORT=process.env.PORT || 5000;
const routes= require('./Routes/routes')
// middleware
app.use(cors(
   {
    origin:["http://localhost:3000","https://mern-task-app.onrender.com"]
   }
))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/v1/tasks",routes)
// const logger=(req,res,next)=>{
//     console.log("midde ware run")
//     console.log(req.method)
//     console.log(req.body)
//     next()
// }

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT,()=>{
        console.log(`app is listening on port ${PORT}`)
    })
}).catch((error)=>console.log(error));


// const startServer= async()=>{
//     try {
//         await connectDB()
//         app.listen(PORT,()=>{
//             console.log(`app is listening on port ${PORT}`)
//         })
        
//     } catch (error) {
//         console.log(error)
//     }
// }

// startServer()