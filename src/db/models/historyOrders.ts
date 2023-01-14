import mongoose from "mongoose";

const historyOrdersSchema = new mongoose.Schema(
  {
    orders_id: {
      type: Array,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    total_price: {
        type: Number,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
    },
    full_name:{
      type: String,
      required: true,
    },
    address:{
      type: String,
      required: true,
    },
    phone:{
        type: String,
        required: true,
      }
  },
  { timestamps: true }
);

const HistoryOrders = mongoose.model("HistoryOrders", historyOrdersSchema);

export default HistoryOrders;