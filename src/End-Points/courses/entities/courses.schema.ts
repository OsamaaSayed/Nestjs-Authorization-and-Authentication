import mongoose from "mongoose";

export const courseSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        duration: Number
    }
)

