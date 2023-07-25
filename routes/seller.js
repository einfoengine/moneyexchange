import express from 'express';
const router = express.Router();

// Get sellers history
// Path:        /history
// Method:      Get
// Returns:     They buying and selling rocord of a seller
router.get('/history');

// Get buying history
// Path:        /history/buy
// Method:      Get
// Returns:     Only the buying history
router.get('/history/buy');

// Get selling history
// Path:        /history/sell
// Method:      Get
// Returns:     Only the selling history
router.get('/history/sell');

// Place an order, buy or sell.
// Path:        /order
// Method:      Post
// Returns:     Seccess message or error
router.post('/order');

// Cancel an order, buy or sell.
// Path:        /order/cancel
// Method:      Put
// Returns:     Update a transaction's cancel status to 'true'
router.put('/order/cancel');

// Edit an order
// Path:        /order/update
// Method:      Put
// Returns      Update a transaction. Sends success response or error.
router.put('/order/update');

export default router;