import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, 
    },
    type: {
        type: String,
        required: true, 
        enum: ['buy', 'sell']
    },
    cancel: {
        type: Boolean,
        required: false
    },
    amount: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['approved', 'rejected', 'pending'],
        required: true
    }
}, {
    timestamps: true
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;