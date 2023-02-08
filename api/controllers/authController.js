import User from "../models/userModel.js"
import bcrypt from "bcryptjs"

export const register = async (req, res, next) => {

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        await newUser.save();
        res.status(200).json(newUser);
    } catch (err) {
        next(err);
    }
}