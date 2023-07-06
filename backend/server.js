const express = require("express");
const app = express();
const port = 5000;
const connectDB = require("./db/database");
const dotenv = require("dotenv").config();
const exoplanetRoutes = require("./routes/exoplanet.routes");

// Connection MongoDBnpm 
connectDB()

// Middleware pour traiter les données
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// récuparation routes

//GET ONE
app.use("/exoplanet/:planet_name", exoplanetRoutes)

//GET ALL
app.use("/exoplanet", exoplanetRoutes)

//Post
app.use("/exoplanet/add", exoplanetRoutes)

//Update
app.use("/exoplanet/update/:planet_name", exoplanetRoutes)

//Delete
app.use("/exoplanet/delete/:planet_name", exoplanetRoutes)

// Run server 
app.listen(port, () => console.log(" Server start at " + port))