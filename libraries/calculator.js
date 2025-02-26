export default class Calculator {
    constructor() {
        this.id = Math.random();
    }

    #log(value) {
        console.log(`[Calculator: ${this.id}]: ${value}`);
    }

    add(num1, num2) {
        return this.#calculate(num1, num2, (a, b) => a + b);
    }

    subtract(num1, num2) {
        return this.#calculate(num1, num2, (a, b) => a - b);
    }

    multiply(num1, num2) {
        return this.#calculate(num1, num2, (a, b) => a * b);
    }

    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return this.#calculate(num1, num2, (a, b) => a / b);
    }

    #calculate(num1, num2, operation) {
        if (typeof num1 !== "number" || typeof num2 !== "number") {
            throw new Error("Inputs must be numbers");
        }
        const value = operation(num1, num2);
        this.#log(value);
        return value;
    }
}
