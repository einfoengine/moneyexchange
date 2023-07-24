import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true, 
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['admin', 'manager', 'assistant', 'customer'],
            required: true,
        },
        isApproved: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports(User);