import mongoose from "mongoose";

const calculatorSchema = new mongoose.Schema({
    operand1: { type: Number, required: true },
    operand2: { type: Number, required: true },
    operator: { type: String, required: true, enum: ["+", "-", "*", "/"] },
    result: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Calculation", calculatorSchema);
