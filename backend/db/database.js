// Connection à la basse de donnée MongoDB en utilisant le .env URI
// Deux console.log pour permettre de connaître l'état de la conenction 

const  mongoose = require('mongoose');
const connectDB = async() =>{

    mongoose.connect(process.env.MONGO_URI,
        { useNewUrlParser: true,
            useUnifiedTopology: true })
        .then (() => console.log('MongoDB Database is connected ! '))
        .catch(() => console.log('MongoDB Database connection failed !'));
        
}

module.exports = connectDB;