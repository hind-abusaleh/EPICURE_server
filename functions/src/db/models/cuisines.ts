import mongoose = require("mongoose");

const cuisinesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Restaurants: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

const Cuisines = mongoose.model("Cuisines", cuisinesSchema);

export default Cuisines;
