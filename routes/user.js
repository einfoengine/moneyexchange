import express from 'express';

const router = express.Router();

// Auth test route
// Path:        /
// Method:      Get
// Returns:     Demo text
router.get('/local',(req, res)=>{
    res.json({
        message: "This is from auth router! Localhost!!"
    })
});

// User registration route
// Path:        /registeration
// Method:      Post
// Returns:     Succes/Failure message
router.post('/register', (req, res)=>{
    try {
        
    } catch (error) {
        console.log
    }
    res.json({
        data: req.body
    })
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