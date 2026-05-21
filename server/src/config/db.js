import mongoose from "mongoose";
import { configData } from "./config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(configData.MONGO_URI)
        console.log("MongoDB Connected Successfully")

    } catch (error) {
        console.error("MongoDB Connection Failed Error:", error.message);
        throw error;

    }
}

export default connectDB