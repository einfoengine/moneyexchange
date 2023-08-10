import express from 'express';
import Currency from '../models/Currency.js';

const router = express.Router();

// Get currency
// Path:    /curriencies
// Method:  /Get
router.get('/', async (req, res)=>{
    try {
        const curriencies = await Currency.find();
        console.log("Curriencies: ",curriencies);
        res.json(curriencies);
    } catch (error) {
        console.log("Error: Currency fetch failed - ", error);
    }
});

export default router;