import mongoose from "mongoose";
import config from "./env.js";

const connectDB = async () => {
    try {
        console.log(typeof config.dbURI);
        await mongoose.connect(config.dbURI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1);
    }
};

export default connectDB;
