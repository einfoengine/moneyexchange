import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: String,
    required: true,
  },
  meta: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin', // Reference to the Admin model
  },
  image: {
    type: String,
    default: '/images/user.jpg'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{timestamps: true});

const Testimonial = mongoose.model('Article', testimonialSchema);

export default Testimonial;
