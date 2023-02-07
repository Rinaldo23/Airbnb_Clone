import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";

const app = express();
dotenv.config();

// Initial Connection to DB
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected")
    } catch (error) {
        handleError(error);
    }
}

// Connect automatically after any issues
mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB Disconnected")
})

mongoose.connection.on("connected", ()=>{
    console.log("MongoDB Connected")
})

app.listen(8800, () => {
    connect();
    console.log("Connected to Backend.")
})