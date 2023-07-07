//Import
const express = require('express');
const { setExoplanetsPost, getExoplanetsAll, updateExoplanets, getExoplanetsOne, deleteExoplanets } = require('../controllers/exoplanet.controller');
const router = express.Router();


//GET
router.get ("/one/:planet_name", getExoplanetsOne)

//GET ALL
router.get('/', getExoplanetsAll)

//POST
router.post("/add", setExoplanetsPost);

//UPDATE
router.put("/update/:planet_name", updateExoplanets)

//DELETE
router.delete("/delete/:planet_name", deleteExoplanets)

//Exportation
module.exports = router; 
