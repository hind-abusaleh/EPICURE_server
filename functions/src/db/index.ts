import mongoose = require("mongoose");
const connectDb = async () => {
    mongoose.set("strictQuery", true);
    //await mongoose.connect("mongodb://localhost/EPICURE");
    await mongoose.connect("mongodb+srv://hind:hind123@cluster0.yds8dek.mongodb.net/?retryWrites=true&w=majority");

};
export { connectDb }