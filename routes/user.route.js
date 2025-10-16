import express from 'express'
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import { loginUser, registerUser, showLogin, showRegister } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/register',showRegister)
router.post('/register', registerUser)
router.get('/login',showLogin)
router.post('/login', loginUser);

export default router;