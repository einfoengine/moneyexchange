import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const router = express.Router();


// Create a lot of users at once
// Path:        /api/users/create
// Method:      Post
// Returns:     Succes/Failure message
router.post('/create', (req, res)=>{

    // console.log();


    try {
        console.log("Create users: ", req.body);
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log(error)
    }
});
// Create one user
// Path:        /api/users/user/create
// Method:      Post
// Returns:     Succes/Failure message
router.post('/user/create', async (req, res) => {
    try {
      const user = new User(req.body);
      const result = await user.save();
      res.json({
        message: "User successfully saved!",
        result
      });
    } catch (err) {
      res.json({
        message: 'User create request failed',
        err
      });
    }
});


// User login
// Path:        /api/users/user/login
// Method:      Post
// Returns:     Succes/Failure message
router.post('/user/login', async (req, res)=>{
    const {username, password} = req.body;
    try {
        const user = await User.findOne({username: username, password: password});
        if(user===null){
            return res.status(401).json({
                success: false,
                message: "Invalid dredential"
            });
        }
        user.password = undefined;
        const payload = {
            _id: user._id,
            username,
            role: 'user',
            avatar: user.profile.avatar,
            authenticated: true,
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '6h' });
        res.cookie("usertoken", token, {
            // maxAge: 6 * 60 * 60 * 1000, // 6 hours in milliseconds
            httpOnly: true,
            secure: true, 
            sameSite: "strict", // Restrict to same-site requests
        });
        res.json(payload);
    } catch (error) {
        console.log('Login error - ', error)
    }
});

// User logout
// Path:        /api/users/user/login
// Method:      Post
// Returns:     Succes/Failure message
router.get('/user/logout', (req, res)=>{
    console.log("Logout rout")
    try {
        res.clearCookie('usertoken');
        res.json({
            logout: true,
            message: "User loged out successfully!"
        })
    } catch (err) {
        res.json({
            logout: false,
            message: "Loged out failed!"
        })
    }
});

// Users find
// Path:        /api/users/find
// Method:      Get
// Returns:     Users object
router.get('/find', (req, res)=>{
    try {
        const users = User.find();
        res.json({
            message: "Users listed",
            users
        })
    } catch (err) {
        console.log('Login error - ', err)
        res.status(404).res.json({
            err,
            message: "User not found!"
        })
    }
});

// Users find one
// Path:        /api/users/user/find
// Method:      Get
// Returns:     Succes/Failure message
router.get('/user/find', async (req, res)=>{
    try {
        const user = await User.findOne(req.query);
        res.json(user);
    } catch (error) {
        console.log('Login error - ', error)
    }
});

// Users update
// Path:        /logut
// Method:      Post
// Returns:     Succes/Failure message
router.put('/update', (req, res)=>{
    console.log("Update users");
    try {
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log('Login error - ', error)
    }
});

// Users update
// Path:        /logut
// Method:      Post
// Returns:     Succes/Failure message
router.put('/user/update', (req, res)=>{
    console.log("Update users");
    try {
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log('Login error - ', error)
    }
});

// Users delete
// Path:        /logut
// Method:      Post
// Returns:     Succes/Failure message
router.delete('/delete', (req, res)=>{
    console.log("Delete users");
    try {
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log('Login error - ', error)
    }
});

// Users delete
// Path:        /logut
// Method:      Post
// Returns:     Succes/Failure message
router.delete('/user/delete', (req, res)=>{
    console.log("Delete user");
    try {
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log('Login error - ', error)
    }
});


export default router;