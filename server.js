import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import next from 'next';

// Import routes
import user from './routes/user.js'

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const expressApp = express();

  // Add your Express routes and middleware here  
  expressApp.use(morgan('combined'));

  // Apply middleware
  // expressApp.use(cors());


  // Route end points
  // User Registration & Authentication & Profiles
  expressApp.use('/api/user', user);
  // Buyers action
  // expressApp.use('/api/buyer');
  // Sellers actions
  // expressApp.use('/api/seller');
  // Admins actions
  // expressApp.use('/api/admin');


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
  expressApp.listen(3000, (err) => {
    if (err) throw err;
    console.log('Next.Js & Express is Ready on http://localhost:3000');
  });
});
