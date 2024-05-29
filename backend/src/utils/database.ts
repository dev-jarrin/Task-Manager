import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const db = process.env.MONGO_URI || '';
        await mongoose.connect(db);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};
export default connectDB;