import exporess from "express";
import mongoose from "mongoose";

import Order from '../models/Order.js'
import History from '../models/History.js'

const router = exporess.Router();

// Test route 
router.get('/', (req, res)=>{
    res.send("Order route");
});

// Create orders
router.post('/create', async (req, res)=>{
    try {
        const order = new Order(req.body);
        const result = await order.save();
        res.json({
            message: "Order saved successfully!",
            result
        });
    } catch (err) {
        res.json({
            message: "Order saave failed!",
            err
        })
    }
});
// Update orders
router.put('/update', async (req, res)=>{
    const {orderId} = req.body;
    try {
        const update = await Order.findOneAndUpdate(
            {_id: orderId},
            req.body
        );
        const history = new History({
            orderId: orderId,
            changes: req.body
        });
        const result = await history.save();
        res.json({
            message: "Order updated successfully!",
            update,
            result
        });
    } catch (err) {
        res.json({
            message: "Order update failed!",
            err
        })
    }
});

export default router;