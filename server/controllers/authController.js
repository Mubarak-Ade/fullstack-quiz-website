// Path: server/controllers/authController.js
import User from "../models/User.js";
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
import jwt from "jsonwebtoken";

const creatJWT = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "7d" });
};
export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.register(username, email, password);
        const token = creatJWT(user._id);
        res.status(200).json(
            { username, email, token },
            "User register successfully"
        );
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);

        const { _id, username, role, isOnline } = user;

        const token = creatJWT(user._id);

        res.status(200).json({ username, email, token, role, isOnline});
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({}, "-password");

        res.status(200).json(users);
        if (!users) {
            res.status(404).json("No users");
        }
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const online = async (req, res) => {
    const { isOnline } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { isOnline },
            { new: true }
        );
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
};
