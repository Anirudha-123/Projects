

// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

// // Middleware to verify the token and set the user object
// const authenticate = (req, res, next) => {
//   const token = req.header("Authorization")?.replace("Bearer ", "");
  
//   if (!token) {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next(); // Allow access to the next middleware or route handler
//   } catch (error) {
//     res.status(401).json({ message: "Token is not valid" });
//   }
// };

// // Middleware to check if the user is an admin
// const authorizeAdmin = (req, res, next) => {
//   if (req.user.isAdmin) {
//     next(); // Allow access to admin routes
//   } else {
//     res.status(403).json({ message: "Access denied, admin only" });
//   }
// };

// export { authenticate, authorizeAdmin };


// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// export const authMiddleware = async (req, res, next) => {
//   const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
//   if (!token)
//     return res.status(401).json({ message: "No token provided" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.id).select("-password");
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Token is not valid" });
//   }
// };

// export const adminMiddleware = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     next();
//   } else {
//     res.status(403).json({ message: "Admin resource. Access denied." });
//   }
// };

// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// export const authMiddleware = async (req, res, next) => {
//   const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
//   if (!token)
//     return res.status(401).json({ message: "No token provided" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.id).select("-password");
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Token is not valid" });
//   }
// };

// export const adminMiddleware = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     next();
//   } else {
//     res.status(403).json({ message: "Admin resource. Access denied." });
//   }
// };


import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

export const adminMiddleware = (req, res, next) => {
  // Check the user's role directly
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Admin resource. Access denied." });
  }
};


