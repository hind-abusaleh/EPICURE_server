import mongoose from "mongoose";
const connectDb = async () => {
    mongoose.set("strictQuery", true);
    await mongoose.connect("mongodb://localhost/EPICURE");
};
export { connectDb }