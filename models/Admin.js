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
    is_superuser: {
      type: Boolean,
      default: false, 
    },
    access_level: {
      type: String,
      enum: ['low', 'medium', 'high'], 
      default: 'low',
    },
    can_create_admin: {
      type: Boolean,
      default: false,
    },
    designation: {
      type: String,
      enum: ['assistant admin', 'manager', 'owner'],
      default: 'assistant admin'
    },
    avatar: {
      type: String,
      default: undefined
    }
  },
  { timestamps: true }
);

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
