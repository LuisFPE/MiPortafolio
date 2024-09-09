import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = "27017";
const DB_NAME = process.env.DB_NAME || "portafolio";
const DB_USER = process.env.DB_USER || "luis";
const DB_PASSWORD = process.env.DB_PASSWORD || "2203";

const DB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

const connectDB = async ()=>{
    try {
        await mongoose.connect(DB_URI);
        console.log("Connected to database");
    } catch (error) {
        console.error("Error al conectarse con la base datos",error);
    }
}

export default connectDB;
