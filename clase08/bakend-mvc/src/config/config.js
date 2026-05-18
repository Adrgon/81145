require("dotenv").config()

module.exports = {
    nondeEnv: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ecommerce"
}
