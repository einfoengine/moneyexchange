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
  author: {
    type: String,
    ref: 'Admin',
  },
  designation: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: '/images/user.jpg'
  },
},
{timestamps: true});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;
