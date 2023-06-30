const express = require("express");
const app = express();
const port = 8081


app.get("/exoplanet", (req, res) =>{
    res.json({ message: "Voici les données" });
});

// Run server 
app.listen(port, () => console.log(" Server start at " + port))