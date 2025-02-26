import express from "express";
import connectDB from "./config/db.js";
import config from "./config/env.js";
import calculatorRoutes from "./routes/calculatorRoutes.js";

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use("/", express.static("public"));

// Routes
app.use("/calculator", calculatorRoutes);

// Start Server
app.listen(config.port, () => {
    console.log(`Server running at http://localhost:${config.port}`);
});

export default app;
