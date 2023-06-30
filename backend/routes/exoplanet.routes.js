const express = require('express');
const router = express.Router();


//GET
router.get("/", (req, res) => {
    res.json({ message: "test" });
});

//POST

//UPDATE

//DELETE
module.exports = router; 
