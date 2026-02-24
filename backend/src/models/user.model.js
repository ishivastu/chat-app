import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  avatar:{
    type:String,
    default:""
  },
  email:{
    type:String,
    required:true,
    unique:true
  }
},{timestamps:true})

export const User=mongoose.model("User",userSchema);




