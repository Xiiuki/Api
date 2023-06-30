const express = require("express");
const app = express();
const port = 8081;
const connectDB = require("./db/database");
const dotenv = require("dotenv").config();


// Connection MongoDB
connectDB()

// Middleware pour traiter les données
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// récuparation routes
app.use("/exoplanet", require ("./routes/exoplanet.routes"))

// Run server 
app.listen(port, () => console.log(" Server start at " + port))