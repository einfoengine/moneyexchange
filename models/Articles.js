// models/Blog.js
import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin', // Reference to the Admin model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{timestamps: true});

const Blog = mongoose.model('Article', articleSchema);

export default Article;
