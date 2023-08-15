import mongoose from 'mongoose';

const currencySchema = new mongoose.Schema({
  country: String,
  currency: String,
  flag: String,
  code: String,
  we_buy: Number,
  we_sell: Number,
  unit: { type: Number, default: 1 },
},{
    timestamps: true
});

const Currency = mongoose.model('Currency', currencySchema);

export default Currency;