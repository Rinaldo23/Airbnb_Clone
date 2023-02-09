import express from "express"
import { updateUser } from "../controllers/userController.js";
import { verifyToken, verifyUser } from "../utils/verification.js";

const userRouter = express.Router();

// UPDATE USER
userRouter.put("/:id", updateUser);

userRouter.get("/checkauthentication", verifyToken, (req,res,next)=>{
  res.send("hello user, you are logged in")
})

userRouter.get("/checkuser/:id", verifyUser, (req,res,next)=>{
  res.send("hello user, you are logged in and you can delete your account")
})

export default userRouter;