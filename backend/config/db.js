// This file is responsible for connecting to our database
const mongoose = require('mongoose');

const connectDB = async () =>{
    try { 
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`mongodb connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error is : ${error.message}`)
    }
} 

module.exports = connectDB
