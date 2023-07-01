const mongoose = require('mongoose')

const exoplanetSchema = mongoose.Schema(
    {
        planet_id: {
            type: Number,
            required: true,
            unique: true
        },
        planet_name: {
            type: String,
            required: true,
            unique: true
        },
        planet_letter: {
            type: String,
            required: true
        },
        planet_orbper: {
            type: Number,
            required: false
        },
        planet_bmasse: {
            type: Number,
            required: false
        },
        planet_dens: {
            type: Number,
            required: false
        }
    }
)

module.exports = mongoose.model('Exoplanete', exoplanetSchema)