import express from "express";

import cors from "cors"

import cookieParser from "cookie-parser"

const app=express();

app.use(cors({
  origin:"*"
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


//Routes
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)


export default app;




