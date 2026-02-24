import {User} from "../models/user.model.js"
import bcrypt from "bcrypt";
import { generateToken } from "../lib/generateToken.js";
import cloudinary from "../lib/cloudinary.js";

export const signup=async(req,res)=>{

  try {
    const {email,password,name,avatar}=req.body;

    if(!email || !password || !name) return res.status(400).json({message:"all fields required"});

    if(password.length<6) return res.status(400).json({message:"password min length should be six"});

    let user=await User.findOne({email});

    if(user) return res.status(400).json({message:"User already exists"});

    const hashPass=await bcrypt.hash(password,10);

    user=await User.create({

      name,
      email,
      password:hashPass,
      avatar,
    })

    generateToken(user._id,res);

    return res.status(201).json({message:"user created successfully"});
  } catch (error) {

    return res.status(500).json({message:"some error while sign UP"})
  }


}

export const login=async(req,res)=>{

  try {
    const {email,password}=req.body;

    if(!email || !password) return res.status(400).json({message:"all fiels required"});

    const user=await User.findOne({email});

    if(!user) return res.status(400).json({message:"user not exist first create"});

    const check=await bcrypt.compare(password,user.password);

    if(!check) return res.status(400).json({message:"please enter correct password"})

    generateToken(user._id,res);

    return res.status(200).json({
      message: "login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    });

  } catch (error) {

    return res.status(500).json({ message: "some error while login" });

  }
}

export const logout = async (req, res) => {
  try {
    res.cookie("token", "", {maxAge: 0,});

    return res.status(200).json({ message: "logout successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "error while logout" });
  }
};

export const updateAvatar=async(req,res)=>{

  try {
    const {avatar}=req.body;

    if(!avatar) return res.status(400).json({message:"pic required to update avatar"})

    const cloudinaryResponse=await cloudinary.uploader.upload(avatar);

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { avatar: cloudinaryResponse.secure_url },
      { new: true },
    );

    return res.status(201).json({message:"updated profile pic"})
  } catch (error) {

    res.status(500).json({message:"failed avatar upload"})

  }
}

export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in checkAuth controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
