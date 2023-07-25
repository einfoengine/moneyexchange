import express from 'express';

const router = express.Router();

// Auth test route
// Path:        /
// Method:      Get
// Returns:     Demo text
router.get('/',(req, res)=>{
    res.json({
        message: "This is from auth router!"
    })
});

// User registration route
// Path:        /registeration
// Method:      Post
// Returns:     Succes/Failure message
router.post('/register', (req, res)=>{
    res.json({
        data: req.body
    })
});

// 

export default router;