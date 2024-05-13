import express from 'express';
import Article from '../models/Article.js'
import jwt from 'jsonwebtoken';
import { message } from 'antd';

const router = express.Router();


// Read articles
// Path:        /api/users/create
// Method:      Post
// Returns:     Succes/Failure message
// router.get('/read', (req, res)=>{
//     res.json({
//         user: "Maruf"
//     })
// });

// Create articles
// Path:        /api/users/create
// Method:      Post
// Returns:     Succes/Failure message
router.post('/create', async (req, res)=>{
    try {
        const article = new Article(req.body);
        const saved_article = await article.save();
        res.json({
            message: "Article saved!",
            response: saved_article
        });
    } catch (err) {
        console.log("Article create error: ", err);
        res.json({
            message: "Article save failed", err
        })
    }
});

// Read articles
// Path:        /api/articles/
// Method:      Get
// Returns:     Succes/Failure message
router.get('/', async (req, res)=>{
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (err) {
        res.json({
            message: "Article read failed", err
        })
    }
});

// Update articles
// Path:        /api/users/update
// Method:      Put
// Returns:     Succes/Failure message
router.put('/update', async (req, res)=>{
    const {_id} = req.body
    try {
        const update = await Article.findOneAndUpdate({_id}, req.body);
        res.json({
            message: `Article ${_id} updated`, 
            body: req.body,
            update
        })
    } catch (error) {
        res.json({message: "Article update failed", error})
    }
});

// Delete articles
// Path:        /api/users/create
// Method:      Post
// Returns:     Succes/Failure message
router.delete('/delete', (req, res)=>{
    res.json(req.body);
});


export default router;