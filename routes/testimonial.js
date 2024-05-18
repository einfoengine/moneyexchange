import express from 'express';
import Testimonial from '../models/Testimonial.js';

const router = express.Router();

// Create testimonials
// Method   POST
// Route    /api/testimonial/create
// Return   Success
router.post('/create', async (req, res)=>{
    try {
        const testimonial = new Testimonial(req.body);
        const result = await testimonial.save();
        res.json({
            message: "Testimonial saved!",
            response: result
        });
    } catch (err) {
        console.log("Testimonial create error: ", err);
        res.json({
            message: "Testimonial save failed", err
        })
    }
});



// Read testimonials
// Method   GET
// Route    /api/testimonial/
// Return   testimonials
router.get('/', async (req, res)=>{
    try {
        const testimonial = await Testimonial.find();
        res.json(testimonial);
    } catch (err) {
        res.json({
            message: "Testimonial read failed", err
        })
    }
});


// Edit testimonials
// Method   Put
// Route    /api/testimonial/id
// Return   Success
router.put('/update', async (req, res)=>{
    const {_id} = req.body
    try {
        const testimonial = await Testimonial.findOneAndUpdate({_id}, req.body);
        res.json({
            message: `Testimonial ${_id} updated`, 
            body: req.body,
            update
        })
    } catch (error) {
        res.json({message: "Testimonial update failed", error})
    }
});


// Delete testimonials
// Method   delete
// Route    /api/testimonial/id
// Return   success
router.delete('/delete', (req, res)=>{
    res.json(req.body);
});

export default router;