import express from 'express';

import Admin from '../models/Admin.js'

const router = express.Router();

// Auth test route
// Path:        /
// Method:      Get
// Returns:     Demo text
router.get('/',(req, res)=>{
    res.json({
        message: "This is from auth router! Localhost!!"
    })
});

// Auth admin registration
// Path:        /admin/registration
// Method:      Get
// Returns:     Demo text
router.post('/admin/registration',async (req, res)=>{
    try {
        const existingAdmin = await Admin.findOne();
        if(existingAdmin){
            console.log("There is already an admin. Please remove the registration folder.");
            res.json({
                status: true,
                message: "There is already an admin. Please remove the registration folder."
            })
        }else{
            console.log("Admin registration request ", req.body);
            const newAdmin = new Admin(req.body);
            const response = await newAdmin.save()
            res.json({
                message: "New admin saved successfully"
            })
        }
    } catch (err) {
        console.log("Fdmin registration failed at server ", err);
        res.json({
            message: "error: ", err
        })
    }
});

// User registration route
// Path:        /registeration
// Method:      Post
// Returns:     Succes/Failure message
router.post('/register', (req, res)=>{
    try {
        console.log("Registration form data: ", req.body);
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log(error)
    }
});
// User registration route
// Path:        /login
// Method:      Post
// Returns:     Succes/Failure message
router.post('/login', (req, res)=>{
    try {
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log('Login error - ', error)
    }
});

// 

export default router;