import express from 'express';
import Currency from '../models/Currency.js';

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
        const { _id, weBuy, weSell } = req.body;
        const targetCurrency = await Currency.findById(_id);
        console.log("Currency: ", targetCurrency);
    if (!targetCurrency) {
        console.log("Currency not found!");
        return res.status(404).json({ error: 'Currency not found' });
    }

    console.log("Request body: ", req.body);

    const updateObject = {
        weBuy: parseFloat(weBuy),
        weSell: parseFloat(weSell)
    };
  
    const response = await Currency.findOneAndUpdate(
        { _id: targetCurrency._id },
        { $set: updateObject },
        { new: true } // Return the updated document
      );

    console.log("Response: ", response);
      
    if (response.modifiedCount === 0) {
        return res.status(400).json({ error: 'No changes detected' });
    }else{
        const updatedValue = await Currency.findById(targetCurrency._id);
        console.log(updatedValue);
    }
    res.json({ message: 'Currency updated successfully' });
    } catch (err) {
      console.log('Error: Currency update failed -', err);
      res.status(500).json({ error: 'Currency update failed' });
    }
});
  