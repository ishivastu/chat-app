import { Message } from "../models/message.model";

export const getUser=async(req,res)=>{
  try {
    const myId=req.user._id;

    const all=await Message.find({_id:{$ne:myId}}).select("-password");

    if(!all) return res.status(400).json({message:"all user fetched failed"})
  } catch (error) {

    res.status(500).json({ message: "Internal server error" });

  }
}
export const getChat = async (req, res) => {
  
};
export const sendMessage = async (req, res) => {};
