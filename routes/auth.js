import express from "express";
import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Authenticate admin
// Method:  Post
// Path:    'http://localhost:3000/api/auth/admin'
router.post('/admin', async (req, res) => {
    const { username, password, remember } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            console.log("Error: Invalid credentials");
            return res.status(401).json({
                success: false,
                message: "Incorrect credentials!"
            });
        }
        if (admin.pass !== password) {
            console.log("Error: Invalid credentials");
            return res.status(401).json({
                success: false,
                message: "Authentication failed! Incorrect credentials."
            });
        }
        
        admin.pass= undefined;

        const payload = {
            username: admin.username,
            role: 'admin'
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '6h' });

        res.cookie("token", token, {
            maxAge: 6 * 60 * 60 * 1000, // 6 hours in milliseconds
            httpOnly: true,
            secure: true, 
            sameSite: "strict", // Restrict to same-site requests
        });

        res.json({
            success: true,
            message: "Authentication successful!",
            token: token
        });
    } catch (err) {
        console.log("Error - authentication failed: ", err);
        res.status(500).json({
            success: false,
            message: "An error occurred during authentication."
        });
    }
});

// ... Other routes ...

export default router;
