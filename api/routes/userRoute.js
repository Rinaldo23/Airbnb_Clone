import express from "express"
import { updateUser } from "../controllers/userController.js";
import { verifyToken } from "../utils/verification.js";

const userRouter = express.Router();

// UPDATE USER
userRouter.put("/:id", updateUser)

// userRouter.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

export default userRouter;