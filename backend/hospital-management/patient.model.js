import mongoose from "mongoose";

const patientSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    diagonsedwith: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    bloodgroup: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        enum: ["male", "female", "other"],
        required: true
    },
    admitatedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
    }
}, {timestamps: true})

export const Patient = mongoose.model("Patient", patientSchema);