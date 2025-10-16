import express from 'express'
import { configDotenv } from 'dotenv';
import connectDB from './config/db.js';
import   userRoute from './routes/user.route.js'
import indexRoute from  './routes/index.route.js'
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
configDotenv();
connectDB();



app.use('/user',userRoute)
app.use('/',indexRoute)

app.listen(3000,()=>{
 console.log("Server Running !!");
 
})