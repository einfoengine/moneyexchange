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
  profile: {
    name: String,
    avatar: {
      type: String,
      default: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
    },
    phoneNumber: String,
    address: String
  }
}, {
  timestamps: true 
});

const User = mongoose.model('User', userSchema);

export default User;
