import express from 'express';
import Currency from '../models/Currency.js';
// import { ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
const router = express.Router();

// Get currency
// Path:    /curriencies
// Method:  /Get
router.get('/', async (req, res)=>{
    try {
        const curriencies = await Currency.find();
        res.json(curriencies);
    } catch (error) {
        console.log("Error: Currency fetch failed - ", error);
    }
});

export default router;

router.put('/update', async (req, res) => {
    try {
        const { _id, we_buy, we_sell } = req.body;

        console.log("Request body: ", req.body);

        const updateObject = {
            we_buy,
            we_sell
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

router.post('/insertmany', async (req, res)=>{
    try {
        console.log("Request body: ", req.body);
        const response = await Currency.insertMany(req.body);
        res.json({
            response
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: err
        })
    }
})
