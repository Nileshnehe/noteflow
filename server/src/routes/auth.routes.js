import { Router } from "express";
import { register } from "../controllers/auth.controller.js";
// import validate from "../middlewares/validate.js";

const router = Router();

router.get("/healthz", (req, res) => {
    {mesaage: "ok"}
})
router.post("/register", register);

export default router;