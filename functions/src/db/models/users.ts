import mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    bag_items:{
      type: Array,
      required: false,
    },
    history_orders:{
      type: Array,
      required: false,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", usersSchema);

export default User;
