const exoplanetModel = require ('../models/exoplanet.model')

//POST
module.exports.setExoplanetsPost = async (req, res) => {
    try {
        delete req.body._id;
        const exoplanet = new exoplanetModel({
            ...req.body
        });
        exoplanet.save()
            .then(() => res.status(201).json({ message: "Object is saved !"}))
            .catch(error => res.status(400).json({ error }));

    } catch (error) {
        res.status(400).json({ error });
    }
};

//GET ALL
module.exports.getExoplanetsAll = async (req, res) => {
    exoplanetModel.find()
        .then(exoplanetshema => res.status(201).json(exoplanetshema))
        .catch(error => res.status(400).json({ error }));
};

//GET ONE
module.exports.getExoplanetsOne = async (req, res) => {
    try {
        const exoplanet = await exoplanetModel.findOne({ planet_name: req.params.planet_name });

        if (!exoplanet) {
            return res.status(400).json({ message: "This exoplanet doesn't exist!" });
        }

        res.status(200).json(exoplanet);

    } catch (error) {
        res.status(400).json({ error });
    }
};
 

//UPDATE
module.exports.updateExoplanets = async (req, res) => {
    try {
        const exoplanet = await exoplanetModel.findOne({ planet_name: req.params.planet_name });

        if (!exoplanet) {
            return res.status(400).json({ message: "This exoplanet doesn't exist!" });
        }

        exoplanet.set(req.body);
        await exoplanet.save();

        res.status(200).json({ message: "This exoplanet has been updated successfully!" });
    } catch (error) {
        res.status(400).json({ error });
    }
};

//DELETE
module.exports.deleteExoplanets = async (req, res) => {
    const exoplanet = await exoplanetModel.findOne({ planet_name: req.params.planet_name });

    if (!exoplanet) {
        return res.status(400).json({ message: "This exoplanet doesn't exist!" });
    }

    await exoplanet.deleteOne({ _id: exoplanet._id });

    res.status(200).json({ message: req.params.planet_name + " has been deleted successfully!" });

    
};
