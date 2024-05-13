import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  meta: {
    type: String
  },
  description: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin', // Reference to the Admin model
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{timestamps: true});

const Service = mongoose.model('Service', serviceSchema);

export default Service;
