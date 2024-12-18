import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  console.log("Token: here", token);

  if (!token) {
    return res.status(401).json({ message: "Not Authenticated!!" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      console.error("Token verification error:", err);
      return res.status(402).json({ message: "Token not verified!!" });
    }

    req.userId = payload.id; // Attach user ID to request
    next(); // Proceed to the next middleware or route handler
  });
};
