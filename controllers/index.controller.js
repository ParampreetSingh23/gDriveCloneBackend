import express from 'express'
import upload from '../config/multer.config.js';
import File from '../models/file.model.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

export const showHome = async (req, res) => {
  const userFile = await File.find({ user: req.user.id});
  console.log(userFile);

  res.render('home', { files: userFile });
};
export const uploadFile = async (req, res) => {
  try {
    const file = new File({
      path: req.file.path,
      originalName: req.file.originalname, // this is the correct mapping
      user: req.user.id
    });
    await file.save();
    res.json({ message: "File Uploaded Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error saving file to database", error: err.message });
  }
};