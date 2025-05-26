// Path: server/models/User.js
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import validator from 'validator'

const userShema = new mongoose.Schema({
	username: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now()
	},
})

// static signup method

userShema.statics.register = async function(username, email, password) {
	
	// validation

	if (!email || !password || !username) {
		throw new Error("All fields must be filled");   
	}

	if (!validator.isEmail(email)) {
		throw new Error("Email is not valid");
	}

	if (!validator.isStrongPassword(password)) {
		throw new Error("password is not strong enough");
	}

	const exists = await this.findOne({email})
	if (exists) {
		throw new Error("Email is already in user");
	}

	const salt = await  bcrypt.genSalt(10)
	const hash = await  bcrypt.hash(password, salt)
	const user = await this.create({username, email, password: hash})

	return user
}

userShema.statics.login = async function (email, password) {
	if (!email || !password) {
		throw new Error("All fields must be filled");   
	}

	const user = await this.findOne({email})
	if (!user) {
		throw new Error("Incorrect email");
	}

	const match = await bcrypt.compare(password, user.password)

	if (!match) {
		throw new Error("incorrect password");
	}

	return user
}

const postUser = mongoose.model("User", userShema)

export default postUser