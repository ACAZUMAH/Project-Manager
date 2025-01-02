import mongoose from "mongoose";

const connectDB = async (url: string) => {
    try {
        return await mongoose.connect(url, {})
    } catch (error) {
        console.log(error);
        process.exit(1);
    };
};

export default connectDB;