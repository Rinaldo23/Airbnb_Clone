import express from "express"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotelController.js";

const hotelRouter = express.Router();

// CREATE HOTEL
hotelRouter.post("/", createHotel)

// UPDATE HOTEL
hotelRouter.put("/:id", updateHotel)

// DELETE HOTEL
hotelRouter.delete("/:id", deleteHotel)

// GET HOTEL
hotelRouter.get("/:id", getHotel)

// GET ALl HOTELS
hotelRouter.get("/", getHotels)


export default hotelRouter;