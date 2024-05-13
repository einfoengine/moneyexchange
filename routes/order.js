import exporess from "express";
// import mongoose from "mongoose";

import Order from '../models/Order.js'
import History from '../models/History.js'

const router = exporess.Router();

// Ordrs
router.get('/', async (req, res)=>{
    try {
        let orders = await Order.find().populate("currency").populate("user");
        res.json(orders);
    } catch (error) {
        res.send("Failed orders find error!");
    }
});

router.get('/user', async (req, res)=>{
    try {
        let orders = await Order.find({user: req.query.user}).populate("currency").populate("user");
        res.json(orders);
    } catch (error) {
        res.send("Failed orders find error!");
    }
});

// Create orders
router.post('/create', async (req, res)=>{
    // console.log(req.body)
    try {
        const order = new Order(req.body);
        const result = await order.save();
        const history = new History({
            orderId: orderId,
            changes: req.body
        });
        const historyResponse = await history.save();
        res.json({
            message: "Order saved successfully!",
            result,
            historyResponse
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
router.get('/complete', async (req, res)=>{
    try {
        const orders = await Order.find({status: "Approved"}).populate("currency").populate("user");
        console.log("Orders: ** ",orders)
        res.json(orders);
    } catch (error) {
        res.json({
            message: "Faild fetch completed orders",
            error
        })
    }
    let orders = await Order.find().populate("currency").populate("user");
})

export default router;