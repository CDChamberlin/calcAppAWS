import dotenv from "dotenv";
import express from "express";
import calculatorRoutes from "./routes/calculatorRoutes.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/", express.static("public"));
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
