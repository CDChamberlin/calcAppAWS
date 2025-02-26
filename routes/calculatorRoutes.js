import express from "express";
import {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers,
} from "../controllers/calculatorController.js";

const router = express.Router();

const operations = {
    add: addNumbers,
    subtract: subtractNumbers,
    multiply: multiplyNumbers,
    divide: divideNumbers,
};

// Loop through operations and create routes dynamically
Object.entries(operations).forEach(([path, handler]) => {
    router.get(`/${path}`, handler);
});

export default router;
