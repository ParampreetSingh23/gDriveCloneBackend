import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim:true,
    lowercase:true,
    unique:true,
    minLength:3,
    maxLength:20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim:true,
    lowercase:true,
    minLength:3,
  },
  password: {
    type: String,
    required: true,
  
    minLength:6,
  },
});

const User = mongoose.model("User", userSchema);
export default User;