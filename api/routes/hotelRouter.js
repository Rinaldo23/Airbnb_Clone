import express from "express"
import Hotel from "../models/hotelModel.js";

const hotelRouter = express.Router();

// CREATE HOTEL
hotelRouter.post("/", async (req, res, next) => {

    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(err);
    }

})

// UPDATE HOTEL
hotelRouter.put("/:id", async (req, res, next) => {

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedHotel);
    } catch (error) {
        next(err);
    }

})

// DELETE HOTEL
hotelRouter.delete("/:id", async (req, res, next) => {

    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedHotel);
    } catch (error) {
        next(err);
    }

})

// GET HOTEL
hotelRouter.get("/:id", async (req, res, next) => {

    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (error) {
        next(err);
    }

})

// GET ALl HOTELS
hotelRouter.get("/", async (req, res, next) => {

    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }

})


export default hotelRouter;