import express from 'express';
import Currency from '../models/Currency.js';
// import { ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
const router = express.Router();

import auth from '../middleware/auth.js'

// Find currency
// Path:    /api/currencies/find
// Method:  Get
router.get('/find', async (req, res)=>{
    try {
        const curriencies = await Currency.find();
        res.json(curriencies);
    } catch (error) {
        console.log("Error: Currency fetch failed - ", error);
        res.json({
            message: "Error: faild fetch currency."
        })
    }
});


// Update currency
// Path:    /api/currencies/update
// Method:  put
router.put('/update', auth,  async (req, res) => {
    try {
        const { _id, we_buy, we_sell, unit } = req.body;
        
        console.log("Request body: ", req.body);
        console.log("_id: ", _id);
        
        const updateObject = {
            we_buy,
            we_sell, 
            unit
        };
        
        const response = await Currency.findOneAndUpdate(
            {_id: _id},
            { $set: updateObject },
            {new: true}
            );
            
            if (response.modifiedCount === 0) {
                return res.status(400).json({ error: 'No changes detected' });
            }else{
                console.log("Response: ", response);
            }
            res.json({message: "Currency updated successfully!", response});
        } catch (err) {
            console.log('Error: Currency update failed -', err);
            res.status(500).json({ error: 'Currency update failed' });
        }
    });
    
    // Insert many currency
    // Path:    /api/currencies/insertmany
    // Method:  Post
    router.post('/insertmany', async (req, res)=>{
        try {
            console.log("Request body: ", req.body);
            const response = await Currency.insertMany(req.body);
            console.log(response);
            res.json({
                message: "Successful",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                err: err
            })
        }
    })
    
    export default router;