import { Router } from "express";
import { register } from "../controllers/auth.controller.js";
import {registerSchema} from "../validators/auth.validator.js"
import validate from "../middlewares/validate.js";
// import validate from "../middlewares/validate.js";

const router = Router();

router.get("/healthz", (req, res) => {
    {mesaage: "ok"}
})
router.post("/register", validate(registerSchema), register);

export default router;