import {Router} from "express";
import {protectRoute} from "../middlewares/authMiddlewares.js";
import { getUsers,getChat,sendMessage } from "../controllers/message.controllers.js";

const router=Router();

router.get("/users",protectRoute,getUsers);
router.get("/:id", protectRoute, getChat);
router.get("/send/:id", protectRoute, sendMessage);

export default router;
