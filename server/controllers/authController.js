// Path: server/controllers/authController.js
import User from '../models/User.js'
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
import jwt from 'jsonwebtoken'

const creatJWT = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: "7d" });
};
export const register = async (req, res) => {
    const {username, email, password} = req.body
    try {
        const user = await User.register(username, email, password);
        const token = creatJWT(user._id)
        res.status(200).json({username, email, token}, "User register successfully")
    } catch (err) {
        res.status(400).json({msg: err.message})
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.login(email, password);

        const {_id, username} = user

        const token = creatJWT(user._id)
        res.status(200).json({username, email, token})
    } catch (err) {
        res.status(400).json({msg: err.message})
    }
}