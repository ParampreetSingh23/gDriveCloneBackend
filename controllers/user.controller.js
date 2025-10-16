import express from 'express'
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

export const showRegister = (req,res)=>{
 res.render('register')
}
export const showLogin = (req,res)=>{
 res.render('login')
}
export const registerUser = async (req,res)=>{
  const {username,email,password} = req.body;
 const hashPass = await bcrypt.hash(password,10);
 const user = await new User({
   userName: username,
   email:email,
   password:hashPass,
 });
 await user.save();
 res.status(200).send("Register Succesfully");
}
export const loginUser = async (req,res)=>{
 const { username, password } = req.body;

    const user = await User.findOne({ userName: username });
 
    
    if (!user) {
      
      return res.status(400).json({ message: 'username or password incorrect' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
  
    
    if (!isMatch) {

     
      return res.status(400).json({ message: 'username or password incorrect' });
    }


 
    
  const token = jwt.sign({ id: user._id , username:user.userName}, process.env.JWT_SECERT,)
  res.cookie('token',token)
  res.send('Logged in');
}