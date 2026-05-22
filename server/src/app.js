import express from "express";
import router from "./routes/auth.routes.js";

const app = express()

app.use(express.json())
app.use('/api/auth', router)

app.use((err, req, res, next) => {
   
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    
    return res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: message,
        
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
});

export default app;