import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./project/.env",
});

const app = express();

const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });

    connectDB() 
    .then(()=> {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })


    .catch((error) => {
        console.log("MongoDB connection failed:", error);
    })