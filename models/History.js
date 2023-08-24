import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    changes: {
      type: Object,
      required: true,
    }
  },
  { timestamps: true }
);

const History = mongoose.model('History', historySchema);

export default History;