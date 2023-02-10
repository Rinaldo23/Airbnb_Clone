import express from "express"
import { createRoom, deleteRoom, updateRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verification.js";

const roomRouter = express.Router();

// CREATE ROOM
roomRouter.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE ROOM
roomRouter.put("/:id", verifyAdmin, updateRoom);

// // DELETE ROOM
roomRouter.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// // GET HOTEL
// hotelRouter.get("/:id", getHotel)

// // GET ALl HOTELS
// hotelRouter.get("/", getHotels)


export default roomRouter;