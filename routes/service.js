import express from 'express';
import Service from '../models/Service.js';
import jwt from 'jsonwebtoken';
import { message } from 'antd';

const router = express.Router();


// Create service
// Path:        /api/services/create
// Method:      Post
// Returns:     Succes/Failure message
router.post('/create', async (req, res)=>{
    try {
        const service = new Service(req.body);
        const result = await service.save();
        res.json({
            message: "Service description saved!",
            response: result
        });
    } catch (err) {
        console.log("Service create error: ", err);
        res.json({
            message: "Service save failed", err
        })
    }
});

// Read services
// Path:        /api/services/
// Method:      Get
// Returns:     Succes/Failure message
router.get('/', async (req, res)=>{
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.json({
            message: "Service read failed", err
        })
    }
});

// Update services
// Path:        /api/services/update
// Method:      Put
// Returns:     Succes/Failure message
router.put('/update', async (req, res)=>{
    const {_id} = req.body
    try {
        const update = await Service.findOneAndUpdate({_id}, req.body);
        res.json({
            message: `Service ${_id} updated`, 
            body: req.body,
            update
        })
    } catch (error) {
        res.json({message: "Service update failed", error})
    }
});

// Delete Service
// Path:        /api/services/delete
// Method:      Post
// Returns:     Succes/Failure message
router.delete('/delete', (req, res)=>{
    res.json(req.body);
});


export default router;