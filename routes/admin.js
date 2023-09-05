import express from "express";
import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import auth from "../middleware/auth.js";

const router = express.Router();

// Authenticate admin
// Method:  Post

// Create
router.post('/create', auth, async(req, res)=>{
    const {username, password, is_superuser, access_lavel, can_create_admin, designation, avatar} = req.body;

    const response = await Admin.find({ is_superuser: true });
    if(response.length>0){
        return res.json({
            exist: true,
            message: 'Rejected: Admin already exist',
            user: response
        })
    }
    try {
        const admin = new Admin(req.body);
        const saveAdmin = await admin.save();
        res.json({success:saveAdmin});
    } catch (err) {
        console.log("500 Error: Save Admin Failed")
        res.status(500).json({
            error:err,
            message: "500 Error: Save Admin Failed"
        })
    }
})

// Login
router.post('/login', async (req, res) => {
    const { username, password, remember } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Incorrect credentials!"
            });
        }
        if (admin.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Authentication failed! Incorrect credentials."
            });
        }
        
        admin.pass= undefined;

        const payload = {
            username: admin.username,
            _id: admin._id,
            role: 'admin',
            is_superuser: admin.is_superuser,
            access_lavel: admin.access_level,
            avatar: admin.avatar,
            designation: admin.designation, 
            authenticated: true
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '6h' });

        res.cookie("admintoken", token, {
            maxAge: 6 * 60 * 60 * 1000, // 6 hours in milliseconds
            httpOnly: true,
            secure: true, 
            sameSite: "strict", // Restrict to same-site requests
        });

        res.json(payload);
    } catch (err) {
        console.log("Error - authentication failed: ", err);
        res.status(500).json({
            success: false,
            message: "An error occurred during authentication."
        });
    }
});

// Logout
router.get('/logout', auth, async(req, res)=>{
    try {
        res.clearCookie('token');
        res.json({
            message: "Success: logout",
        });
    } catch (err) {
        console.log("Error: logout failed!", err);
        res.json({
            message: "Error: logout failed!",
            err
        })
    }
});

// Find admins
router.get('/', async (req, res)=> {
    console.log("Hi admin");
    res.send("Hello admin")
});
router.post('/', async (req, res)=> {
    console.log("Hi admin");
    res.send(req.body)
});
// ... Other routes ...

export default router;
