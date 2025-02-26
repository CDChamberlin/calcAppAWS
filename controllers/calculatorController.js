import Calculator from "../libraries/calculator.js";

const myCalc = new Calculator();

const performCalculation = (operation) => async (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid numbers provided" });
    }

    const operationsMap = {
        add: myCalc.add,
        subtract: myCalc.subtract,
        multiply: myCalc.multiply,
        divide: myCalc.divide,
    };

    if (!operationsMap[operation]) {
        return res.status(400).json({ error: "Invalid operation" });
    }

    const result = await operationsMap[operation].call(myCalc, num1, num2);
    res.status(200).json({ result });
};

export const addNumbers = performCalculation("add");
export const subtractNumbers = performCalculation("subtract");
export const multiplyNumbers = performCalculation("multiply");
export const divideNumbers = performCalculation("divide");
