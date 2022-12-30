import mongoose from "mongoose";

const dishesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    img: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    popular: {
        type: Boolean,
        required: true,
    },
    dishType: {
        type: String,
        required: true,
    },
    chef: {
        type: String,
        required: true,
    },
    restaurant: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

const Dishes = mongoose.model("Dishes", dishesSchema);

export default Dishes;
