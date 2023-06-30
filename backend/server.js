const express = require("express");
const app = express();
const port = 8081;


// Middleware pour traiter les données
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// récuparation routes
app.use("/exoplanet", require ("./routes/exoplanet.routes"))

// Run server 
app.listen(port, () => console.log(" Server start at " + port))