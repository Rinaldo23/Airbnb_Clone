import Room from "../models/roomModel.js";
import Hotel from "../models/hotelModel.js";

export const createRoom = async (req, res, next) => {
    const hotelid = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();

        try {
            await Hotel.findByIdAndUpdate(hotelid, {
                $push: { rooms: savedRoom._id },
            });
        } catch (err) {
            next(err);
        }

        res.status(200).json(savedRoom);

    } catch (err) {
        next(err);
    }
}

export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedRoom);
    } catch (err) {
        next(err);
    }
};

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        const deletedRoom = await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(deletedRoom);
    } catch (err) {
        next(err);
    }
};