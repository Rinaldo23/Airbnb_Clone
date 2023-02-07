import express from "express"
import Hotel from "../models/hotelModel.js";

const hotelRouter = express.Router();

// CREATE HOTEL
hotelRouter.post("/", async (req, res) => {

    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        res.status(500).json(error);
    }

})

// UPDATE HOTEL
hotelRouter.put("/:id", async (req, res) => {

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedHotel);
    } catch (error) {
        res.status(500).json(error);
    }

})

// DELETE HOTEL
hotelRouter.delete("/:id", async (req, res) => {

    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedHotel);
    } catch (error) {
        res.status(500).json(error);
    }

})

// GET HOTEL
hotelRouter.get("/:id", async (req, res) => {

    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json(error);
    }

})


export default hotelRouter;