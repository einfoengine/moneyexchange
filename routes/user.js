import express from 'express';
import User from '../models/User.js';

const router = express.Router();


// Create a lot of users at once
// Path:        /api/users/create
// Method:      Post
// Returns:     Succes/Failure message
router.post('/create', (req, res)=>{

    // console.log();


    try {
        console.log("Create users: ", req.body);
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log(error)
    }
});
// Create one user
// Path:        /api/users/user/create
// Method:      Post
// Returns:     Succes/Failure message
router.post('/user/create', (req, res) => {
    try {
      const user = new User(req.body);
      user.save().then((result) => {
        res.json({
          message: 'User created successfully!',
          result
        });
      }).catch((err) => {
        res.json({
          message: 'User creation failed!',
          err
        });
      });
    } catch (err) {
      res.json({
        message: 'User create request failed',
        err
      });
    }
});


// User login
// Path:        /api/users/user/login
// Method:      Post
// Returns:     Succes/Failure message
router.post('/user/login', (req, res)=>{
    console.log("User login", req.body);
    try {
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log('Login error - ', error)
    }
});

// User logout
// Path:        /api/users/user/login
// Method:      Post
// Returns:     Succes/Failure message
router.get('/user/logout', (req, res)=>{
    console.log("User logout: ");
    try {
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log('Login error - ', error)
    }
});

// Users find
// Path:        /api/users/find
// Method:      Get
// Returns:     Users object
router.get('/find', (req, res)=>{
    console.log("Find users");
    try {
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log('Login error - ', error)
    }
});

// Users find one
// Path:        /api/users/user/find
// Method:      Get
// Returns:     Succes/Failure message
router.get('/user/find', (req, res)=>{
    console.log("Find user");
    console.log();
    try {
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log('Login error - ', error)
    }
});

// Users update
// Path:        /logut
// Method:      Post
// Returns:     Succes/Failure message
router.put('/update', (req, res)=>{
    console.log("Update users");
    try {
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log('Login error - ', error)
    }
});

// Users update
// Path:        /logut
// Method:      Post
// Returns:     Succes/Failure message
router.put('/user/update', (req, res)=>{
    console.log("Update users");
    try {
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log('Login error - ', error)
    }
});

// Users delete
// Path:        /logut
// Method:      Post
// Returns:     Succes/Failure message
router.delete('/delete', (req, res)=>{
    console.log("Delete users");
    try {
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log('Login error - ', error)
    }
});

// Users delete
// Path:        /logut
// Method:      Post
// Returns:     Succes/Failure message
router.delete('/user/delete', (req, res)=>{
    console.log("Delete user");
    try {
        res.json({
            data: req.body
        })
    } catch (error) {
        console.log('Login error - ', error)
    }
});


export default router;