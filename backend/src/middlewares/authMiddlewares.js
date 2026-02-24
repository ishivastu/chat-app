import jwt from "jsonwebtoken";

export const protectRoute = (req, res, next) => {
  try {
    const token = req.cookies?.token; // ✅ match cookie name

    if (!token)
      return res.status(401).json({ message: "Not authorized, token missing" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decoded; // { userId }
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Not authorized, token invalid" });
  }
};
