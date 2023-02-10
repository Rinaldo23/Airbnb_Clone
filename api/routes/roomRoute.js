import express from "express"
import { createRoom, updateRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verification.js";

const roomRouter = express.Router();

// CREATE ROOM
roomRouter.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE ROOM
roomRouter.put("/:id", verifyAdmin, updateRoom)

// // DELETE HOTEL
// hotelRouter.delete("/:id", verifyAdmin, deleteHotel)

// // GET HOTEL
// hotelRouter.get("/:id", getHotel)

// // GET ALl HOTELS
// hotelRouter.get("/", getHotels)


export default roomRouter;