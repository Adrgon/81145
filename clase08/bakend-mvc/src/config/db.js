const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1/ecommerce")
        console.log("DB Conectada")
    } catch (error){
        console.error(error)
    }
}

module.exports = connectDB;
