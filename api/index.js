import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRouter from "./routes/authRouter.js";
import hotelRouter from "./routes/hotelRouter.js";

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

// Creating Middleware for different routes
app.use(express.json()) //to accept data in json format
app.use("/api/auth", authRouter);
app.use("/api/hotels", hotelRouter);

app.listen(8800, () => {
    connect();
    console.log("Connected to Backend.")
})