const mongoose = require('mongoose');

console.log(process.env.MONGO_URI)

const db = async () => {
    try {
        const mongoConn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true 
        })

        console.log(`Mongo database connected at ${mongoConn.connection.host}..!!!`)
    } catch (error) {
        console.log("Error", error)
        process.exit(1)
    }
}

module.exports = db