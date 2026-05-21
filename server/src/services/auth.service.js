import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

const SALT_ROUNDS = 12

export const registerUser = async ({ name, email, password }) => {

    const existing = await User.findOne({ email });
    if (existing) {
        const err = new Error("An account with this email already exists");
        err.statusCode = 409;
        throw err;
    }

    const hashPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await User.create({
        name,
        email,
        password:hashPassword,
    })
}

