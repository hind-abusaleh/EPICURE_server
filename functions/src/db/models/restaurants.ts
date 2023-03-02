import mongoose = require("mongoose");

const restaurantsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    chef: {
      type: String,
      required: true,
    },
    img: {
        type: String,
        required: true,
    },
    opening_hour: {
        type: Number,
        required: true,
    },
    closing_hour: {
        type: Number,
        required: true,
    },
    new: {
        type: Boolean,
        required: true,
    },
    popular: {
        type: Boolean,
        required: true,
    },
    cuisine: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    restaurantDishes: {
        type: Array,
        required: false,
      },
  },
  { timestamps: true }
);

const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

export default Restaurants;
