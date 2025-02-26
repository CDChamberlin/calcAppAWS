document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const resultField = document.getElementById("result");
    const num1Field = document.getElementById("num1");
    const num2Field = document.getElementById("num2");

    const showError = (message) => alert(message);

    const getNumbers = () => {
        const num1 = parseFloat(num1Field.value);
        const num2 = parseFloat(num2Field.value);

        if (Number.isNaN(num1)) {
            showError("First number missing or invalid.");
            return null;
        }
        if (Number.isNaN(num2)) {
            showError("Second number missing or invalid.");
            return null;
        }

        return { num1, num2 };
    };

    const fetchResult = async (operation, num1, num2) => {
        try {
            const response = await fetch(
                `/calculator/${operation}?num1=${num1}&num2=${num2}`
            );
            const data = await response.json();
            resultField.value = data.result ?? "Error";
        } catch (error) {
            console.error("Error fetching calculation:", error);
            resultField.value = "Error";
        }
    };

    const calculates = (event) => {
        event.preventDefault();
        resultField.value = "";

        const numbers = getNumbers();
        if (!numbers) return;

        const operation = new FormData(form).get("operator");
        const operationMap = {
            "+": "add",
            "-": "subtract",
            "*": "multiply",
            "/": "divide",
        };

        if (operationMap[operation]) {
            fetchResult(operationMap[operation], numbers.num1, numbers.num2);
        } else {
            showError("Invalid operation selected.");
        }
    };

    const reset = () => {
        num1Field.value = "";
        num2Field.value = "";
        resultField.value = "";
    };

    form.addEventListener("submit", calculates);
    document.getElementById("resetBtn").addEventListener("click", reset);
});
