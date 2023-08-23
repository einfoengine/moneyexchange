import exporess from "express";
// import mongoose from "mongoose";

// import Order from "../models/Order";

const router = exporess.Router();

// Test route 
router.get('/', (req, res)=>{
    res.send("Order route");
});

export default router;