import mongoose from "mongoose";

const chefsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    img: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: false,
    },
    new: {
        type: Boolean,
        required: true,
    },
    most_viewd: {
        type: Boolean,
        required: true,
    },
    top_chef: {
        type: Boolean,
        required: true,
    },
    chefsRestaurants: {
      type: Array,
      required: false,
    },
    chefsDishes: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

const Chefs = mongoose.model("Chefs", chefsSchema);

export default Chefs;
