import express from 'express'
import { configDotenv } from 'dotenv';
import connectDB from './config/db.js';
import   userRoute from './routes/user.route.js'
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
configDotenv();
connectDB();






app.use('/user',userRoute)
app.listen(3000,()=>{
 console.log("Server Running !!");
 
})