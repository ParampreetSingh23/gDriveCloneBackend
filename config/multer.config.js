import multer from "multer";
import {CloudinaryStorage} from 'multer-storage-cloudinary'
import cloudinary from "./cloundinary.config.js";
const storage =  new CloudinaryStorage({
cloudinary:cloudinary,
  params: {
    folder: 'Drive-Backend', // Cloudinary folder name
    resource_type: 'auto',
    unique:true // auto-detect (image, video, raw, etc.)
  },
});
const upload = multer({
  storage
});
export default upload;