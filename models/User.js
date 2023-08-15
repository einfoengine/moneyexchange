import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'employee', 'customer'],
    default: 'customer'
  },
  profile: {
    firstName: String,
    lastName: String,
    avatar: String,
    phoneNumber: String,
    address: String
  },
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transaction'
    }
  ]
}, {
  timestamps: true 
});

const User = mongoose.model('User', userSchema);

export default User;
