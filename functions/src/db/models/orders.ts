import mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
  {
    dish_name: {
      type: String,
      required: true,
    },
    dish_img: {
      type: String,
      required: true,
    },
    dish_id: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    changes: {
        type: {},
        required: true,
    },
    side: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
  },
  { timestamps: true }
);

const Orders = mongoose.model("Orders", ordersSchema);

export default Orders;
