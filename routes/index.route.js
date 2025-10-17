import express from 'express'
import upload from '../config/multer.config.js';
import { showHome, uploadFile } from '../controllers/index.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
const router = express.Router();

router.get('/home',authMiddleware,showHome);
router.post('/upload-file',authMiddleware,upload.single('file'),uploadFile);



export default router;