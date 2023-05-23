import { Router } from "express";
import query from "./db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { authenticateToken } from "./utils/authMiddleware.js";

const router = Router();

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if the user exists
//     const result = await query.query(
//       "SELECT * FROM users WHERE email = $1",
//       [email]
//     );

//     const user = result.rows[0];

//     if (!user) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     // Validate password
//     const isValidPassword = await bcrypt.compare(password, user.password);

//     if (!isValidPassword) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.json({ message: "Login successful", token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// });


router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hardcoded test credentials
    const testEmail = "test@example.com";
    const testPassword = "password123";

    // Check if the provided credentials match the test credentials
    if (email === testEmail && password === testPassword) {
      // Generate JWT token
      const token = jwt.sign({ userId: 123 }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      
      return res.json({ message: "Login successful", token });
    }

    // If the credentials don't match, return an error response
    res.status(401).json({ error: "Invalid credentials" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});


// router.get('/protected', authenticateToken, (req, res) => {
//     res.json({ message: 'Protected route accessed successfully' });
//   });

export default router;

