import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/userController.js";
// import { verifyAdmin, verifyToken, verifyUser } from "../utils/verification.js";

const userRouter = express.Router();

// UPDATE USER
userRouter.put("/:id", updateUser);

// DELETE USER
userRouter.delete("/:id", deleteUser);

// GET USER
userRouter.get("/:id", getUser);

// GET ALl USERS
userRouter.get("/", getUsers);

// userRouter.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in")
// })

// userRouter.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, you are logged in and you can delete your account")
// })

// userRouter.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are logged in and you can delete all accounts")
// })

export default userRouter;