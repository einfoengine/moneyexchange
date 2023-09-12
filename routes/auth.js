import express from 'express';
import jwt from 'jsonwebtoken';
import {userauth, adminauth} from '../middleware/auth.js';

const router = express.Router();

router.get('/auth/user', userauth, (req, res)=>{
    res.json({
        req: req.cookies
    })
})

router.get('/auth/admin', adminauth,(req, res)=>{
    res.json({
        cookie: req.cookies
    })
})

export default router;