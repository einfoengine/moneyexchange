// models/Admin.js
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isSuperuser: {
      type: Boolean,
      default: false, 
    },
    accessLevel: {
      type: String,
      enum: ['low', 'medium', 'high'], 
      default: 'low',
    },
    canCreateAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
