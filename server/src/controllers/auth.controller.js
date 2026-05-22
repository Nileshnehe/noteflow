import { registerUser } from "../services/auth.service.js";


export const register = async (req, res, next) => {
    try {
        const user = await registerUser(req.body);

        return res.status(201).json({
            success: true,
            message: "Registration successful. Please check your email to verify your account.",
            data: {
                id: user._id || user.id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        next(error)
    }
}