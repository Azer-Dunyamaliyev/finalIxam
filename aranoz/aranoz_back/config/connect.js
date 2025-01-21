import mongoose from "mongoose";

export const connectDb = async () => {
    
        const connection = await mongoose.connect(process.env.MONGO_URL)
        console.log('DB qaldirildi',connection.connection.host);
}

// mongodb+srv://derotid550:1PI0JKB3rlSzHQrI@cluster0.8eky5.mongodb.net/