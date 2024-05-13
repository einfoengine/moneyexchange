import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
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

const Team = mongoose.model('Article', teamSchema);

export default Team;
