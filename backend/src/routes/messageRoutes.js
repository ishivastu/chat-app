import {Router} from "express";
import {protectRoute} from "../middlewares/authMiddlewares.js";
import { getUser,getChat,sendMessage } from "../controllers/message.controllers.js";

const router=Router();

router.get("/users",protectRoute,getUser);
router.get("/:id", protectRoute, getChat);
router.get("/send/:id", protectRoute, sendMessage);

export default router;
