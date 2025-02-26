import { v4 as uuidv4 } from "uuid";
import Calculation from "../models/Calculation.js";

export default class Calculator {
    constructor() {
        this.id = uuidv4();
    }

    // Private method to log calculations
    #log = async (operand1, operand2, operator, result) => {
        try {
            const calculation = new Calculation({
                operand1,
                operand2,
                operator,
                result,
            });
            await calculation.save();
        } catch (error) {
            console.error("Failed to log calculation: ", error.message);
            throw error; // Re-throw to handle in the caller if needed
        }
    };

    // Public methods for operations
    add(num1, num2) {
        return this.#calculate(num1, num2, (a, b) => a + b, "+");
    }

    subtract(num1, num2) {
        return this.#calculate(num1, num2, (a, b) => a - b, "-");
    }

    multiply(num1, num2) {
        return this.#calculate(num1, num2, (a, b) => a * b, "*");
    }

    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return this.#calculate(num1, num2, (a, b) => a / b, "/");
    }

    // Private method to perform the calculation
    #calculate = async (num1, num2, operation, operator) => {
        if (typeof num1 !== "number" || typeof num2 !== "number") {
            throw new Error("Inputs must be numbers");
        }
        const value = await operation(num1, num2);
        try {
            await this.#log(num1, num2, operator, value);
        } catch (error) {
            console.error("Logging failed", error.message);
        }
        return value;
    };
}
