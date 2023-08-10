import mongoose from "mongoose";

const currencySchema = new mongoose.Schema({
    currency: {
        flag: String,
        unit: String,
        code: String,
        currency: String,
        weBuy: Number,
        weSell: Number,
        info: String,
    }
}, {timestamps: true});

const Currency = mongoose.model('Currency', currencySchema);

export default Currency;