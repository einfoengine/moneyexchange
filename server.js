import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import next from 'next';
import auth from './middleware/auth.js'
import cookieParser from 'cookie-parser';


// Import routes
import user from './routes/user.js';
import admin from './routes/admin.js';
import currency from './routes/currency.js'
import order from './routes/order.js'

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const expressApp = express();
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("The database connected!");
  }).catch((err)=>{
    console.error("MongoDB connection error: ", err);
  });

  // Routes and middleware here  
  // expressApp.use(morgan('combined'));

  // Pers JSON requests
  expressApp.use(express.json());
  
  
  expressApp.use(cookieParser());

  // Route end points
  // Users
  expressApp.use('/api/users', user);
  expressApp.use('/api/admin', admin);
  
  // Currency
  expressApp.use('/api/currencies', currency);
  // Accounts
  // expressApp.use('/api/seller');
  // Orders
  expressApp.use('/api/orders', order);

  // Test route
  expressApp.get('/api', (req, res) => {
    const responseData = {
      message: 'This is a response from the server!',
    };
    // Send the response data as JSON
    res.json(responseData);
  });

  // Handle Next.js requests
  expressApp.get('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  expressApp.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log("***>> ",process.env.MONGO_URI);
    console.log(`Next.Js & Express is Ready on http://localhost:${process.env.PORT}`);
  });
});
