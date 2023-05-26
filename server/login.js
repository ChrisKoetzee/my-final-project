import { Router } from "express";
import query from "./db.js";
import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
import { authenticateToken } from "./utils/authMiddleware.js";
const bcrypt = require('bcrypt');

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('Received password:', password); 
    // Check if the user exists
    const result = await query.query(
      "SELECT * FROM students WHERE email = $1",
      [email]
    );

    const user = result.rows[0];

    
 

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Validate password
    const isValidPassword = password === user.password;

    console.log("Password:", isValidPassword);

    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});





export default router;

