import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body
    console.log(req.body);
    
    const hashedPassword = bcryptjs.hashSync(password,12);
   
    const newUser = new User({username,email,password:hashedPassword});

    try {
        await newUser.save();
        res.status(200).json('User created suceesfully');
    } catch (error) {
        next(error);
    }
}