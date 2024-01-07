
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
export const signup = async (req, res) => {
    const { username, email, password } = req.body
    console.log(req.body);

    const hasedPassword =  bcryptjs.hashSync(password,12);

    const newUser = new User({ username, email, hasedPassword })
    try {
        await newUser.save()
        res.status(201).json("User Created sucessfully")
    } catch (error) {
        res.status(500).json(error.messsage);
    }
}