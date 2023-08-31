import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/auth', (req, res)=>{
    console.log("Auth router ", req)
    res.json({
        message: "Authorization router hit",
        cookie: req.cookies
    })
})

export default router;