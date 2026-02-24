import { Router } from "express";
import {
  signup,
  login,
  logout,
  updateAvatar,
  checkAuth
} from "../controllers/auth.controllers.js";
import { protectRoute } from "../middlewares/authMiddlewares.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-avatar", protectRoute, updateAvatar);

router.get("/check", protectRoute, checkAuth);

export default router;
